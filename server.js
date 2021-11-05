const express = require("express");
const connectDB = require("./config/db");
const Question = require("./models/Question");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/insert", async (req, res) => {
  let questions = [];
  let answers = ["answer_a", "answer_b", "answer_c", "answer_d"];
  for (let i = 0; i < 10; i++) {
    questions.push({
      question: "question" + i,
      answer_a: "1",
      answer_b: "2",
      answer_c: "3",
      answer_d: "4",
      correct_answer: answers[Math.floor(Math.random() * 4)],
    });
  }
  try {
    await Question.insertMany(questions);
    return res.json({ msg: "questions inserted successfully" });
  } catch (err) {
    res.status(500).send("server Error");
    console.log(err);
  }
});
app.get("/questions", async (req, res) => {
  try {
    const questions = await Question.aggregate([
      { $project: { correct_answer: 0 } },
      {
        $sample: { size: 5 },
      },
    ]);
    return res.json(questions);
  } catch (err) {
    res.status(500).send("server Error");
    console.log(err);
  }
});

app.post("/question-answer", async (req, res) => {
  try {
    const { answer, id } = req.body;
    const question = await Question.findById(id);
    if (question.correct_answer === answer) {
      return res.json(true);
    } else {
      return res.json(false);
    }
  } catch (err) {
    res.status(500).send("server Error");
    console.log(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
