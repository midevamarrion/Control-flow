let str=["country","identity","diversity","originality"];
function string(str){
    for(let i=0;i<str.length;i++){
    console.log(str[i])
    }
}
string(str);


let arrnum=[20,13,40,17,19]
function accept(arrnum){
    arrnum.forEach((a) =>console.log(a*2)
    )}
 accept(arrnum);


 let arr5=[4,7,9,11,22,30]
 function takes(arr5){
    for(let m=0;m<4;m++){
        arr5[m]=arr5[m]*8
    }
    arr5[arr5.length -2]+=5
    arr5[arr5.length -1]+=5
    console.log(arr5)
 }
 takes(arr5)


 let arrNum=[1,2,3,4,5,6,7,8,9]
 function inside(arrNum){
    let i=0;
    while(i<arrNum.length){
        console.log(arrNum[i])
        if (i===4) {
            break;
        }
        i++
    }
 }
 inside(arrNum);


 let fruits=["apple","plam","banana","strawberries","kiwi"];
 function fruity(fruits){
    for(let i = 0;i < fruits.length; i++){
        if(i===2){
            continue;
        }
        console.log({"continue":fruits[i]})
     }
 }
fruity(fruits);