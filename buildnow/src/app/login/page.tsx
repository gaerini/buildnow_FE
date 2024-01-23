"use client"

import LoginForm from './LoginForm/LoginForm';
import * as S from './style';

export default function login(){
    return(
        <S.LoginWrapper>
            <S.LogoImg src = "https://buildnowtestbucket.s3.ap-northeast-2.amazonaws.com/static/buildnowLogo.png"/>
            <LoginForm/>
        </S.LoginWrapper>
    );
}