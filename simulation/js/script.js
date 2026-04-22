let data = [
  {
    step: 1,
    title:
      "Draw the horizontal line xy as the reference and mark the VP and HP.",
    questions: [
      {
        question: "The type of projection discussed here is related to",
        options: ["Planes", "Points", "Lines", "Solid"],
        answer: 0,
        buttonClass: "btnAxis",
        circle: null,
        circleText: null,
        func: null,
      },
      {
        question:
          " What is the shape of the plane that we are going to draw in this experiment?",
        options: ["Square", "Rectangle", "Hexagon", "Heptagon"],
        answer: 2,
        buttonClass: "btnVPHP",
        circle: null,
        circleText: null,
        func: null,
      },
    ],
  },
  {
    step: 2,
    title: "Draw the top view of the hexagon on HP and the front view on VP.",
    questions: [
      {
        question:
          " A circular surface plane is making 30 degrees with both H.P and V.P. The front view will be",
        options: ["Line", "Circle", "Oval", "Ellipse"],
        answer: 3,
        buttonClass: "btnLine",
        circle: null,
        circleText: null,
        func: null,
      },
      {
        question:
          "A pentagon is placed perpendicular to horizontal plane(HP) and inclined to profile plane(PP) which of the following is true.",
        options: [
          "Front view-line, top view- pentagon",
          " Front view- pentagon, top view- line",
          "Front view –line, top view-line",
          "Top view-line, side view- line",
        ],
        answer: 1,
        buttonClass: "btnaDash",
        circle: null,
        circleText: null,
        func: a,
      },
    ],
  },
  {
    step: 3,
    title:
      "Draw the auxiliary inclined plane x<sub>1</sub>y<sub>1</sub> at an angle  to the horizontal plane.",
    questions: [
      {
        question: "What is the Full form of AIP?",
        options: [
          " Auxiliary Incident Plane",
          "Automatic Inclined Plane",
          " Auxiliary Inclined Plane",
          "Auxiliary Important Plane",
        ],
        answer: 2,
        buttonClass: "btnThetaOne",
        circle: null,
        circleText: null,
        func: b1,
      },
    ],
  },
  {
    step: 4,
    title:
      "Project the new top view of the geometry using the auxiliary plane. ",
    questions: [
      {
        question: "Why Auxiliary plane is used?",
        options: [
          "To obtain auxiliary views and true shapes of sections of solids.",
          "To correct the errors made in drawing",
          "To initialize the drawing",
          "To differentiate the types of plane.",
        ],
        answer: 0,
        buttonClass: "btna",
        circle: null,
        circleText: null,
        func: b,
      },
    ],
  },
  {
    step: 5,
    title:
      "Draw an auxiliary vertical plane x<sub>2</sub>y<sub>2</sub> inclined at an angle to the vertical plane.",
    questions: [
      {
        question: "What is the Full form of AVP?",
        options: [
          " Auxiliary Incident Plane",
          "Automatic Vertical Plane",
          "Auxiliary Venomous Plane",
          "Auxiliary Vertical Plane",
        ],
        answer: 3,
        buttonClass: "btnbOneDash",
        circle: null,
        circleText: null,
        func: b11,
      },
    ],
  },
  {
    step: 6,
    title: "Project the final front view.",
    questions: [
      {
        question:
          "A plane ABCD is held parallel to horizontal plane in which view we can watch drawing on that plane?",
        options: ["Top view", "Front view", "Back view", "Side view"],
        answer: 0,
        buttonClass: "btnB",
        circle: null,
        circleText: null,
        func: bb,
      },
    ],
  },
  // {
  //   step: 7,
  //   title: "Join a and b to get top view",
  //   questions: [
  //     {
  //       question:
  //         "If a line CD is parallel to H.P., then its front will be ________ to XY line.",
  //       options: [
  //         "perpendicular",
  //         "parallel",
  //         "inclined",
  //         "None of the options",
  //       ],
  //       answer: 1,
  //       buttonClass: "btnBOne",
  //       circle: { x: 415, y: 398 },
  //       circleText: "b1",
  //       func: b2,
  //     },
  //   ],
  // },
  // {
  //   step: 8,
  //   title: "Similary join b2 to locus of a",
  //   questions: [
  //     {
  //       question:
  //         "If the front view of the line AB is parallel to the XY line, then its true length is shown in",
  //       options: [
  //         "Front View",
  //         "Top View",
  //         "Side View",
  //         "Both Front View and Top View",
  //       ],
  //       answer: 3,
  //       buttonClass: "btnThetaTwo",
  //       circle: { x: 470, y: 180 },
  //       circleText: "⨀",
  //       func: b22,
  //     },
  //   ],
  // },
  // {
  //   step: 9,
  //   title: "Taking a'b2'as radius draw arc to locus of b'",
  //   questions: [
  //     {
  //       question:
  //         "If the true inclinations  and the apparent of a line with respect to HP are equal, the line is",
  //       options: [
  //         "Parallel to the horizontal plane(HP)",
  //         "Parallel to the vertical plane(VP)",
  //         "Parallel to profile plane(PP)",
  //         "Inclined to both reference planes",
  //       ],
  //       answer: 0,
  //       buttonClass: "btnBDash",
  //       circle: { x: 375, y: 70 },
  //       circleText: "b'",
  //       func: bbb,
  //     },
  //   ],
  // },
];
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");

