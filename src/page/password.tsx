import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContextUpdate } from "../context/context";
import { showCustomAlert } from "../components/alert/custemAlert";

export const Password = () => {
  const [isPasswordInit, setIsPasswordInit] = useState(false);

  const passwordInitHandler = () => {
    isPasswordInit ? setIsPasswordInit(false) : setIsPasswordInit(true);
  };

  const update = useContextUpdate();

  type PasswordData = {
    password: string;
    passwordCheck: string;
    isPosiblePassword: string | boolean;
    isPasswordSame: string | boolean;
  };
  const passwordData: PasswordData = {
    password: "",
    passwordCheck: "",
    isPosiblePassword: "",
    isPasswordSame: "",
  };

  const [
    { password, passwordCheck, isPosiblePassword, isPasswordSame },
    setPassword,
  ] = useState(passwordData);

  type onChangeInput = React.ChangeEvent<HTMLInputElement>;
  const onChangeHandler = (e: onChangeInput) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    const passwordRegExp = /^.{6,16}$/;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
      isPosiblePassword:
        name === "password"
          ? passwordRegExp.test(value)
          : passwordRegExp.test(prev.password),
    }));
  };

  useEffect(() => {
    if (isPosiblePassword && password === passwordCheck) {
      setPassword((prev) => ({ ...prev, isPasswordSame: true }));
    } else {
      setPassword((prev) => ({ ...prev, isPasswordSame: false }));
    }
  }, [password, passwordCheck]);

  const savePassword = () => {
    if (isPasswordSame === true && isPosiblePassword === true) {
      showCustomAlert("비밀번호를 저장할까요?", 2, (res) => {
        if (res) {
          update(isPosiblePassword);
          showCustomAlert("저장 완료", 1, (res) => {
            return res;
          });
        }
        return res;
      });
    } else {
      showCustomAlert("비밀번호를 확인해주세요", 1, (res) => {
        return res;
      });
    }
  };

  return (
    <Content>
      <PasswordBtn onClick={passwordInitHandler}>
        {isPasswordInit ? "취소" : "비밀번호 설정"}
      </PasswordBtn>
      <PasswordWrap isPasswordInit={isPasswordInit}>
        <InputWrap>
          <input
            onChange={onChangeHandler}
            type="password"
            name="password"
            minLength={6}
            maxLength={16}
            placeholder="비밀번호"
          />
          <span
            style={
              isPosiblePassword === ""
                ? { color: "black" }
                : isPosiblePassword
                ? { color: "#99ff99" }
                : { color: "#ff4040" }
            }
          >
            비밀번호는 6자 이상 16자 이하로 입력해주세요
          </span>
        </InputWrap>
        <InputWrap>
          <input
            onChange={onChangeHandler}
            type="password"
            name="passwordCheck"
            minLength={6}
            maxLength={16}
            placeholder="비밀번호 확인"
          />
          {isPasswordSame ? (
            <span style={{ color: "#99ff99" }}>비밀번호가 일치합니다</span>
          ) : (
            <span style={{ color: "#ff4040" }}>비밀번호를 확인해주세요</span>
          )}
        </InputWrap>
        <PasswordBtn onClick={savePassword}>저장</PasswordBtn>
      </PasswordWrap>
    </Content>
  );
};

export const Content = styled.div`
  margin: 5vh 0 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const PasswordBtn = styled.div`
  margin-top: 5px;
  padding: 5px;
  width: 120px;
  color: #4d4d4d;
  background-color: #faf5c4;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: white;
    background-color: #58ccff;
  }
`;

export const PasswordWrap = styled.div<{ isPasswordInit: boolean }>`
  margin-top: 5px;
  height: ${(props) => (props.isPasswordInit ? "150px" : "0px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  font-size: 0.8rem;
  overflow: hidden;
  visibility: ${(props) => (props.isPasswordInit ? "visible" : "hidden")};
  animation: ${(props) =>
      props.isPasswordInit ? "screenRollDown" : "screenRollUp"}
    0.3s;
  @keyframes screenRollUp {
    0% {
      visibility: visible;
      height: 150px;
    }
    50% {
      height: 0px;
      visibility: hidden;
    }

    100% {
      display: none;
    }
  }
  @keyframes screenRollDown {
    0% {
      visibility: hidden;
      height: 0px;
    }
    50% {
      height: 150px;
      visibility: visible;
    }
    100% {
      display: flex;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    padding: 3px;
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
  & span {
    margin: 1px 0 3px 0;
    font-size: 0.8rem;
  }
`;
