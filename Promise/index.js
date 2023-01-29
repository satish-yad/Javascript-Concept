///Consume Promise about Topic
// //promises are used to handle async operation in javascript code
///handle async code in callback
//defination: promise is an object that represents eventual completion of an asynchronous operation
// const cart=["shoes", "pants", "kurta"];
//  createOrder(cart) //orderId
// //here we are paasing(blindly trusting) the function 
// createOrder(cart, function(orderId){///by using callback function
// proceedToPayment(orderId);
// });

// const promise =createOrder(cart);

// //{data:undefined} ---promiset has stating value until data retun after that it becomes {data:orderDetails}

// //here we are attachinig with promise the function
// //attach function will call whenever the data inside we have
// promise.then(function(orderId){
// proceedToPayment(orderId);
// })

const GITHUB_API='https://api.github.com/users/satish-yad'
//promise state are : pending, Rejected, fulfilled 
//data are immutable

const user= fetch(GITHUB_API);

console.log(user);

user.then(function(data){   
    console.log(data);
});

user.then(data => console.log(data));


//--------------------------------------->

//here we are paasing(blindly trusting) the function 
createOrder(cart, function(orderId){///by using callback function
    proceedToPayment(orderId, function (paymentInfo){
        ShowOrderSummary(paymentInfo, function (){
            updateWalletBalance();
        });
    });
});

//Promise Chaining

createOrder(cart)
.then(function(orderId){///by using callback function
    return  proceedToPayment(orderId)
})
 .then( function (paymentInfo){
     return ShowOrderSummary(paymentInfo)
 })
 .then( function (){
    return updateWalletBalance();
 });

 ///----OR----
 createOrder(cart)
 .then( orderId => proceedToPayment(orderId))
 .then(paymentInfo => ShowOrderSummary(paymentInfo))
 .then((paymentInfo)=> updateWalletBalance());
