import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Enroll from "./Enroll";

const StartExam = ({ result, isLoading }) => {
  return (
    <Box>
      {!isLoading && (
        <>
          <Typography variant="h2" color="text.primary">
            You Scored 5/{result}
          </Typography>
          <Enroll />
        </>
      )}
    </Box>
  );
};

StartExam.propTypes = {
  result: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  result: state.exam.result,
  isLoading: state.exam.isLoading,
});
export default connect(mapStateToProps, {})(StartExam);
