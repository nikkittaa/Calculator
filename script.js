let value = "";


function display(x){
    value += x;
    document.getElementById("display").value = value;
}


function clearDisplay(){
    value = "";
    document.getElementById("display").value = value;
}


function calculate(){
    try{
    const result = eval(value);
    document.getElementById("display").value = result;
    value = result.toString();
    }
    catch{
        document.getElementById("display").value = "Error";
        value = "";
    }
}