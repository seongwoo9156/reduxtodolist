import React from "react";
import InputForm from "../Form/InputForm";
import styled from "styled-components";
import List from "../List/List";

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

const TodoList = () => {
  return (
    <Wrap>
      <Title>My Todo List</Title>
      <InputForm></InputForm>
      <List></List>
    </Wrap>
  );
};

export default TodoList;
