const express = require('express');

const app = express();
const PORT = 3000;

function sendFile(res) {
  return res.sendFile('index.html', { root: './dist' }, error => {
    console.log(error);
  });
}

app.use(express.static('./dist'));

app.get('/login', (req, res) => sendFile(res));
app.get('/registration', (req, res) => sendFile(res));
app.get('/chat', (req, res) => sendFile(res));
app.get('/error', (req, res) => sendFile(res));

app.listen(PORT, () => {
  console.log(`App run on ${PORT}`);
});
