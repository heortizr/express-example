const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const app = express();

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Hugo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        anio: new Date().getFullYear()
    });
});

app.get('/json', (req, res) => {

    let obj = {
        nombre: 'Hugo!',
        edad: 33,
        url: req.url
    };

    res.send(obj);
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${ process.env.PORT || 3000 }!`);
});