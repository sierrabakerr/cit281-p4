const fs = require("fs");
const { workerData } = require("worker_threads");
const fastify = require("fastify")();

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  //addQuestionAnswer,
} = require("./p4-module.js");

//Route: /cit/question
//Description: Return all questions
fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", statusCode: 200, questions: getQuestions() });
});

//Route: /cit/answer
//Description: Return all answers
fastify.get("/cit/answer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", statusCode: 200, answers: getAnswers() });
});

//Route: /cit/questionanswer
//Description: Return all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      statusCode: 200,
      question_answers: getQuestionsAnswers(),
    });
});

// Route: /cit/question/:number
//Description: Return a specific question
//Response (e.g. for question #1):
fastify.get("/cit/question/:number", (request, reply) => {
  let { number } = request.params;
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      statusCode: 200,
      question: getQuestion(parseInt(number)),
    });
});

//Route: /cit/answer/:number
//Description: Return a specific answer
//Response (e.g. for question #2):
fastify.get("/cit/answer/:number", (request, reply) => {
  let { number } = request.params;
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      statusCode: 200,
      answer: getAnswer(parseInt(number)),
    });
});

//Route: /cit/questionanswer/:number
//Description: Return a specific question and answer
//Response (e.g. for question #3):
fastify.get("/cit/questionanswer/:number", (request, reply) => {
  let { number } = request.params;
  let q = getQuestionAnswer(parseInt(number));

  console.log(q);
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      statusCode: 200,
      question: q.question,
      answer: q.answer,
    });
});

//Route: *
//Description: Unmatched route handler
fastify.get("/*", (request, reply) => {
  reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "ROUTE NOT FOUND" });
});

const listenIP = "localhost"; // localhost:8080
const listenPort = 8080;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
