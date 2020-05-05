// Imports
const axios = require('axios').default;
const express = require('express');

// Library inits
const app = express();

let data = '';
const uri = 'https://gist.githubusercontent.com/fg-uulm/666847dd7f11607fc2b6234c6d84d188/raw/2ca994ada633143903b10b2bf7ada3fd039cae35/mensa.json';

async function getData() {
  await axios.get(uri)
    .then((response) => {
      data = response.data;
    })
    .catch(() => {
      data = undefined;
    });
}
getData();

// Params - REST-artig
app.get('/user/:uid', (req, res) => {
  res.send(`User ID is set to ${req.params.uid}`);
  // tu was
});

app.get('/mensa/:day', (req, res) => {
  if (data !== undefined) {
    if (req.params.day === 'Di') {
      res.send(data);
    } else {
      res.status(404).send('Error: 404');
    }
  } else {
    res.status(404).send('Error: 404');
  }
  // tu was
});

// Server starten
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});
