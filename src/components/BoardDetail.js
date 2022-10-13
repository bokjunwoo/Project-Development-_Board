import styled from "styled-components";
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Divline = styled.div`
  border-bottom: 1px solid #999;
`

const DivWrite = styled.div`
  border: 1px solid #999;
  margin-bottom: 100px;
  border-radius: 10px;
`

const DivComment = styled.div`
  border-bottom: 1px solid #999;
`

export default function BoardDetail() {
  let { id }  = useParams();
  const list = useSelector((state) => state.Community.list);
  let navigate = useNavigate();

  return (
    <>
      <div className="container col-11 col-sm-10 col-mg-9 col-lg-8">
        <div className="d-flex align-middle mt-5">
          <Divline className="col-3 col-sm-1 mb-2"></Divline>
          <div className="col-2 col-sm-1 text-center" style={{cursor: 'pointer'}} onClick={() => navigate('/board/community/daily')}>일상</div>
          <div className="col-2 col-sm-1 text-center" style={{cursor: 'pointer'}} onClick={() => navigate('/board/community/class')}>모임</div>
          <div className="col-2 col-sm-1 text-center" style={{cursor: 'pointer'}} onClick={() => navigate('/board/community')}>전체</div>
          <Divline className="col-3 col-sm-8 mb-2"></Divline>
        </div>

        <div>
          <h5 className="mt-5">{list[--id].name}</h5>
          <span className="me-3">등급</span>
          <span className="me-3">시간</span>
          <span>조회수</span>
        </div>

        <div>
          <h3 className="mt-5">제목</h3>
          <p className="mt-5">내용</p>
        </div>

        <Divline className="d-flex justify-content-center">
          <div className="btn-group mt-5 mb-5" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-secondary">감소</button>
            <button type="button" className="btn btn-outline-secondary disabled">0</button>
            <button type="button" className="btn btn-outline-secondary">증가</button>
          </div>
        </Divline>

        <p className="mt-3 mb-5">0개의 댓글</p>
        <DivWrite>
          <form action="">
            <Form.Group className="container" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">작성자</Form.Label>
              <Form.Control type="text" placeholder="댓글을 입력해 주세요" className=""/>
              <div className="d-flex justify-content-end">
                <Button variant="info" className="ps-3 pe-3 mt-3 mb-3 " size="sm">댓글쓰기</Button>
              </div>
            </Form.Group>
          </form>
        </DivWrite>

        <DivComment className="mb-5">
          <div className="mb-2">
            <h6 className="mt-5">아이디</h6>
            <span className="me-1">등급</span>
            <span className="me-1">시간</span>
            <span>조회수</span>
          </div>
          
          <div>
            <p className="mb-4">내용</p>
          </div>
        </DivComment>
      </div>
    </>
  )
}
