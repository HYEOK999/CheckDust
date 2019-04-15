<template>
  <div id="air">
    <img alt="Vue logo" src="../assets/sandstorm.png">
    <h3>아이디</h3>
    <input type="text" id="username" v-model="username">
    <h3>패스워드</h3>
    <input type="password" id="password" v-model="password">
    <div>
      <b-button variant="outline-primary" style="margin-right:20px" @click.prevent="signUpFirebase">가입하기</b-button>
      <b-button variant="outline-primary" @click.prevent="loginWithFirebase">로그인</b-button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data(){
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // signUpFirebase(){
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.username, this.password)
    //     .then((user) => {
    //       console.log(user)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    signUpFirebase(){
      this.$router.push("/signUp");
    },
    loginWithFirebase(){
      firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then(response => {
        console.log(response);
        this.$router.push("/main");
      })
      .catch(error => {
        console.log(error);
      })
    },
  }
};
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
