import styled from 'styled-components';
import { success } from "../../assets/pallete";
import { Button } from "@material-ui/core";

export const CartContainer = styled.div`
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  margin-right: 1em;
`;

export const SuccessButton = styled(Button)`
  background: ${success} !important;
  color: #fffefe !important;
`;