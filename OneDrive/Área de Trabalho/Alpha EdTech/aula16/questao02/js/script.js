async function drawCards() {
    const baseUrl = "https://deckofcardsapi.com/api/deck";
    let deckId;

    try {
        // Embaralhar o baralho
        const shuffleResponse = await fetch(`${baseUrl}/new/shuffle/?deck_count=1`);
        if (shuffleResponse.status !== 200) throw new Error('Falha ao embaralhar o baralho');
        const shuffleData = await shuffleResponse.json();
        deckId = shuffleData.deck_id;

        // Buscar 5 cartas sequencialmente
        for (let i = 0; i < 5; i++) {
            const cardResponse = await fetch(`${baseUrl}/${deckId}/draw/?count=1`);
            if (cardResponse.status !== 200) throw new Error(`Falha ao buscar a carta ${i + 1}`);
            const cardData = await cardResponse.json();
            displayCard(cardData.cards[0].image);
        }
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
    document.getElementById('cards').innerHTML = ''; // Limpa as cartas atuais
    drawCards();
});
