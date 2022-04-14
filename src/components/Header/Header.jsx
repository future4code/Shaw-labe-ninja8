import { Typography } from "@material-ui/core";
import React from "react";
import { Navigation, HeaderContainer, StyleContainer } from "./styled";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer color="secondary" position="static">
       <StyleContainer>
        <Typography>
          LABENINJAS
          </Typography>
          <Navigation>
            <div onClick={() => this.props.changePage("home")}>Inicio</div>
            <div onClick={() => this.props.changePage("cart")}>Carrinho</div>
          </Navigation>
         </StyleContainer> 
      </HeaderContainer>

     
    );
  }
}

export default Header;
