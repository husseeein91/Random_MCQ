import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Enroll from "./components/Enroll";
import StartExam from "./components/StartExam";
import Result from "./components/Result";

const App = () => {
  return (
    <Provider store={store}>
      <Box className="App" style={{ textAlign: "center", paddingTop: "2.5%" }}>
        <Card sx={{ minWidth: 275 }} style={{ paddingTop: "2.5%" }}>
          <CardHeader
            title="Welcome To Exam"
            subheader="A Random 5 Question Exam"
          />
          <CardContent>
            <Router>
              <Routes>
                <Route exact path="/" element={<Enroll />} />
                <Route exact path="/start-exam" element={<StartExam />} />
                <Route exact path="result" element={<Result />} />
              </Routes>
            </Router>
          </CardContent>
        </Card>
      </Box>
    </Provider>
  );
};

export default App;
