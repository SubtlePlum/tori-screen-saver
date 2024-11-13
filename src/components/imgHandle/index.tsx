import styled from "styled-components";

interface Props {
  setBasicImg: () => void;
  setCustomImg: (e: any) => void;
}

export const ImgHandle = ({ setBasicImg, setCustomImg }: Props) => {
  return (
    <Container>
      <Content>
        <ImgWrap onClick={setBasicImg}>
          <ImgBox src={"/image/basic-img.png"} alt="locked screen image" />
        </ImgWrap>
        <span>기본 이미지로 변경</span>
      </Content>
      <Content>
        <ImgWrap>
          <NoneInput type="file" id="file" onChange={setCustomImg} />
          <ImgLabel htmlFor="file">
            <ImgBox src={"/image/add-img.png"} alt="locked screen image" />
          </ImgLabel>
        </ImgWrap>
        <span>다른 이미지 불러오기</span>
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    text-shadow: 3px 4px 5px black;
  }
`;

export const ImgBox = styled.img`
  width: 30vw;
  height: 22vh;
  border: 3px solid white;
  object-fit: cover;
`;

export const ImgWrap = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-weight: bold;
  cursor: pointer;

  overflow: hidden;
  & img {
    transform: scale(1.1);
    transition-duration: 0.2s;
  }
  & img:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;

export const NoneInput = styled.input`
  display: none;
`;

export const ImgLabel = styled.label`
  cursor: pointer;
`;
