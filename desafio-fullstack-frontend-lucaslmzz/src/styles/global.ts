import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #64B447;
    --color-primary-light: #DFEFD9;
    --color-primary-dark: #78a468;
    --color-primary-transparent: rgba(100,180,71, 0.2);
    --color-text: #3D3D3D;
    --color-text-in-primary: #FFFFFF;
    --color-text-complement: #A3A3A2;
    --color-text-light: #C9C9C9;
    --color-red: #B4423E; 
    --color-tertiary: #EDB12A;
    --color-secondary: #464745;
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
    font-size: 60%;   
  }
 
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: Inter;
  
  }
  .modal-overlay {
    background-color: #000000c4;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    opacity: 1;
    width: 90%;
    max-width: 500px;
    background-color: white;
    border-radius: 5px;
  }
  @media (min-width: 800px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: Inter;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
  .pink{
    background-color: #FF577F;
  }
  .grey{
    background-color: #868E96;
  }
  .red{
    background-color: #59323F;
  }
`;
