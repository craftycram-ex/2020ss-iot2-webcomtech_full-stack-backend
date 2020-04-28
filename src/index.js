// Imports
const axios = require('axios').default;
const express = require('express');

// Library inits
const app = express();

axios({
  method: 'get',
  url: 'https://gist.githubusercontent.com/fg-uulm/666847dd7f11607fc2b6234c6d84d188/raw/2ca994ada633143903b10b2bf7ada3fd039cae35/mensa.json',
  responseType: 'json',
})
  .then((response) => {
    const output = response.data;
    // eslint-disable-next-line no-console
    console.log(output);
  });


// Params - REST-artig
app.get('/user/:uid', (req, res) => {
  res.send(`User ID is set to ${req.params.uid}`);
  // tu was
});
// Server starten
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});
