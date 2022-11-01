module.exports.isOperator = function(token) {
    const operators = ['+', '-', '/', '*'];
    return operators.includes(token);
}