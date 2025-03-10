const getCatFacts = async () => {
    try {
        const res = await fetch('https://catfact.ninja/fact');
        if (!res.ok) throw new Error('Error al obtener los fun fact de los gatitos');

        const data = await res.json();
        const CardsParent = document.getElementById('cards');

        // Create a new div for the fact
        const factCard = document.createElement('div');
        factCard.innerHTML = `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-2">${data.fact}</h2>
            </div>
        `;

        CardsParent.appendChild(factCard);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
};

const getCatFacts2 = () => {
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
};

getCatFacts();
getCatFacts2();