"use client";

import styled from "styled-components";

export const loginInput = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "Pretendard";
  width: 80%;
`;

export const loginInputWrapper = styled.div`
  border: 1.68px solid #9bacae;
  border-radius: 3.36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const idImg = styled.img`
  height: 18.5px;
  margin-right: 10px;
  margin-left: 3px;
`;

export const pwImg = styled.img`
  height: 25px;
  margin-right: 10px;
`;

export const inputWrapper = styled.div`
  width: 60%;
  height: 50%;
  padding: 16px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const borderStyle = styled.div`
  border-top: 1.68px dotted #9d9d9d;
`;

export const LoginBtn = styled.button<{ $isClicked: boolean }>`
  width: 400px;
  height: 40px;
  border-radius: 4.49px;
  border: none;
  background: ${(props) => (props.$isClicked ? "#FFFFFF" : "#2f4252")};
  transition: background 0.2s;
  color: #ffffff;
  font-family: "Pretendard";
`;

export const errorDiv = styled.div`
  font-size: 13px;
  color: red;
  font-family: "Pretendard";
`;

export const errorArea = styled.div`
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
