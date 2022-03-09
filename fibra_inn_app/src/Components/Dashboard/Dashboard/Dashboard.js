import React from "react";
import Header from "../Header/Header";
import Filters from "../Multiselect/Multiselect";
import { Container } from "react-bootstrap";
import Mensual from "./Mensual";

const Dashboard= ()=>{
  return (
    <>
      <Header/>
      <Container>
        <Filters/>
        <Mensual/>
      </Container>
    </>
  );


}

export default Dashboard;