// buttons
const btnAxis = document.querySelector(".btn-axis");
btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");
btnVPHP.addEventListener("click", nameVPHP);
const btnLine = document.querySelector(".btn-line");
btnLine.addEventListener("click", drawInitialLine);
const btnaDash = document.querySelector(".btn-a-dash");
btnaDash.addEventListener("click", a);
const btna = document.querySelector(".btn-a");
btna.addEventListener("click", b);
const btnbOneDash = document.querySelector(".btn-b-one-dash");
btnbOneDash.addEventListener("click", b11);
const btnThetaOne = document.querySelector(".btn-theta-one");
btnThetaOne.addEventListener("click", b1);
const btnB = document.querySelector(".btn-b");
btnB.addEventListener("click", bb);
const btnBOne = document.querySelector(".btn-b-one");
btnBOne.addEventListener("click", b2);
const btnThetaTwo = document.querySelector(".btn-theta-two");
btnThetaTwo.addEventListener("click", b22);
const btnBDash = document.querySelector(".btn-b-dash");
btnBDash.addEventListener("click", bbb);
const btndDasheDash = document.querySelector(".btn-d-dash-e-dash");
btndDasheDash.addEventListener("click", de1);

const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", nextStep);
const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetAll);
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    if (currentStep === undefined) initialSetup();
  }
}

function nextStep() {
  currentStep = data.find((step) => currentStepCount === step.step);
  stepNumber.textContent = currentStepCount;
  stepTitle.innerHTML = currentStep.title;
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("blink");
  initialSetup();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    displayQuestionDiv(currentQuestions[currentQuestionIndex]);
  } else {
    quizDiv.classList.add("hide");
    if (currentStepCount === data.length) {
      stepNumber.classList.add("hide");
      stepTitle.classList.add("hide");
      document.querySelector(".final-statement").classList.remove("hide");
      btnNext.classList.add("hide");
      btnNext.classList.remove("blink");
    } else {
      currentStepCount += 1;
      // setInterval((
      // btnNext.removeAttribute("disabled"),
      // btnNext.classList.add("blink")
      // ),1000);
    }
  }
}
function drawAxis() {
  canvas.classList.remove("hide");
  canvas.scrollIntoView();
  btnTop.classList.remove("hide");
  ctx.strokeStyle = "#B9B6B1";
  animate(50, 250, 650, 250, 0, nameAxis);
}

function nameAxis() {
  ctx.font = "bold 20px Nunito sans MS";
  ctx.fillText("X", 30, 255);
  ctx.fillText("Y", 670, 255);
  btnAxis.classList.add("hide");
  nextQuestion();
}

