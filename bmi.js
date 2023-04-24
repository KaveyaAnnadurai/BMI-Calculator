var h = 0,w=0,hUnits,wUnits,bmi=0;
function cal(){
    h= document.getElementById('height').value;
    w= document.getElementById('weight').value;
    hUnits = document.getElementById('hUnit').options[document.getElementById('hUnit').selectedIndex].value;
    wUnits = document.getElementById('wUnit').options[document.getElementById('wUnit').selectedIndex].value;
    if(hUnits == "cms"){
        h = h/100;
    }
    else if(hUnits == "inches"){
        h = h*0.025;
    }
    else{
        h = h*0.3048;
    }

    if(wUnits == "pounds"){
        w= w*0.45359237;
    }
    bmi =  w /(h *h);
    bmi = bmi.toFixed(1);
    console.log(bmi)
    document.getElementById('ans').innerText = "Your BMI: " + bmi;
    if(bmi >= 0 && bmi < 18.5){
        document.getElementById('im').className = 'lowClass';
        document.getElementById('msg').innerHTML = "Under weight!";
    }
    else if(bmi >= 18.5 && bmi < 26){
        document.getElementById('im').className = 'norClass';
        document.getElementById('msg').innerHTML = "Normal !";
    }else{
        document.getElementById('im').className = 'highClass';
        document.getElementById('msg').innerHTML = "Over weight!";
    }
    // document.getElementById('pointer').className = 'norClass';
   


}