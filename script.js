async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}



function calc() {
    let number = +document.getElementById('input-field-number').value;

    if (number < 1 || number >= 1000.99) {
        alert("Wert muss größer als 1 und kleiner als 1000 sein.")
    } else {
        let Süßkartoffel = 150 * number;
        Süßkartoffel = Süßkartoffel.toFixed(0)

        let Paprikaschote = 0.33 * number;
        Paprikaschote = Paprikaschote.toFixed(2)

        let Knoblauchzehe = 0.67 * number;
        Knoblauchzehe = Knoblauchzehe.toFixed(2)

        let Zwiebel = 0.67 * number;
        Zwiebel = Zwiebel.toFixed(2)

        let Olivenöl = 0.33 * number;
        Olivenöl = Olivenöl.toFixed(2)

        let Tomatenmark = 0.67 * number;
        Tomatenmark = Tomatenmark.toFixed(2)

        let Currypulver = 0.67 * number;
        Currypulver = Currypulver.toFixed(2)

        let Kurkuma = 0.67 * number;
        Kurkuma = Kurkuma.toFixed(2)

        let Garam = 0.33 * number;
        Garam = Garam.toFixed(2)

        let Linsen = 66.7 * number;
        Linsen == Linsen.toFixed(2)
        if (Linsen >= 133) {
            Linsen = Number(Linsen).toFixed(0)
        }
        let Kokosmilch = 167 * number;
        Kokosmilch = Kokosmilch.toFixed(0)

        let Gemüsebrühe = 83.3 * number;
        Gemüsebrühe = Gemüsebrühe.toFixed(2)
        if (Gemüsebrühe >= 160) {
            Gemüsebrühe = Number(Gemüsebrühe).toFixed(0)
        }

        if (number == 3 || number == 6 || number == 9 || number == 12 || number == 15) {
            Paprikaschote = Number(Paprikaschote).toFixed(0)
            Knoblauchzehe = Number(Knoblauchzehe).toFixed(0)
            Zwiebel = Number(Zwiebel).toFixed(0)
            Olivenöl = Number(Olivenöl).toFixed(0)
            Tomatenmark = Number(Tomatenmark).toFixed(0)
            Currypulver = Number(Currypulver).toFixed(0)
            Kurkuma = Number(Kurkuma).toFixed(0)
            Garam = Number(Garam).toFixed(0)
            Kokosmilch = Number(Kokosmilch) / 10
            Kokosmilch = Math.round(Number(Kokosmilch)) * 10
        }

        document.getElementById('ingredients-table').innerHTML =
            `<tr>
            <td> ${Süßkartoffel} g Süßkartoffel(n) </td>
        </tr>
        <tr>
            <td>${Paprikaschote} große Paprikaschote(n)</td>
        </tr>
        <tr>
            <td>${Knoblauchzehe} Knoblauchzehe(n)</td>
        </tr>
        <tr>
            <td>${Zwiebel} große Zwiebel(n)</td>
        </tr>
        <tr>
            <td>${Olivenöl} EL Olivenöl</td>
        </tr>
        <tr>
            <td>${Tomatenmark} EL Tomatenmark</td>
        </tr>
        <tr>
            <td>${Currypulver} TL Currypulver</td>
        </tr>
        <tr>
            <td>${Kurkuma} TL Kurkuma</td>
        </tr>
        <tr>
            <td>${Garam} TL Garam Masala</td>
        </tr>
        <tr>
            <td>Salz und Pfeffer</td>
        </tr>
        <tr>
            <td>${Linsen} g rote Linsen</td>
        </tr>
        <tr>
            <td>${Kokosmilch} ml Kokosmilch</td>
        </tr>
        <tr>
            <td>${Gemüsebrühe} ml Gemüsebrühe</td>
        </tr>`;
    }
}



