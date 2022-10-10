import React from "react";
import styled from "styled-components";

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

  return (
    <>
      <FormBox1 id="form1">
        <p>투두리스트 입력하기</p>
        <span onClick={opne}>🔻</span>
      </FormBox1>
      <FormBox2 id="form2">
        <InputBox>
          <label htmlFor="title"> 제목 :</label>
          <input type="text" id="title" />
          <label htmlFor="desc"> 내용 :</label>
          <input type="text" id="desc" />
          <button>추가하기</button>
          <span onClick={close}>🔺</span>
        </InputBox>
      </FormBox2>
    </>
  );
};

export default InputForm;
