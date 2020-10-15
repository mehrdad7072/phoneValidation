function Vall() {
    let z=document.getElementById('PhNumber').value;
    if (z == "") {
        alert("شماره خود را وارد کنید");
    } else if (isNaN(z)) {
        alert("شماره خود را صحیح وارد کنید")
    } else {
    }
};