function nameVPHP() {
  btnNext.classList.add("disabled");
  // btnNext.classList.add("blink");
  ctx.fillText("VP", 69, 243);
  ctx.fillText("HP", 69, 270);
  setInterval(
    (btnNext.removeAttribute("disabled"), btnNext.classList.add("blink")),
    1000
  );
  btnVPHP.classList.add("hide");
  nextQuestion();
}

function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function animate(x1, y1, x2, y2, ratio, cb) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio, cb);
  if (ratio > 1) {
    cb();
  } else if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02, cb);
    });
  }
}
// function animate(x1, y1, x2, y2, ratio) {
//   ratio = ratio || 0;
//   drawLine(x1, y1, x2, y2, ratio);
//   if (ratio < 1) {
//     requestAnimationFrame(function () {
//       animate(x1, y1, x2, y2, ratio + 0.02);
//     });
//   }
// }

function animateRecursively(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animateRecursively(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

function initialSetup() {
  currentStep = data.find((d) => d.step == currentStepCount);
  stepNumber.textContent = currentStepCount;
  stepTitle.innerHTML = currentStep.title;
  currentQuestions = currentStep.questions;
  currentQuestionIndex = 0;
  quizDiv.classList.remove("hide");
  displayQuestionDiv(currentQuestions[currentQuestionIndex]);
}

function displayQuestionDiv(questions) {
  console.log(currentStep, currentQuestions[currentQuestionIndex]);
  const { question, options, answer, buttonClass, circle, circleText } =
    questions;
  questionDiv.innerHTML = `${currentQuestionIndex + 1}. ${question}`;
  answersDiv.innerHTML = "";
  options.map((option, index) => {
    answersDiv.innerHTML += `
    <div class="input-group">
    <input type="radio" name="${question}" id="ans${index}" class="option" onchange='checkAnswer(this, ${index}, ${answer}, ${buttonClass},${JSON.stringify(
      circle
    )})'>
    <label for="rad1">${option}</label>
    </div>
    `;
  });
  console.log(JSON.stringify(circle));
}

function checkAnswer(ele, index, answer, buttonClass, circle) {
  const optionSelected = ele.parentNode;
  optionSelected.classList.remove("wrong");
  optionSelected.classList.remove("correct");
  if (index === answer) {
    buttonClass.classList.add("anim");
    buttonClass.classList.remove("hide");
    optionSelected.classList.add("correct");
    validateAnswer.innerHTML = "Right answer👍";
    answersDiv.appendChild(validateAnswer);
    if (buttonClass != null) buttonClass.classList.remove("hide");
    if (circle) {
      cirX = circle.x;
      cirY = circle.y;
      cirText = currentQuestions[currentQuestionIndex].circleText;
      currentFunction = currentQuestions[currentQuestionIndex].func;
      createCircle();
    }
  } else {
    clearCircle();
    optionSelected.classList.add("wrong");
    buttonClass.classList.remove("anim");
    buttonClass.classList.add("hide");
    if (buttonClass != null) buttonClass.classList.add("hide");
    validateAnswer.innerHTML = "Wrong answer, please check the options again👎";
    answersDiv.appendChild(validateAnswer);
  }
}
function resetAll() {
  ctx.clearRect(0, 0, 750, 500);
  ctx.setLineDash([]);
  currentStepCount = 1;
  currentStep;
  currentQuestions;
  currentQuestionIndex = 0;
  currentFunction = null;
  circle1 = new Path2D();
  cirX = 0;
  cirY = 0;
  cirText = "";
  initialSetup();
  document.querySelectorAll(".btn").forEach((b) => b.classList.add("hide"));
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("hide");
  btnReset.classList.remove("hide");
  stepNumber.classList.remove("hide");
  stepTitle.classList.remove("hide");
  document.querySelector(".final-statement").classList.add("hide");
  canvas.classList.add("hide");
}

function movetoTop() {
  practiceDiv.scrollIntoView();
}

let circle1 = new Path2D(),
  currentFunction;
let cirX = 0,
  cirY = 0,
  cirText = "";
function drawInitialLine() {
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#3590ae";
  ctx.moveTo(300, 350);
  ctx.lineTo(300, 400);
  ctx.stroke();
  ctx.lineTo(343.3, 425);
  ctx.stroke();
  ctx.lineTo(386.6, 400);
  ctx.stroke();
  ctx.lineTo(386.6, 350);
  ctx.stroke();
  ctx.lineTo(343.3, 325);
  ctx.stroke();
  ctx.lineTo(300, 350);
  ctx.stroke();
  ctx.closePath();

  // ctx.fillText("a'", 280 - 5, 200 + 5);
  // ctx.fillText("a", 280 - 5, 295 + 5);
  ctx.fillText("a", 283, 350);
  ctx.fillText("d", 390, 400);
  ctx.fillText("b", 280, 400);
  ctx.fillText("c", 340, 440);
  ctx.fillText("e", 392, 350);
  ctx.fillText("f", 345, 320);
  ctx.fillText("Solid lines", 590, 25);
  ctx.fillText("Projection lines", 590, 45);
  ctx.beginPath();
  ctx.moveTo(575, 20);
  ctx.arc(575, 20, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#3590ae";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(575, 40);
  ctx.arc(575, 40, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#d9b28a";
  ctx.fill();
  ctx.closePath();
  ctx.closePath();
  btnLine.classList.add("hide");
  nextQuestion();
}

function a() {
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.moveTo(250, 250);
  ctx.lineTo(386.6, 250);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  ctx.fillStyle = "black";
  ctx.setLineDash([]);
  ctx.fillText("a'(b')", 255, 250);
  ctx.fillText("c'(f')", 330, 230);
  ctx.fillText("d'(e')", 390, 236);
  animate(300, 350, 300, 250, 0);
  animate(343, 325, 343, 250);
  animate(386, 350, 386, 250);

  // document.getElementById("c").style.visibility = "visible";
  ctx.closePath();
  btnaDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
  setTimeout(function () {
    btnNext.removeAttribute("disabled");
  }, 2000);
  // setInterval((
  //   console.log("hi praj"),
  //   btnNext.removeAttribute("disabled"),
  //   btnNext.classList.add("blink")
  //   ),3000);
}

function b() {
  clearCircle();
  ctx.beginPath();

  // enableClick("d", d);
  // glowing("d");

  // document.getElementById("d").style.animation = "glowing 1000ms infinite";
  ctx.strokeStyle = "#3590ae";
  ctx.fillStyle = "black";
  ctx.lineWidth = "2.5";
  ctx.fillText("a₁", 255, 235);
  ctx.fillText("f₁", 298, 212);
  ctx.fillText("e₁", 320, 180);
  ctx.fillText("d₁", 280, 142);
  ctx.fillText("b₁", 220, 195);
  ctx.fillText("c₁", 225, 157);
  ctx.moveTo(313.3, 221);
  ctx.lineTo(
    313.3 - 30.6 * Math.cos(Math.PI / 4) - 25 * Math.cos(Math.PI / 4),
    221 + 30.6 * Math.cos(Math.PI / 4) - 25 * Math.cos(Math.PI / 4)
  );
  ctx.lineTo(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4)
  );
  ctx.lineTo(
    313.3 - 100 * Math.cos(Math.PI / 4),
    221 - 100 * Math.cos(Math.PI / 4)
  );
  ctx.lineTo(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4)
  );
  ctx.lineTo(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4)
  );
  ctx.lineTo(313.3, 221);
  ctx.stroke();
  ctx.closePath();

  btna.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
  setTimeout(function () {
    btnNext.removeAttribute("disabled");
  }, 100);
}

function b11() {
  ctx.beginPath();
  ctx.strokeStyle = "Black";
  ctx.lineWidth = "1";
  ctx.moveTo(220, 62);
  ctx.lineTo(
    220 - 325 * Math.cos(Math.PI / 2.4),
    62 + 325 * Math.sin(Math.PI / 2.4)
  );
  ctx.fillStyle = "black";
  ctx.fillText("X2", 210, 55);
  ctx.fillText(
    "Y2",
    210 - 325 * Math.cos(Math.PI / 2.4),
    80 + 325 * Math.sin(Math.PI / 2.4)
  );
  ctx.stroke();
  clearCircle();
  canvas_arrow(
    ctx,
    220 - 300 * Math.cos(Math.PI / 2.4) - 70,
    62 + 300 * Math.sin(Math.PI / 2.4),
    220 - 300 * Math.cos(Math.PI / 2.4) - 30,
    62 + 300 * Math.sin(Math.PI / 2.4),
    4
  );
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(
    220 - 300 * Math.cos(Math.PI / 2.4) - 30,
    62 + 300 * Math.sin(Math.PI / 2.4)
  );
  ctx.lineTo(
    220 - 300 * Math.cos(Math.PI / 2.4) - 60,
    62 + 300 * Math.sin(Math.PI / 2.4)
  );
  ctx.fillText(
    "AVP",
    220 - 300 * Math.cos(Math.PI / 2.4) - 110,
    70 + 300 * Math.sin(Math.PI / 2.4)
  );
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  animate(
    313.3,
    221,
    313.3 - 250 * Math.cos(Math.PI / 12),
    221 - 250 * Math.sin(Math.PI / 12)
  );
  animate(
    313.3 - 30.6 * Math.cos(Math.PI / 4) - 25 * Math.cos(Math.PI / 4),
    221 + 30.6 * Math.cos(Math.PI / 4) - 25 * Math.cos(Math.PI / 4),
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      200 * Math.cos(Math.PI / 12),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      200 * Math.sin(Math.PI / 12)
  );
  animate(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4),
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      200 * Math.cos(Math.PI / 12) -
      50 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      200 * Math.sin(Math.PI / 12) -
      50 * Math.cos(Math.PI / 4)
  );
  animate(
    313.3 - 100 * Math.cos(Math.PI / 4),
    221 - 100 * Math.cos(Math.PI / 4),
    313.3 - 100 * Math.cos(Math.PI / 4) - 200 * Math.cos(Math.PI / 12),
    221 - 100 * Math.cos(Math.PI / 4) - 200 * Math.sin(Math.PI / 12)
  );
  animate(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4),
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4) -
      200 * Math.cos(Math.PI / 12),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      50 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4) -
      200 * Math.sin(Math.PI / 12)
  );
  animate(
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4),
    313.3 -
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) +
      61.2 * Math.cos(Math.PI / 4) -
      250 * Math.cos(Math.PI / 12),
    221 +
      30.6 * Math.cos(Math.PI / 4) -
      25 * Math.cos(Math.PI / 4) -
      61.2 * Math.cos(Math.PI / 4) -
      250 * Math.sin(Math.PI / 12)
  );
  ctx.closePath();
  btnbOneDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
  setTimeout(function () {
    btnNext.removeAttribute("disabled");
  }, 2000);
}

