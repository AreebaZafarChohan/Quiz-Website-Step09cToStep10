// Step 1: Questions
export const questions = [
    {
        question: "What is an anonymous function in TypeScript?",
        options: [
            "A function declared inside another function",
            "A function without a name that can be assigned to a variable",
            "A function that takes another function as an argument",
            "A function that has no return statement"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the spread operator (...) do when used with arrays in TypeScript?",
        options: [
            "It combines two or more arrays into a single array",
            "It creates a shallow copy of an object",
            "It unpacks elements from a function's arguments",
            "It expands elements of an array into places where multiple elements or key-value pairs are expected"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of default parameters in TypeScript functions?",
        options: [
            "To define parameters with default values that cannot be changed",
            "To provide values that the function uses when the corresponding argument is undefined or not provided",
            "To restrict the types of arguments passed to the function",
            "To allow for dynamic typing within the function"
        ],
        correctAnswer: 1
    },
    {
        question: "What is function overloading in TypeScript?",
        options: [
            "Using a single function to perform multiple operations",
            "Creating nested functions within a larger function",
            "Defining multiple functions with the same name but different parameter types or numbers",
            "Extending a function's capabilities through inheritance"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you define default parameters in a TypeScript function?",
        options: [
            "function funcName(param1 = defaultValue: type) { ... }",
            "function funcName(param1: type = defaultValue) { ... }",
            "function funcName(param1 = defaultValue) { ... }",
            "function funcName(param1: type = defaultValue, ...) { ... }"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a callback function in TypeScript?",
        options: [
            "To ensure that a function returns a specific data type",
            "To handle exceptions thrown by other functions",
            "To concatenate multiple strings into a single value",
            "To pass a function as an argument to another function, to be executed later"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the ternary operator (?:) do in TypeScript?",
        options: [
            "It combines multiple values into a single value",
            "It converts a string into an integer value",
            "It is used to check the type of a variable at runtime",
            "It is a shorthand for an if-else statement, providing a compact way to write conditional expressions"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a rest parameter (...) in TypeScript?",
        options: [
            "A parameter that restricts the types of arguments that can be passed to a function",
            "A parameter that specifies the return type of a function",
            "A parameter that allows a function to accept an indefinite number of arguments as an array",
            "A parameter that defines default values for other parameters"
        ],
        correctAnswer: 2
    },
    {
        question: "What distinguishes an anonymous function from a named function in TypeScript?",
        options: [
            "A function that has no return type specified",
            "An anonymous function cannot return any value",
            "A named function does not specify a return type",
            "An anonymous function lacks a name but can be assigned to a variable"
        ],
        correctAnswer: 3
    },
    {
        question: "In TypeScript, what is the role of a callback function typically?",
        options: [
            "To ensure that a function is executed immediately after its declaration",
            "To handle exceptions in a try-catch block",
            "To pass a function as an argument to another function for execution at a later time",
            "To convert synchronous code to asynchronous code"
        ],
        correctAnswer: 2
    },
    {
        question: "How does the spread operator (...) work with arrays in TypeScript?",
        options: [
            "It consolidates two or more arrays into a single array",
            "It generates a shallow copy of an object",
            "It expands array elements into locations where multiple elements are expected",
            "It unpacks elements from a function's parameters"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the rest parameter (…) allow for in TypeScript?",
        options: [
            "It defines default values for other function parameters",
            "It specifies the return type of a function",
            "It restricts the types of arguments passed to a function",
            "It enables functions to accept an indefinite number of arguments as an array"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the ternary operator (?:) evaluate in TypeScript?",
        options: [
            "A logical OR condition between two expressions",
            "A type checking operation between two variables",
            "A conditional expression, providing a compact way to write if-else statements",
            "A bitwise operation between two numbers"
        ],
        correctAnswer: 2
    },
    {
        question: "What differentiates an anonymous function from a named function in TypeScript?",
        options: [
            "An anonymous function cannot accept arguments",
            "A named function cannot return any value",
            "An anonymous function has no name but can be assigned to a variable",
            "A named function does not specify a return type"
        ],
        correctAnswer: 2
    },
    {
        question: "How is function overloading defined in TypeScript?",
        options: [
            "By using a single function to perform a variety of tasks",
            "By embedding functions within one another",
            "By declaring multiple function signatures with the same name but different parameter types or numbers",
            "By extending a function's capabilities through inheritance"
        ],
        correctAnswer: 2
    },
    {
        question: "What impact does the spread operator (...) have on arrays in TypeScript?",
        options: [
            "It combines array elements into locations expecting multiple elements",
            "It consolidates multiple arrays into one",
            "It creates a shallow copy of an object",
            "It extracts elements from a function's parameters"
        ],
        correctAnswer: 0
    },
    {
        question: "What function does the rest parameter (…) serve in TypeScript?",
        options: [
            "It enables functions to accept a range of arguments as an array",
            "It defines default values for other function parameters",
            "It restricts the types of arguments passed to a function",
            "It specifies the return type of a function"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of async/await in TypeScript?",
        options: [
            "To handle asynchronous operations more cleanly using promises",
            "To define functions that can accept variable numbers of arguments",
            "To specify default values for function parameters",
            "To create shallow copies of objects"
        ],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a function as async in TypeScript?",
        options: [
            "await",
            "promise",
            "async",
            "function"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the benefit of using async/await over traditional promise chaining?",
        options: [
            "Async/await allows functions to run synchronously",
            "Async/await can handle multiple asynchronous operations in parallel",
            "Async/await provides cleaner syntax and easier error handling",
            "Async/await is faster in execution compared to promises"
        ],
        correctAnswer: 2
    },
    {
        question: "In TypeScript, what does the 'await' keyword do?",
        options: [
            "It creates a new promise object",
            "It waits for a promise to resolve or reject before proceeding further",
            "It converts a synchronous function into an asynchronous one",
            "It handles errors thrown by async functions"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you handle errors in async/await functions in TypeScript?",
        options: [
            "Using if/else conditions",
            "By chaining catch() methods",
            "Using try/catch blocks",
            "By defining custom error handlers"
        ],
        correctAnswer: 2
    },
    {
        question: "What are promises in TypeScript?",
        options: [
            "Functions that always return undefined",
            "Data structures that store multiple values",
            "Variables that cannot be reassigned once defined",
            "Objects that represent a value that may be available now, in the future, or never"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you create a new promise in TypeScript?",
        options: [
            "new Promise((resolve, reject) => { ... })",
            "Promise.create((resolve, reject) => { ... })",
            "Promise((resolve, reject) => { ... })",
            "promise = new Promise { resolve, reject => { ... } }"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the 'resolve' function do in a promise?",
        options: [
            "It indicates that the promise should be rejected with an error",
            "It indicates that the asynchronous operation was successful and returns a value",
            "It converts a synchronous function into an asynchronous one",
            "It waits for a promise to resolve"
        ],
        correctAnswer: 1
    },
    {
        question: "What is an arrow function in TypeScript?",
        options: [
            "A function declared inside another function",
            "A function that accepts another function as an argument",
            "A shorthand syntax for defining functions",
            "A function that has no name"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you define an arrow function in TypeScript?",
        options: [
            "function funcName() => { ... }",
            "const funcName = () => { ... }",
            "funcName() => { ... }",
            "function funcName => { ... }"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a function expression in TypeScript?",
        options: [
            "A function that always returns undefined",
            "A function that accepts another function as an argument",
            "A function that is assigned to a variable",
            "A function that has no name"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you define a function expression in TypeScript?",
        options: [
            "function funcName() { ... }",
            "funcName() { ... }",
            "const funcName => { ... }",
            "const funcName = function() { ... }"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you use the spread operator (...) to merge two arrays in TypeScript?",
        options: [
            "[...array1, ...array2]",
            "array1...array2",
            "{...array1, ...array2}",
            "array1.concat(array2)"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the rest parameter (...) used for in TypeScript?",
        options: [
            "To define default values for function parameters",
            "To specify the return type of a function",
            "To restrict the types of arguments passed to a function",
            "To accept an indefinite number of arguments as an array"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you define a rest parameter in a TypeScript function?",
        options: [
            "function funcName(args: any...[]) { ... }",
            "function funcName(...args: any[]) { ... }",
            "function funcName(...args) { ... }",
            "function funcName(args[]) { ... }"
        ],
        correctAnswer: 1
    },
    {
        question: "Can you use the rest parameter (...) at the beginning of a function's parameter list in TypeScript?",
        options: [
            "Yes, it allows functions to accept an indefinite number of arguments as an array",
            "No, it can only be used at the end of a function's parameter list",
            "Yes, but it must be followed by default parameters",
            "No, it is not supported in TypeScript functions"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a tuple in TypeScript?",
        options: [
            "A data structure that can hold multiple values of different types",
            "A function that returns a unique identifier",
            "A data structure that can hold a fixed number of values of fixed types in TypeScript",
            "A type that represents a collection of properties"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you define a tuple type in TypeScript?",
        options: [
            "let tuple: [Type1, Type2];",
            "let tuple = [Type1, Type2];",
            "tuple: [Type1, Type2] = value;",
            "let tuple: Tuple<Type1, Type2>;"
        ],
        correctAnswer: 0
    },
    {
        question: "Can you use the spread operator (...) to combine objects in TypeScript?",
        options: [
            "Yes, to shallow copy properties from one object to another",
            "No, it only works with arrays",
            "Yes, to create nested objects",
            "No, it causes a syntax error"
        ],
        correctAnswer: 0
    },
    {
        question: "What distinguishes a tuple from an array in TypeScript?",
        options: [
            `A tuple allows elements of different types and a fixed number of elements,
             while an array can have elements of the same or different types and variable length`,
            `A tuple allows elements of the same type and a variable number of elements,
             while an array can have elements of different types and a fixed length`,
            `A tuple cannot hold more than two elements,
             while an array can hold multiple elements`,
            "A tuple is immutable, while an array is mutable"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you access elements of a tuple in TypeScript?",
        options: [
            "By using a for loop to iterate over each element",
            "By using map() function to retrieve each element",
            "By using indexing and specifying the position of each element",
            "By converting the tuple into an array"
        ],
        correctAnswer: 2
    },
    {
        question: "Which operator can replace concat when combining arrays in TypeScript?",
        options: [
            "Spread operator (...)",
            "Arrow function (=>)",
            "Rest operator (...)",
            "Function expression"
        ],
        correctAnswer: 0
    },
    {
        question: "Why do we use function expressions in TypeScript?",
        options: [
            "To create named functions for easier debugging",
            "To enforce strict type checking",
            "To assign a function to a variable or constant",
            "To define arrow functions"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a tuple in TypeScript?",
        options: [
            "A dynamically sized array that can hold any type of data",
            "A fixed-length array where each element has a specific type",
            "A function that returns a unique identifier",
            "A built-in TypeScript data type"
        ],
        correctAnswer: 1
    },
    {
        question: "Can a tuple in TypeScript have elements of different types?",
        options: [
            "Yes, a tuple can have elements of different types",
            "No, all elements in a tuple must be of the same type",
            "Yes, but only up to two different types",
            "No, tuples are immutable"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of using tuples in TypeScript?",
        options: [
            "To define functions with multiple return values",
            "To convert arrays into objects",
            "To perform bitwise operations on arrays",
            "To create arrays with fixed lengths and specific types for each element"
        ],
        correctAnswer: 3
    },
    {
        question: "Is JavaScript synchronous or asynchronous by default?",
        options: [
            "JavaScript is asynchronous by default",
            "JavaScript is synchronous by default",
            "JavaScript can be both synchronous and asynchronous",
            "JavaScript does not support synchronous operations"
        ],
        correctAnswer: 1
    },
    {
        question: "What is an arrow function called in JavaScript?",
        options: [
            "Anonymous function and named function",
            "Callback function and nested function",
            "Arrow function and lambda function",
            "Iterator function and generator function"
        ],
        correctAnswer: 2
    }
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");
const viewAnswersBtn = document.querySelector("#view-answers");

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

// Step 3: Load Quiz function
const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    userAnswers.push(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on completing the quiz!</p>
        <p>Don't lose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()">Restart</button>
        <button id="view-answers-btn">View Answers</button>
        </div>`;
        document.querySelector("#view-answers-btn").addEventListener("click", () => {
            displayAnswers();
        });
    }
});

const displayAnswers = () => {
    let answerHTML = `<div class="result view-answers"><h2>Correct Answers</h2>`;
    questions.forEach((question, index) => {
        answerHTML += `<p>Q${index + 1}: ${question.question}</p>`;
        answerHTML += `<p>Your answer: ${question.options[userAnswers[index]]}</p>`;
        answerHTML += `<p>Correct answer: ${question.options[question.correctAnswer]}</p><hr>`;
    });
    answerHTML += `<button class="reload-button" onclick="window.location.reload()">Restart</button></div>`;
    quiz.innerHTML = answerHTML;
};