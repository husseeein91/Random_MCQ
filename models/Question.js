const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer_a: {
    type: String,
    required: true,
  },
  answer_b: {
    type: String,
    required: true,
  },
  answer_c: {
    type: String,
    required: true,
  },
  answer_d: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    enum: ["answer_a", "answer_b", "answer_c", "answer_d"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Question = mongoose.model("question", QuestionSchema);
