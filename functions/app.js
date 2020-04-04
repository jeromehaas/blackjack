/* ------------------------------------------------------------------------------------------------ */
/* UI
/* ------------------------------------------------------------------------------------------------ */

let UI = (function() {

    let gameCards = {
        C2:     {name: "Club 2", value: 2, img: "./media/cards/2C.png"},
        C3:     {name: "Club 3", value: 3, img: "./media/cards/3C.png"},
        C4:     {name: "Club 4", value: 4, img: "./media/cards/4C.png"},
        C5:     {name: "Club 5", value: 5, img: "./media/cards/5C.png"},
        C6:     {name: "Club 6", value: 6, img: "./media/cards/6C.png"},
        C7:     {name: "Club 7", value: 7, img: "./media/cards/7C.png"},
        C8:     {name: "Club 8", value: 8, img: "./media/cards/8C.png"},
        C9:     {name: "Club 9", value: 9, img: "./media/cards/9C.png"},
        C10:    {name: "Club 10", value: 10, img: "./media/cards/10C.png"},
        CJ:     {name: "Club Jack", value: 10, img: "./media/cards/JC.png"},
        CQ:     {name: "Club Queen", value: 10, img: "./media/cards/QC.png"},
        CK:     {name: "Club King", value: 10, img: "./media/cards/KC.png"},
        CA:     {name: "Club Ace", value: 11, img: "./media/cards/AC.png"},

        D2:     {name: "Diamond 2", value: 2, img: "./media/cards/2D.png"},
        D3:     {name: "Diamond 3", value: 3, img: "./media/cards/3D.png"},
        D4:     {name: "Diamond 4", value: 4, img: "./media/cards/4D.png"},
        D5:     {name: "Diamond 5", value: 5, img: "./media/cards/5D.png"},
        D6:     {name: "Diamond 6", value: 6, img: "./media/cards/6D.png"},
        D7:     {name: "Diamond 7", value: 7, img: "./media/cards/7D.png"},
        D8:     {name: "Diamond 8", value: 8, img: "./media/cards/8D.png"},
        D9:     {name: "Diamond 9", value: 9, img: "./media/cards/9D.png"},
        D10:    {name: "Diamond 10", value: 10, img: "./media/cards/10D.png"},
        DJ:     {name: "Diamond Jack", value: 10, img: "./media/cards/JD.png"},
        DQ:     {name: "Diamond Queen", value: 10, img: "./media/cards/QD.png"},
        DK:     {name: "Diamond King", value: 10, img: "./media/cards/KD.png"},
        DA:     {name: "Diamond Ace", value: 11, img: "./media/cards/AD.png"},

        H2:     {name: "Heart 2", value: 2, img: "./media/cards/2H.png"},
        H3:     {name: "Heart 3", value: 3, img: "./media/cards/3H.png"},
        H4:     {name: "Heart 4", value: 4, img: "./media/cards/4H.png"},
        H5:     {name: "Heart 5", value: 5, img: "./media/cards/5H.png"},
        H6:     {name: "Heart 6", value: 6, img: "./media/cards/6H.png"},
        H7:     {name: "Heart 7", value: 7, img: "./media/cards/7H.png"},
        H8:     {name: "Heart 8", value: 8, img: "./media/cards/8H.png"},
        H9:     {name: "Heart 9", value: 9, img: "./media/cards/9H.png"},
        H10:    {name: "Heart 10", value: 10, img: "./media/cards/10H.png"},
        HJ:     {name: "Heart Jack", value: 10, img: "./media/cards/JH.png"},
        HQ:     {name: "Heart Queen", value: 10, img: "./media/cards/QH.png"},
        HK:     {name: "Heart King", value: 10, img: "./media/cards/KH.png"},
        HA:     {name: "Heart Ace", value: 11, img: "./media/cards/AH.png"},

        S2:     {name: "Spade 2", value: 2, img: "./media/cards/2S.png"},
        S3:     {name: "Spade 3", value: 3, img: "./media/cards/3S.png"},
        S4:     {name: "Spade 4", value: 4, img: "./media/cards/4S.png"},
        S5:     {name: "Spade 5", value: 5, img: "./media/cards/5S.png"},
        S6:     {name: "Spade 6", value: 6, img: "./media/cards/6S.png"},
        S7:     {name: "Spade 7", value: 7, img: "./media/cards/7S.png"},
        S8:     {name: "Spade 8", value: 8, img: "./media/cards/8S.png"},
        S9:     {name: "Spade 9", value: 9, img: "./media/cards/9S.png"},
        S10:    {name: "Spade 10", value: 10, img: "./media/cards/10S.png"},
        SJ:     {name: "Spade Jack", value: 10, img: "./media/cards/JS.png"},
        SQ:     {name: "Spade Queen", value: 10, img: "./media/cards/QS.png"},
        SK:     {name: "Spade King", value: 10, img: "./media/cards/KS.png"},
        SA:     {name: "Spade Ace", value: 11, img: "./media/cards/AS.png"}
    };

    let domElements = {
        dealButton:         $("#deal-button"),
        hitButton:          $("#hit-button"),
        standButton:        $("#stand-button"),
        bankRoll:           $("#element-bankroll"),
        totalBankRoll:      $("#element-total-bankroll"),
        playerCardDeck:     $("#element-player-card-deck"),
        botCardDeck:        $("#element-bot-card-deck"),
        playerTotalPoints:  $("#element-player-total-points"),
        botTotalPoints:     $("#element-bot-total-points"),
        coin_10:            $("#coin-10"),
        coin_20:            $("#coin-20"),
        coin_50:            $("#coin-50"),
        coin_100:           $("#coin-100"),
        coin_500:           $("#coin-500"),
        message:            $("#message"),
        menu:               $("#menu"),
        startButton:        $("#start-game-button"),
        pot:                $("#element-pot"),
        coins:              $(".coin")
    };


    function getDomElements() {
        return domElements;
    }

    /* -------------------------------------------- */
    /* SOUNDS
    /* -------------------------------------------- */

    function sounds() {
        return {
            addCoin: function() {
                let sound = new Audio("./media/sounds/add_chip.mp3");
                sound.play();
            },
            buttonClick: function() {
                let sound = new Audio("./media/sounds/button_click.mp3");
                sound.play();
            },
            winRound: function() {
                let sound = new Audio("./media/sounds/win_round.mp3");
                sound.play();
            },
            loseRound: function() {
                let sound = new Audio("./media/sounds/lose_round.mp3");
                sound.play();
            }
        }
    }


    /* -------------------------------------------- */
    /* GENERAL UI FUNCTIONS
    /* -------------------------------------------- */

    let buttonActions = {
        showDealButton:     function() { domElements.dealButton.addClass("visible"); },
        showHitButton:      function() { domElements.hitButton.addClass("visible"); },
        showStandButton:    function() { domElements.standButton.addClass("visible"); },
        hideDealButton:     function() { domElements.dealButton.removeClass("visible"); },
        hideHitButton:      function() { domElements.hitButton.removeClass("visible"); },
        hideStandButton:    function() { domElements.standButton.removeClass("visible"); },
    };

    function startGame() {
        calculator.setTotalBankRoll(5000);
        elementActions.showBankRoll();
        elementActions.showPot();
        domElements.totalBankRoll.text(calculator.getTotalBankRoll());
        domElements.menu.addClass("hidden");
    }

    function getRandomCard() {
        let cardSuit, randomCardSuit, cardRank, randomCardRank, randomCardValue;
        cardSuit = ["C", "D", "H", "S"];
        randomCardSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
        cardRank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        randomCardRank = cardRank[Math.floor(Math.random() * cardRank.length)];
        randomCardValue = randomCardSuit + randomCardRank;
        return gameCards[randomCardValue];
    }

    function getCard(competitor) {
        let randomCard, randomCardValue;
        randomCard = UI.getRandomCard();
        randomCardValue = randomCard.value;
        if (competitor === "player") {
            calculator.playerAddPoints(randomCardValue);
            calculator.values.player.totalPoints = calculator.playerGetTotalPoints();
            if (randomCard.value === 11) {
                calculator.values.player.amountOfAces++;
            }
            if (calculator.values.player.totalPoints > 21 && calculator.values.player.amountOfAces > 0) {
                calculator.values.player.totalPoints -= 10;
                calculator.values.player.amountOfAces--;
            }
            calculator.values.player.cards.push(randomCard);
            UI.playerShowTotalPoints(calculator.values.player.totalPoints);
            UI.playerDrawCard(randomCard);
        } else if (competitor === "bot") {
            calculator.botAddPoints(randomCardValue);
            calculator.values.bot.totalPoints = calculator.botGetTotalPoints();
            if (randomCard.value === 11) {
                calculator.values.bot.amountOfAces++;
            }
            if (calculator.values.bot.totalPoints > 21 && calculator.values.player.amountOfAces > 0) {
                calculator.values.bot.totalPoints -= 10;
                calculator.values.bot.amountOfAces--;
            }
            calculator.values.bot.cards.push(randomCard);
            UI.botShowTotalPoints(calculator.values.bot.totalPoints);
            UI.botDrawCard(randomCard);

        }
    }

    let elementActions = {
        hideBankRoll: function() { domElements.bankRoll.removeClass("visible"); },
        showBankRoll: function() { domElements.bankRoll.addClass("visible"); },
        showPot: function() { domElements.pot.addClass("visible") }
    };

    let cardActions = {
        showCardDecks: function() {
            domElements.playerCardDeck.addClass("visible");
            domElements.botCardDeck.addClass("visible");
        },
        hideCardDecks: function() {
            domElements.playerCardDeck.removeClass("visible");
            domElements.botCardDeck.removeClass("visible");
        }
    };

    function checkCoinsAvailability(totalBankRoll) {
        if (totalBankRoll < 500)    { domElements.coin_500.css("display", "none"); } else { domElements.coin_500.css("display", "flex"); }
        if (totalBankRoll < 100)    { domElements.coin_100.css("display", "none"); } else { domElements.coin_100.css("display", "flex"); }
        if (totalBankRoll < 50)     { domElements.coin_50.css("display", "none"); }  else { domElements.coin_50.css("display", "flex"); }
        if (totalBankRoll < 20)     { domElements.coin_20.css("display", "none"); }  else { domElements.coin_20.css("display", "flex"); }
        if (totalBankRoll < 10)     { domElements.coin_10.css("display", "none"); }  else { domElements.coin_10.css("display", "flex"); }
    }

    function showMessage(message) {
        setTimeout(function() {
            domElements.message.addClass("visible");
            domElements.message.text(message);
        }, 1000);
        setTimeout(function() {
            domElements.message.removeClass("visible");
        }, 4000)
    }

    function resetGame() {
        setTimeout(function() {
            calculator.playerResetTotalPoints();
            calculator.botResetTotalPoints();
            calculator.playerResetCards();
            calculator.botResetCards();
            playerHideTotalPoints();
            botHideTotalPoints();
            buttonActions.hideHitButton();
            buttonActions.hideStandButton();
            cardActions.hideCardDecks();
            elementActions.showBankRoll();
            domElements.playerCardDeck.empty();
            domElements.botCardDeck.empty();
            calculator.resetTotalBet();
            calculator.values.player.totalBet = 0;
            calculator.values.player.totalPoints = 0;
            calculator.values.player.amountOfAces = 0;
            calculator.values.bot.amountOfAces = 0;
            calculator.values.bot.totalPoints = 0;
            domElements.pot.text(calculator.values.player.totalBet);
            checkCoinsAvailability(calculator.values.player.totalBankRoll);
        }, 2000);
    }

    /* -------------------------------------------- */
    /* PLAYER FUNCTIONS
    /* -------------------------------------------- */

    function playerDrawCard(card) {
        let html = "<div class='player-card'><img src='" + card.img + "'></div>";
        domElements.playerCardDeck.append(html);
    }

    function playerShowTotalPoints(totalPoints) {
        domElements.playerTotalPoints.addClass("visible");
        domElements.playerTotalPoints.text(totalPoints)
    }

    function playerHideTotalPoints() {
        domElements.playerTotalPoints.removeClass("visible");
    }

    /* -------------------------------------------- */
    /* BOT FUNCTIONS
    /* -------------------------------------------- */

    function botDrawCard(card) {
        let html = "<div class='bot-card'><img src='" + card.img + "'></div>";
        domElements.botCardDeck.append(html);
    }

    function botShowTotalPoints(totalPoints) {
        domElements.botTotalPoints.addClass("visible");
        domElements.botTotalPoints.text(totalPoints)
    }

    function botHideTotalPoints() {
        domElements.botTotalPoints.removeClass("visible");
    }

    function getHiddenCard() {
        let html = "<div class='hidden-card bot-card'><img src='./media/cards/red_back.png'></div>";
        domElements.botCardDeck.append(html);
    }

    function hideHiddenCard() {
        $(".hidden-card").remove();
    }


    /* -------------------------------------------- */
    /* UI RETURNS
    /* -------------------------------------------- */

    return {
        buttonActions:          buttonActions,
        elementActions:         elementActions,
        domElements:            domElements,
        cardActions:            cardActions,
        getDomElements:         getDomElements,
        getRandomCard:          getRandomCard,
        checkCoinsAvailability: checkCoinsAvailability,
        showMessage:            showMessage,
        playerShowTotalPoints:  playerShowTotalPoints,
        playerDrawCard:         playerDrawCard,
        playerHideTotalPoints:  playerHideTotalPoints,
        botDrawCard:            botDrawCard,
        botShowTotalPoints:     botShowTotalPoints,
        botHideTotalPoints:     botHideTotalPoints,
        getHiddenCard:          getHiddenCard,
        hideHiddenCard:         hideHiddenCard,
        resetGame:              resetGame,
        getCard:                getCard,
        sounds:                 sounds,
        startGame:              startGame
    }

})();

