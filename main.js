function calculate() {
    var amount = document.getElementById('amount').value;
    var persons = document.getElementById('people').value;
    var final = amount / persons;

    document.querySelector('#total').innerHTML = `$${final}`;

    if (amount == "" || persons == "") {
        alert("invalid details");
    }  
}