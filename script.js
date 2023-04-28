// Element Selector
let pass = document.getElementById("pass");
let askAFriend = document.getElementById("askAFriend");
let audiencePoll = document.getElementById("audiencePoll");
let q50_50 = document.getElementById("q50-50");
let closed50_50 = document.getElementById("closed");
let question = document.getElementById("write-question");
let option1 = document.getElementById("write-option1");
let option2 = document.getElementById("write-option2");
let option3 = document.getElementById("write-option3");
let option4 = document.getElementById("write-option4");
let option1Box = document.getElementById("option1");
let option2Box = document.getElementById("option2");
let option3Box = document.getElementById("option3");
let option4Box = document.getElementById("option4");
let optionBlock1 = document.getElementById("option-block1");
let optionBlock2 = document.getElementById("option-block2");
let setTime = document.getElementById("time-counter");

// Local Variable
let qno = 1;
let option = 2;
let setCounter;
let answered = 0;
let correctOption;
let clicked1 = 0;
let clicked2 = 0;

// Audio Rendering
let clockAudio = new Audio("clock-sound.mp3");
let correctAudio = new Audio("Kbc Correct Answer.mp3");
let wrongAudio = new Audio("Kbc Galat Jawab.mp3");
let lockAudio = new Audio("Kbc Option Lock Tune.mp3");
let introAudio = new Audio("Intro.mp3");
let millionaireAudio = new Audio("Millionairekbc.mp3");
let questionAudio = new Audio("Question.mp3");
let AmitabhIntroAudio = new Audio("AmitabhBachchanIntro.mp3");

// Question Time Counter (1-30)
let clockSound = () => {
  clockAudio.play();
}

let counter = (i) => {
  setCounter = setInterval(() => {
    // If counter exceed limit It'll Clear Interval & Load the Next Question & Put Question Status to zero again!
    if (i >= 30) {
      answered = 0;
      setTime.innerHTML = 0;
      clearInterval(setCounter);
      location.href='WrongAnswerPage.html';
      loadData(generateQuestions());
      return;
    }
    setTime.innerHTML = (i + 1);
    i += 1;
  }, 1000);
}

let countdown = () => {
  setTimeout(clockSound, 1000);

  i = 0
  counter(i);
}

// Setting values to CSS variables for doing Typing Animations
function repetition() {
  function first() {
    document.documentElement.style.setProperty("--first", "block");
    document.documentElement.style.setProperty("--second", "none");
    document.documentElement.style.setProperty("--third", "none");
    document.documentElement.style.setProperty("--steps", "10");
    document.documentElement.style.setProperty("--size", "21vw");
  }
  setTimeout(first, 0000);

  function second() {
    document.documentElement.style.setProperty("--first", "none");
    document.documentElement.style.setProperty("--second", "block");
    document.documentElement.style.setProperty("--third", "none");
    document.documentElement.style.setProperty("--steps", "17");
    document.documentElement.style.setProperty("--size", "37vw");
  }
  setTimeout(second, 2600);

  function third() {
    document.documentElement.style.setProperty("--first", "none");
    document.documentElement.style.setProperty("--second", "none");
    document.documentElement.style.setProperty("--third", "block");
    document.documentElement.style.setProperty("--steps", "12");
    document.documentElement.style.setProperty("--size", "27vw");
  }
  setTimeout(third, 6200);
}
repetition();
setInterval(repetition, 9200);

