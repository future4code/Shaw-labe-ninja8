import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export const ContainerHome = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

`;

export const ContainerSection = styled(Container)`
  background: #f5f4fc;
  height: 85%;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-top: 3em;
  img {
    width: 20%;
    height: 100%;
  }
       @media (min-width: 2000px),(max-width: 900px){
       img {
       width: 70%;
    height: 100%;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  gap: 1em;
`;

export const StyleButton = styled(Button)``;
