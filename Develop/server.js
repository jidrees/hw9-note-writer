
// Requiring dependencies : Express package and path
const express=require('express');
const path=require('path');

const app=express();
const PORT=process.env.PORT|| 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());




