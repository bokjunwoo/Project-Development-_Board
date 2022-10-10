import { Form, Button } from "react-bootstrap";

function KnowledgeWrite() {
  return (
    <>
      <div className="container col-11 col-sm-10 col-mg-9 col-lg-8">
        <h1 className="mt-4">정보 나눔</h1>
        <small>전문과들과 함께 나누고 싶은 IT 뉴스, 정보가 있다면 공유해주세요.</small>

        <form action="" className="mt-5">
          <h6 className="mt-5">토픽</h6>
          <Form.Select aria-label="Default select example" size="lg">
            <option>토픽을 선택해 주세요.</option>
            <option value="1">뉴스</option>
            <option value="2">팁</option>
          </Form.Select>

          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" placeholder="제목을 입력해 주세요" size="lg" />
            <Form.Label className="mt-5">본문</Form.Label>
            <Form.Control type="text" placeholder="내용을 입력해 주세요" size="lg" />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="light" className="me-3" size="lg">취소</Button>
            <Button variant="primary" size="lg">등록</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default KnowledgeWrite;
