const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// DONE
app.post('/createAccount', require('./server/createAccount'));
app.post('/createPlan', require('./server/createPlan'));
app.post('/createCustomer', require('./server/createCustomer'));
app.post('/subscribeToPlan', require('./server/subscribeToPlan'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
