import styled from "styled-components";
import { Button, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import SelectBtn from "./SelectBtn";

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  background-color: skyblue;
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

function Community() {
  let navigate = useNavigate();
  const list = useSelector((state) => state.Community.list);

  return (
    <>
      <div className='container col-11 col-sm-10 col-mg-9 col-lg-8'>
        <Title>커뮤니티</Title>

        <DivWrite className="d-flex justify-content-between">
          <Button variant="primary" className="mb-4" onClick={() => navigate('write')}>작성하기</Button>

          <SelectBtn />

          <ButtonGroup className="mb-4">
            <DropdownButton as={ButtonGroup} title="최신순" variant="light">
              <Dropdown.Item eventKey="1">댓글순</Dropdown.Item>
              <Dropdown.Item eventKey="2">조회순</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

        </DivWrite>

        <Form className="d-flex justify-content-center" role="search">
          <Input className="form-control mt-4 mb-4" type="search" placeholder="검색" aria-label="Search" />
        </Form>

        {
          list.map((el) => {
            return (
              <DivItem key={el.id} onClick={() => navigate(`/board/community/detail/${el.id}`)}>
                <div className="d-flex pt-2">
                  <p className="me-2">{el.name}</p>
                  <p className="me-2">{el.views}</p>
                  <p className="me-2">{el.time}</p>
                </div>
                <h5>{el.text}</h5>
              </DivItem>
            )
          })
        }
      </div>
    </>
  );
}

export default Community;