(function() {

    let deckId = "";

    function getNewDeck() {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            return response.json()
             }) //change response to json
        .then(data =>{
            deckId = data.deck_id;
           //draw 5 cards
           drawCards(deckId, 5);
        })
        .catch(error => console.error('Error fetching cards:', error));
    }

    function drawCards(deckId) {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
        .then(response => {
           return response.json();
          })
        .then(data => {
          displayCards(data.cards);
        })
        .catch(error => console.error('Error drawing cards:', error));
    }

    function displayCards(cards) {
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = "";

        cards.forEach(card => {
            const imgElement = document.createElement('img');
            imgElement.src = card.image;
            //imgElement.alt = `The ${card.value} of ${card.suit}`; ---- added because cards not displaying wanted to see if it was working
            cardsContainer.appendChild(imgElement);
        });
    }
  
    getNewDeck();
  
})();
    //let deckID;
    //const cardURL = 'https://deckofcardsapi.com';
//get the tag
//ids
//const imgTag = document.getElementById();
//classes
//const imgTag = document.getElementsByClassName();
//tag

//modify
//document.getElementsByTagName("img");
//console.log(imgTags)
//imgTags[0].src="https://deckofcardsapi.com/static/img/2D.png";

