// const {Jenkins} = require('./Jenkins')

// const bab = new Jenkins("http://duonghx:Dugon231998@localhost:8080/");

// console.log(bab.Job.getLog())


// let a = ['an %s ggd %sdsa','2','3']
// let arr = a[0].replace('%s',a[1])
// let arr1 = arr.replace('%s',a[2]) 
// console.log(arr1)

// console.log(a)

function stringQuery(string,...arr){
    let str = "";
    for(let i = 0;i < arr.length;i++){
        if(i === 0){
            str = string.replace('%s',arr[i]);
        }else{
            str = str.replace('%s',arr[i]);
        }
    }
    return str;
}

console.log(stringQuery('an %s ggd %sdsa %s','2','3','4'))
// abc = () => {
//     console.log("hello")
// }

// abc()