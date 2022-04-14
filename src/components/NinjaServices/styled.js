import styled from 'styled-components';

export const NinjaServicesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 12px;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const CardNinjaService = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f4fc;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px 16px;
  margin: 12px;
`;
export const Button = styled.button`
  border-radius: 5px;
  margin-right: 2px;
`;