import express from 'express';

const routes = express.Router();

let toppings:string[]=[
    "Pepperoni",
    "Mushroom",
    "Olive",
    "Moon Rock",
    "Green Pepper",
    "Onion",
    "Banana Pepper",
    "Stardust",
    "Anchovies",
    "Pineapple"
]

routes.get('/', (req, res) => {
    res.render('custom-pizza', { toppings });
});


routes.post('/confirmation', (req, res) => {
    const custom = req.body;
    let price:number = 0.00;
    let freeDelivery:boolean = false;
    let toppings:number = Number(custom.toppings);
    let gf:string = "no";
    if (custom.size === "small"){
        price = 7 + toppings * .5
    } else if (custom.size === "medium") {
        price = 10 + toppings;
    } else {
        price = 12 + toppings * 1.25;
    }
    if (custom.glutenfree){
        price += 2;
        gf = "yes";
    } 
    if (price >= 15) {
        freeDelivery = true;
    } 
    let displayPrice:string = price.toFixed(2);
    
    res.render('custom-pizza-confirmation', { custom, displayPrice, freeDelivery, gf });
});

export default routes;