const express = require("express")

var app=express()
// 绑定监听端口
app.listen(3000)
app.use(express.static(__dirname+"/publice"))