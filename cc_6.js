// Task 1: Function Declaration

// Write function calculateProfit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; 
    console.log(`Total Profit: $${profit}`);
}

// Test Data
calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200); 

