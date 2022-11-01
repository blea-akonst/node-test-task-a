const express = require('express');
const cors = require('cors');
const solver = require('./src/calculator/solver')

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.get('/get-result', (req, res) => {
    const expression = req.query.expression;

    res.send({result: solver.solveExpression(expression)});
})

app.listen(port, () => {
    console.log(`Calculator server listening on ${port}`);
});