const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { expression: '', result: null });
  });
  

app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  const result = eval(expression);
  res.render('index', { expression, result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
