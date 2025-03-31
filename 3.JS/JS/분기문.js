// UP & DOWN GAME
function startGame() {

  // 맞춰야하는 난수 (1 ~ 200) 발생
  const answer = Math.floor( Math.random() * 200 ) + 1;

  // 테스트 후 삭제
  console.log("정답 : ", answer);

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt 에 출력할 문자열
  let str = "1부터 200 사이 숫자 입력";

  while(true) { // 무한 반복

    // input에는 null / 입력한 값
    let input = prompt(str);

    if(input === null) { // 취소 클릭 시
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시
    const value = Number(input); // 입력 받은 값 숫자로 변환

    // 잘못 입력한 경우
    // 1. 숫자가 아닌 글자를 넣은 경우
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값) :  값이 NaN이면 true
    if( isNaN(value) ) { // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해 주세요");
      continue;
    }

    // 2. 범위를 초과한 경우
    if(value < 1 || value > 200) {
      alert("1 ~ 200 사이 값만 작성해주세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 증가
    count++;

    // 정답인 경우
    if(value === answer) {
      alert(`정답 !!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if(value < answer) { // 작은 경우
      str = `${value} [UP] / 시도 횟수 : ${count}회`;

    } else { // 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}회`;
      
    }

  }
}