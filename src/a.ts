//TypeScript is Compiler Based

let a=10;  //Inference is autodefine the datatype
let b:String = "10";
//let c:String c=10 Error
console.log(a);
console.log(b);

let arr:[String,number]=["Anuj",28]

function fun1(para:string):number{
    console.log("para");
    return 500;
}

let res:Number=fun1("Anuj")


function chotu(){
    console.log("Hello, Chhotu");
}

function bada(fn:()=>void):boolean{
    setTimeout(function(){
        fn();
    },2000)
    return true;
}


let result:boolean=bada(chotu);