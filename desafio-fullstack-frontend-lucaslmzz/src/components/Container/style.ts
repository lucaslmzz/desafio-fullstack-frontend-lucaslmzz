import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  gap: 10px;
  min-height: 900px;
  @media (min-width: 800px) {
    height: 100vw;
    max-height: 900px;
  }
`;

export const DivLogoBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media (min-width: 800px) {
    width: 30%;
  }
`;

export const BtnBack = styled.button`
  border-style: none;
  border-radius: 4px;
  background-color: #212529;
  color: white;
  padding: 10px 20px;
  button:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

export const Span = styled.p`
  color: #868e96;
  font-size: 10px;
  font-weight: 400;
`;
