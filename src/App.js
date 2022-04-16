import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RegisterNinja from "./components/RegisterNinja/RegisterNinja";
import { Footers } from "./components/Footer";
import Cart from "./components/Cart/Cart";
import NinjaServices from "./components/NinjaServices/NinjaServices";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";
import Details from "./components/NinjaServices/Details";

class App extends React.Component {
  state = {
    currentPage: "home",
    cart: [],
    jobDetailId: ""
  };

  // ANCHOR MUDAR PAGINA
  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  // ANCHOR ADICIONAR CARD NO CARRINHO
  addToCart = (job) => {
    console.log(job);
    const newCart = [...this.state.cart, job];
    this.setState({ cart: newCart });
    alert(`O serviço ${job.title} foi adicionado ao carrinho`);
  };

  // ANCHOR DELETAR CARD NO CARRINHO
  removeFromCart = (id) => {
    const canDelete = window.confirm(
      "Tem certeza que deseja remover este produto?"
    );
    if (canDelete) {
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      });
      this.setState({ cart: newCart });
    }
  };

  // ANCHOR LIMPAR CARD NO CARRINHO
  clearCart = () => {
    this.setState({ cart: [] });
    alert("Obrigada por comprar com a gente!");
  };

  goToDetails = (jobId) => {
    this.setState({currentPage: "detail", jobDetailId: jobId})
  }

  render() {
    const renderCurrentPage = () => {
      switch (this.state.currentPage) {
        case "home":
          return <Home changePage={this.changePage} />;

        case "cart":
          return (
            <Cart
              changePage={this.changePage}
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              clearCart={this.clearCart}
            />
          );

        case "registerNinja":
          return <RegisterNinja />;

        case "ninjaServices":
          return <NinjaServices addCart={this.addToCart} goToDetails={this.goToDetails}/>;

        case "detail":
          return <Details jobId={this.state.jobDetailId} changePage={this.changePage}/>;

        default:
          return <Home />;
      }
    };

    return (
      <ThemeProvider theme={theme}>
        <Header changePage={this.changePage} />
        {renderCurrentPage()}

        <Footers />
      </ThemeProvider>
    );
  }
}

export default App;
