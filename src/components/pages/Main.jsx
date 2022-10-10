import React from "react";
import InputForm from "../Form/InputForm";
import styled from "styled-components";
import List from "../List/List";
import GlobalStyled from "../GlobalStyled/GlobalStyled";
import { useParams } from "react-router-dom";

const Wrap = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  padding: 15px;
`;

const Main = () => {
  const params = useParams();
  console.log(params);
  return (
    <Wrap>
      <GlobalStyled></GlobalStyled>
      <Title>My Todo List</Title>
      <InputForm></InputForm>
      <List></List>
    </Wrap>
  );
};

export default Main;
