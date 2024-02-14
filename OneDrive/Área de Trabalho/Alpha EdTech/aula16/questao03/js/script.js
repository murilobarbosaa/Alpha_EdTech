async function drawCards() {
    const baseUrl = "https://deckofcardsapi.com/api/deck";

    try {
        const shuffleResponse = await fetch(`${baseUrl}/new/shuffle/?deck_count=1`);
        if (shuffleResponse.status !== 200) throw new Error('Falha ao embaralhar o baralho');
        const shuffleData = await shuffleResponse.json();
        const deckId = shuffleData.deck_id;

        const cardPromises = Array.from({ length: 5 }, () => fetch(`${baseUrl}/${deckId}/draw/?count=1`));

        const cardResponses = await Promise.all(cardPromises);

        cardResponses.forEach(response => {
            if (response.status !== 200) throw new Error('Falha ao buscar uma das cartas');
        });

        const cardDataPromises = cardResponses.map(response => response.json());
        const cardsData = await Promise.all(cardDataPromises);

        cardsData.forEach(card => displayCard(card.cards[0].image));
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}

function displayCard(imageUrl) {
    const cardsDiv = document.getElementById('cards');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    cardsDiv.appendChild(imgElement);
}

document.getElementById('draw-cards').addEventListener('click', () => {
    document.getElementById('cards').innerHTML = '';
    drawCards();
});
