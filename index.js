const fs = require ("fs");

fs.readFile ("./db/goods.json",  "utf-8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    const goods = JSON.parse(data);
    goods.push({
    "id": 10,
    "name": "Sweater",
    "img": "https://student-geekbrains.000webhostapp.com/img/Product_5.jpg",
    "thumb": "https://student-geekbrains.000webhostapp.com/img/Product_5_small.jpg",
    "singl": "https://student-geekbrains.000webhostapp.com/img/Product_single_item_5.jpg",
    "price": 55.35,
    "color": "gray",
    "category": "men",
    "material": "akril",
    "brand": "Oneil"
    });
    fs.writeFile ("./db/goods.json", JSON.stringify(goods), () => {
        
    })
});
