const converter = require('./converter');
const helpMethods = require('./help-methods');

function count(firstNum, secondNum, operation) {
    const a = Number(firstNum);
    const b = Number(secondNum);

    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return b - a;
        case '*':
            return a * b;
        case '/':
            if (a === 0) {
                console.log('zero division error');
                return null;
            }
            return b / a;
        default:
            console.log('invalid operator');
            return null;
    }
}

module.exports.solveExpression = function(expression) {
    const tokensString = converter.infixToPostfix(expression);
    const tokensList = tokensString.split(',');

    let st = [];

    tokensList.forEach((token) => {
        if (!helpMethods.isOperator(token)) {
            st.push(token);
        } else {
            const firstNumber = st.pop();
            const secondNumber = st.pop();

            const resultOfExpr = count(firstNumber, secondNumber, token);

            if (resultOfExpr === null) {
                return null;
            }

            st.push(count(firstNumber, secondNumber, token));
        }
    });

    if (st.length === 1) {
        return st[0];
    }

    return null;
}