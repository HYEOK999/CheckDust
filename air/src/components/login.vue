<template>
  <div id="air">
    <img alt="Vue logo" src="../assets/sandstorm.png">
    <h3>아이디</h3>
      <div class="w-25 p-3 mb-1" style="margin-left:37%"> 
        <b-form-input placeholder="Enter input" type="text" id="username" v-model="username"></b-form-input>
      </div>
    <h3>패스워드</h3>
      <div class="w-25 p-3 mb-1" style="margin-left:37%"> 
        <b-form-input sm="9" placeholder="Enter password" type="password" id="password" v-model="password"></b-form-input>
      </div>
    <div>
    <!-- Modal Component -->
    <b-modal
      v-model="show"
      title="회원가입"
    >
      <b-container fluid>
        <b-row class="mb-1">
          <b-col>
            <b-form-group
              id="fieldset-1"
              description="Let us know your email."
              label="Enter your email"
              label-for="input-email"
              :invalid-feedback="invalidFeedback_email"
              :valid-feedback="validFeedback_email"
              :state="email"
            >
              <b-form-input id="input-email" v-model="signEmail" :state="email" trim></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col>
            <b-form-group
              id="fieldset-2"
              description="Let us know your password."
              label="Enter your password"
              label-for="input-passwd"
              :invalid-feedback="invalidFeedback_passwd"
              :valid-feedback="validFeedback_passwd"
              :state="passwords"
            >
              <b-form-input type="password" id="input-passwd" v-model="signPasswd" :state="passwords" trim></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

        <div slot="modal-footer" class="w-100">
          <b-button
            vartiant="outline-primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>

          <b-button
            variant="outline-primary"
            size="sm"
            class="float-right"
            style="margin-right:12px"
            @click.prevent="signUpFirebase"
          >
            OK
          </b-button>
        </div>
    </b-modal>
    
      <b-button @click="show=true" style="margin-right:20px" variant="outline-primary">가입하기</b-button>
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
      password: "",
      show: false,
      signEmail: '',
      signPasswd: ''
    };
  },
  computed: {
    email() {
      return this.signEmail.length >= 4 ? true : false
    },
    passwords(){
      return this.signPasswd.length >=6 ? true : false
    },
    invalidFeedback_email() {
      if (this.signEmail.length > 4) {
        return ''
      } else if (this.signEmail.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback_email() {
      return this.email === true ? 'Thank you' : ''
    },
    invalidFeedback_passwd() {
      if (this.signPasswd.length > 5) {
        return ''
      } else if (this.signPasswd.length > 0) {
        return 'Enter at least 6 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback_passwd() {
      return this.passwords === true ? 'Thank you' : ''
    }
  },
  methods: {
    signUpFirebase(){
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.signEmail, this.signPasswd)
        .then(response => {
          this.show = false;  
          console.log(response)
        })
        .catch((error) => {
          console.log("this는? -> " + this);
          console.log(error)
        })
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
