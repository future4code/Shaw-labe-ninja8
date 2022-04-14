import { Typography } from "@material-ui/core";
import React from "react";
import { Navigation, HeaderContainer, StyleContainer } from "./styled";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer color="secondary">
       <StyleContainer>
        <Typography>
          LABENINJAS
          </Typography>
          <Navigation>
            <div onClick={() => this.props.changePage("home")}>Home</div>
            <div onClick={() => this.props.changePage("cart")}>Cart</div>
          </Navigation>
         </StyleContainer> 
      </HeaderContainer>

      // <HeaderContainer >
      //   LABENINJAS
      //   <Navigation>
      //     <div onClick={() => this.props.changePage("home")}>Home</div>
      //     <div onClick={() => this.props.changePage("cart")}>Cart</div>
      //   </Navigation>
      // </HeaderContainer>
    );
  }
}

export default Header;
