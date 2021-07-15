document.querySelector("button").addEventListener("click", calculatePayment);

function calculatePayment() {
    let p = document.querySelector(".amount").value;
    let r = document.querySelector(".rate").value;
    let n = document.querySelector(".month").value * 12;
    document.querySelector(".result").innerHTML = (p * r * (Math.pow((1 + r), n)) / ((Math.pow((1 + r), n)) - 1)).toFixed(3);
}