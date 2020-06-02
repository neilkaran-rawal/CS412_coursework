// Testing with Mocha/Chai -- at least three unit tests on each function/problem

const {describe, it} = require('mocha'); //mocha.js.org js docs (runner)
const{expect} = require('chai') // chai.js.com for docs (individual tests)

// Functions we are testing

const alphabetical_order = (str) => str.split('').sort().join('');

const evaluate = (str) => {
    let operator = str.charAt(1);
    switch(operator){
        case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
    }
}

// Problem 1 Unit Test
describe('alphabetical order string test' , () => {
    //Setup individual unit tests
    it('should return aaacccdeefgiiiiiiillloopprrssstuux for input of supercalifragilisticexpialidocious', function() {
       let res = alphabetical_order("supercalifragilisticexpialidocious");
       expect(res).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should return string for input of string', function() {
        let res = alphabetical_order("supercalifragilisticexpialidocious");
        expect(res).to.be.a('string');
    });
    it('should return abc for input of bca', function() {
        let res = alphabetical_order("bca");
        expect(res).to.be.equal('abc');
    });
})

// Problem 2 Unit Test

describe('math operations test' , () => {
    //Setup individual unit tests
    it('should return 6 when adding 4 and 2', function() {
        const expression = '4+2';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('6');
    });
    it('should return 35 when multiplying 5 and 7', function() {
        const expression = '5*7';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('35');
    });
    it('should return 5 when subtracting 6 and 1', function() {
        const expression = '6-1';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('5');
    });
})

// Problem 3 Unit Test