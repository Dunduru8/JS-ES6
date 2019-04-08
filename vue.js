const app = new Vue({
    el: "#vue",
    data: {
      items: [],
      filteredItems: [],
      cart:[],
      searchQuery: ""
    },
    mounted() {
      fetch("http://localhost:3000/goods")
        .then(response => response.json())
        .then((items) => {
          this.items = items;
          this.filteredItems = items;
        });
        fetch("http://localhost:3000/cart")
        .then(response => response.json())
        .then((items) => {
          this.cart = items;
       });
    },

    methods: {
      handleSearchClick() {
        const $searchText = document.getElementById("search").value;
        const regexp = new RegExp($searchText, "i")
        this.filteredItems = filteredItems.filter((item) => regexp.test(item.name))
        }
    },
    
  })