// For Checking the Correctness of Answer
let isCorrect = async (correctOption, option) => {
  if (option === correctOption) {
    if(option==1) {
        document.documentElement.style.setProperty("--option1", "rgba(2, 36, 10, 0.453)");
        document.documentElement.style.setProperty("--option1-border", "rgba(52, 110, 69, 0.667)");
      }
      else if(option==2) {
        document.documentElement.style.setProperty("--option2", "rgba(2, 36, 10, 0.453)");
        document.documentElement.style.setProperty("--option2-border", "rgba(52, 110, 69, 0.667)");
      }
      else if(option==3) {
        document.documentElement.style.setProperty("--option3", "rgba(2, 36, 10, 0.453)");
        document.documentElement.style.setProperty("--option3-border", "rgba(52, 110, 69, 0.667)");
      }
      else {
        document.documentElement.style.setProperty("--option4", "rgba(2, 36, 10, 0.453)");
        document.documentElement.style.setProperty("--option4-border", "rgba(52, 110, 69, 0.667)");
      }
      setTime.innerHTML = 0;
      correctAudio.play();
      answered += 1;

      return 1;
    }
    else {
      if(option==1) {
          document.documentElement.style.setProperty("--option1", "rgba(40, 3, 3, 0.453)");
          document.documentElement.style.setProperty("--option1-border", "rgba(126, 36, 36, 0.667)");
        }
        else if(option==2) {
          document.documentElement.style.setProperty("--option2", "rgba(40, 3, 3, 0.453)");
          document.documentElement.style.setProperty("--option2-border", "rgba(126, 36, 36, 0.667)");
        }
        else if(option==3) {
          document.documentElement.style.setProperty("--option3", "rgba(40, 3, 3, 0.453)");
          document.documentElement.style.setProperty("--option3-border", "rgba(126, 36, 36, 0.667)");
        }
        else {
          document.documentElement.style.setProperty("--option4", "rgba(40, 3, 3, 0.453)");
          document.documentElement.style.setProperty("--option4-border", "rgba(126, 36, 36, 0.667)");
      }
    setTime.innerHTML = 0;
    setTime.innerHTML = String.fromCharCode(correctOption + 64);
    answered = 0;
    wrongAudio.play();

    return 0;
  }
}

// For Choosing Random Question
let generateQuestions = () => {
  let qno = Math.floor(Math.random() * 41) + 1;
  return qno;
}

// Lifeline Status Changer
pass.onclick = () => {
  pass.innerHTML = "<img src=\"Cross Pass.png\" id=\"closed\" height=\"115vw\">";
}
askAFriend.onclick = () => {
  askAFriend.innerHTML = "<img src=\"Cross Ask a Friend.png\" id=\"closed\" height=\"115vw\">";
}
audiencePoll.onclick = () => {
  audiencePoll.innerHTML = "<img src=\"Cross Audience.png\" id=\"closed\" style=\"height: 7.18745vw\">";
  audiencePoll.style.marginTop = "1.3vh";
}
q50_50.onclick = () => {
  let wrong1 = ((correctOption + 1) % 4) + 1;  // Fetch first non-answer Option
  let wrong2 = ((correctOption + 2) % 4) + 1;  // Fetch second non-answer Option

  // Hide First non-answer Option
  if (wrong1 === 1 && clicked1 === 0) {
    option1Box.style.visibility = "hidden";
    clicked1 += 1;
  }
  else if (wrong1 === 2 && clicked1 === 0) {
    option2Box.style.visibility = "hidden";
    clicked1 += 1;
  }
  else if (wrong1 === 3 && clicked1 === 0) {
    option3Box.style.visibility = "hidden";
    clicked1 += 1;
  }
  else if (wrong1 === 4 && clicked1 === 0) {
    option4Box.style.visibility = "hidden";
    clicked1 += 1;
  }
  else {
    console.log("50-50 Lifeline Used!");
  }

  // Hide Second non-answer Option
  if (wrong2 === 1 && clicked2 === 0) {
    option1Box.style.visibility = "hidden";
    clicked2 += 1;
  }
  else if (wrong2 === 2 && clicked2 === 0) {
    option2Box.style.visibility = "hidden";
    clicked2 += 1;
  }
  else if (wrong2 === 3 && clicked2 === 0) {
    option3Box.style.visibility = "hidden";
    clicked2 += 1;
  }
  else if (wrong2 === 4 && clicked2 === 0) {
    option4Box.style.visibility = "hidden";
    clicked2 += 1;
  }
  else {
    console.log("50-50 Lifeline Used!");
  }

  q50_50.innerHTML = "<img src=\"Cross 50-50.png\" id=\"closed\" height=\"115vw\">";
}

