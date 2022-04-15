import React from "react";
import {
  ContainerHome,
  ContainerSection,
  ContainerImg,
  ContainerButton,
  StyleButton
} from "./styled";
import labeninjas from "../../assets/labeninjas.png";



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
          
            <StyleButton variant="contained" color="primary"
            onClick={() => {
              this.props.changePage("registerNinja");
            }}
            >
              Cadastrar Serviço
            </StyleButton>

            <StyleButton variant="contained" color="primary"
            onClick={() => {
              this.props.changePage("ninjaServices");
            }}
            >
              Lista de Serviços
            </StyleButton>
            
          </ContainerButton>
        </ContainerSection>
      </ContainerHome>
    );
  }
}

export default Home;
