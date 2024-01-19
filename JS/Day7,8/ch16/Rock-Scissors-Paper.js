const submitBtn = document.getElementById("submit");
const user_input = document.getElementById("user_input");
const resultDiv = document.getElementById("result-display");

function computer_RSP() {
  const computer_pick = Math.floor(Math.random() * 3) + 1;
  let result;

  if (computer_pick === 1) {
    result = "가위";
  } else if (computer_pick === 2) {
    result = "바위";
  } else {
    result = "보";
  }

  return result;
}

submitBtn.addEventListener("click", () => {
  const user = user_input.value;
  const pc = computer_RSP();
  let ans;

  if (user === pc) {
    ans = "비겼습니다!";
  } else if (
    (user === "가위" && pc === "보") ||
    (user === "바위" && pc === "가위") ||
    (user === "보" && pc === "바위")
  ) {
    ans = "이겼습니다!";
  } else {
    ans = "졌습니다!";
  }

  resultDiv.textContent = `당신의 선택: ${user} / 컴퓨터의 선택: ${pc} / 결과: ${ans}`;
});
