import { Badge, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Board() {
  let navigate = useNavigate();
  const Communitylist = useSelector((state) => state.Community.list);
  const Projectlist = useSelector((state) => state.Project.list);

  return (
    <>
      <div className='container d-flex flex-wrap justify-content-evenly mt-5'>
        <div className='col-12 col-md-6 col-lg-5 p-3'>
          <div className='d-flex justify-content-between'>
            <h1>자유게시판</h1>
            <h4 className='mt-3'><Badge bg="secondary" onClick={() => navigate('community')}>더보기</Badge></h4>
          </div>
          <ListGroup as="ol" numbered>
          {
            Communitylist.map((el) => {
              return (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={el.id}
                onClick={() => navigate(`community/detail/${el.id}`)} style={{cursor: 'pointer'}}>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{el.text}</div>
                    {el.name}
                  </div>
                </ListGroup.Item>
              )
            })
          }
          </ListGroup>
        </div>
        
        <div className='col-12 col-md-6 col-lg-5 p-3'>
          <div className='d-flex justify-content-between'>
            <h1>질문게시판</h1>
            <h4 className='mt-3'><Badge bg="secondary" onClick={() => navigate('question')}>더보기</Badge></h4>
          </div>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>
        
        <div className='col-12 col-md-6 col-lg-5 p-3'>
          <div className='d-flex justify-content-between'>
            <h1>정보게시판</h1>
            <h4 className='mt-3'><Badge bg="secondary" onClick={() => navigate('knowledge')}>더보기</Badge></h4>
          </div>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>
        
        <div className='col-12 col-md-6 col-lg-5 p-3'>
          <div className='d-flex justify-content-between'>
            <h1>프로젝트 구인</h1>
            <h4 className='mt-3'><Badge bg="secondary" onClick={() => navigate('project')}>더보기</Badge></h4>
          </div>
          <ListGroup as="ol" numbered>
            {
              Projectlist.map((el) => {
                return (
                  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={el.id}
                  onClick={() => navigate(`project/detail/${el.id}`)} style={{cursor: 'pointer'}}>
                    <div className="ms-2 me-auto">
                      <div className='d-flex'>
                        <div className='fw-bold me-2'>{el.text}</div>
                        <small> ~{el.lastDay}</small>
                      </div>
                      {el.front === null ? <span></span> : <span className='me-2'>프론트 {el.front}/{el.frontMax}</span>}
                      {el.back === null ? <span></span> : <span className='me-2'>백엔드 {el.back}/{el.backMax}</span>}
                      {el.etc === null ? <span></span> : <span>기타 {el.etc}/{el.etckMax}</span>}
                    </div>
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </div>
      </div>
    </>
  )
}