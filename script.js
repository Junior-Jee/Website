
function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    var icon = document.querySelector(".navbar .icon");
    
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
      icon.innerHTML = "&times;";
    } else {
      navbar.className = "navbar";
      icon.innerHTML = "&#9776;";
    }
  }

// Array of example questions
const questions = [
  "What is your favorite color?",
  "What is your dream travel destination?",
  "What is your favorite hobby?",
  "What is your go-to comfort food?",
  "What is the most adventurous thing you've done?"
];

// Function to generate a random question
function generateQuestion() {
  const questionElement = document.getElementById("question-text");
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  questionElement.textContent = randomQuestion;
}

// Generate the initial question
generateQuestion();

// Add event listener to the generate button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateQuestion);
