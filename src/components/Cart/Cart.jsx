import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CartCard from "../CartCard/CardCart";

export const CartContainer = styled.div`
  height: 100vh;
`;

class Cart extends React.Component {
  render() {
    const cartComponents = this.props.cart.map((item) => {
      return (
        <CartCard
          addCart={this.props.addCart}
          key={item.id}
          title={item.title}
          price={item.price}
          id={item.id}
          removeFromCart={this.props.removeFromCart}
        />
      );
    });
    let totalPrice = 0;

    this.props.cart.forEach((item) => {
      totalPrice += item.price;
    });

    return (
      <div>
        {cartComponents.length > 0 ? (
          <div>
            {cartComponents}
            <span>Total: R${totalPrice.toFixed(2)}</span>
            <Button onClick={() => this.props.clearCart()}>
              Finalizar Comprar
            </Button>
            <Button onClick={() => this.props.changePage("ninjaServices")}>
              Voltar para a Lista
            </Button>
          </div>
        ) : (
          <div>
            <h1>Carrinho Vazio</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
