const express = require('express');
const hbs = require('express-handlebars');
const path = require('path'); 
const getMonster = require('./lib/monsters.js');
// const getIconic = require('./lib/iconic_creatures.js');
const app = express();

app.engine('hbs', hbs({ 
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views','layouts'), 
    partialsDir: path.join(__dirname, 'views','partials') 
})); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    let data = await getMonster();   
    res.render('index', { data, listExists: true});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/iconic', (req, res) => {
    res.render('iconic');
});

app.get('*', (req,res)=>{ 
    res.render('404'); 
   }); 

app.listen(3000, () => { 
    console.log("Listening to port 3000"); 
   }); 