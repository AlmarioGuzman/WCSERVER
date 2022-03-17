
const books = Vue.createApp ({
  data(){
    return {
      showBooks: true,
      btitle: 'The Ledger',
      bauthor: 'Almario Guzman III',
      year: 2022
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
}
);
books.mount('#books')
