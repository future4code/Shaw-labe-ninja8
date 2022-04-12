import React from "react";
import styled from "styled-components";
import labeninjas from "../../assets/labeninjas.png";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const ContainerSection = styled.div`
  display: flex;
  justify-content: center;

  background: #f5f4fc;
  height: 85%;
  width: 85%;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 1em;
  left: 5em;

  img {
    width: 80%;
    height: 30vh;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  button {
    height: 10%;
    position: relative;
    top: 5em;
    right: 8em;
  }
`;

class Home extends React.Component {
  state = {
    currentPage: "home",
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    return (
      <ContainerHome>
        <ContainerSection>
          <ContainerImg>
            <img src={labeninjas} alt="LOG" />
          </ContainerImg>

          <ContainerButton>
            <button
              onClick={() => {
                this.props.changePage("registerNinja");
              }}
            >
              Register Ninja
            </button>

            <button
              onClick={() => {
                this.props.changePage("ninjaServices");
              }}
            >
              Ninja Services
            </button>
          </ContainerButton>
        </ContainerSection>
      </ContainerHome>
    );
  }
}

export default Home;
