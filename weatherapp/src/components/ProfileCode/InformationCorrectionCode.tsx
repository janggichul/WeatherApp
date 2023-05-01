import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from '../../App';
import { getAuth, updatePassword } from 'firebase/auth';

export default function InformationCorrectionCode() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const email: any = localStorage.getItem('login');

  const auth = getAuth();

  const user: any = auth.currentUser;
  const newPassword: any = getAsecureRandomPassword();

  updatePassword(user, newPassword)
    .then((result) => {
      //   console.log(result);
    })
    .catch((error) => {
      //   console.log(error);
    });

  return (
    <Main>
      <MainDiv>
        <TopBoxDiv>
          <MemberInfo>
            <MemberInfoForm>
              <TopMent>개인정보 수정</TopMent>
              <InfoDiv>
                <div className="mr-auto">
                  <p className="text-base w-12">이메일</p>
                </div>
                <NickNameInfo>
                  <EmailInfoInput
                    placeholder="닉네임을 입력해주세요."
                    name="email"
                    type="email"
                    value={email}
                  />
                </NickNameInfo>
              </InfoDiv>
              <InfoDiv>
                <div className="mr-auto">
                  <p className="text-base w-12">닉네임</p>
                </div>
                <NickNameInfo>
                  <EmailInfoInput
                    placeholder="닉네임을 입력해주세요."
                    name="email"
                    type="email"
                  />
                </NickNameInfo>
              </InfoDiv>
              <InfoDiv>
                <div className="ml-auto">
                  <p className="text-base w-24">비밀번호 변경</p>
                </div>
                <NickNameInfo>
                  <EmailInfoInput
                    placeholder="비밀번호를 입력해주세요."
                    name="email"
                    type="email"
                  />
                </NickNameInfo>
              </InfoDiv>
              <InfoDiv>
                <div className="mr-auto">
                  <p className="text-base w-24">비밀번호 확인</p>
                </div>
                <NickNameInfo>
                  <EmailInfoInput
                    placeholder="비밀번호를 재입력해주세요."
                    name="email"
                    type="email"
                  />
                </NickNameInfo>
              </InfoDiv>
              <KaKaoLoginDiv>
                <SignUpButton type="submit">
                  <span style={{ fontSize: '14px', color: 'white' }}>
                    수정하기
                  </span>
                </SignUpButton>
              </KaKaoLoginDiv>{' '}
            </MemberInfoForm>
          </MemberInfo>
        </TopBoxDiv>
      </MainDiv>
    </Main>
  );
}

const Main = styled.main`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  order: 4;
  padding: 0;
  position: relative;
  justify-content: center;
`;

const MainDiv = styled.div`
  color: rgb(38 38 38);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

const TopBoxDiv = styled.div`
  align-items: center;
  background-color: rgb(255 255 255);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
`;

const LogoBoxDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 9px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

const LogoDiv = styled.div`
  cursor: pointer;
  display: block;
`;

const LogoImg = styled.i`
  /* background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png); */
  background-position: 0px -52px;
  background-size: auto;
  width: 175px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const MemberInfo = styled.div`
  margin-bottom: 10px;
`;
const MemberInfoForm = styled.form`
  border: 0;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0px;
  max-width: 450px;
  padding: 0px;
  vertical-align: baseline;
`;

const TopMent = styled.h2`
  color: rgb(142 142 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  margin-bottom: 10px;
`;
const KaKaoLoginDiv = styled.div`
  margin-top: 8px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 8px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
const KakaoLoginButton = styled.button`
  background-color: #fee500;
  -webkit-appearance: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  pointer-events: auto;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  -webkit-user-select: none;
  width: auto;
  border-radius: 8px;
  color: #000000 85%;
  position: relative;
  padding: 7px 16px;
`;
const SignUpButton = styled.button`
  background-color: #1c7ed6;
  -webkit-appearance: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  pointer-events: auto;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  -webkit-user-select: none;
  width: auto;
  border-radius: 8px;
  color: #000000 85%;
  position: relative;
  padding: 7px 16px;
`;

const StrokMainDiv = styled.div`
  margin: 10px 40px 18px;
  display: flex;
  flex-direction: row;
`;

const StrokDiv = styled.div`
  top: 0.45em;
  flex-shrink: 1;
  height: 1px;
  position: relative;
  flex-grow: 1;
  background-color: rgb(219 219 219);
`;

const StrokTextDiv = styled.div`
  text-transform: uppercase;
  margin-right: 18px;
  padding-left: 0;
  padding-top: 0;
  flex-direction: column;
  margin-top: 0;
  border-left: 0;
  margin-bottom: 0;
  border-bottom: 0;
  box-sizing: border-box;
  display: flex;
  border-top: 0;
  padding-right: 0;
  flex-shrink: 0;
  margin-left: 18px;
  font-weight: 600;
  color: rgb(142 142 142);
  align-items: stretch;
  font-size: 0.8125rem;
  position: relative;
  line-height: 1.1538;
  flex-grow: 0;
  border-right: 0;
  padding-bottom: 0;
  vertical-align: baseline;
`;

const InfoDiv = styled.div`
  margin: 0 40px 6px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Info = styled.div`
  margin-top: 5px;
  border-top: 1px solid rgb(219 219 219);
  font-size: 14px;
  border-left: 1px solid rgb(219 219 219);
  background-color: rgb(250 250 250);
  width: 100%;
  border-bottom: 1px solid rgb(219 219 219);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: rgb(38 38 38);
  flex-direction: row;
  border-top-left-radius: 3px;
  position: relative;
  border-right: 1px solid rgb(219 219 219);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const NickNameInfo = styled.div`
  margin-top: 5px;
  font-size: 14px;
  background-color: rgb(250 250 250);
  width: 65%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: rgb(38 38 38);
  flex-direction: row;
  border-top-left-radius: 3px;
  position: relative;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-left: 30px;
`;

const EmailInfoInput = styled.input`
  background: rgb(250 250 250);
  border: 1px solid rgb(219 219 219);
  flex: 1 0 auto;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  font-size: 12px;
`;

const Duplication = styled.button`
  margin-top: 3px;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;

  height: 30px;
  font-size: 12px;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

const Condition = styled.p`
  color: rgb(142 142 142);
  font-size: 12px;
  line-height: 16px;
  margin: 10px 40px;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const LoginpageBox = styled.div`
  align-items: center;
  background-color: rgb(255 255 255);
  border: 1px solid rgb(219 219 219);
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
`;

const FindYourPW = styled.a`
  margin-left: 5px;
  color: rgb(0, 149, 246);
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px !important;
  text-align: center !important;
  display: inline;
  padding-left: 0;
  background-color: transparent;
  touch-action: manipulation;
  padding-top: 0;
  list-style: none;
  border-left: 0;
  margin-bottom: 0;
  border-bottom: 0;
  box-sizing: border-box;
  border-top: 0;
  padding-right: 0;
  cursor: pointer;
  margin-left: 0;
  -webkit-tap-highlight-color: transparent;
  border-right: 0;
  outline: none;
  padding-bottom: 0;
  margin-right: 0;
`;
function getAsecureRandomPassword() {
  throw new Error('Function not implemented.');
}
