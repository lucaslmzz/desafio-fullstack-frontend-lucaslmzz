import styled from "styled-components";

export const Form = styled.form`
  background-color: #3b3279;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  width: 90%;
  max-height: 800px;
  border-radius: 5px;
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
  @media (min-width: 800px) {
    width: 50%;
  }
`;
