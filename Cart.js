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

function sendRequest(url) {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);           
        xhr.send();
 
        xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
          if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
            console.log(JSON.parse(xhr.responseText))
          } else {
              reject();
          }
        }
      }
       
    });
};                                         //функция для отправки запроса на сервер

const API_URL = "http://localhost:3000";       

class ItemList{
 constructor(){
        this.items = [];
    }
    fetchItems(){  
        return sendRequest(`${API_URL}/goods`).then ((items) => {this.items = items.map(item => new CatalogItem(item.img, item.name, item.price))
                
               });
        };             
      
    
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
}
const items = new ItemList();
items.fetchItems().then(() => {
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
        this.items = [];  
        return sendRequest(`${API_URL}/cart`).then ((items) => {this.items = items.map(item => new CartDropItem(item.thumb, item.name, item.price, item.quantity))
        });
    };        
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
};

//const cartItems = new CartList();
//cartItems.fetchCartItems().then(() => {
//document.getElementById("empty_Cart).innerHTML = items.render();
//});



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
        this.items = [];  
        return sendRequest(`${API_URL}/cart`).then ((items) => {this.items = items.map(item => new CartDropItem(item.thumb, item.name, item.price))
        });
    };        
    
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
};

//const cartDropItems = new CartDropList();
//cartDropItems.fetchCartDropItems().then(() => {
//document.getElementById("empty_Cart").innerHTML = items.render();
//});
