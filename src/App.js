import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from './components/Board';
import Community from './components/Community';
import CommunityWrite from './components/CommunityWrite';
import Question from './components/Question';
import QuestionWrite from './components/QuestionWrite';
import Knowledge from './components/Knowledge'
import KnowledgeWrite from './components/KnowledgeWrite';
import BoardDetail from './components/BoardDetail';
import Project from './components/Project'
import ProjectDetail from './components/ProjectDetail';
import Support from './components/Support';
import axios from 'axios';

function App() {
  axios.get('http://localhost:3001/test')
  	.then((res) => { console.log(res.data) })
 	  // 실행에 성공하면 .then
    .catch(() => { console.log('실패') });
    // 실행에 실패하면 .catch

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="board" element={<Board />} />
        <Route path="board/community" element={<Community />} />
        <Route path="board/community/class" element={<Community />} />
        <Route path="board/community/daily" element={<Community />} />
        <Route path="board/community/write" element={<CommunityWrite />} />
        <Route path="board/community/detail/:id" element={<BoardDetail />} />
        <Route path="board/question" element={<Question />} />
        <Route path="board/question/write" element={<QuestionWrite />} />
        <Route path="board/knowledge" element={<Knowledge />} />
        <Route path="board/knowledge/write" element={<KnowledgeWrite />} />
        <Route path="board/project" element={<Project />} />
        <Route path="board/project/detail/:id" element={<ProjectDetail />} />
        <Route path="board/project/detail/:id/support/front" element={<Support />} />
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
