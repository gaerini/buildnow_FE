"use client";

import { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoForm() {
  const [formValue, setFormValue] = useState({ businessId: "", password: "" });
  const [isClicked, setIsClicked] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const router = useRouter();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/recruiter/signin`,
        formValue
      );
      console.log(response);
      localStorage.setItem("jwt", response.data.accessToken);

      router.push("/");
    } catch (err) {
      console.log(err);
      setLoginErr(true);
    }
  };

  const onMouseDownHandler = () => {
    setIsClicked(true);
  };

  const onMouseUpHandler = () => {
    setIsClicked(false);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <S.loginInputWrapper>
            <S.inputWrapper>
              <S.idImg src="https://buildnowtestbucket.s3.ap-northeast-2.amazonaws.com/static/idIcon.png" />
              <S.loginInput
                type="text"
                id="businessId"
                name="businessId"
                value={formValue.businessId}
                onChange={onChangeHandler}
                placeholder="사업자번호를 입력해주세요."
              ></S.loginInput>
            </S.inputWrapper>
            <S.borderStyle>
              <S.inputWrapper>
                <S.pwImg src="https://buildnowtestbucket.s3.ap-northeast-2.amazonaws.com/static/passwordIcon.png" />
                <S.loginInput
                  type="text"
                  id="password"
                  name="password"
                  value={formValue.password}
                  onChange={onChangeHandler}
                  placeholder="비밀번호를 입력해주세요."
                ></S.loginInput>
              </S.inputWrapper>
            </S.borderStyle>
          </S.loginInputWrapper>
        </div>
        <S.errorArea>
          {loginErr && (
            <S.errorDiv>🙅아이디 혹은 비밀번호가 틀렸습니다</S.errorDiv>
          )}
        </S.errorArea>
        <S.LoginBtn
          type="submit"
          $isClicked={isClicked}
          onMouseUp={onMouseUpHandler}
          onMouseDown={onMouseDownHandler}
        >
          로그인
        </S.LoginBtn>
      </form>
    </>
  );
}
