import { ActionTypes } from "../contants/action-types";

export const setBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_BLOGS,
        payload: blogs,
    };
};

export const selectedBlog = (blog) => {
    return {
        type: ActionTypes.SELECTED_BLOG,
        payload: blog,
    };
};

export const removeSelectedBlog = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BLOG,
    };
};

export const setProjects = (projects) => {
    return {
        type: ActionTypes.SET_PROJECTS,
        payload: projects,
    };
};

export const selectedProject = (Project) => {
    return {
        type: ActionTypes.SELECTED_PROJECT,
        payload: Project,
    };
};

export const removeSelectedProject = (Project) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PROJECT,
    };
};