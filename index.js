const express = require('express');
const app = express();

app.use(express.json());

app.get('/app/:user',(req,resp)=>{

    const pathparams = req.params.user;
    console.log(pathparams)

    const queryparams = {
        id:req.query.id,
        name:req.query.name
    }
    console.log(queryparams);

    const info = {
        pathparam:pathparams,
        queryparam:queryparams
    }

    resp.send(info);
})

app.post('/app/:user',(req,resp)=>{
    const arrayObject = Object.entries(req.body); 
    resp.send(arrayObject);
})


app.listen(5000);