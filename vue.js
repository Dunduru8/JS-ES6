const API_URL = "http://localhost:3000";


Vue.component("catalog_item", {
    props: ["item"],
    template: `<div class = "featured_items_box">
                 <a href = "#"><img v-bind:src = "item.img"></a>
                 <h2 class = "items_list_text">{{item.name}}</h2>
                 <p class = "items_list_price">{{item.price}}</p>
                 <div class = "add_tocard"><a href= "#" @click.prevent="handleBuyClick(item)">Add to card</a></div>
               </div>`,
    
    methods: {
      handleBuyClick(item) {
        this.$emit("onBuy", item);
      }
    }           
});

Vue.component ("catalog", {
  props: ["query"],
  methods: {
    handleBuyClick(item){
      this.$emit("onbuy", item);
    }
  },
  data() {
    return {
      items: [],
    };
  },

  computed: {
    filteredItems() {
      if(this.query){
        const search = new RegExp(this.query, "i");
        return this.items.filter((item) => search.test(item.name))
      } else {
        return this.items;
      }
    }
  },

  mounted () {
    fetch (`${API_URL}/goods`)
    .then(response => response.json())
    .then((items) => {
      this.items = items;
    });
  },
  template: `<div class= "produkts_items_img" id = "goods">
               <catalog-item v-for="entry in filteredItems" :item="entry" @onBuy="handleBuyClick">
               </catalog-item>
              </div>`,

});

Vue.component("cart_item", {
  props: ["item"],
  template: `div v-for="item in cart" class= "item_in_cart">
               <a href="#"><img v-bind:src = "item.thumb" alt="item_in_cart"></a>
               <div class= "about_item">
                 <h3 class="name_item">{{item.name}}</h3>
                 <div class= "stars"><a href="#"><img src="https://student-geekbrains.000webhostapp.com/img/stars.jpg" alt="stars"></a></div>
                 <div  class="item_price_cart">{{item.price}} {{item.quantity}}</div>
               </div>
               <div class="delit_items">
                 <a href="#" @click.prevent="handleDeleteClick(item)"><img src="https://student-geekbrains.000webhostapp.com/img/del.png" alt="del"></a>
               </div>
             </div>`,

  methods:{
    handleDeleteClick(item){
      this.$emit("onDel", item);
    }
   },

  });

  Vue.component("cart_drop_list", {
   props: ["drop"],
   
   template: `<div id = "empty_Cart">
                <cart_item v-for="entry in cart" :item="entry" @onDel="handleDeleteClick"> </cart_item>
              </div>`, 
   data() {
    return {
      cart: [],
      };
    },
  mounted() {
    fetch(`${API_URL}/cart`)
    .then(response => response.json())
    .then((items) => {
      this.cart = items;
     });
  },

  methods: { 
    handleDeleteClick(item) {
    this.$emit("ondel", item);
      }
  },

  });

  const app = new Vue({
    el: "#vue",
    data: {
      cart:[],
      searchQuery: "",
      filterValue: "",
    },
    methods: {
      
      handleSearchClick() {
        this.filterValue = this.searchQuery;
      },
  
      handleBuyClick(item) {
        const cartItem = this.cart.find((entry) => entry.id === item.id);
        if (cartItem) {
          // товар в корзине уже есть, нужно увеличить количество
          fetch(`${API_URL}/cart/${item.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: cartItem.quantity + 1 }),
          })
            .then((response) => response.json())
            .then((item) => {
              const itemIdx = this.cart.findIndex((entry) => entry.id === item.id);
              Vue.set(this.cart, itemIdx, item);
            });
        } else {
          // товара в корзине еще нет, нужно добавить
          fetch(`${API_URL}/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...item, quantity: 1 })
          })
            .then((response) => response.json())
            .then((item) => {
              this.cart.push(item);
            });
        }
      },
    
     
     handleDeleteClick(item) {
        if (item.quantity > 1) {
         fetch(`${API_URL}/cart/${item.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: item.quantity - 1 }),
         })
          .then((response) => response.json())
          .then((item) => {
            const itemIdx = this.cart.findIndex((entry) => entry.id === item.id);
            Vue.set(this.cart, itemIdx, item);
          });
       } else {
          fetch(`${API_URL}/cart/${item.id}`, {
            method: "DELETE",
          })
          .then(() => {
            this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
          });
      }
     } 
  }, 
  computed: {
    total() {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }
  }
  })
  
  