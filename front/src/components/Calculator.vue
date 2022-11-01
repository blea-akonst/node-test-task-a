<template>
  <div class="row">
    <div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mx-auto bg-dark rounded-3 shadow-sm p-3">
      <input class="form-control form-control-lg text-success" v-model="calculator.displayValue" disabled />
      <div class="row g-0 text-center mt-2">
        <div class="col-auto text-white">
          <div class="row g-1 g-lg-1">
            <div v-for="(key,i) in keypad" :key="i" class="ms-auto col-3 py-2">
              <button class="btn btn-dark text-warning w-100" @click="processKey(key.value)">{{ key.label }}</button>
            </div>
            <div class="col-6 pt-2">
              <button class="btn btn-dark border-secondary btn-lg text-warning w-100 fw-bold lead" @click="processKey('=')">=</button>
            </div>
            <div class="col-12">
              <div v-if="errValue" class="alert alert-warning p-2 text-truncate small" role="alert">
                {{ errValue }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {server} from "@/helper";
import axios from "axios";

export default {
  name: "Calculator",
  data () {
    return {
      calculator: {
        displayValue: '',
      },
      errValue: null,
      keypad: [
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: 'x', value: '*'},

        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '+', value: '+'},

        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '-', value: '-'},

        {label: ')', value: ')'},
        {label: '.', value: '.'},
        {label: '0', value: 0},
        {label: '/', value: '/'},

        {label: '(', value: '('},
        {label: 'AC', value: 'AC'},
      ],
    }
  },
  methods: {
    resetCalculator() {
      this.calculator.displayValue = '';
    },
    inputDigit(digit) {
      this.calculator.displayValue += digit;
    },

    processKey(val) {
      this.errValue = null;

      switch(val) {
        case 'AC':
          this.resetCalculator();
          break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case "(":
        case ")":
        case "+":
        case "-":
        case "/":
        case "*":
        case ".":
          this.inputDigit(val)
          break;
        case "=":
          this.getExpressionResult();
          break;
        default:
          this.errValue = 'INCORRECT EXPRESSION'
      }
    },
    getExpressionResult() {
      axios.get(`${server.baseURL}/get-result`, { params: {expression: this.calculator.displayValue}})
          .then(
              (response) => {
                const answer = response.data.result;
                if (answer === null) {
                  this.errValue = 'SOLVING ERROR';
                }

                this.calculator.displayValue = answer;
              },
              (error) => {
                console.log(error);
              },
          );
    },
  }
}

</script>

<style scoped>

</style>