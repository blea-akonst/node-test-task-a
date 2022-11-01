<template>
  <div class="home">
    <img alt="Maths" src="../assets/math_pic.png" />
    <h1 id="calc-header">Test task: Calculator on Node.js</h1>
    <Calculator></Calculator>
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
export default {
  name: 'Home',
  components: {Calculator},
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home #calc-header {
  margin: 40px 0 60px;
}
a {
  color: #42b983;
}
</style>
