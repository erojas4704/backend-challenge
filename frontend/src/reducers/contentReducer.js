import { GET_CONTENT, GET_CONTENT_FAILURE, GET_CONTENT_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    movies: [],
    series: [],
    loading: false,
    error: null
}

const filterContent = (content, programType) => {
    return content.filter(item => item.programType === programType);
}

const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                loading: true,
                error: null,
                movies: [],
                series: []
            }
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                movies: filterContent(action.payload.entries, "movie"),
                series: filterContent(action.payload.entries, "series"),
                loading: false
            }
        case GET_CONTENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                content: []
            }
        default:
            return state;
    }
};

export default contentReducer;