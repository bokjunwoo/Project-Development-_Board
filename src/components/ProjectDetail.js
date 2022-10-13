import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import Front from "./Front"
import Back from "./Back"
import Etc from './Etc'

const DivBox = styled.div`
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

const PEed = styled.p`
  color: red;
`

export default function ProjectDetail() {
  let { id }  = useParams();
  const list = useSelector((state) => state.Project.list);

  return (
    <>
      <DivBox className="container col-11 col-sm-10 col-mg-9 col-lg-8 mt-5 mb-5">
        <h2 className="mt-5 mb-5 text-center">{list[--id].text}</h2>
        <div className="d-flex justify-content-end mb-5">
          <span className="me-2">작성자 : {list[id].name}</span>
          <span>등급 : {list[id].tier}</span>
        </div>

        <p className="mb-5 p-2">프로젝트 설명</p>

        <h4 className="mb-4">구인 포지션</h4>

        {list[id].front === null ? <p></p> : <Front />}

        {list[id].back === null ? <p></p> : <Back />}

        {list[id].etc === null ? <p></p> : <Etc />}

        <PEed>마감기간 {list[id].lastDay}</PEed>
      </DivBox>
    </>
  )
}
