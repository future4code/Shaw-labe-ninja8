import { Button } from "@material-ui/core";
import React from "react";
import { Card } from "./styled";

import styled from 'styled-components';
import { error } from "../../assets/pallete";

export const DeleteButton = styled(Button)`
  background-color: ${error} !important;
`;



class CartCard extends React.Component {
  render() {
    return (
      <Card>
        <h3>{this.props.title}</h3>
        <p>R${this.props.price.toFixed(2)}</p>
        <DeleteButton 
         variant="contained"
         color="secondary"
        onClick={() => this.props.removeFromCart(this.props.id)}>
          Remover
        </DeleteButton>
      </Card>
    );
  }
}

export default CartCard;
