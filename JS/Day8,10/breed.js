// https://dog.ceo/api/breeds/list/all 모든 견종
// https://dog.ceo/api/breeds/image/random/3

const apiRandomdogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
let request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");
const reset = document.getElementById("display-reset");

const currentdogs = [];

function displayDogs(element) {
  const dogImgDiv = document.createElement("div");
  dogImgDiv.classList.add("flex-item");
  dogImgDiv.innerHTML = `
      <img src=${element}>
    `;
  main.appendChild(dogImgDiv);
}

// 웹 페이지 처음 화면
window.addEventListener("load", () => {
  //강아지 사진 뿌리기
  request1.open("get", apiRandomdogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((element) => {
      currentdogs.push(element);
      displayDogs(element);
    });
  });
  request1.send();

  // 셀렉트에 견종 정보 뿌리기
  request2.open("get", apiAllBreeds);
  request2.addEventListener("load", () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const op = document.createElement("option");
      op.textContent = item;
      op.value = item;
      select.appendChild(op);
    });
  });
  request2.send();
});

button.addEventListener("click", () => {
  main.innerHTML = "";
  let filteredDogs = currentdogs.filter((element) => {
    return element.indexOf(input.value) !== -1;
  });

  input.value = "";

  filteredDogs.forEach((element) => {
    displayDogs(element);
  });
});

select.addEventListener("change", () => {
  main.innerHTML = "";
  let filteredDogs = currentdogs.filter((element) => {
    return element.indexOf(select.value) !== -1;
  });

  input.value = "";

  filteredDogs.forEach((element) => {
    displayDogs(element);
  });
});

more.addEventListener("click", () => {
  request1.open("get", apiRandomdogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentdogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

tothetop.addEventListener("click", () => {
  // 주어진 위치로 스크롤을 이동한다.
  window.scrollTo({ top: 0 });
});

reset.addEventListener("click", () => {
  main.innerHTML = "";
  currentdogs.splice(0, currentdogs.length);
  request1 = new XMLHttpRequest();

  request1.open("get", apiRandomdogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentdogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});
