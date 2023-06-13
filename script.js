const getComputerResponse = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  let response;

  switch (randomNumber) {
    case 1:
      response = "ROCK";
      break;
    case 2:
      response = "PAPER";
      break;
    case 3:
      response = "SCISSOR";
      break;
  }
  return response;
};

const getResult = ({ target: { id: yourResponse } }) => {
  yourResponse = yourResponse.toUpperCase();
  document.getElementById("your-choice").textContent =
    yourResponse.toUpperCase();

  const computerResponse = getComputerResponse();

  document.getElementById("computer-choice").textContent = computerResponse;

  const result = document.getElementById("result");

  if (yourResponse === computerResponse) {
    result.textContent = "It's tie";
  } else if (
    (yourResponse === "ROCK" && computerResponse === "SCISSOR") ||
    (yourResponse === "SCISSOR" && computerResponse === "PAPER") ||
    (yourResponse === "PAPER" && computerResponse === "ROCK")
  ) {
    result.textContent = "YOU WON";
  } else if (
    (computerResponse === "ROCK" && yourResponse === "SCISSOR") ||
    (computerResponse === "SCISSOR" && yourResponse === "PAPER") ||
    (computerResponse === "PAPER" && yourResponse === "ROCK")
  ) {
    result.textContent = "YOU LOST";
  }
};

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", getResult);

const paperBtn = document.getElementById("paper", getResult);
paperBtn.addEventListener("click", getResult);

const scissorBtn = document.getElementById("scissor", getResult);
scissorBtn.addEventListener("click", getResult);
