import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, Button } from "react-bootstrap"


const DivBox = styled.div`
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

export default function Support() {
  let { id }  = useParams();
  const list = useSelector((state) => state.Project.list);

  return (
    <>
      <DivBox className="container col-11 col-sm-10 col-mg-9 col-lg-8 mt-5 mb-5">
        <h2 className="mt-5 mb-5 text-center">{list[--id].text}</h2>

        <div className="p-2">
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Label><h5>프론트</h5></Form.Label>
            <Form.Control type="text" placeholder="자기소개를 입력해 주세요" size="lg" />
            <Form.Label className="mt-5"><h5>이력</h5></Form.Label>
            <Form.Control type="text" placeholder="본인 이력을 입력해 주세요" size="lg" />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-center">
          <Button variant="primary" className="mt-5 mb-5">지원하기</Button>
        </div>
      </DivBox>
    </>
  )
}
