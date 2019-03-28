class CatalogItem{
    constructor(img, name, price){
        this.img = img;
        this.name = name;
        this.price = price;
    }
    
    render(){
        return `<div class="featured_items_box"><a href = "#"><img src = ${this.img}></a><h2 class = "items_list_text">${this.name}</h2><p class = "items_list_price">${this.price}</p><div class = "add_tocard"><a href= "#">Add to card</a></div></div>`
    }
}

function sendRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);           
    xhr.send();

    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        callback(JSON.parse(xhr.responseText));
      }
    }
  };                                         //функция для отправки запроса на сервер

const API_URL = "http://localhost:3000";       //http://localhost:3000/goods ???

class ItemList{
 constructor(){
        this.items = [];
    }
    fetchItems(callback){               
        sendRequest(`${API_URL}/goods`, (items) => {
        this.items = items.map(item => new CatalogItem(item.img, item.name, item.price));
        callback();
        });
    }
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
}
const items = new ItemList();
items.fetchItems(() => {
    document.getElementById("goods").innerHTML = items.render();
  });






// классы для страницы корзины

class CartItem{
    constructor(thumb, name, price, quantity){
        this.thumb = thumb;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    render(){
        return `<div class="item_in_cart><a href="#"><img src= ${this.thumb} alt="item_in_cart"></a><div class="about_item"><h3 class="name_item">${this.name}</h3><div class="stars"><a href="#"><img src="https://student-geekbrains.000webhostapp.com/img/stars.jpg"></a><div class="item_price_cart">${this.price}</div></div><div class="item_quantity">${this.quantity}</div></div><div class "delit_item"><a href="#"><img src="https://student-geekbrains.000webhostapp.com/img/del.png"></a></div></div>"`
    }
    delItem(){
        
    }
    changeQuantity(){
        
    }
};

class CartList{
    constructor(){
        this.items = [];
    }
    fetchCartItems(){
        this.items = [];  //TODO запрос на сервер
        this.items = this.items.map(item => new CartDropItem(item.thumb, item.name, item.price, item.quantity))
    }
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
};

//const cartItems = new CartList();
//cartItems.fetchCartItems();

//document.getElementById("cart").innerHTML = cartItems.render();


//классы для выпадающей корзины


class CartDropItem{
    constructor(thumb, name, price, quantity){
        this.thumb = thumb;
        this.name = name;
        this.price = price;
    }
    render(){
        return `<div class="item_in_cart><a href="#"><img src= ${this.thumb} alt="item_in_cart"></a><div class="about_item"><h3 class="name_item">${this.name}</h3><div class="stars"><a href="#"><img src="https://student-geekbrains.000webhostapp.com/img/stars.jpg"></a><div class="item_price_cart">${this.price}</div></div></div><div class "delit_item"><a href="#"><img src="https://student-geekbrains.000webhostapp.com/img/del.png"></a></div></div>"`
    }
    delItem(){
        
    }
};

class CartDropList{
    constructor(){
        this.items = [];
    }
    fetchCartDropItems(){
        this.items = [];  //TODO запрос на сервер
        this.items = this.items.map(item => new CartDropItem(item.thumb, item.name, item.price))
    }
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
};

//const cartDropItems = new CartDropList();
//cartDropItems.fetchCartDropItems();

//document.getElementById("cart").innerHTML = cartDropItems.render();
