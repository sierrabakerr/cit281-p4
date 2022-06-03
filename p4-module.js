/*
    CIT 281 Project 4
    Name: Sierra Baker
*/
// Part 4: Import data into code module
let { data } = require("./p4-data.js");

//Extra: Added lodash
const _ = require("lodash");

// Part 5: Create and test code module functions

// getQuestions() function
// Returns an array of strings where each array element is a question = [ 'Q1', 'Q2', 'Q3' ]
/* 
  make const
  for loop
  then push data to const
  */
//data.map((q) => q.question)
function getQuestions() {
  const questions = [];
  for (const Qs of data) {
    questions.push(Qs.question);
  }
  return questions;
}

// getAnswers() function
// Returns an array of strings where each array element is an answer = [ 'A1', 'A2', 'A3' ]
/*
make Const
for loop
then push data to const
*/
function getAnswers() {
  const answers = [];
  for (const As of data) {
    answers.push(As.answer);
  }
  return answers;
}

// getQuestionsAnswers() function
// Returns a copy of the original data array of objects
// Extra credit: see Cloning an Array of Objects in JavaScript to avoid simply making a mutable copy
/*[
    { question: 'Q1', answer: 'A1' },
    { question: 'Q2', answer: 'A2' },
    { question: 'Q3', answer: 'A3' }
  ]*/
//map function and ellipse
/*function getQuestionsAnswers() {
  return [
    {question: 'Q1', answer: 'A1'},
    {question: 'Q2', answer: 'A2'},
    {question: 'Q3', answer: 'A3'}
  ];
}*/

function getQuestionsAnswers() {
  let data = [
    { question: "Q1", answer: "A1" },
    { question: "Q2", answer: "A2" },
    { question: "Q3", answer: "A3" },
  ];

  let deep = _.cloneDeep(data);

  return deep;
}

// getQuestion(number = "") function
// Returns an object with the following properties =
// - question property (string): The question from the data
// - number property (integer): The question number,  not array index value
// - error message property (string): Any error that occurred while getting the question
/*{
  question: 'Q1',
  number: 11
  error: '',
}*/

/*function getQuestion(number = "") {
  const array = [
    { question: "Q1", number: 1, error: "" },
    { question: "Q2", number: 2, error: "" },
    { question: "Q3", number: 3, error: "" },
  ];
  return array[number];
}*/

//set object w defaults
//blank String
//append data to deaults the return to object

/*function getQuestion(number = "") {
  console.log(number);
  // fetching the question
  const question = data[number - 1]?.question || "";

  // converting the number to an integer
  number = Number.parseInt(number);

  // creating the error string
  const error = question === "" ? "Question number must be an integer" : "";

  // returning the required object
  return {
    question: question,
    number: number,
    error: error,
  };
}*/

function getQuestion(number = ''){
  let questionObj = {
    question:"",
    number:"",
    error:"",
  };

  if(!Number.isInteger(number)){
    questionObj.error = "Question number must be an integer";
    console.log("Question number must be an integer");
  }

  else if(number > 3){
    questionObj.error = "Question number must be less than the number of questions (3)";
    console.log("Question number must be less than the number of questions (3)");
  }

  else if(number <= 0){
    questionObj.error = "Question number must be >= 1";
    console.log("Question number must be >= 1");
  }

  else{
    index = number -1;
    questionObj.number = number;
    questionObj.question = data[index].question;
  }

  return questionObj;
};
console.log(getQuestion(1));

// getAnswer(number = "") function
// Returns an object with the following properties =
// - answer property (string): The answer from the data
// - number property (integer): The question number,  not array index value
// - error message property (string): Any error that occurred while getting the question
/*{
  answer: 'A1',
  number: 1
  error: '',
}*/
/*function getAnswer(number = "") {
  const array = [
    { answer: "A1", number: 1, error: "" },

    { answer: "A2", number: 2, error: "" },

    { answer: "A3", number: 3, error: "" },
  ];
  return array[number];
}*/

function getAnswer(number = ''){
  let answerObj = {
    answer:"",
    number:"",
    error:"",
  };

  if(!Number.isInteger(number)){
    answerObj.error = "Answer number must be an integer";
    console.log("Answer number must be an integer");
  }

  else if(number > 3){
    answerObj.error = "Answer number must be less than the number of questions (3)";
    console.log("Answer number must be less than the number of questions (3)");
  }

  else if(number <= 0){
    answerObj.error = "Answer number must be >= 1";
    console.log("Answer number must be >= 1");
  }

  else{
    index = number -1;
    answerObj.number = number;
    answerObj.answer = data[index].answer;
  }

  return answerObj;
};
console.log(getAnswer(1));


// getQuestionAnswer(number = "") function
// Returns an object with the following properties:
// - question property (string): The question from the data
// - answer property (string): The answer from the data
// - number property (integer): The question number,  not array index value
// - error message property (string): Any error that occurred while getting the question
/*{
  question: 'Q1',
  answer: 'A1',
  number: 1
  error: '',
}*/
/*function getQuestionAnswer(number = "") {
  const array = [
    { question: "Q1", answer: "A1", number: 1, error: "" },

    { question: "Q2", answer: "A2", number: 2, error: "" },

    { question: "Q3", answer: "A3", number: 3, error: "" },
  ];
  return array[number];
}
*/
function getQuestionAnswer(number = ''){
  let questionanswerObj = {
    question:"",
    number:"",
    error:"",
  };

  if(!Number.isInteger(number)){
    questionanswerObj.error = "Question number must be an integer";
    //console.log("Question number must be an integer");
  }

  else if(number > 3){
    questionanswerObj.error = "Question number must be less than the number of questions (3)";
    //console.log("Question number must be less than the number of questions (3)");
  }

  else if(number <= 0){
    questionanswerObj.error = "Question number must be >= 1";
    //console.log("Question number must be >= 1");
  }

  else{
    index = number -1;
    questionanswerObj.number = number;
    questionanswerObj.answer = data[index].answer;
    questionanswerObj.question = data[index].question;
  }

  return questionanswerObj;
};
console.log(getQuestionAnswer(1));



/*function addQuestionAnswer(info = {}){
  let addquestionanswer = {
    message:"",
    number:"",
    error:"",
  };
  if(!message.isInteger(message)){
    addquestionanswer.message = "Object question property required";
    //console.log("Object question property required");
  }
}*/




/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs =   true;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
//const testAdd = true; // Extra credit
//const testUpdate = true; // Extra credit
//const testDelete = true; // Extra credit

getQuestions();
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

/*addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}*/

module.exports = {
getQuestions,
getAnswers,
getQuestionsAnswers,
getQuestion,
getAnswer,
getQuestionAnswer,
//addQuestionAnswer,
};