/* ------------------------------------------------------------------------------------------------ */
/* CALCULATOR
/* ------------------------------------------------------------------------------------------------ */

let calculator = (function() {

    let values = {
        player: {
            coinValue: 0,
            totalBet: 0,
            totalBankRoll: 0,
            totalPoints: 0,
            cards: [],
            amountOfAces: 0
        },
        bot: {
            totalPoints: 0,
            cards: [],
            amountOfAces: 0
        }
    };

    let sounds = UI.sounds();

    function checkIfBusted(totalPoints) {
        if (totalPoints > 21) {
            UI.showMessage("BUSTED");
            UI.resetGame();
        }
    }

    /* -------------------------------------------- */
    /* POINTS
    /* -------------------------------------------- */

    function playerAddPoints(value) {
         return values.player.totalPoints += value;
    }

    function playerGetTotalPoints() {
        return values.player.totalPoints;
    }

    function playerResetTotalPoints() {
        values.player.totalPoints = 0;
    }

    function playerResetCards() {
        values.player.cards = [];
    }

    function botResetCards() {
        values.bot.cards = [];
    }


    /* -------------------------------------------- */
    /* BET
    /* -------------------------------------------- */

    function resetTotalBet() {
        values.player.totalBet = 0;
    }

    function updateTotalBet(coinValue) {
        values.player.totalBet += coinValue;
        return values.player.totalBet;
    }



    /* -------------------------------------------- */
    /* BANKROLL
    /* -------------------------------------------- */

    function setTotalBankRoll(value) {
        values.player.totalBankRoll = value;
        return values.player.totalBankRoll;
    }

    function getTotalBankRoll() {
        return values.player.totalBankRoll;
    }

    function updateTotalBankRoll(value, type) {
        if (type == "add") {
            values.player.totalBankRoll += value;
        } else if (type == "subtract") {
            values.player.totalBankRoll -= value;
        }
        return values.player.totalBankRoll;
    }

    function checkCredibility(totalBet) {
        if (totalBet <= values.player.totalBankRoll) {
            return true;
        } else if (totalBet >= values.player.totalBankRoll) {
            return false;
        }
    }

    /* -------------------------------------------- */
    /* BOT POINTS
    /* -------------------------------------------- */

    function botAddPoints(value) {
        return values.bot.totalPoints += value;
    }

    function botGetTotalPoints() {
        return values.bot.totalPoints;
    }

    function botResetTotalPoints() {
        values.bot.totalPoints = 0;
    }

    /* -------------------------------------------- */
    /* CALCULATOR RETURNS
    /* -------------------------------------------- */

    return {
        totalBankRoll: values.player.totalBankRoll,
        totalBet: values.player.totalBet,
        values:                 values,
        updateTotalBankRoll:    updateTotalBankRoll,
        setTotalBankRoll:       setTotalBankRoll,
        getTotalBankRoll:       getTotalBankRoll,
        updateTotalBet:         updateTotalBet,
        resetTotalBet:          resetTotalBet,
        playerAddPoints:        playerAddPoints,
        playerGetTotalPoints:   playerGetTotalPoints,
        playerResetTotalPoints: playerResetTotalPoints,
        botAddPoints:           botAddPoints,
        botGetTotalPoints:      botGetTotalPoints,
        botResetTotalPoints:    botResetTotalPoints,
        checkIfBusted:          checkIfBusted,
        playerResetCards:       playerResetCards,
        botResetCards:          botResetCards


    }

})();

