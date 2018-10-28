<template>
  <div class="login margin-top-large">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn">Connection</button>
    <p class="margin-top-large">You don't have an account ? You can <router-link to="/sign-up">create one!</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'login',
  data: function(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>

<style scoped>

input{
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button{
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p{
  font-size: 13px;
}

p a{
  text-decoration: underline;
  cursor: pointer;
}
.margin-top-large{
  margin-top: 40px;
}
</style>
