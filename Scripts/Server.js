const menuItems = `[
    {
        "Category": "Pizzas",
        "Items": [
            {"Type": "Margarita", "Price": "65kr"},
            {"Type": "Pepperoni", "Price": "75kr"},
            {"Type": "Hawaiian", "Price": "75kr"},
            {"Type": "Ranch Chicken", "Price": "85kr"},
            {"Type": "Supreme", "Price": "90kr"},
            {"Type": "Veggie Lovers", "Price": "75kr"}
        ]
    },
    {
        "Category": "Pasta",
        "Items": [
            {"Type": "Creamy Mushroom", "Price": "95kr"},
            {"Type": "Squid Scallop", "Price": "95kr"}
        ]
    },
    {
        "Category": "SoftDrinks",
        "Items": [
            {"Type": "Coca-Cola", "Price": "50kr"},
            {"Type": "Pepsi", "Price": "50kr"},
            {"Type": "Fanta", "Price": "50kr"},
            {"Type": "Sprite", "Price": "50kr"}
        ]
    },
    {
        "Category": "Sparkles",
        "Items": [
            {"Type": "Beer", "Price": "65kr"},
            {"Type": "Wine", "Price": "65kr"},
            {"Type": "Drinks", "Price": "65kr"}
        ]
    }
]`;

const menu = JSON.parse(menuItems);

