// Task 1: Function Declaration

// Write function calculateProfit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; 
    console.log(`Total Profit: $${profit}`);
}

// Test Data
calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200); 


// Task 2: Function Expression

// Declare function expression calculateSalesTax(amount, taxRate)
let calculateSalesTax = function(amount, taxRate) {
    let salesTax =  amount*taxRate;
    console.log(`Sales Tax: $${Math.round(salesTax)}`);
}

// Test Data:
calculateSalesTax(100, 0.07); 
calculateSalesTax(500, 0.1);  

