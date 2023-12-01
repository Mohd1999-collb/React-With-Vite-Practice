let a = [2, 4, 6, 8, 10, 12], b = [3, 6, 9, 12];

for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i]) == false) {
        a.push(b[i]);
    }
}
a.sort((a, b) => a - b);
// console.log(a);
// *******************************

let arr = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let count = "";
    for (let j = 0; j < str.length; j++) {
        let char = str.charAt(j)
        if (char === "0" || char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9") {
            count = count + char;
        }
    }
    sum = sum + +count;
}

// console.log(sum);

// ************************************

// let obj1: { name: "John", age : 23; degree: "CS" }
let obj1 = {
    name : "John",
    age : 23,
    degree : "cs"
}
// obj2: { age: 23, degree: "CS" }

let obj2 = {
    age: 23,
    degree :"cs"
}
// Output: true (View this output in console)

function compareObj(obj1, obj2){
    for(let key in obj2){
        if(obj1[key] == undefined){
            return false;
        }else{
            if(obj1[key] !== obj2[key]){
                return false;
            }
        }
    }
    return true;
}

let obj3 =
 { name: "John", degree: "CS" }
let obj4 = { 
    name: "Max", 
    age: 23, 
    degree: "CS" 
}
// Output: false(View this output in console)

console.log(compareObj(obj1, obj2))
console.log(compareObj(obj3, obj4))