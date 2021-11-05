import { useEffect } from "react";
import { Button } from "@mui/material";
import { setName, getExam } from "../actions/exam";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Enroll = ({ setName, getExam, name }) => {
  useEffect(() => {
    if (name === "") {
      const newName = prompt("Please Enter Your Name");
      setName(newName);
    }
    getExam();
  }, [setName, getExam]);
  return (
    <Link
      style={{ textDecoration: "none", background: "none", color: "none" }}
      to="/start-exam"
    >
      <Button variant="contained">Enroll 5 Question Exam</Button>
    </Link>
  );
};

Enroll.propTypes = {
  setName: PropTypes.func.isRequired,
  getExam: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.exam.name,
});

export default connect(mapStateToProps, { setName, getExam })(Enroll);
