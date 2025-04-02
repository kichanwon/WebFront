const inputs = document.querySelectorAll(".color-input"); // 모든 입력 필드
const boxes = document.querySelectorAll(".box"); // 모든 박스
const changeButton = document.querySelector("#changeButton"); // 버튼 선택

// 버튼 클릭 시 모든 박스의 색 변경
changeButton.addEventListener("click", function () {
  inputs.forEach((input, index) => {
    boxes[index].style.backgroundColor = input.value;
  });
});

// 각 box 요소에 클릭 이벤트 추가
boxes.forEach((box) => {
    box.addEventListener("click", function () {
        
        let num = Array.from(boxes).indexOf(box)+1;
        
        alert(`${num}번째 박스 배경색 : ${box.style.backgroundColor}`);
    });
  });