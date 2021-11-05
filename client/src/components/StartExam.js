import { useEffect, useState } from "react";
import { getQuestion, getResult, answerQuestion } from "../actions/exam";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const StartExam = ({
  exam,
  isLoading,
  question,
  answerQuestion,
  getQuestion,
  getResult,
}) => {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    getQuestion(exam[page]["_id"]);
  }, [page]);

  const handleNext = () => {
    answerQuestion({ answer: answer, id: question._id });
    setPage(page + 1);
  };
  return (
    <Box>
      {!isLoading && (
        <>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.question}</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              >
                <FormControlLabel
                  value="answer_a"
                  control={<Radio />}
                  label={question.answer_a}
                />
                <FormControlLabel
                  value="answer_b"
                  control={<Radio />}
                  label={question.answer_b}
                />
                <FormControlLabel
                  value="answer_c"
                  control={<Radio />}
                  label={question.answer_c}
                />
                <FormControlLabel
                  value="answer_d"
                  control={<Radio />}
                  label={question.answer_d}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {page < exam.length - 1 ? (
            <Button onClick={handleNext} color="success" variant="contained">
              Next
            </Button>
          ) : (
            <Link
              style={{
                textDecoration: "none",
                background: "none",
                color: "none",
              }}
              to="/result"
            >
              <Button onClick={getResult} color="success" variant="contained">
                Finish
              </Button>
            </Link>
          )}
        </>
      )}
    </Box>
  );
};

StartExam.propTypes = {
  exam: PropTypes.array.isRequired,
  getQuestion: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  answerQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  exam: state.exam.exam,
  isLoading: state.exam.isLoading,
  question: state.exam.question,
});
export default connect(mapStateToProps, {
  getQuestion,
  getResult,
  answerQuestion,
})(StartExam);
