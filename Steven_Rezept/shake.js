function calculateIngredient() {

    let x = +document.getElementById('input').value;

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