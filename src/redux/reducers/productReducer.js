import { ActionTypes } from "../contants/action-types"

const initialState = {
    // blog: [],
    // project: [],
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        default:
            return state;
    }
};

export const selectBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_BLOG:
            return {
                ...state,
                ...action.payload
            };
        case ActionTypes.REMOVE_SELECTED_BLOG:
            return {};
        default:
            return state;
    }
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        default:
            return state;
    }
};

export const selectProjectReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PROJECT:
            return {
                ...state,
                ...action.payload
            };
        case ActionTypes.REMOVE_SELECTED_PROJECT:
            return {};
        default:
            return state;
    }
};