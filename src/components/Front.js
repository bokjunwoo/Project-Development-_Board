import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Front() {
  let { id }  = useParams();
  let navigate = useNavigate();
  const Projectlist = useSelector((state) => state.Project.list);

  return (
    <>
      <div className="p-2">
        <div>
          <h5 className="mb-3">프론트 {Projectlist[--id].front}/{Projectlist[id].frontMax}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque odio voluptate magni eos eius excepturi debitis facere voluptates, quibusdam suscipit aliquam, quasi optio omnis voluptatibus, at dolor fugit dolore.</p>
        </div>
        <div className="d-flex justify-content-end mb-5">
          <Button variant="primary" onClick={() => navigate('support/front')}>지원하기</Button>
        </div>
      </div>
    </>
  )
}
