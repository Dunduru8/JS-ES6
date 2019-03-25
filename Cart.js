const goods = [
    {
      "id": 1,
      "Name": "Hoodie",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_1.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_1_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_1.jpg",
      "Price": 35.7,
      "color": "black",
      "category": "men",
      "material": "cotton",
      "brand": "Mango"
    },
    {
      "id": 2,
      "Name": "Coat",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_2.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_2_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_2.jpg",
      "Price": 150,
      "color": "black",
      "category": "men",
      "material": "cotton",
      "brand": "Chloi"
    },
    {
      "id": 3,
      "Name": "Jacket",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_3.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_3_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_3.jpg",
      "Price": 55.45,
      "color": "navy blue",
      "category": "men",
      "material": "cotton",
      "brand": "Diesek"
    },
    {
      "id": 4,
      "Name": "T-shirt",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_4.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_4_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_4.jpg",
      "Price": 25.5,
      "color": "gray",
      "category": "men",
      "material": "cotton",
      "brand": "Bakery"
    },
    {
      "id": 5,
      "Name": "Sweater",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_5.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_5_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_5.jpg",
      "Price": 55,
      "color": "gray",
      "category": "men",
      "material": "akril",
      "brand": "Oneil"
    },
    {
      "id": 6,
      "Name": "Vest",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_6.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_6_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_6.jpg",
      "Price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "polyester",
      "brand": "Versache"
    },
    {
      "id": 7,
      "Name": "Jacket",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_7.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_7_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_7.jpg",
      "Price": 50.25,
      "color": "light blue",
      "category": "men",
      "material": "cotton blend",
      "brand": "Quiksilve"
    },
    {
      "id": 8,
      "Name": "Coat",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_8.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_8_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_8.jpg",
      "Price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "cotton",
      "brand": "Guccy"
    },
     {
      "id": 9,
      "Name": "Vest",
      "img": "https://student-geekbrains.000webhostapp.com/img/Product_6.jpg",
      "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_6_small.jpg",
      "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_6.jpg",
      "Price": 50.25,
      "color": "blue",
      "category": "men",
      "material": "polyester",
      "brand": "Versache"
    }
    ];

const buildItemDiv = (img, Name, Price,) => {
    return `<div class="featured_items_box"><a href = "#"><img src = ${img}></a><h2 class = "items_list_text">${Name}</h2><p class = "items_list_price">${Price}</p><div class = "add_tocard"><a href= "#">Add to card</a></div></div>`
    }

const buildCatalog = (list) => {
    let goodsList  = list.map(item => buildItemDiv(item.img, item.Name, item.Price));
    const goodsListJoin = goodsList.join("");
    document.getElementById("goods").innerHTML = goodsListJoin;
    }

buildCatalog(goods);
