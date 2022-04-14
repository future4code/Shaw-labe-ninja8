import React from "react";
import axios from 'axios';
import styled from "styled-components";
import { key } from '../constants/labeninjaAPI';
import { labeninjasURL } from '../constants/labeninjaAPI';

const NinjaServicesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 12px;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`

const CardNinjaService = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f5f4fc;
    align-items: center;
    justify-content: center;
    padding: 0 16px 16px 16px;
    margin: 12px;
`
const Button = styled.button`
  border-radius: 5px;
  margin-right: 2px;
`

class NinjaServices extends React.Component {
    state = {
        job: [
            {
                id: "",
                title: "",
                description: "",
                price: "",
                paymentMethods: [],
                dueDate: "",
                taken: false
            }
        ]
    }

    componentDidMount() {
        this.getAllJobs()
    }

    getAllJobs = () =>{
        axios.get(`${labeninjasURL}/jobs`, {
            headers: {
                Authorization: key
            }
        })
        .then((res) => {
            this.setState({job: res.data.jobs})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const NinjaServicesList = this.state.job.map((job) => {
            return <CardNinjaService key={job.id}>
                <h3>{job.title}</h3>
                <p>
                    <b>Preço: {job.price}</b>
                </p>
                <p>
                    <b>Prazo: {job.dueDate}</b>
                </p>
                <div>
                    <Button onClick={() => this.props.vaiParaDetalhes(job.id)}>Ver detalhes</Button>
                    <Button onClick={() => this.props.vaiParaDetalhes(job.id)}>Adicionar ao Carrinho</Button>
                </div>
                </CardNinjaService>
        })

        return(
            <NinjaServicesListContainer>
                {NinjaServicesList}
            </NinjaServicesListContainer>
        );
    }
}

export default NinjaServices;