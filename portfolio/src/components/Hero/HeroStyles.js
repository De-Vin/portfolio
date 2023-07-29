import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  font-family: "Space Grotesk, sans-serif";
  @media screen and (max-width: 640px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    

    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
