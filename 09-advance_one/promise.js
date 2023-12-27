console.log("promises");


function prom(complete){
    return new Promise(function(resolve,reject){
        if(complete){
            resolve(" i am correct");
        } else {
            reject("i am wrong");
        }
    });
}
let onfulfilment = (result) => {
    console.log(result);
}
let onrejection = (error) => {
    console.log(error);
}
prom(true).then(onfulfilment).catch(onrejection);