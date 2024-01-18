const todaySpan = document.querySelector("#today");
const numberDiv = document.querySelector(".numbers");
const drawBtn = document.querySelector("#draw");
const resetBtn = document.querySelector("#reset");

let lottoNumbers = [];

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDay();
todaySpan.append(`${year}년 ${month}월 ${date}일 `);

function paintNumber(number) {
  const eachNumDiv = document.createElement("div");
  eachNumDiv.classList.add("eachNum");
  eachNumDiv.textContent = number;
  numberDiv.append(eachNumDiv);
}

function resetNumber() {
  lottoNumbers.splice(0, 6);
  numberDiv.innerHTML = "";
}

// 클릭하면 랜덤 숫자 6개가 배열에 추가된다!
drawBtn.addEventListener("click", () => {
  resetNumber();
  while (lottoNumbers.length < 6) {
    let rn = Math.floor(Math.random() * 45) + 1;

    if (lottoNumbers.indexOf(rn) === -1) {
      lottoNumbers.push(rn);
      paintNumber(rn);
    }
  }
});

resetBtn.addEventListener("click", resetNumber);
