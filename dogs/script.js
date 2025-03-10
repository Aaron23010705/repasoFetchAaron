

// consultar la api de dragon ball utilizando fetch

const getDog = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
console.log( data.items)
        data.items.forEach(character => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="${character.image}" alt="${character.name}" class="w-32 aspect-square object-cover">

                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${character.name}</h2>
                        <p class="text-gray-700">${character.description}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};


const getDog2 = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getDog();
getDog2();