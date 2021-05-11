import express from 'express';

const routes = express.Router();

let toppings:string[]=[
    "Pepperoni",
    "Sausage",
    "Chicken",
    "Mushroom",
    "Olive",
    "Green Pepper",
    "Onion",
    "Banana Pepper",
    "Anchovies",
    "Pineapple"
]

routes.get('/', (req, res) => {
    res.render('custom-pizza', { toppings });
});


routes.post('/confirmation', (req, res) => {
    const custom = req.body;
    let price:number = 0;
    let freeDelivery:boolean = false;
    if (custom.size === "small"){
        price = 7 + custom.toppings * .5
    } else if (custom.size === "medium") {
        price = 10 + custom.toppings;
    } else {
        price = 12 + custom.toppings * 1.25;
    }
    if (custom.glutenfree){
        price += 2;
    }
    if (price >= 15) {
        freeDelivery = true;
    } 
    
    
    res.render('custom-pizza-confirmation', { custom, price, freeDelivery });
});

export default routes;