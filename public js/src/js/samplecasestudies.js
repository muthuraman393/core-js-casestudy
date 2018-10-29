/***samplpe callbacks */
//type 1
function add(a,b){
return a+b;
}
function printandoper(a,b,calback){
console.log(a,b);
return calback(a,b);
}
var addres= printandoper(2,3,add);
console.log('added'+addres);

//type2
var mulres= printandoper(3,5,function (a,b){
    return a*b;
    });
    console.log('multiply'+mulres);

/***samplpe callbacks  end*/