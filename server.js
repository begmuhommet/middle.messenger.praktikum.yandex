const express = require('express');

const app = express();
const PORT = 3000;

const render = res => {
  return res.render(`${__dirname}/dist/index.html`);
};

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  return res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`App run on ${PORT}`);
});