/* ------------------------------------------------------------------------------------------------ */
/* APP CONTROLLER
/* ------------------------------------------------------------------------------------------------ */

let appController = (function() {

    let domElements = UI.getDomElements();
    let sounds = UI.sounds();

    /* INITIALIZE GAME */
    domElements.startButton.on("click", function() {
        UI.startGame();
    });

    /* ADD COIN */
    domElements.coins.on("click", function() {
        sounds.addCoin();
        UI.buttonActions.showDealButton();
        calculator.values.player.coinValue = parseInt($(this).attr("value"));
        calculator.values.player.totalBet = calculator.updateTotalBet(calculator.values.player.coinValue);
        calculator.values.player.totalBankRoll = calculator.updateTotalBankRoll(calculator.values.player.coinValue, "subtract");
        domElements.pot.text(calculator.values.player.totalBet);
        domElements.totalBankRoll.text(calculator.values.player.totalBankRoll);
        UI.checkCoinsAvailability(calculator.values.player.totalBankRoll);
    });

    /* DEAL */
    domElements.dealButton.on("click", function() {
        if (calculator.values.player.totalBet > 0) {
            sounds.buttonClick();
            UI.elementActions.hideBankRoll();
            UI.buttonActions.hideDealButton();
            UI.cardActions.showCardDecks();
            UI.buttonActions.showHitButton();
            UI.buttonActions.showStandButton();
            UI.getCard("player");
            UI.getCard("player");
            UI.getCard("bot");
            UI.getHiddenCard();
            if (calculator.values.player.cards.length === 2 && calculator.values.player.totalPoints === 21) {
                UI.showMessage("BLACK JACK");
                calculator.updateTotalBankRoll(calculator.values.player.totalBet * 3, "add");
                domElements.totalBankRoll.text(calculator.values.player.totalBankRoll);
                UI.resetGame();
            }
        }
    });

    /* HIT */
    UI.domElements.hitButton.on("click", function() {
        sounds.buttonClick();
        UI.getCard("player");
        calculator.checkIfBusted(calculator.values.player.totalPoints);
    });

    /* STAND */
    UI.domElements.standButton.on("click", function() {
        sounds.buttonClick();
        UI.buttonActions.hideHitButton();
        UI.buttonActions.hideStandButton();
        UI.hideHiddenCard();
        while (calculator.values.bot.totalPoints < 17) {
            UI.getCard("bot");
        }

   if (calculator.values.player.totalPoints > calculator.values.bot.totalPoints || calculator.values.bot.totalPoints > 21) {
            UI.showMessage("YOU WIN");
            calculator.updateTotalBankRoll(calculator.values.player.totalBet * 2, "add");
            domElements.totalBankRoll.text(calculator.values.player.totalBankRoll);
        } else if (calculator.values.player.totalPoints < calculator.values.bot.totalPoints) {
            UI.showMessage("YOU LOSE");
        } else if (calculator.values.player.totalPoints === calculator.values.bot.totalPoints) {
            UI.showMessage("PUSH");
            calculator.updateTotalBankRoll(calculator.values.player.totalBet, "add");
            domElements.totalBankRoll.text(calculator.values.player.totalBankRoll);
        }
        UI.resetGame();
    });



})();

 // appController.startGame();


