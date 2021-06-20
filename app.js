const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || '5000';
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname);
app.get('/', (req, res)=>{ 
    res.render('index.html')
});

app.get('/post/:postslug', (req, res)=>{
    var primary_key = req.params.postslug
    res.render('post.html',{primary_key:primary_key})
    
});

app.get('/about', (req, res)=>{
    res.render('about.html')
});

app.get('/contact', (req, res)=>{
    res.render('contact.html')
});
app.get('/compose', (req, res)=>{
    res.render('compose.html')
});

app.listen(port,()=>{
    // console.log(`The application started successfully on port ${port}`);
    console.log("STARTED");
});
