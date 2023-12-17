const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result=num1+num2;
    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height)/100;

    var bmi = weight/Math.pow(height,2);

    if(bmi<18.5){
        res.send("Underweight BMI: "+ bmi);
    }
    else if (bmi>=18.5 && bmi<=24.9){
        res.send("Normal weight BMI: "+ bmi);
    }
    else if(bmi>24.9 && bmi<=29.9){
        res.send("Overweight BMI: "+ bmi);
    }
    else if (bmi>29.9 && bmi<=34.9){
        res.send("Normal weight BMI: "+ bmi);
    }
    else{
        res.send("Extremely Obese BMI: "+ bmi)
    }

});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});