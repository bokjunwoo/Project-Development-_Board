import styled from "styled-components";
import { Button, Dropdown, DropdownButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  background-color: yellowgreen;
  padding: 20px;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 24px;
`

const DivItem = styled.div`
  border-bottom: 1px solid #999;
  height: 100px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Form = styled.form`
  border-bottom: 1px solid #999;
`

const Input = styled.input`
  max-width: 200px;
`

const DivWrite = styled.div`
  border-bottom: 1px solid #999;
`

function Knowledge() {
  let navigate = useNavigate();

  return (
    <>
      <div className='container col-11 col-sm-10 col-mg-9 col-lg-8'>
        <Title>정보게시판</Title>

        <DivWrite className="d-flex justify-content-between">
          <Button variant="primary" className="mb-4" onClick={() => navigate('write')}>작성하기</Button>

          <ToggleButtonGroup type="radio" name="options" defaultValue={3} className='mb-4'>
            <ToggleButton id="tbg-radio-1" value={1} variant="" className="ms-2 me-2 rounded">뉴스</ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} variant="" className="ms-2 me-2 rounded">팁</ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} variant="" className="ms-2 me-2 rounded">전체</ToggleButton>
          </ToggleButtonGroup>

          <ButtonGroup className="mb-4">
            <DropdownButton as={ButtonGroup} title="최신순" variant="light">
              <Dropdown.Item eventKey="1">댓글순</Dropdown.Item>
              <Dropdown.Item eventKey="2">조회순</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

        </DivWrite>
        
        <Form className="d-flex justify-content-center" role="search">
          <Input className="form-control mt-4 mb-4" type="search" placeholder="검색" aria-label="Search"/>
        </Form>
        
        <DivItem>
          <div className="d-flex pt-2">
            <p className="me-2">작성자</p>
            <p className="me-2">조회수</p>
            <p className="me-2">작성시간</p>
          </div>
          <h5>제목</h5>
        </DivItem>
      </div>
    </>
  );
}

export default Knowledge;