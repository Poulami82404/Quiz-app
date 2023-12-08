const quizData = [
  {
    question: "Write the name of Mahabharata Writer? (*Note Choose proper name neither Designation nor Orators name ,pls be careful while choosing*)",
    options: ["Maharshi Krishna Dwipayan", "Ved Vyas", "Siddhi Vinayak Ganeshji"],
    answer: "Siddhi Vinayak Ganeshji"
  },
  {
    question: "Why Krishna used to call  Arjun Parth ?",
    options: ["Son of Pritha", "Best Among Pandavs",  "For his Strong Will Power"],
    answer: "Son of Pritha"
  },
  {
    question: "Name of Krishnas Husband in Mahabharata War ?(Hint:The only portion of Mahabharat where we get to see Homosexuality,The  Ist son of Pandav who sacrificed before commencement of war)",
    options: ["Brihanla", "Aravan", "Gopis of krshna"],
    answer: "Aravan"
  },
  {
    question: "Pandav who ate flesh of his Parent ?",
    options: ["Bhim", "Nakul", "Sahadev"],
    answer: "Sahadev"
  },
  {
    question: "Despite of being a demon who is worshipped as Khatu Sam? (*Hint: After Sanjay and Hanuman ji the  only Spectator of Mahabharat war*)",
    options: ["Ghatothkach", "Barbaik", "Sutasom"],
    answer: "Barbarik"
  },
  {
    question: "Who was Sarathi(Chariot Driver) of Krishan? (*Hint : The only Person who questioned on Krishnas  Karma, A type of Gita is written after his name *)",
    options: ["Pundarika", "Udvab", "Sudama"],
    answer: "Udvab"
  },
  {
    question: "Why was Karna born?",
    options: ["Lord Surya tried to save Sahasra Kavacha", "To fight aginst Racism", "To stand as a competitor of Arjun", ],
    answer: "Lord Surya tried to save Sahasra Kavacha"
  },
  {
    question: "Why was  arjun named as Kiriti",
    options: ["Devotee of Krishna", "Had ability to interact with animals", "For his silver crown gifted by his father", ],
    answer: "For his silver crown gifted by his father"
  },
  {
    question: "How many children did King Santanu had?",
    options: ["Two", " Nine", "One", ],
    answer: "Nine"
  },
  {
    question: "Pandav Who cursed his mother",
    options: ["Yudisthir", "Arjun", "Sahadev", ],
    answer: "Yudisthir"
  },
   
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElem = document.getElementById('question');
  const optionsElem = document.getElementById('options');
  const resultElem = document.getElementById('result');
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElem.textContent = question.question;
  
    optionsElem.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElem.appendChild(button);
    });
  }
  
  function checkAnswer(option) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (option === correctAnswer) {
      score++;
      resultElem.textContent = 'Correct!';
    } else {
      resultElem.textContent = 'Wrong!';
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      resultElem.textContent = '';
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElem.textContent =` Quiz Completed! Your Score: ${score} out of ${quizData.length}`;
    optionsElem.innerHTML = '';
    resultElem.textContent = '';
  }
  loadQuestion();