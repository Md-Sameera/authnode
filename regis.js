const express =  require("express");
const regis= express();

regis.post("./regis",function (req,res) {
    console.regis("Dataaaa.....") ;   
    res.send(" You have Successfully Registered..");
});
regis.listen(40019);