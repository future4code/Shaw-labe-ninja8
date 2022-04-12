import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  color: #f6f5fc;
  background: #494949;

`;

export const Navigation = styled.nav`
  display: flex;
  width: 100px;
  justify-content: space-between;
	cursor: pointer;

	& div:hover{
		color: #ffff1c;
	}
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
       LABENINJAS
        <Navigation>
          <div onClick={() => this.props.changePage("home")}>Home</div>
          <div onClick={()=> this.props.changePage('cart')}>Cart</div>
        </Navigation>
      </HeaderContainer>
    );
  }
}

export default Header;
