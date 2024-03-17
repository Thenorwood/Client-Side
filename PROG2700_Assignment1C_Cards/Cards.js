(function() { //creates an IIFE
    function initializeDeckAndDrawCards() {//function called 'initializeDeckAndDrawCards' responsible for creating new deck and drawing cards.
      fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")//Initiates a network request to the Deck of Cards API to create a new shuffled deck of cards.
        .then(response => response.json())//Takes the first promise response, which is a Response object, and parses it as JSON.
        .then(data => fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=5`))//Uses the 'deck_id' obtained from the first API call to make a second API call to draw 5 cards from the deck.
        .then(response => response.json())// Takes the second promise response from drawing cards and parses it as JSON.
        .then(data => {
          displayCards(data.cards);//Calls the 'displayCards' function to display the cards on the webpage.
          return data.cards;//Returns the array of drawn card objects to be used by the next promise in the chain.
        })
        .then(cards => {
          const handRank = evaluateHand(cards);//Evaluates the hand by calling the 'evaluateHand' function with the drawn cards.
            console.log(`The best hand is: ${handRank}`);//displays this message in console
          displayHandRank(handRank);//Calls the 'displayHandRank' function to display the evaluated hand rank on the webpage.
        })
        .catch(error => console.error('Error:', error));//Catches and logs any errors that may occur during any of the above async operations.
    }
    /*
    This function forms a promise chain that clearly outlines the flow of asynchronous 
    operations: from deck creation, card drawing, display to hand evaluation, and error 
    handling. Each .then() waits for the previous asynchronous operation to complete 
    before executing its callback function, ensuring that the operations occur in the correct sequence.
    */

    function displayCards(cards) {
      const cardsContainer = document.getElementById('cards-container');
      cardsContainer.innerHTML = '';
      cards.forEach(card => {
        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        //imgElement.alt = `The ${card.value} of ${card.suit}`;
        cardsContainer.appendChild(imgElement);
      });
    }
    /*
    This function is responsible for visually displaying the cards on the web page. 
    It dynamically creates image elements for each card and inserts them into the specified container in the DOM.
    */
  
    function displayHandRank(handRank) {
      const rankContainer = document.getElementById('hand-rank');
      rankContainer.textContent = handRank;
    }
     /*
    This function is straightforward; it's tasked with taking the evaluated hand rank as a string and displaying it in
     the designated area on the web page. When called, it ensures that users can see what hand they have been dealt.
    */ 
  
    function cardValue(card) {
      const values = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
        "JACK": 11, "QUEEN": 12, "KING": 13, "ACE": 14
      };
      return values[card.value];
    }
    /*
    The cardValue function translates the face value of a card (which may be a number or a 
    face card such as Jack, Queen, etc.) into a corresponding numerical value.
    This function is essential for evaluating hands because it provides a way to compare card 
    values easily. For example, knowing that a Queen is numerically higher than a Jack (12 > 11) 
    is crucial for determining the ranking of poker hands. The Ace is given the highest value (14) 
    assuming it's always high in this context.
    */
  
    function sortCardsByValue(cards) {
      return cards.slice().sort((a, b) => cardValue(a) - cardValue(b));
    }
    /*
    The sortCardsByValue function sorts an array of card objects based on the numerical value of the cards,
    from lowest to highest
    This sorted array is crucial for evaluating certain poker hands like Straights, where the order of cards matters. By 
    sorting the cards first, the rest of your hand evaluation functions can work with an ordered set, which simplifies their logic.
    */
  
    function countValues(cards) {
      return cards.reduce((acc, card) => {
        const value = cardValue(card);
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      }, {});
    }
    /*
    The countValues function counts the occurrences of each card value in an array of cards.
    This function is used to tally the number of times each card value appears in the hand, which is critical
    information when determining poker hands like Pairs, Three of a Kinds, and Four of a Kinds. The returned 
    object will have keys that correspond to card values and values that correspond to how many times those 
    card values appear in the hand.
    */
  
    function isFlush(cards) {
      return cards.every(card => card.suit === cards[0].suit); 
      //  Uses the 'every' method to test whether all cards in the array pass the provided test.
      // Checks if each card's suit is the same as the first card's suit in the hand.
    }
    /*
    the isFlush function determines whether all cards in a hand have the same suit, which is the requirement for a Flush in poker
    Here's the breakdown:

    The .every() method iterates over all elements in the array and executes the provided function.
    The test function takes the suit property of each card object and compares it to the suit of the first card (cards[0].suit).
    If all cards have the same suit, .every() returns true, confirming the hand is a Flush.
    If at least one card has a different suit, .every() returns false, indicating the hand is not a Flush.
    */
  
    function isStraight(sortedCards) {
      for (let i = 0; i < sortedCards.length - 1; i++) {
        if (cardValue(sortedCards[i]) + 1 !== cardValue(sortedCards[i + 1])) {
          return false;
        }
      }
      return true;
    }
  
    function isRoyalFlush(cards) {
      return isStraight(cards) && isFlush(cards) && cardValue(cards[0]) === 10;
    }
  
    function isStraightFlush(cards) {
      return isStraight(cards) && isFlush(cards);
    }
  
    function isFourOfAKind(cards) {
      const values = countValues(cards);
      return Object.values(values).includes(4);
    }
  
    function isFullHouse(cards) {
      const values = countValues(cards);
      const counts = Object.values(values);
      return counts.includes(3) && counts.includes(2);
    }
  
    function isThreeOfAKind(cards) {
      const values = countValues(cards);
      return Object.values(values).includes(3) && !Object.values(values).includes(2);
    }
  
    function isTwoPair(cards) {
      const values = countValues(cards);
      const pairs = Object.values(values).filter(count => count === 2);
      return pairs.length === 2;
    }
  
    function isOnePair(cards) {
      const values = countValues(cards);
      const pairs = Object.values(values).filter(count => count === 2);
      return pairs.length === 1;
    }
  
    function evaluateHand(cards) {
      const sortedCards = sortCardsByValue(cards);
  
      if (isRoyalFlush(sortedCards)) {
        return "Royal Flush";
      } else if (isStraightFlush(sortedCards)) {
        return "Straight Flush";
      } else if (isFourOfAKind(sortedCards)) {
        return "Four of a Kind";
      } else if (isFullHouse(sortedCards)) {
        return "Full House";
      } else if (isFlush(sortedCards)) {
        return "Flush";
      } else if (isStraight(sortedCards)) {
        return "Straight";
      } else if (isThreeOfAKind(sortedCards)) {
        return "Three of a Kind";
      } else if (isTwoPair(sortedCards)) {
        return "Two Pair";
      } else if (isOnePair(sortedCards)) {
        return "One Pair";
      } else {
        // Assuming the highest card is the last after sorting
        return `High Card: ${sortedCards[4].value}`;
      }
    }

    function displayHandRank(handRank) {
        const rankContainer = document.getElementById('hand-rank');
        if (rankContainer) {
          rankContainer.textContent = `${handRank}`;
        }
    }
  
    initializeDeckAndDrawCards();
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

