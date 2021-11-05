import {
  GET_EXAM,
  GET_QUESTION,
  GET_RESULT,
  ANSWER_QUESTION,
  EXAM_ERROR,
  SET_NAME,
} from "../actions/types";

const initialState = {
  exam: [],
  isLoading: true,
  question: {},
  answers: [],
  name: "",
  result: null,
};

export const exam = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EXAM:
      return {
        ...state,
        exam: payload,
      };
    case GET_QUESTION:
      return {
        ...state,
        question: state.exam.filter((f) => f["_id"] === payload)[0],
        isLoading: false,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        answers: [...state.answers, payload],
      };
    case GET_RESULT:
      return {
        ...state,
        result: state.answers.filter((a) => a === true).length,
        isLoading: false,
      };
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case EXAM_ERROR:
    default:
      return state;
  }
};