// Main Logic Starts here
async function loadData(qno) {
  // If User Answer All the Question Correctly then "Millionaire Audio" will play and Program Ends!
  if (answered == 15) {
    await millionaireAudio.play();
    return;
  }

  // Connect JSON with JavaScript
  const response = await fetch("./questionSet.json");
  const data = await response.json();

  // Control Correct Answer Meter
  if (answered == 1)
    document.documentElement.style.setProperty("--checkpoint1", "rgba(170, 125, 26, 0.393)");
  else if (answered == 2)
    document.documentElement.style.setProperty("--checkpoint2", "rgba(170, 125, 26, 0.393)");
  else if (answered == 3)
    document.documentElement.style.setProperty("--checkpoint3", "rgba(170, 125, 26, 0.393)");
  else if (answered == 4)
    document.documentElement.style.setProperty("--checkpoint4", "rgba(170, 125, 26, 0.393)");
  else if (answered == 5)
    document.documentElement.style.setProperty("--checkpoint5", "rgba(170, 125, 26, 0.393)");
  else if (answered == 6)
    document.documentElement.style.setProperty("--checkpoint6", "rgba(170, 125, 26, 0.393)");
  else if (answered == 7)
    document.documentElement.style.setProperty("--checkpoint7", "rgba(170, 125, 26, 0.393)");
  else if (answered == 8)
    document.documentElement.style.setProperty("--checkpoint8", "rgba(170, 125, 26, 0.393)");
  else if (answered == 9)
    document.documentElement.style.setProperty("--checkpoint9", "rgba(170, 125, 26, 0.393)");
  else if (answered == 10)
    document.documentElement.style.setProperty("--checkpoint10", "rgba(170, 125, 26, 0.393)");
  else if (answered == 11)
    document.documentElement.style.setProperty("--checkpoint11", "rgba(170, 125, 26, 0.393)");
  else if (answered == 12)
    document.documentElement.style.setProperty("--checkpoint12", "rgba(170, 125, 26, 0.393)");
  else if (answered == 13)
    document.documentElement.style.setProperty("--checkpoint13", "rgba(170, 125, 26, 0.393)");
  else if (answered == 14)
    document.documentElement.style.setProperty("--checkpoint14", "rgba(170, 125, 26, 0.393)");
  else if (answered == 15)
    document.documentElement.style.setProperty("--checkpoint15", "rgba(170, 125, 26, 0.393)");
  else { // If answer set to zero, it'll change color of all q's to 'lightseagreen'
    document.documentElement.style.setProperty("--checkpoint1", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint2", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint3", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint4", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint5", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint6", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint7", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint8", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint9", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint10", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint11", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint12", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint13", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint14", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--checkpoint15", "rgba(18, 101, 107, 0.393)");
  }

  // Revert back 'visibility' to 'visible' after use of 50-50 Lifeline
  option1Box.style.visibility = "visible";
  option2Box.style.visibility = "visible";
  option3Box.style.visibility = "visible";
  option4Box.style.visibility = "visible";

  // Writing Random Question and Options
  question.innerHTML = data[qno]["question"];
  option1.innerHTML = data[qno]["option1"];
  option2.innerHTML = data[qno]["option2"];
  option3.innerHTML = data[qno]["option3"];
  option4.innerHTML = data[qno]["option4"];
  correctOption = data[qno]["answer"];

  // Revert back 'backgroundColor' to 'original color' after giving response of prev. Question
  document.documentElement.style.setProperty("--option1", "rgba(142, 60, 160, 0.488)");
  document.documentElement.style.setProperty("--option2", "rgba(142, 60, 160, 0.488)");
  document.documentElement.style.setProperty("--option3", "rgba(142, 60, 160, 0.488)");
  document.documentElement.style.setProperty("--option4", "rgba(142, 60, 160, 0.488)");
  document.documentElement.style.setProperty("--option1-border", "rgba(147, 69, 165, 0.667)");
  document.documentElement.style.setProperty("--option2-border", "rgba(147, 69, 165, 0.667)");
  document.documentElement.style.setProperty("--option3-border", "rgba(147, 69, 165, 0.667)");
  document.documentElement.style.setProperty("--option4-border", "rgba(147, 69, 165, 0.667)");

  questionAudio.play();  // Play Question Audio While Asking Any Question
  setTimeout(countdown, 3000);  // Call countdown after playing 'Question Audio'

  // Controlling the working after click
  option1Box.onclick = () => {
    clearInterval(setCounter);  // Clear Interval of Timer
    clockAudio.pause();  // Pause 'Clock Audio'
    clockAudio.currentTime = 0;  // Set 'Clock Audio' to 0
    lockAudio.play();  // Play 'Question Lock Audio'
    document.documentElement.style.setProperty("--option1", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--option1-border", "rgba(75, 124, 89, 0.667)");
    
    
    setTimeout(async () => {  // Generate new Question After 5sec
      let status = 1
      qno = generateQuestions();
      option = 1;
      status = await isCorrect(correctOption, 1);
      if(status === 0) {
        setTimeout(() => {
          location.href='WrongAnswerPage.html';
        }, 2995);
      }
      setTimeout(loadData, 3000, qno);
    }, 5000);
    
  }
  option2Box.onclick = () => {
    clearInterval(setCounter);
    clockAudio.pause();
    clockAudio.currentTime = 0;
    lockAudio.play();
    document.documentElement.style.setProperty("--option2", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--option2-border", "rgba(75, 124, 89, 0.667)");
    
    setTimeout(async () => {
      let status = 1;
      qno = generateQuestions();
      option = 2;
      status = await isCorrect(correctOption, 2);
      if(status === 0) {
        setTimeout(() => {
          location.href='WrongAnswerPage.html';
        }, 2995);
      }
      setTimeout(loadData, 3000, qno);
    }, 5000);
    
  }
  option3Box.onclick = () => {
    clearInterval(setCounter);
    clockAudio.pause();
    clockAudio.currentTime = 0;
    lockAudio.play();
    document.documentElement.style.setProperty("--option3", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--option3-border", "rgba(75, 124, 89, 0.667)");
    
    setTimeout(async () => {
      let status = 1;
      qno = generateQuestions();
      option = 3;
      status = await isCorrect(correctOption, 3);
      if(status === 0) {
        setTimeout(() => {
          location.href='WrongAnswerPage.html';
        }, 2995);
      }
      setTimeout(loadData, 3000, qno);
    }, 5000);
    
  }
  option4Box.onclick = () => {
    clearInterval(setCounter);
    clockAudio.pause();
    clockAudio.currentTime = 0;
    lockAudio.play();
    document.documentElement.style.setProperty("--option4", "rgba(18, 101, 107, 0.393)");
    document.documentElement.style.setProperty("--option4-border", "rgba(75, 124, 89, 0.667)");

    setTimeout(async () => {
      let status = 1;
      qno = generateQuestions();
      option = 4;
      status = await isCorrect(correctOption, 4);
      if(status === 0) {
        setTimeout(() => {
          location.href='WrongAnswerPage.html';
        }, 2995);
      }
      setTimeout(loadData, 3000, qno);
    }, 5000);

  }
}
introAudio.play(); // Play 'Intro Audio' At the Starting of the show
AmitabhIntroAudio.play();

let generated = generateQuestions();
setTimeout(loadData, 9000, generated);  // Calling Function First time to Start KBC after playing 'Intro Audio'
