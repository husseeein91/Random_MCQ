import axios from "axios";
import {
  GET_EXAM,
  GET_QUESTION,
  GET_RESULT,
  ANSWER_QUESTION,
  EXAM_ERROR,
  SET_NAME,
} from "./types";

export const getExam = () => async (dispatch) => {
  try {
    const res = await axios.get("/questions");
    dispatch({
      type: GET_EXAM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EXAM_ERROR,
    });
  }
};

export const getQuestion = (id) => (dispatch) => {
  dispatch({
    type: GET_QUESTION,
    payload: id,
  });
};

export const answerQuestion = (data) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/question-answer", data, config);
    dispatch({
      type: ANSWER_QUESTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EXAM_ERROR,
    });
  }
};

export const getResult = () => (dispatch) => {
  dispatch({
    type: GET_RESULT,
  });
};

export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
};
