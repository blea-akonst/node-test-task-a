const helpMethods = require('./help-methods');

function precedence(c) {
    if (c === '+' || c === '-') {
        return 1;
    }
    else if (c === '*' || c === '/') {
        return 2;
    }

    return 0;
}

module.exports.infixToPostfix = function(expression) {
    let st = [];
    let res = "";
    const tokenizedExpression = expression.split('');

    tokenizedExpression.forEach((c, index) => {
        if (helpMethods.isOperator(c)) {
            while (st.length !== 0 && st[st.length - 1] !== '(' &&
                precedence(c) <= precedence(st[st.length - 1])) {
                res += st.pop();
                res += ',';
            }
            st.push(c);
        }
        else if (c === '(') {
            st.push(c);
        }
        else if (c === ')') {
            while (st.length !== 0 && st[st.length - 1] !== '(') {
                res += st.pop();
                res += ',';
            }
            st.pop();
        }
        else {
            res += c;
            if (index === tokenizedExpression.length - 1) {
                res += ',';
            } else {
                let next_char = tokenizedExpression[index + 1];
                if (!(next_char >= '0' && next_char <= '9' || next_char === '.')) {
                    res += ',';
                }
            }
        }
    })

    while (st.length) {
        res += st.pop();
        res += ',';
    }


    if (res.at(res.length - 1) === ',') {
        res = res.slice(0, -1);
    }

    return res;
}