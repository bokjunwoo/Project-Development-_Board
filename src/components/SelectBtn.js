import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

export default function SelectBtn() {
  let navigate = useNavigate();

  if (window.location.href === 'http://localhost:3001/board/community') {
    return (
      <ToggleButtonGroup type="radio" name="options" defaultValue={3} className='mb-4'>
        <ToggleButton id="tbg-radio-1" value={1} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/daily')}>일상</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/class')}>모임</ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community')}>전체</ToggleButton>
      </ToggleButtonGroup>
    )
  } else if (window.location.href === 'http://localhost:3001/board/community/class') {
    return (
      <ToggleButtonGroup type="radio" name="options" defaultValue={2} className='mb-4'>
        <ToggleButton id="tbg-radio-1" value={1} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/daily')}>일상</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/class')}>모임</ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community')}>전체</ToggleButton>
      </ToggleButtonGroup>
    )
  } else if (window.location.href === 'http://localhost:3001/board/community/daily') {
    return (
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} className='mb-4'>
        <ToggleButton id="tbg-radio-1" value={1} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/daily')}>일상</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community/class')}>모임</ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant="" className="ms-2 me-2 rounded" onClick={() => navigate('/board/community')}>전체</ToggleButton>
      </ToggleButtonGroup>
    )
  } else {
    return (
      <>
      </>
    )
  }
}
