// // console.log("start")
// // function doWork() {
// //     console.log("working")
    

// // }
// // doWork()
// // console.log("End")

// // console.log("before interval")
// // let counter = 0;
// // const intervalId = setInterval(() =>{
// //     console.log("interval callback");
// //     counter ++
// //     if (counter === 3) {
// //         clearInterval(intervalId)
// //     }
// // }, 0)
// // console.log("final");


// function example() {
//     if(true) {
//         var x= 1;
//         let y = 2;
//         const z = 3;
//         // console.log(y);
//         // console.log(z);
        
//     }
//     console.log(x)
// }

// example()

// //  console.log(x)


// console.log(a);
// var a = 10
// console.log(a);


// // console.log(b);
// let b = 20
// console.log(b);


// HOF

// function add(fun) {
//     fun()
// }

// const nums = [1,2,3,4,5,6]
// const doubled = nums.map((ele) => ele * 2)
// console.log(doubled);
// console.log(nums);

// const sum = nums.reduce((acc, value) => acc + value,0)
//     console.log(sum);



//  === vs ==

// console.log("2" == 2);
// console.log("2" === 2);


// type  Coercion
// console.log(5 + "5");  // num to string
//  console.log(5 - "5");  // string to num
 
// console.log(num);
// var num = 10;
// console.log(num);
//  const age = 25
//  age = 30
//  console.log(age);
 


// function tele() {
//     for(var i = 0; i< 3; i++) {
//         // do
//     }
//     console.log(i);
//     for(let j = 0; j < 3; j++) {
//         // do
//     }
//     console.log(j);
    
// }
// tele()


// callback hell -->
// setTimeout(() =>{
//     console.log("step-1");
//     setTimeout(() => {
//         console.log(("step-2"));
//         setTimeout(() =>{
//             console.log("step-3");
            
//         }, 1000)
        
//     },1000)
    
// },1000)
 

// promises

function step1() {
    return new Promise((res) =>{
        setTimeout(()=> {
            res("step-1")
        }, 1000)
    })

}

function step2() {
    return new Promise((res) =>{
        setTimeout(()=> {
            res("step-2")
        }, 1000)
    })

}
function step3() {
    return new Promise((res) =>{
        setTimeout(()=> {
            res("step-3")
        }, 1000)
    })

}

step1().then((res) => {
    console.log(res);
    
}).then((res)=>{
    console.log(res);
    
})

