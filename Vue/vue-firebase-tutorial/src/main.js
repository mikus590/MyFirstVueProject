// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


  // Initialize Firebase
  let app;
  var config = {
    apiKey: "AIzaSyBjiCzQ7xKL0X2eKQce1CRADrKI4qoJ9fU",
    authDomain: "vue-firebase-tutorial-80797.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-80797.firebaseio.com",
    projectId: "vue-firebase-tutorial-80797",
    storageBucket: "vue-firebase-tutorial-80797.appspot.com",
    messagingSenderId: "688385298827"
  };
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
