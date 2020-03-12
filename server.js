const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  req.send('hello world');
})

console.log('http://localhost:3000');

app.listen(3000, () => {
  console.log('listening on port 3000');
});
