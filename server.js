const express = require('express');

const app = express();
const PORT = 3000;

const render = res => {
  return res.render(`${__dirname}/dist/index.html`);
};

app.use(express.static('./dist'));

app.get('/login', (req, res) => render(res));
app.get('/registration', (req, res) => render(res));
app.get('/chat', (req, res) => render(res));
app.get('/error', (req, res) => render(res));
app.get('/*', (req, res) => render(res));

app.listen(PORT, () => {
  console.log(`App run on ${PORT}`);
});
