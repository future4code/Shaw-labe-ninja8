import styled from "styled-components";
import { AppBar, Container } from "@material-ui/core";


export const HeaderContainer = styled(AppBar)`
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding: 1em;

`;

export const StyleContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between !important;
`;


export const Navigation = styled.nav`
  display: flex;
  width: 100px;
  justify-content: space-between;
  cursor: pointer;

  & div:hover {
    color: #ffff1c;
  }
  & div:active {
    color: #000;
  }
`;
