const app = Vue.createApp({
  //Create functions, data
  //template: "<h2>This is my template...</h2>"
  data(){
    return {
      title: 'The Ledger',
      author: 'Almario Guzman III',
      age: 19
    }
  }
}
);

app.mount('#app')
