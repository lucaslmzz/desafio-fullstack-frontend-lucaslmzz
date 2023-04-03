import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  gap: 10px;
  min-height: 900px;
  @media (min-width: 800px) {
    height: 100vw;
    max-height: 900px;
  }
`;

export const HeaderDashBoard = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media (min-width: 800px) {
    justify-content: space-evenly;
    gap: 16rem;
  }
`;

export const HeaderDashBoardClient = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media (min-width: 800px) {
    justify-content: space-evenly;
    gap: 18rem;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;
  gap: 10px;
  padding: 20px 10px;
  h2 {
    color: white;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const EspaceClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  h2 {
    color: white;
  }
  p {
    color: white;
  }
`;

export const FormModal = styled.form`
  background-color: #212529;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
  width: 100%;
  max-height: 800px;
  h2 {
    color: white;
  }
  label {
    width: 90%;
  }
  a {
    width: 90%;
    text-align: center;
  }
  header {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }
  header p:hover {
    color: red;
    cursor: pointer;
  }
  header h2 {
    font-size: 12px;
    color: white;
  }
  @media (min-width: 800px) {
    width: 100%;
  }
`;

export const SelectModal = styled.select`
  height: 38.5px;
  width: 90%;
  border-style: none;
  background-color: #343b41;
  border-radius: 4px;
  border: 1.2182px solid white;
  color: white;
`;

export const InputModal = styled.input`
  height: 38.5px;
  width: 90%;
  background: #343b41;
  color: white;
  border: 1.2182px solid white;
  border-radius: 4px;
`;

export const ClientList = styled.ul`
  background-color: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px 0;
  border-radius: 5px;
  @media (min-width: 800px) {
    width: 51%;
  }
  li {
    list-style-type: none;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    background-color: black;
  }
  li h2 {
    font-size: 15px;
  }
  li p {
    font-size: 11px;
    color: #868e96;
  }
  li:hover {
    background-color: #343b41;
    cursor: pointer;
  }
`;
