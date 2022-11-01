const solver = require('root-require')('src/calculator/solver');
const assert = require('assert').strict;

describe("solver tests", function () {
    it("should return correct answer for math expression - 90", function () {
        assert.equal(solver.solveExpression('(135*4)/6'), 90);
    });

    it("should return correct answer for math expression - 60", function () {
        assert.equal(solver.solveExpression('100*0.6'), 60);
    });

    it("should return correct answer for math expression - 606", function () {
        assert.equal(solver.solveExpression('(100*5)/(10-6)+13*37'), 606);
    });

    it("should return null because of zero division", function () {
        assert.equal(solver.solveExpression('5/0'), null);
    });
})