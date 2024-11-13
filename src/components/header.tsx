import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrap>
      <p>Tori Screen Saver</p>
    </HeaderWrap>
  );
};

export const HeaderWrap = styled.div`
  & p {
    padding: 20px;
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: white;
  }
`;
