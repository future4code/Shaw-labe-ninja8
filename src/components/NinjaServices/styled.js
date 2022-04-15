import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cor2, cor3 } from "../../assets/pallete";
import { Button } from "@material-ui/core";

export const NinjaServicesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 12px;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  @media (min-width: 2000px), (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const CardNinjaService = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f4fc;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px 16px;
  margin: 12px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 1em;
`;

export const StyleButton = styled(Button)`
  display: flex;
  color: ${cor2} !important;
  background-color: ${cor3} !important;
  height: 3.2em;
  font-size: 0.7em !important;
  /* width: 20%; */
`;

export const IconCart = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  font-size: 2em;
  color: ${cor2};
`;
