const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(cors());

const addvalue=require("./add.value");
const { Router } = require("express");


app.post("/", async(req, res) => {
     try {
        const input=req.body;
        await addvalue.addelement(input);
        res.json({message:"success"});
     } catch (err) {
         res.json({message:"failure"})
     }
    

})
app.post("/auth-user",async(req,res)=>{

    try {
        const input=req.body;
        await addvalue.validate(input);
        res.json({opr:true});
     } catch (err) {
         res.json({opr:false});
     }
    

});

app.post("/book-now",async(req,res)=>{

    try {
        const input=req.body;
        await addvalue.addbook(input);
        res.json({message:"success"});
     } catch (err) {
         res.json({message:"failure"})
     }
    

})




app.post("/forget",async(req,res)=>{

    try {
        const input=req.body;
        await addvalue.forget(input);
        res.json({message:"Found"});
     } catch (err) {
         res.json({message:"doesnt found"});
     }

});

app.listen(4500);
