(function() { 
    function initializeDeckAndDrawCards() {
      fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => response.json())
        .then(data => fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=5`))
        .then(response => response.json())
        .then(data => {
          displayCards(data.cards);
          const handRank = evaluateHand(data.cards);
            console.log(`The best hand is: ${handRank}`);
          displayHandRank(handRank);
        })
        .catch(error => console.error('Error:', error));
    }
    /* deck creation, card drawing, display to hand evaluation, and error 
    handling.  .then() waits for the previous asynchronous operation to complete 
    */

    function displayCards(cards) {
      const cardsContainer = document.getElementById('cards-container');
      cardsContainer.innerHTML = '';//empty 
      cards.forEach(card => {
        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        //imgElement.alt = `The ${card.value} of ${card.suit}`; error checking
        cardsContainer.appendChild(imgElement);
      });
    }
    /*
    responsible for visually displaying the cards on  web page. 
    It creates image elements for each card and inserts them into the specified container.
    */
  
    function displayHandRank(handRank) {
      const rankContainer = document.getElementById('hand-rank');
      rankContainer.textContent = handRank;
    }
     /*
    This function takes the evaluated hand rank as a string and displaying it in
    designated area on the web page. When called, it ensures that users can see what hand they have been dealt.
    */ 
  
    function cardValue(card) {
      const values = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
        "JACK": 11, "QUEEN": 12, "KING": 13, "ACE": 14
      };
      return values[card.value];
    }
    /*
    The cardValue function translates the face value of a card into a number value.
    essential for evaluating hands because it provides a way to compare card 
    values. that way it can more easily calculate high cards ansd whichcard is more valuable than the others. i made aces high
    */
  
    function sortCardsByValue(cards) {
      return cards.slice().sort((a, b) => cardValue(a) - cardValue(b));
    }
    /*
    The  function that sorts an array of cards based on the numerical value of the cards,
    from lowest to highest. important to figure out straights and such
    
    */
  
    function countValues(cards) {
      let counts = {}; 
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i]; 
        var value = cardValue(card); 
        if (counts[value]) {
          counts[value] += 1;
        } else {
          counts[value] = 1;
        }
      }
    return counts;
    }
    
    /*
    The countValues function counts the occurrences of each card value 
    This function is used to tally the number of times each card value appears in the hand for
    poker hands like Pairs, Three of a Kinds, and Four of a Kinds.
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
      return isStraight(cards) && isFlush(cards) && cardValue(cards[0]) === 10;// calle dif the result is both straight and flush 
      //and has the highest hand values possible in a straight
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

