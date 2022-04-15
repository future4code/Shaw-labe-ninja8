import styled from 'styled-components';
import { cor2 } from '../../assets/pallete';

export const Card = styled.div`
	  border: 1px solid black;
    background-color: ${cor2};
    margin: 12px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;