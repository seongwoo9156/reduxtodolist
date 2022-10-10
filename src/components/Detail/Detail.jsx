import React, { useEffect } from "react";
import GlobalStyled from "../GlobalStyled/GlobalStyled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FindID } from "../../redux/modules/todos";

const DetailBox = styled.div`
  width: 95%;
  max-width: 700px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: -10px 16px 12px rgba(0, 0, 0, 0.15);
  padding: 40px;
  h4 {
    margin-bottom: 40px;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.5rem;
  }
  a {
    position: absolute;
    left: 42%;
    bottom: 10%;
    font-size: 30px;
    text-decoration: none;
    color: blue;
    &:hover {
      color: red;
    }
  }
`;

const Detail = () => {
  const list = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(FindID(id));
  });

  console.log(list);

  return (
    <>
      <GlobalStyled></GlobalStyled>
      <DetailBox>
        <h4>ID : {list.id}</h4>
        <h2>{list.title}</h2>
        <p>{list.desc}</p>
        <Link to={"/"}>뒤로가기</Link>
      </DetailBox>
    </>
  );
};

export default Detail;
