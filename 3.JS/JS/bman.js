let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown" , function(e) {
  
  const bomberman = document.querySelector("#bomberman");

  console.log(e.key);

  switch(e.key) {
    case 'ArrowRight' : xindex += 10; break;
    case 'ArrowLeft' : xindex -= 10; break;
    case 'ArrowUp' : yindex -= 10; break;
    case 'ArrowDown' : yindex += 10; break;
    case 'x' : 
    const box = document.querySelector("#box");
    box.innerHTML +=
    `<img src="../../images/bomb.png"
      class="bomb"
      style="transform: translate(${xindex}px, ${yindex}px);
      position:absolute>"`;
    break;
    case 'z' : explodeBomb(); break;
    default: alert("방향키, z, x 만 가능");
  }
  
  bomberman.style.transform = `translate(${xindex}px, ${yindex}px)`;

});

const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");
  // bombs 유사배열 형태

  // for .. of 문 : 
  // 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  for(let bomb of bombs) {
    bomb.src = "../../images/boomm.png";
  }
}






// 'x' 라는 키를 누르면 box 에 innerHTML += `<img 폭탄이미지>`
// box.innerHTML += .. 을 실행하는 과정에서 DOM이 리렌더링됨.
// 기존에 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman");
// 더이상 유효하지 않은 변수가 됨.
// bomberman.style.transform = 변경된 좌표;
// 기존변수인 bomberman은 더이상 유효한 DOM 요소가 아니기 때문에 스타일 변경이 적용X