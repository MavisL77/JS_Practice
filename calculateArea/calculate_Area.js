let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    Amount_1 = parseFloat(document.getElementById('Amount_1').value);
    Amount_2 = parseFloat(document.getElementById('Amount_2').value);
    Amount_3 = parseFloat(document.getElementById('Amount_3').value);
   
    let amount = Amount_1 + Amount_2 + Amount_3;
    document.getElementById('total_amount').innerText = `The total amount is: ${amount}`;
}



