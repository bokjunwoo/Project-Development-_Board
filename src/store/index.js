// store 통합관리
import { combineReducers } from "redux";
import Community from './modules/Community'
import Project from './modules/Project';

export default combineReducers({
  Community, Project,
})