///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, e) => a + e.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal + (cartTotal * tax) - couponValue;
console.log(calcFinalPrice(58, 10, .06)); // Just here to check my answer

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE (This is more likely for delivery, take out or online orders)
    Name - They will need to know who is purchasing the food 
    Email - This gives them an easy way to send out coupons to customers
    Phone - This will allow the returuant to have a way to contact them if there is an issue with the order and it will act as an identifier.
    Payment - This will help them to know if its going to be cash or credit (debit as well)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name : 'George Albert',
    email : 'galbertsm7@phonyemail.com',
    phone : 392-784-2134,
    cash : false,
}