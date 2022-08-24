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