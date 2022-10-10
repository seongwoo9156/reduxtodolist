import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDLIST } from "../../redux/modules/todos";

const FormBox1 = styled.div`
  text-align: center;
  padding: 20px;
  transition: all 0.6s;
  height: 80px;
  line-height: 2;
  opacity: 1;
  p {
    font-size: 20px;
    margin-right: 10px;
    display: inline;
  }
  span {
    cursor: pointer;
    font-size: 18px;
  }
`;
const FormBox2 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  opacity: 0;
  transition: all 0.6s;
  display: none;
  height: 80px;
`;
const InputBox = styled.div`
  padding: 20px;
  label {
    margin-right: 8px;
    font-size: 20px;
  }
  input {
    margin-right: 10px;
    font-size: 18px;
    padding: 5px;
    width: 300px;
  }
  button {
    font-size: 20px;
    padding: 5px;
    margin-right: 20px;
  }
  span {
    font-size: 18px;
    cursor: pointer;
  }
`;

const InputForm = () => {
  function opne() {
    document.getElementById("form1").style.opacity = "0";
    document.getElementById("form2").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "block";
    }, 600);
  }
  function close() {
    document.getElementById("form1").style.opacity = "1";
    document.getElementById("form2").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("form1").style.display = "block";
      document.getElementById("form2").style.display = "none";
    }, 600);
  }

  const form = {
    id: 0,
    title: "",
    desc: "",
    inDone: false,
  };
  const listStore = useSelector((state) => state);
  const dispatch = useDispatch();

  const [todo, settodo] = useState(form);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    settodo({ ...todo, [name]: value });
  };

  const Submit = (event) => {
    const val1 = document.getElementById("title");
    const val2 = document.getElementById("desc");
    if (todo.title.trim() === "" || todo.desc.trim() === "") return;
    dispatch(
      ADDLIST({
        id: Date.now() + "",
        title: todo.title,
        desc: todo.desc,
        isDone: false,
      })
    );
    val1.value = null;
    val2.value = null;
    settodo(form);
  };

  return (
    <>
      <FormBox1 id="form1">
        <p>투두리스트 입력하기</p>
        <span onClick={opne}>🔻</span>
      </FormBox1>
      <FormBox2 id="form2">
        <InputBox>
          <label htmlFor="title"> 제목 :</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChangeHandler}
          />
          <label htmlFor="desc"> 내용 :</label>
          <input type="text" id="desc" name="desc" onChange={onChangeHandler} />
          <button onClick={Submit}>추가하기</button>
          <span onClick={close}>🔺</span>
        </InputBox>
      </FormBox2>
    </>
  );
};

export default InputForm;
