import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const ScreenLock = () => {
  const navigate = useNavigate();
  const imgSrc = localStorage.getItem("imgSrc") as string;
  const srcParse = JSON.parse(imgSrc);

  const fullScreenElement = useRef<HTMLDivElement>(null);

  const enterFullScreen = () => {
    const element = fullScreenElement.current as HTMLElement;
    element.requestFullscreen();
  };
  const exitFulllScreen = () => {
    document.exitFullscreen();
  };

  useEffect(() => {
    if (fullScreenElement.current !== null) {
      enterFullScreen();
    }
  }, []);

  return (
    <Content>
      <FullScreen ref={fullScreenElement}>
        <img src={srcParse} alt="locked-img" />
      </FullScreen>
    </Content>
  );
};

export const Content = styled.div`
  margin: 0;
  padding: 0;
`;

export const FullScreen = styled.div`
  & img {
    width: 100vw;
    height: 100vh;
    object-fit: fill;
  }
`;