function b1() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(200, 350);
  ctx.lineTo(450, 100);
  ctx.stroke();
  clearCircle();
  ctx.arc(300, 250, 20, Math.PI * 0.75, Math.PI);

  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(470, 120);
  ctx.lineTo(470 + 20, 120 + 20);
  ctx.stroke();
  clearCircle();
  canvas_arrow(ctx, 400, 135, 470, 120, 4);
  ctx.fillText("AIP", 490, 150);
  ctx.fillText("Y1", 460, 90);
  ctx.fillText("X1", 190, 365);
  ctx.fillText("θ", 270, 275);
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  animate(300, 250, 220, 170);
  animate(343.3, 250, 243.3, 150);
  animate(386.6, 250, 263.6, 130);
  ctx.closePath();
  btnThetaOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
  setTimeout(function () {
    btnNext.removeAttribute("disabled");
  }, 1000);
}

function bb() {
  clearCircle();
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.lineWidth = "2.5";
  ctx.moveTo(
    263 - 190 * Math.cos(Math.PI / 2.4) - 30,
    25 + 190 * Math.sin(Math.PI / 2.4) - 8
  );
  ctx.lineTo(
    263 - 165 * Math.cos(Math.PI / 2.4) - 30,
    25 + 165 * Math.sin(Math.PI / 2.4) - 8
  );
  ctx.lineTo(
    263 - 125 * Math.cos(Math.PI / 2.4) - 31 * Math.cos(Math.PI / 12) - 30,
    25 + 125 * Math.sin(Math.PI / 2.4) - 31 * Math.sin(Math.PI / 12) - 8
  );
  ctx.lineTo(
    263 - 112 * Math.cos(Math.PI / 2.4) - 30 - 61.2 * Math.cos(Math.PI / 12),
    25 + 112 * Math.sin(Math.PI / 2.4) - 61.2 * Math.sin(Math.PI / 12) - 8
  );
  ctx.lineTo(
    263 - 138 * Math.cos(Math.PI / 2.4) - 30 - 61.2 * Math.cos(Math.PI / 12),
    25 + 138 * Math.sin(Math.PI / 2.4) - 61.2 * Math.sin(Math.PI / 12) - 8
  );
  ctx.lineTo(
    263 - 178 * Math.cos(Math.PI / 2.4) - 30 - 31 * Math.cos(Math.PI / 12),
    25 + 178 * Math.sin(Math.PI / 2.4) - 31 * Math.sin(Math.PI / 12) - 8
  );
  ctx.lineTo(
    263 - 190 * Math.cos(Math.PI / 2.4) - 30,
    25 + 190 * Math.sin(Math.PI / 2.4) - 8
  );
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fillText("a₁'", 160, 210);
  ctx.fillText("f₁'", 168 - 42 + 8, 245 - 15 - 50);
  ctx.fillText("e₁'", 140 - 32 + 10, 190 - 8 - 50);
  ctx.fillText("d₁'", 150 - 37 + 13, 160 - 60);
  ctx.fillText("b₁'", 195 - 36 + 28, 235 - 8 - 50);
  ctx.fillText("c₁'", 190 - 32 + 13, 180 - 8 - 60);
  ctx.closePath();
  btnB.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function b2() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.setLineDash([]);
  ctx.moveTo(430, 375);
  ctx.lineTo(430, 200);
  ctx.stroke();
  clearCircle();
  ctx.closePath();
  btnBOne.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}

