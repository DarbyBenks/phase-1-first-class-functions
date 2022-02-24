function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction() {
    console.log('-------------------------------')
    console.log(receivesAFunction.name);
    return receivesAFunction
}

function returnsAnAnonymousFunction (){
    return function(){}
}