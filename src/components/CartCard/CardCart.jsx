import { Button } from "@material-ui/core";
import React from "react";
import { Card } from "./styled";

class CartCard extends React.Component {
  render() {
    return (
      <Card>
        <h3>{this.props.title}</h3>
        <p>R${this.props.price.toFixed(2)}</p>
        <Button onClick={() => this.props.removeFromCart(this.props.id)}>
          Remover
        </Button>
      </Card>
    );
  }
}

export default CartCard;
