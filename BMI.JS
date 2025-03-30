function bmi(){

    
let weight=parseFloat(document.getElementById("ww").value);
let height=parseFloat(document.getElementById("hh").value);
    
    if(weight>0 && height>0){

        let bmi=(weight/(height*height))*10000;
          
        let category=""
        if(bmi<18){
            category="you are underweight"
        }
        else if(bmi>=18 && bmi<=25){
            category="you are normal"
        }
        else if(bmi>25 && bmi<=29){
            category="you are overweight"
        }
        else{
            category="you are suffering from obesity"
        }
    
        document.getElementById("final").innerHTML=`Your BMI is ${bmi.toFixed(2)} - ${category}`
    }
    else{
    
        document.getElementById("final").innerHTML="please enter valid values"
    }


}



