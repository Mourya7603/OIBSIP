let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function log(){
    outputScreen.value = Math.log(outputScreen.value);
}

function powe(){
    outputScreen.value = Math.pow(outputScreen.value,2);
}

function pi(){
    outputScreen.value = 3.14;
}

function pos(){
    outputScreen.value = Math.pow(2,outputScreen.value);
}

function abs(){
    outputScreen.value = Math.abs(outputScreen.value);
}

function pow(){
    outputScreen.value = Math.pow(outputScreen.value,3);
}

function sqrt(){
    outputScreen.value = Math.sqrt(outputScreen.value);
}

function e(){
    outputScreen.value = 2.718;
}


function factorial(){
    let i, num, fact=1;
    num = outputScreen.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    i = i - 1;
    outputScreen.value = fact;
}