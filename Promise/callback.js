///callback used to write asynchronously

//example one
console.log("satish");
setTimeout(function() {
    console.log("subedar");
}, 1000)

console.log("yadav");


//example two
const cart=["shoes", "pants", "kurta"];

//create oreder done.
//proceed to payment done
//callback back, is one callback after anoter callback code incresed and going horizontal
//structure known as pyramid of doom in programming
api.createOrder(cart, function(){
    api.proceedToPayment(function (){
        ShowOrderSummary()
    });
});

///problems:
//1) Callback hell
//2) inversion of control, that we loose control of are program because we give other function to call back are function 
//and we  dont know this will ever execute or not