//1
function fn1(name){
    console.log(`1번 : Hello, ${name}!`);
};
fn1("user");

//2
const fn2=(num1,num2)=>{
    console.log(`${num1}+${num1}=${num1+num2}`);
};
fn2(1,2);

//3
const fn3=(num1,num2)=>{
    console.log(`${num1}X${num1}=${num1*num2}`);
};
fn3(1,2);

//4
const fn4=(num1,num2)=>{
    if(num1>num2)console.log("첫 번째 숫자가 더 큽니다.");
    else if(num1<num2) console.log("두 번째 숫자가 더 큽니다.");
    else console.log("두 수가 같습니다.")
};
fn4(2,1);
fn4(1,2);
fn4(0,0);

//5
const fn5=(str)=>{
    console.log(`str length : ${str.length}`);
};
fn5("this is test String");

//6
const fn6=(str,repeat)=>{
    for (let i = 0; i < repeat; i++) {
        console.log(str);
    }
};
fn6("hello",3)

//7
const fn7 = (num)=>{
    if(num%2==0) return true;
    else return false;
};
console.log(fn7(10));

//8
const fn8 = (num1,num2,num3)=>{
    let bigNum=null;
    if(num1>num2) bigNum=num1;
    if(num3>bigNum) bigNum=num3;

    return bigNum;
};
console.log(fn8(1,10,100));
console.log(Math.max(1,10,100));


//9
const fn9=(arr)=>{
    console.log(`arr[0] : ${arr[0]}`);
};
const testArr=[1,2,3,4,5];
fn9(testArr);

//10
const fn10=(arr)=>{
    let sum=null;
    let avg=null;

    arr.forEach(element => {
        sum += element;
    });
    avg=sum/arr.length;

    return{"sum":sum,"avg":avg}
};

function fn10_1(arr){
    let sum=arr.reduce((acc,curr)=>{return acc+curr});
}

console.log(fn10(testArr));

//11
const plus=(a,b)=>a+b;
const minus=(a,b)=>a-b;
const multi=(a,b)=>a*b;
const div=(a,b)=>a/b;

const fn11=(num1,num2,Fn)=>{
    return Fn(num1,num2);
};
console.log(fn11(1,2,plus));
console.log(fn11(1,2,minus));
console.log(fn11(1,2,multi));
console.log(fn11(1,2,div));



//12
const fn12_1=(name)=>{
    console.log(`Hello ${name}`);
}

const fn12=(name,Fn)=>{
    Fn(name);
};
fn12("user",fn12_1);

