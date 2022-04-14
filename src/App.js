import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RegisterNinja from "./components/RegisterNinja/RegisterNinja";
import { Footers } from "./components/Footer";
import Cart from "./components/Cart/Cart";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";

class App extends React.Component {
  state = {
    currentPage: "home",
  };

  // ANCHOR EVENTOS
  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    const renderCurrentPage = () => {
      switch (this.state.currentPage) {
        case "home":
          return <Home changePage={this.changePage} />;

        case "cart":
          return <Cart changePage={this.changePage} />;

        case "registerNinja":
          return <RegisterNinja />;

        // case "ninjaServices":
        //   return <NinjaServices />;

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