function b22() {
  ctx.beginPath();
  ctx.arc(300, 200, 130, -Math.PI / 3.27, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("b'", 370, 80);
  ctx.closePath();
  btnThetaTwo.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function bbb() {
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.moveTo(300, 200);
  ctx.lineTo(375, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 200, 55, -Math.PI / 3.19, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("α", 350, 170);
  ctx.closePath();
  btnBDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function de1() {
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.moveTo(300, 200);
  ctx.lineTo(375, 94);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(300, 200, 55, -Math.PI / 3.19, 0);
  ctx.stroke();
  clearCircle();
  ctx.fillText("α", 350, 170);
  ctx.closePath();
  btndDasheDash.classList.add("hide");
  circle1 = new Path2D();
  nextQuestion();
}
function createCircle() {
  console.log(cirText);
  ctx.beginPath();
  if (cirText == "b1'") {
    circle1.arc(cirX, cirY, 20, 0, 2 * Math.PI);
  } else if (cirText == "d'(e')") {
    circle1.arc(cirX, cirY, 30, 0, 2 * Math.PI);
  } else if (cirText == "AIP") {
    circle1.arc(cirX, cirY, 28, 0, 2 * Math.PI);
  } else if (cirText == "AVP") {
    circle1.arc(cirX, cirY, 28, 0, 2 * Math.PI);
  } else circle1.arc(cirX, cirY, 16, 0, 2 * Math.PI);
  ctx.fillStyle = "#417472";
  ctx.fill(circle1);
  ctx.fillStyle = "#fff";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } else if (cirText == "d'(e')") {
    ctx.fillText(cirText, cirX - 12, cirY + 5);
  } else if (cirText == "AIP") {
    ctx.fillText(cirText, cirX - 11, cirY + 5);
  } else if (cirText == "AVP") {
    ctx.fillText(cirText, cirX - 12, cirY + 5);
  } else ctx.fillText(cirText, cirX - 7, cirY + 5);
  ctx.closePath();
}
// function createCircle() {
//   console.log(cirText);
//   ctx.beginPath();

//   let radius = 16; // Default radius
//   if (cirText.length > 4) {
//     radius = 20 + (cirText.length - 4) * 2; // Increase radius for longer text
//   } else if (cirText == "b1'") {
//     radius = 20; // Specific case for "b1'"
//   }

//   circle1.arc(cirX, cirY, radius, 0, 2 * Math.PI);

//   ctx.fillStyle = "#417472";
//   ctx.fill(circle1);
//   ctx.fillStyle = "#fff";

//   let textOffset = cirText.length > 2 ? cirText.length * 2 : cirText == "b1'" ? 9 : 7;
//   ctx.fillText(cirText, cirX - textOffset-10, cirY + 5);

//   ctx.closePath();
// }

function clearCircle() {
  if (cirText == "b1'") {
    ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
  } else if (cirText == "d'(e')") {
    ctx.clearRect(cirX - 30, cirY - 30, 60, 60);
  } else if (cirText == "AIP") {
    ctx.clearRect(cirX - 28, cirY - 28, 60, 60);
  } else if (cirText == "AVP") {
    ctx.clearRect(cirX - 28, cirY - 28, 60, 60);
  } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
  ctx.fillStyle = "#000";
  if (cirText == "b1'") {
    ctx.fillText(cirText, cirX - 9, cirY + 5);
  } else if (cirText != "d'(e')") {
    ctx.fillText(cirText, cirX - 12, cirY + 5);
  } else if (cirText != "AIP") {
    ctx.fillText(cirText, cirX - 11, cirY + 5);
  } else if (cirText != "AVP") {
    ctx.fillText(cirText, cirX - 12, cirY + 5);
  } else {
    ctx.fillText(cirText, cirX - 7, cirY + 5);
  }
}
// function clearCircle() {
//   let radius = 16; // Default radius
//   if (cirText.length > 4) {
//     radius = 21 + (cirText.length - 4) * 2; // Increase radius for longer text
//   } else if (cirText == "b1'") {
//     radius = 20; // Specific case for "b1'"
//   }

//   const clearSize = radius * 2;

//   ctx.clearRect(cirX - radius, cirY - radius, clearSize, clearSize);

//   ctx.fillStyle = "#000";
//   let textOffset = cirText.length > 4 ? cirText.length * 2 : cirText == "b1'" ? 9 : 7;

//   if (cirText != "⨀") {
//     ctx.fillText(cirText, cirX - textOffset, cirY + 5);
//   }
// }
/*

//  Listen for mouse moves
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  console.log(
    "hii",
    event.clientX - rect.left,
    event.clientY - rect.top,
    event.screenX,
    event.screenY
  );
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle1, event.clientX, event.clientY)) {
    if (cirText == "b1'") {
      ctx.clearRect(cirX - 20, cirY - 20, 40, 40);
    } else ctx.clearRect(cirX - 20, cirY - 20, 37, 37);
    ctx.fillStyle = "#000";
    if (cirText == "b1'") {
      ctx.fillText(cirText, cirX - 9, cirY + 5);
    } else if (cirText != "⨀") {
      ctx.fillText(cirText, cirX - 7, cirY + 5);
    }
    circle1 = new Path2D();
    currentFunction();
    nextQuestion();
  }
});

*/
function canvas_arrow(context, fromx, fromy, tox, toy, r) {
  var x_center = tox;
  var y_center = toy;

  var angle;
  var x;
  var y;

  context.beginPath();

  angle = Math.atan2(toy - fromy, tox - fromx);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.moveTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  context.closePath();
  context.fillStyle = "black";

  context.fill();
}
