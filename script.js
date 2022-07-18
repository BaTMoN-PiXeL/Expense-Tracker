infoSubmit = () => {
    let key = document.getElementById("text").value
    let val = document.getElementById("amount").value

    let expense = parseFloat(document.getElementById("money-minus").innerText)
    let income = parseFloat(document.getElementById("money-plus").innerText)

    if(val<0){
        expense -= parseFloat(val)
        document.getElementById("money-minus").innerText = expense;
    }
    else{
        income += parseFloat(val)
        document.getElementById("money-plus").innerText = income;
    }

    document.getElementById("balance").innerText = income - expense

    localStorage.setItem("income", income)
    localStorage.setItem("expense", expense)

    localStorage.setItem(key, val)
    document.getElementById("list").innerHTML = ""
    updateList()

    document.getElementById("text").value = ""
    document.getElementById("amount").value = ""
    btnEnable()
}

btnEnable = () => {
    if (document.getElementById("text").value != "" && document.getElementById("amount").value != ""){
        document.getElementById("button").disabled=false
        // console.log(!document.getElementById("button").disabled)
    }
    else{
        document.getElementById("button").disabled=true
        // console.log(!document.getElementById("button").disabled)
    }
}



updateList = () => {
    keys = Object.keys(localStorage)
    for(a of keys){
        if(a == "expense" || a == "income")
        continue

        let val = localStorage.getItem(a)
        document.getElementById("list").innerHTML += "<li>" + a + " : " + val + "</li>&#10;"
    }
}

updateList()

let exp = parseFloat(document.getElementById("money-minus").innerText)
let inc = parseFloat(document.getElementById("money-plus").innerText)
if(localStorage.getItem("expense") != null ){
    document.getElementById("money-minus").innerText = localStorage.getItem("expense")
    document.getElementById("money-plus").innerText = localStorage.getItem("income")
    document.getElementById("balance").innerText = localStorage.getItem("income") - localStorage.getItem("expense")
    }
