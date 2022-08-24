function calculateIngredient() {
    
    let x = +document.getElementById('input').value;

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