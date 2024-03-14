(function() {

    let deckId = "";

    function getNewDeck() {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            if (!response.ok) {
                throw new Error('networkerror?');
              }
              return response.json()
             }) //change response to json
        .then(data =>{
            deckId = data.deck_id;
           //draw 5 cards
           drawCards(deckId, 5);
        })
        .catch(error => console.error('Error fetching cards:', error));
    }

    function drawCards(deckId, count) {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
        .then(response => {
            if (!response.ok) {
              throw new Error('Networkerror again?');
            }
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
            imgElement.alt = `The ${card.value} of ${card.suit}`;
            imgElement.classList.add("card-image");
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

