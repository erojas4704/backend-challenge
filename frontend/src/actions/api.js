import { GET_CONTENT, GET_CONTENT_FAILURE, GET_CONTENT_SUCCESS } from "./types";
import axios from 'axios';

const getContentFromServer = () => {
    return async dispatch => {
        dispatch({ type: GET_CONTENT });
        try {
            const response = await axios.get("/api/content");
            dispatch({ type: GET_CONTENT_SUCCESS, payload: response.data });
        } catch (err) {
            dispatch({ type: GET_CONTENT_FAILURE, payload: err });
        }
    }
}

export { getContentFromServer };