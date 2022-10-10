import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ChangeBtn } from "../../redux/modules/todos";
import { REMOVEBtn } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const Listbox = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 40%;
  margin-top: 20px;
  padding: 10px;
  justify-content: space-around;
  gap: 20px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
  }
`;

const WorkBox = styled.div`
  width: 50%;
`;

const Listitem = styled.div`
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid skyblue;
  border-radius: 10px;

  h3 {
    margin-bottom: 8px;
    font-size: 25px;
  }
  a {
    display: inline-block;
    border-bottom: 1px blue dotted;
    font-size: 18px;
    color: blue;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: red;
    border-bottom: 1px red dotted;
  }
`;

const Btnbox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 30px;
  text-align: center;
`;

const Listdesc = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  font-size: 20px;
`;

const DelBtn = styled.span`
  width: 80px;
  height: 40px;
  border: 1px solid red;
  border-radius: 15px;
  line-height: 40px;
  color: red;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: red;
  }
`;
const TogBtn = styled.span`
  width: 80px;
  height: 40px;
  border: 1px solid green;
  border-radius: 15px;
  line-height: 40px;
  color: green;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: green;
  }
`;

const List = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  function change(e) {
    dispatch(ChangeBtn(e));
  }
  console.log(todos);

  const remove = (e) => {
    dispatch(REMOVEBtn(e));
  };

  return (
    <Listbox>
      <WorkBox>
        <h2>진행중</h2>
        {todos.map((e) => {
          if (!e.isDone) {
            return (
              <Listitem key={e.id}>
                <h3>{e.title}</h3>
                <Listdesc>{e.desc}</Listdesc>
                <Link to={`/${e.id}`}>상세보기</Link>
                <Btnbox>
                  <DelBtn onClick={() => remove(e.id)}>삭제하기</DelBtn>
                  <TogBtn onClick={() => change(e.id)}>
                    {e.isDone ? "취소" : "완료"}
                  </TogBtn>
                </Btnbox>
              </Listitem>
            );
          }
        })}
      </WorkBox>
      <WorkBox>
        <h2>해냈어요!</h2>
        {todos.map((e) => {
          if (e.isDone) {
            return (
              <Listitem key={e.id}>
                <h3>{e.title}</h3>
                <Listdesc>{e.desc}</Listdesc>
                <Link to={`/${e.id}`}>상세보기</Link>
                <Btnbox>
                  <DelBtn onClick={() => remove(e.id)}>삭제하기</DelBtn>
                  <TogBtn onClick={() => change(e.id)}>
                    {e.isDone ? "취소" : "완료"}
                  </TogBtn>
                </Btnbox>
              </Listitem>
            );
          }
        })}
      </WorkBox>
    </Listbox>
  );
};

export default List;
