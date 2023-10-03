const multer = require("multer");
const fs = require("fs");
const data = require("./data");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.listen(3232);
const upload = multer();
app.use(upload.none());

app.get("/",(request,response)=>{
  response.status(200);
  response.json(data);
});

app.get("/:id",(request,response)=>{
  let newData = [];
  for(let x of data)
  {
    if(x.id == request.params.id)
    {
      newData.push(x);
    }
  }
  if(newData.length > 0)
  {
    newData[0]['totalComment'] = data.length+1;
    response.status(200);
    response.json(newData[0]);
  }
  else {
    response.status(404);
    response.json({
      message: "id not found !"
    });
  }
});

app.post("/",(request,response)=>{
  let max = 0;
  for(let x of data)
  {
    if(Number(x.id) > max)
    {
      max = Number(x.id);
    }
  }
  const newData = request.body;
  newData['id'] = max+1;
  data.push(newData);
  fs.writeFile("./data.json",JSON.stringify(data),(err)=>{
    response.status(200);
    response.json({
      message: "success",
      data: newData
    });
  });
});

app.put("/:id",(request,response)=>{
  let m = 0;
  let y = request.body;
  let newData = false;
  let id = request.params.id;
  data.forEach(function(x,index){
    if(x.id == id)
    {
      m = index;
      newData = x;
    }
  });
  if(newData != false)
  {
    data[m] = request.body;
    data[m]['id'] = request.params.id;
    fs.writeFile("./data.json",JSON.stringify(data),function(err){
      response.status(200);
      response.json({
        message: "success"
      });
    });
  }
  else {
    response.status(404);
    response.json({
      message: "id not found"
    });
  }
});

app.delete("/:id",(request,response)=>{
  let m = 0;
  let y = request.body;
  let newData = false;
  let id = request.params.id;
  data.forEach(function(x,index){
    if(x.id == id)
    {
      m = index;
      newData = x;
    }
  });
  if(newData != false)
  {
    data.splice(m,1);
    fs.writeFile("./data.json",JSON.stringify(data),function(err){
      response.status(200);
      response.json({
        message: "success"
      });
    });
  }
  else {
    response.status(404);
    response.json({
      message: "id not found"
    });
  }
});
