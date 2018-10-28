<template>
  <div class="hello margin-top-large">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <br>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="htttps://vuejs.org" target="_blank">Core Docs</a></li>
    </ul>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default{
  name: 'hello',
  data: function(){
    return{
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() =>{
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style scoped>

.margin-top-large{
  margin-top: 40px;
}
button{
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
</style>
