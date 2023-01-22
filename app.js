const express = require('express')
const path = require('path');
const https = require('https')
const app = express()
const options ={
    headers: {
        'Content-Type': 'application/json',
        'Pardot-Business-Unit-Id': '0Uv5j0000008OIjCAM',
        'Authorization' : 'Bearer 00D5j000001kSAm!ARcAQNtIi_WRnjAf9duNGsekC6Lxt_a8XrPWe0FDs17YhMnM3F5K0ym9U8tS6Xf7ve4WvAeulOr5EJSF0owFcORM.ATJE9J7'
      },
}

app.get('/',function(req,res){

    const url = 'https://pi.demo.pardot.com/api/v5/objects/email-templates?fields=id,name,subject'

    https.get(url,options,function(response){
        res.write("<h1>Prospects</h1>")
        
        response.on('data',function(data){
            console.log(JSON.parse(data));
            const pros = JSON.parse(data)
            console.log(pros);
            for(let i =0;i<8;i++){
                res.write("<p style ='font-size:30px;display:flex;justify-content: space-around'>"+pros.values[i].name +"&nbsp&nbsp </p>")}
            res.send()
        })
    })
    
  
})



app.listen(5000,()=>console.log("Running on port 5000"))