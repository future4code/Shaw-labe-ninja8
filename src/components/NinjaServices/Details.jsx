import React from "react";
import axios from 'axios';
import styled from "styled-components";
import { key } from '../../constants/labeninjaAPI';
import { labeninjasURL } from '../../constants/labeninjaAPI';
import {convertDate} from "../utils/convertDate";
import { Button } from "@material-ui/core";

const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: (1fr, 1fr);
    margin: 12px;
    padding: 0;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;

    div {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #f5f4fc;
        align-items: center;
        justify-content: center;
        padding: 0 16px 16px 16px;
        margin: 12px;
    }
`
const StyleButton = styled(Button)`
  /* border-radius: 5px;
  margin-top: 10px; */
`

class Details extends React.Component {

    state = {
        job: {}
    }

    componentDidMount() {
        this.getJobById()
    }

    getJobById = (id) =>{
        axios.get(`${labeninjasURL}/jobs/${this.props.jobId}`, {
            headers: {
                Authorization: key
            }
        })
        .then((res) => {
            this.setState({job: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const pymentComponents = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
            return <li key={pay}>{pay}</li>
        })
        
        return(
            <DetailsContainer>
                <div>
                    {
                        this.state.job.title && <h1>{this.state.job.title}</h1>
                    }
                    {
                        this.state.job.price && <p><b>Preço: </b>R${this.state.job.price.toFixed(2)}</p>
                    }
                    {
                        this.state.job.dueDate && <p><b>Prazo: </b>{convertDate(this.state.job.dueDate)}</p>
                    }
                    {
                        this.state.job.description && <p>{this.state.job.description}</p>
                    }
                        <div>
                            {pymentComponents}
                        </div>
                    <StyleButton
                    variant="contained" color="primary"
                    onClick={() => this.props.changePage("ninjaServices")}>Voltar para a Lista</StyleButton>
                </div>
            </DetailsContainer>
        );
    }
}

export default Details;