const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) throw new Error('Error al obtener los fun fact de los gatitos');

        const data = await res.json();
        const CardsParent = document.getElementById('cards');



        // Create a new div for the fact}
        if (data.type == "single") {
        const jokeCardSingle = document.createElement('div');
        jokeCardSingle.innerHTML = `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-2">category:${data.category}</h2>
             <h2 class="text-xl font-bold mb-2">type: ${data.type}</h2>
                <h2 class="text-xl font-bold mb-2">Joke: ${data.joke}</h2>  
                             <h2 class="text-xl font-bold mb-2">Is it safe? : ${data.safe}</h2>
                        
                      <h2 class="text-xl font-bold mb-2">languaje: ${data.lang}</h2>
            </div>
        `;

        CardsParent.appendChild(jokeCardSingle);
        } 

        else {
            const joke = document.createElement('div');
            joke.innerHTML = `
                <div class="p-4">
                    <h2 class="text-xl font-bold mb-2">category:${data.category}</h2>
                 <h2 class="text-xl font-bold mb-2">type:${data.type}</h2>
                    <h2 class="text-xl font-bold mb-2">setup:${data.setup}</h2>
                    <h2 class="text-xl font-bold mb-2">delivery: ${data.delivery}</h2>
                                                        <h2 class="text-xl font-bold mb-2">safe: ${data.safe}</h2>

                                    <h2 class="text-xl font-bold mb-2">lang: ${data.lang}</h2>
    
    
                </div>
            `;
            CardsParent.appendChild(joke);

        }
    } catch (error) {
        console.error("Error:", error.message);
    }
};

const getJoke2 = () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
};

getJoke();
getJoke2();