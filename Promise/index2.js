//creating a promise
const cart=["shoes", "pants", "kurta"];
const promise =createOrder(cart); //orderId
 console.log(promise);

 promise.then(function (orderId){
    console.log(orderId);
    //proceedToPayment(orderId);

 }).catch(function(error){
console.log(error.message);
 });
 

 ///Producer
 function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
            //create order
            //validate order
            //oreder id
            if(!validateCart(cart)){
                var err = new Error("Invalid cart");
                reject(err);
            }
            //logic for create order
            const orderId = '2233';
            if(orderId){
                setTimeout(function () {
                    resolve(orderId);
                }, 5000);
            }
    });

    return pr;
 }

 function validateCart(cart){
    return false;
 }


 //Promise Chaining

createOrder(cart)
.then(function (orderId){
    console.log(orderId);
    return orderId; //returning whatever will moved to next part of then
 }).
 catch(function(error){
console.log(error.message);
 }).
 then(function (orderId){
  return  proceedToPayment(orderId);
 }).
 then(function (paymentInfo){
  console.log(paymentInfo);
 }).
 catch(function(error){
console.log(error.message);
 }).
  then(function (paymentInfo){
    console.log("this will  call definately");
   });

 function proceedToPayment(orderId){
    ///
    return new Promise(function (resolve, reject) {
        resolve("payment Successful");
    });

 }