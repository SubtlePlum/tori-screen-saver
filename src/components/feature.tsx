import styled from "styled-components";
import { Lock } from "./svg/lock";
import { useState } from "react";
import { Modal } from "./modal";
import { ImgHandle } from "./imgHandle";
import { useContextValue } from "../context/context";
import { showCustomAlert } from "./alert/custemAlert";
import { CustomAlert } from "./alert/custemAlert";

export const Feature = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | any>("/image/basic-img.png");

  const setBasicImg = () => {
    setImgSrc("/image/basic-img.png");
    setIsModalOpen(false);
  };

  const setCustomImg = (e: any) => {
    const fileBlob = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        const imageUrl = reader.result;
        setImgSrc(imageUrl);

        setIsModalOpen(false);
      };
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const value = useContextValue();
  const screenSaveStart = () => {
    showCustomAlert((res) => {
      console.log(res);
      return res;
    });
  };

  return (
    <Content>
      <ImagePreview>
        <BasicImage src={imgSrc} alt="locked screen image" />
        <ImageHandleBtn onClick={openModal}>잠금 화면 변경</ImageHandleBtn>
      </ImagePreview>
      <LockBtn onClick={screenSaveStart}>
        <Lock />
        <span>화면 보호기 실행</span>
      </LockBtn>
      <Modal
        content={
          <ImgHandle setBasicImg={setBasicImg} setCustomImg={setCustomImg} />
        }
        isModalOpen={isModalOpen}
        modalHandler={setIsModalOpen}
      />
      <CustomAlert msg="화면을 잠굴까요?" buttons={2} />
    </Content>
  );
};

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BasicImage = styled.img`
  width: 35vw;
  height: 25vh;
  border: 3px solid white;
  object-fit: cover;
`;
export const ImageHandleBtn = styled.div`
  margin: 10px;
  padding: 5px;
  color: #4d4d4d;
  background-color: #faf5c4;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: white;
    background-color: #58ccff;
  }
`;

export const LockBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & svg {
    width: 25vw;
    height: 25vh;
    transition: 0.1s;
    border-radius: 25%;
    cursor: pointer;
    &:hover {
      color: #ffffff;
    }
  }
  & span {
    margin: 10px;
    padding: 5px;
    color: #4d4d4d;
    background-color: #faf5c4;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 10px;
  }
`;
