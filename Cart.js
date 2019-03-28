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

class ItemList{
    constructor(){
        this.items = [];
    }
    fetchItems(){               //потом здесь будет запрос на сервер 
        this.items = [
      {
      "id": 1,
      "name": "Hoodie",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_1.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_1_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_1.jpg",
      "price": 35.7,
      "color": "black",
      "category": "men",
      "material": "cotton",
      "brand": "Mango"
      },
      {
      "id": 2,
      "name": "Coat",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_2.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_2_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_2.jpg",
      "price": 150,
      "color": "black",
      "category": "men",
      "material": "cotton",
      "brand": "Chloi"
      },
      {
      "id": 3,
      "name": "Jacket",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_3.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_3_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_3.jpg",
      "price": 55.45,
      "color": "navy blue",
      "category": "men",
      "material": "cotton",
      "brand": "Diesek"
      },
      {
      "id": 4,
      "name": "T-shirt",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_4.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_4_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_4.jpg",
      "price": 25.5,
      "color": "gray",
      "category": "men",
      "material": "cotton",
      "brand": "Bakery"
      },
      {
      "id": 5,
      "name": "Sweater",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_5.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_5_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_5.jpg",
      "price": 55,
      "color": "gray",
      "category": "men",
      "material": "akril",
      "brand": "Oneil"
      },
      {
      "id": 6,
      "name": "Vest",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_6.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_6_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_6.jpg",
      "price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "polyester",
      "brand": "Versache"
      },
      {
      "id": 7,
      "name": "Jacket",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_7.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_7_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_7.jpg",
      "price": 50.25,
      "color": "light blue",
      "category": "men",
      "material": "cotton blend",
      "brand": "Quiksilve"
      },
      {
      "id": 8,
      "name": "Coat",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_8.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_8_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_8.jpg",
      "price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "cotton",
      "brand": "Guccy"
      },
      {
      "id": 9,
      "name": "Vest",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_6.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_6_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_6.jpg",
      "price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "polyester",
      "brand": "Versache"
      }

        ];
        
        this.items = this.items.map(item => new CatalogItem(item.img, item.name, item.price))
    }
    render () {
       const itemsHtmls = this.items.map(item => item.render());
       return itemsHtmls.join("");  
    }
    summPrice() {
        let sum = 0;
        const itemsSummPrice = this.items.forEach(function(item){
        sum += +item.price;   
        });
        return sum;   //подчсет общей стоимости товара      
    }  
}
const items = new ItemList();
items.fetchItems();

document.getElementById("goods").innerHTML = items.render();
document.getElementById("goodsSummPrice").innerHTML = items.summPrice();



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
