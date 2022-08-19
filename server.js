const express = require('express');
const app = express();
const ngrok = require('ngrok');

const cors = require('cors');
app.use(cors({
    origin: 'http://bt.com'
}));


app.get('/', (req, res) => {
    res.send('Hello World I am running locally');
});

app.get('/auth', (req, res) => {
  res.send({
    isAuthenticated: true
  });
});

app.get('/integration', (req, res) => {
  res.send({
    isIntegrated: false
  });
});

app.post('/integration', (req, res) => {
  res.send({
    isIntegrated: true
  });
});

app.get('/')

const server = app.listen(8080, () => {
    console.log('Running at 8080');
});

ngrok.connect({
    proto : 'http',
    addr : process.env.PORT,
}, (err, url) => {
    if (err) {
        console.error('Error while connecting Ngrok',err);
        return new Error('Ngrok Failed');
    }
});