<template>
  <div id="air">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>아이디</h3>
    <input type="text">
    <h3>패스워드</h3>
    <input type="password">
    <div>
      <b-button variant="outline-primary">가입하기</b-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  margin: 10px 0 10px 0;
}
input {
  margin: 10px 0 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#air {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
