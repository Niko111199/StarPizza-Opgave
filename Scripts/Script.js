async function SetMenu(file) {
    try {
        let response = await fetch(file);
        if (!response.ok) throw new Error("Fejl ved hentning af menu.json");

        let data = await response.json();

        let e = document.getElementById("pizzas");
        data.forEach(category => {
            if (category.Category === "Pizzas") { 
                let list = `<h2>${category.Category}</h2><ul>`;
                category.Items.forEach(item => {
                    list += `<li>${item.Type} - ${item.Price}</li>`;
                });
                list += `</ul>`;
                e.innerHTML = list;
            }
        });


        let a = document.getElementById("Pasta");
        data.forEach(category => {
            if (category.Category === "Pasta"){
                let list = `<h2>${category.Category}</h2><ul>`;
                category.Items.forEach(item => {
                    list += `<li>${item.Type} - ${item.Price}</li>`;
                });
                list += `</ul>`;
                a.innerHTML = list;
            }
        })

        let b = document.getElementById("SoftDrinks");
        data.forEach(category => {
            if (category.Category === "SoftDrinks"){
                let list = `<h2>${category.Category}</h2><ul>`;
                category.Items.forEach(item => {
                    list += `<li>${item.Type} - ${item.Price}</li>`;
                });
                list += `</ul>`;
                b.innerHTML = list;
            }
        })

        let c = document.getElementById("Sparkles");
        data.forEach(category => {
            if (category.Category === "Sparkles"){
                let list = `<br> <h2>${category.Category}</h2><ul>`;
                category.Items.forEach(item => {
                    list += `<li>${item.Type} - ${item.Price}</li>`;
                });
                list += `</ul>`;
                c.innerHTML = list;
            }
        })
           
        
        

    } catch (error) {
        console.error("Fejl ved indlæsning af menu:", error);
    }
}


SetMenu("Scripts/Menu.json");
