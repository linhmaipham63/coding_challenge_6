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


// Task 3: Arrow Function

// Write arrow function calculateBonus(salary, performanceRating)
calculateBonus = (salary, performanceRating) => {
    let bonus; 
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2; // "Excellent" → 20% of salary bonus
    } else if (performanceRating === "Good") {
        bonus = salary * 0.1; // "Good" → 10% of salary bonus
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; // "Average" → 5% of salary bonus
    }
    console.log(`Bonus: $${bonus}`);
}

// Test Data:
calculateBonus(5000, "Excellent"); 
calculateBonus(7000, "Good");      

