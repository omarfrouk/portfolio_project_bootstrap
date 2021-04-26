import { combineReducers } from "redux";
import {
    blogReducer,
    selectBlogReducer,
    projectReducer,
    selectProjectReducer
} from "./productReducer";

const reducers = combineReducers({
    allBlogs: blogReducer,
    blog: selectBlogReducer,
    allProjects: projectReducer,
    project: selectProjectReducer,
});

export default reducers;