// Coding Challenge 5

// Step 2:
const employees = [
  { name: "Ava",    hourlyRate: 22.5, hoursWorked: 38 },
  { name: "Ben",    hourlyRate: 18.0, hoursWorked: 42 },
  { name: "Chloe",  hourlyRate: 30.0, hoursWorked: 45 },
  { name: "Diego",  hourlyRate: 16.75, hoursWorked: 40 },
  { name: "Esha",   hourlyRate: 25.0, hoursWorked: 50 }
]

// Step 3:

function calculateBasePay(rate, hours){
  let baseHours = hours;
  if (baseHours > 40){
    baseHours = 40;
  }
  let pay = rate * baseHours;
  return pay.toFixed(2);
}
console.log(calculateBasePay(20, 35));

// Step 4:

function calculateOvertimePay(rate, hours){
  if (hours <= 40){
    return 0;
  }
  let extraHours = hours - 40;
  let otPay = extraHours * rate * 1.5;
  return otPay.toFixed(2);
}
console.log(calculateOvertimePay(24,45))

// Step 5: 

 let taxRate = 0.15;  

 function calculateTaxes(grossPay){
  let net = grossPay * (1 - taxRate);
  return net.toFixed(2);
 }

 console.log(calculateTaxes(2500))

 