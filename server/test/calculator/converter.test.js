const converter = require('root-require')('src/calculator/converter');
const assert = require('assert').strict;

describe("converter tests", function () {
    it("should return correct postfix sequence", function () {
        assert.equal(converter.infixToPostfix('(135*4)/6'), '135,4,*,6,/');
    });
})