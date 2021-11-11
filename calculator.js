const express=require("express");
const bodyParser=require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/Index.html");
});
app.post("/", function(req, res){
    var num1=Number( req.body.number1);
    var num2=Number(req.body.number2);
    var Addition=(num1+num2);
    res.send("The result is  : "+Addition);
});

app.get("/Temperature", function(req,res){
    res.sendFile(__dirname + "/Temperature.html");
});
app.post("/Temperature",function(req, res){
    var fah=Number(req.body.fahrenheit);
    var result=(fah-32)/1.8;
    res.send("The Celsius Temperature is  : "+result);
});

app.listen(3001, function(){
    console.log("Server is running on port on 3001");
});