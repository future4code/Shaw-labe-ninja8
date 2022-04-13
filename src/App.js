import React from 'react'
import { Footers } from './components/Footer'

function App() {
	return (
        <Footers />
	)
import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import RegisterNinja from "./components/RegisterNinja/RegisterNinja";

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

        case "ninjaServices":
          return <NinjaServices />;

        default:
          return <Home />;
      }
    };

    return (
      <div>
        <Header changePage={this.changePage} />

        {renderCurrentPage()}

		<Footers />
      </div>
    );
  }
}

export default App;