function calculateIngredient() {

    let x = +document.getElementById('input').value;


    let beef = (250 * x);
    let onions = (1 * x);
    let ketchup = (0.75 * x);
    let mustard = (0.5 * x);
    let pepper = (0.5 * x);
    let salt = (0.5 * x);
    let oregano = (0.5 * x);
    let cheaddar = (1 * x);
    let bacon = (100 * x);
    let buns = (2 * x);

    document.getElementById('beef').innerHTML = `${beef} g Rindfleisch`;
    document.getElementById('onions').innerHTML = `${onions} EL Zwiebel`;
    document.getElementById('ketchup').innerHTML = `${ketchup} EL Ketchup`;
    document.getElementById('mustard').innerHTML = `${mustard} EL Senf`;
    document.getElementById('pepper').innerHTML = `${pepper} TL Pfeffer`;
    document.getElementById('salt').innerHTML = `${salt} TL Salz `;
    document.getElementById('oregano').innerHTML = `${oregano} TL Oregano`;
    document.getElementById('cheddar').innerHTML = `${cheaddar} Cheddar`;
    document.getElementById('bacon').innerHTML = `${bacon} Pck Bacon`;
    document.getElementById('buns').innerHTML = `${buns} Hamburgerbrötchen`;

}



function calculateIngredientShake() {

    let x = +document.getElementById('input-shake').value;

    if (x <= 0) {
        alert('Du hast doch Hunger oder?')
    }
    else {
        if (x >= 10) {
            alert('Übertreib mal nicht...')
        }
        else {
            let protein = (30 * x);
            let milk = (350 * x);
            let ice = (2 * x);
            let oats = (1 * x);
            let bananas = (1 * x);
            let strawberrys = (100 * x);
            let oil = (1 * x);
            let peanuts = (1 * x);

            document.getElementById('pPowder').innerHTML = `${protein}g Proteinpulver`;
            document.getElementById('milk').innerHTML = `${milk}ml Milch`;
            document.getElementById('ice').innerHTML = `${ice} Esslöffel Eiscreme`;
            document.getElementById('oats').innerHTML = `${oats} Hand voll Haferflocken`;
            document.getElementById('bananas').innerHTML = `${bananas} Banane (n)`;
            document.getElementById('strawberrys').innerHTML = `${strawberrys}g Hand voll Erdbeeren`;
            document.getElementById('oil').innerHTML = `${oil} Esslöffel natives Walnussöl`;
            document.getElementById('peanuts').innerHTML = `${peanuts} Esslöffel Erdnussbutter`;
        }
    }
}



function calculateIngredientPasta() {
    
    let x = +document.getElementById('input-pasta').value;

    if (x <= 0) {
        alert('Wert darf nicht weniger als 0 sein.')
    }

    else {
        if (x >= 10) {
            alert('Sind sie sicher, dass sie so viele Portionen benötigen?')
        }
    

        else {
            let spinat = (200 * x);
            let gewürz = (1 * x);
            let hefeflocken = (1 * x);
            let nuss = (25 * x);
            let paprikapulver = (1 * x);
            let peperoni = (1 * x);
            let knoblauch = (1 * x);
            let paprika = (1 * x);
            let penne= (200 * x);

            document.getElementById('spinat').innerHTML = `${spinat}g Babyspinat`; 
            document.getElementById('gewürz').innerHTML = `${gewürz} Päckchen Gemüsebrühgewürz`;
            document.getElementById('hefeflocken').innerHTML = `${hefeflocken} Päckchen Hefeflocken`;
            document.getElementById('nuss').innerHTML = `${nuss}g Pekannusskerne`
            document.getElementById('paprikapulver').innerHTML = `${paprikapulver} Päckchen geräuchtes Paprikapulver`;
            document.getElementById('peperoni').innerHTML = `${peperoni} rote Peperoni`;
            document.getElementById('knoblauch').innerHTML = `${knoblauch} Knoblauchzehe`;
            document.getElementById('paprika').innerHTML = `${paprika} rote Paprika`
            document.getElementById('penne').innerHTML = `${penne}g Penne`
    
        }

    }

}



function showMenu() {
    document.getElementById('menu').classList.add('show-overlay-menu');
    document.getElementById('show-menu').classList.add('d-none');
    document.getElementById('close-menu').classList.remove('d-none');

}



function closeMenu() {
    document.getElementById('menu').classList.remove('show-overlay-menu');
    document.getElementById('close-menu').classList.add('d-none');
    document.getElementById('show-menu').classList.remove('d-none');

}



function onloadCurry() {
    includeHTML();
    calc();
}



function onloadBurger() {
    includeHTML();
    calculateIngredient();
}



function onloadShake() {
    includeHTML();
    calculateIngredientShake();
}



function onloadPasta() {
    includeHTML();
    calculateIngredientPasta();
}