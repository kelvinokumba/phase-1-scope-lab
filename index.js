// // Write your solution in this file!
var customerName = "bob"
function fixTheScope() {
    return customerName;
}
console.log(fixTheScope());
 
function upperCaseCustomerName() {
   let customerName = "bob";
   customerName = customerName.toUpperCase();
   return customerName;
}
console.log(upperCaseCustomerName());

bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "John Doe";
  leastFavoriteCustomer = "Gilad"; // This line will cause an error
  return leastFavoriteCustomer;
}

console.log (changeLeastFavoriteCustomer());