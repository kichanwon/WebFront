const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

function print1(num,str){
    console.log(`${num}은/는 ${str}입니다.`);
}

//btn1 클릭시 input1 값을 읽어 print1() 함수 호출
btn1.addEventListener("click", ()=>{
    const value = input1.value;

    if(value.length == 0){
        console.log("값을 입력해주세요");
        return;
    }
    let res;

    if(Number(value) === 0)res="0";
    else if(Number(value) > 0)res="양수";
    else res="음수";

    print1(value,res);

})

function arrayTest(arr){
    arr.forEach((item,index,array) => {
        if (item === "melon") array[index] = "strawberry";
        console.log(`${index}번 인덱스 값 : ${array[index]}`);
    });
}

document.querySelector("#btn2a").addEventListener("click",()=>{
    const arr = ["apple", "banana", "melon"];

    arrayTest(arr);

    console.log(arr[2]);
})

function btn2bFn(e1){
    e1.style.backgroundColor="pink";
}


function print2(fn){
    console.log(`a+b = ${fn(3,4)}`);
}

document.querySelector("#btn2c").addEventListener("click",()=>{
    const sumFn = (a,b)=>{
        return a+b;
    }

    print2(sumFn);
})


/////////////////////////////

const arrows = document.querySelectorAll(".arrow");

const plus = (Fn) =>{
    const input1=Number(prompt("num1"));
    const input2=Number(prompt("num2"));

    alert(Fn(input1,input2));
}

const  printObj = (Fn)=>{
    const obj = Fn("홍길동",20);

    console.log(`obj.name : ${obj.name}`);
    console.log(`obj.age : ${obj.age}`);
}


/////////////////////////////

arrows[0].addEventListener("click", ()=>{
    alert("ahhahahahhhhhhh");
});

arrows[1].addEventListener("click", e=>{
    e.target.style.backgroundColor="pink";
});

arrows[2].addEventListener("click", ()=>plus((a,b)=>a+b));

arrows[3].addEventListener("click", ()=>printObj((name,age)=>{
    return{"name":name,"age":age}
}));



(() => {
    const num1 = 200;  // 지역 변수
    console.log(num1); // 200
    })()