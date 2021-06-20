const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 80;
const path = require('path');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname);
app.get("/", (req, res)=>{ 
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/post/:postslug', (req, res)=>{
    var primary_key = req.params.postslug
    // res.sendFile(path.join(__dirname+'/templates/post.html'));
    res.render('post.html',{primary_key:primary_key})
    
});

app.get("/about", (req, res)=>{
    res.render('about.html')
});

app.get("/contact", (req, res)=>{
    res.render('contact.html')
});
app.get("/compose", (req, res)=>{
    res.render('compose.html')
});

app.listen(port,hostname,()=>{
    // console.log(`The application started successfully on port ${port}`);
    console.log(`Server running at http://${hostname}:${port}/`);
});
