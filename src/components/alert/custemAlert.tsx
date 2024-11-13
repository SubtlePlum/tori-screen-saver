import styled from "styled-components";

export const showCustomAlert = (
  msg: string,
  btn: number,
  callback: (bool: boolean) => {}
) => {
  const alertContainer = document.getElementById("customAlert") as HTMLElement;
  const msgBox = document.getElementById("msgBox") as HTMLElement;
  const yesButton = document.getElementById("okButton") as HTMLElement;
  const noButton = document.getElementById("cancleButton") as HTMLElement;

  if (btn === 1) {
    noButton.style.display = "none";
  }
  msgBox.textContent = msg;
  alertContainer.style.display = "flex";

  yesButton.onclick = () => {
    alertContainer.style.display = "none";
    callback(true);
  };
  noButton.onclick = () => {
    alertContainer.style.display = "none";
    callback(false);
  };
};
export const CustomAlert = () => {
  return (
    <AlertContainer id="customAlert">
      <AlertBox>
        <p id="msgBox"></p>
        <button id="okButton">확인</button>
        <button id="cancleButton">취소</button>
      </AlertBox>
    </AlertContainer>
  );
};

export const AlertContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export const AlertBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  & button {
    margin: 10px;
    padding: 10px 20px;
  }
`;
