import React from "react";
import styled from "styled-components";

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
  p {
    display: inline-block;
    border-bottom: 1px blue dotted;
    font-size: 18px;
    color: blue;
    cursor: pointer;
  }
  p:hover {
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
  &:hover {
    color: #fff;
    background-color: green;
  }
`;

const List = () => {
  let test = Date.now();
  console.log(test);
  return (
    <Listbox>
      <WorkBox>
        <h2>진행중</h2>
        <Listitem>
          <h3>제목들어가는공간</h3>
          <Listdesc>
            투두리스트입니다요ㄴㅇㄹㄴㅇㄹㅁㄴsdfsdfㅇㅁㄴㅇㄴㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
          </Listdesc>
          <p>상세보기</p>
          <Btnbox>
            <DelBtn>삭제하기</DelBtn>
            <TogBtn>완료</TogBtn>
          </Btnbox>
        </Listitem>
      </WorkBox>
      <WorkBox>
        <h2>해냈어요!</h2>
      </WorkBox>
    </Listbox>
  );
};

export default List;
