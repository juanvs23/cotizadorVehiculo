const express=require('express'),
      app= express(),
      path = require('path'),
      port=3200,
      host="http://localhost/";

app.use(express.static('public'));

app.listen(port,function(){
    console.log(`run server ${host}:${port}`);
});
