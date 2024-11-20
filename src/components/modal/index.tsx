import React from "react";
import styled from "styled-components";

interface Props {
  content: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ content, isModalOpen, closeModal }: Props) => {
  const eventBlock = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Background
      style={isModalOpen ? {} : { display: "none" }}
      onClick={closeModal}
    >
      <div onClick={eventBlock}>{content}</div>
    </Background>
  );
};

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #69696964;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: openModal 0.3s;
  @keyframes openModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
