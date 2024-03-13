(function() {

    let deckId = '';

    function getNewDeck() {
        fetch('https://deckofcardsapi.com/api/deck/new/')
        .then(response => response.json()) //change response to json
        .then(data =>{
            deckId = data.deck_id;
            console.log("Deck:", deckId); //store deck ID
           //draw 5 cards
           drawCards(deckId, 5);
        })

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

