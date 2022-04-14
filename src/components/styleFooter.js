import styled from "styled-components";

export const List = styled.li`
  list-style: none;
  margin: 10px;
  margin-top: 0;
`;

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px; 
  @media (min-width: 2000px),(max-width: 900px){
   font-size: 12px;
   display: flex;
   align-items: center;
   flex-direction: column;    

}
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  margin: 0 10px;

  ul {
    padding: 0;
  }

  h3 {
    margin: 20px;
    margin-left: 10px;
    margin-bottom: 0;
  }
`;

export const ContainerIcones = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  margin-left: 10px;

  a {
    margin-right: 20px;
  }

  svg:last-child {
    margin-right: 0;
  }
`;
