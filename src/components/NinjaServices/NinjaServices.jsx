import React from "react";
import axios from "axios";
import { NinjaServicesListContainer, Button, CardNinjaService } from "./styled";
import { key } from "../constants/labeninjaAPI";
import { labeninjasURL } from "../constants/labeninjaAPI";
import {convertDate} from "../utils/convertDate";

class NinjaServices extends React.Component {
  state = {
    jobsList: [],
    filteredJobsList: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: "",
  };

  componentDidMount() {
    this.getAllJobs();
    this.filterJobs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.minVal !== prevState.minVal ||
      this.state.maxVal !== prevState.maxVal ||
      this.state.search !== prevState.search ||
      this.state.order !== prevState.order
    ) {
      this.filterJobs();
    }
  }

  handleMinVal = (e) => {
    this.setState({ minVal: e.target.value });
  };

  // ANCHOR EVENTOS
  handleMaxVal = (e) => {
    this.setState({ maxVal: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  // ANCHOR GET
  getAllJobs = () => {
    axios
      .get(`${labeninjasURL}/jobs`, {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        this.setState({
          jobsList: res.data.jobs,
          filteredJobsList: res.data.jobs,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  // ANCHOR FILTER INPUTS
  filterJobs = () => {
    const maximum = this.state.maxVal ? Number(this.state.maxVal) : Infinity;
    const minimum = this.state.minVal ? Number(this.state.minVal) : -Infinity;

    const newJobsList = this.state.jobsList
      .filter((job) => job.price >= minimum)
      .filter((job) => job.price <= maximum)
      .filter((job) => {
        const jobTitle = job.title.toLowerCase();
        const jobDescription = job.description.toLowerCase();
        const searchText = this.state.search.toLocaleLowerCase();
        return (
          jobTitle.includes(searchText) || jobDescription.includes(searchText)
        );
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Título":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      });

    this.setState({ filteredJobsList: newJobsList });
  };

  render() {
    const NinjaServicesList = this.state.filteredJobsList.map((job) => {
      return (
        <>
          <CardNinjaService key={job.id}>
            <h3>{job.title}</h3>
            <p>
              <b>Preço: </b>{job.price.toFixed(2)}
            </p>
            <p>
              <b>Prazo: </b>{convertDate(job.dueDate)}
            </p>
            <div>
              <Button onClick={() => this.props.goToDetails(job.id)}>
                Ver detalhes
              </Button>
              <Button onClick={() => this.props.addCart(job)}>
                Adicionar ao Carrinho
              </Button>
            </div>
          </CardNinjaService>
        </>
      );
    });

    return (
      <NinjaServicesListContainer>
        {NinjaServicesList}
      </NinjaServicesListContainer>
    );
  }
}

export default NinjaServices;
