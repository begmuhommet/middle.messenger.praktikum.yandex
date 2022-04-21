const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  res.render(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`App run on ${PORT}`);
});
