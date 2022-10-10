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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="board" element={<Board />} />
        <Route path="board/community" element={<Community />} />
        <Route path="board/community/write" element={<CommunityWrite />} />
        <Route path="board/community/detail/:id" element={<BoardDetail />} />
        <Route path="board/question" element={<Question />} />
        <Route path="board/question/write" element={<QuestionWrite />} />
        <Route path="board/knowledge" element={<Knowledge />} />
        <Route path="board/knowledge/write" element={<KnowledgeWrite />} />
        <Route path="board/project" element={<Project />} />
        <Route path="board/project/detail/:id" element={<ProjectDetail />} />
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
