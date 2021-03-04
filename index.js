const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/projetos', (req, res) => {
    res.render('projetos');
})


app.listen(PORT, (e) => {
    if (e) {
        console.log(`Erro: ${e}`);
    } else {
        console.log('Server ON');
    }
});
