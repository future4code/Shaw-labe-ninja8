import { Button } from "@material-ui/core";
import React from "react";
import { ButtonContainer, SuccessButton } from "./styled";
import CartCard from "../../components/CartCard/CardCart";

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

            <ButtonContainer>
              <SuccessButton
                variant="contained"
                onClick={() => this.props.clearCart()}
              >
                Finalizar Comprar
              </SuccessButton>
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.props.changePage("ninjaServices")}
              >
                Voltar para a Lista
              </Button>
              <span>Total: R${totalPrice.toFixed(2)}</span>
            </ButtonContainer>
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
