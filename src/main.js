import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyDu8ux4w_hPl0DYmoEjDL5RDhfHOJ7diEw",
  authDomain: "my-address-pj-1806f.firebaseapp.com",
  databaseURL: "https://my-address-pj-1806f.firebaseio.com",
  projectId: "my-address-pj-1806f",
  storageBucket: "my-address-pj-1806f.appspot.com",
  messagingSenderId: "189060973197",
  appId: "1:189060973197:web:2678a46ee2c200e5"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
