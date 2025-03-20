document.addEventListener("DOMContentLoaded", function () {
    const pizzaSelects = document.querySelectorAll(".pizza-select");
    const totalPriceElement = document.getElementById("total-price");
    const resetButton = document.getElementById("reset-button");

    const prices = {
        "margherita": 65,
        "pepperoni": 75,
        "hawaiian": 75,
        "ranch_chicken": 85,
        "supreme": 90,
        "veggie_lovers": 75,
        "Mushroom": 95,
        "squid": 95
    };

    function calculateTotal() {
        let total = 0;

        pizzaSelects.forEach(select => {
            let pizzaType = select.dataset.pizza;
            let quantity = parseInt(select.value);
            total += prices[pizzaType] * quantity;
        });

        totalPriceElement.innerText = "Samlet pris: " + total + " kr";


        sessionStorage.setItem("totalPrice", total);
    }

    function resetSelections() {
        pizzaSelects.forEach(select => {
            select.value = "0";
            sessionStorage.removeItem(select.dataset.pizza);
        });

        sessionStorage.setItem("totalPrice", "0");
        totalPriceElement.innerText = "Samlet pris: 0 kr";
    }

    pizzaSelects.forEach(select => {
        const pizzaName = select.getAttribute("data-pizza");
        const savedValue = sessionStorage.getItem(pizzaName);
        if (savedValue) {
            select.value = savedValue;
        }
    });

    const savedTotal = sessionStorage.getItem("totalPrice");
    if (savedTotal) {
        totalPriceElement.innerText = "Samlet pris: " + savedTotal + " kr";
    }

    pizzaSelects.forEach(select => {
        select.addEventListener("change", function () {
            const pizzaName = this.getAttribute("data-pizza");
            const selectedValue = this.value;

            sessionStorage.setItem(pizzaName, selectedValue);
            calculateTotal();
        });
    });

    if (resetButton) {
        resetButton.addEventListener("click", resetSelections);
    }
    calculateTotal();
});
