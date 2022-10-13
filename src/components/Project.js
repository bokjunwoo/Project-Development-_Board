import { Button, Dropdown } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import styled from "styled-components"

const DivBox = styled.div`
  border-bottom: 1px solid #999;
`

const DivItem = styled.div`
  border-bottom: 1px solid #999;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export default function Project() {
  let navigate = useNavigate();
  const Projectlist = useSelector((state) => state.Project.list);

  return (
    <>
      <div className="container col-11 col-sm-10 col-mg-9 col-lg-8">
        <h2 className="mt-5">나와 어울리는 프로젝트 찾기</h2>

        <DivBox className="d-flex justify-content-between pt-5 pb-5">
          <div className="d-flex">
            <Button className="me-3">지역선택</Button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                기술스택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">조회순</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              최신순
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">조회순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </DivBox>

        {
          Projectlist.map((el) => {
            return (
              <DivItem key={el.id} onClick={() => navigate(`detail/${el.id}`)}>
                <div className="d-flex pt-2">
                  <p className="me-2">{el.name}</p>
                  <p className="me-2">{el.views}</p>
                  <p className="me-2">{el.time}</p>
                </div>
                <h5 className="mb-3">{el.text}</h5>
                <div className="mb-2">
                  {el.front === null ? <span></span> : <span className='me-2'>프론트 {el.front}/{el.frontMax}</span>}
                  {el.back === null ? <span></span> : <span className='me-2'>백엔드 {el.back}/{el.backMax}</span>}
                  {el.etc === null ? <span></span> : <span>기타 {el.etc}/{el.etckMax}</span>}
                </div>
              </DivItem>
            )
          })
        }
      </div>
    </>
  )
}
