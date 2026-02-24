function tip(){
    let a=parseInt(document.querySelector("#amt").value);
    let b=parseInt(document.querySelector("#perc").value);
    let total=(a*b)/100;
    total+=a;
    document.querySelector("#ans").innerHTML=`<h4>Total: ${total}</h4>`
}