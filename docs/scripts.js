var variables = {
    charImg: "",
    charName: "",
    charStatus: "",
    charSpecies: "",
    charOrigin: "",
    page: 1,
    allLoaded: false
};
var fetchCardData = function (data) {
    for (var i = 0; i < data.results.length; i++) {
        if (data.results.length < 20) {
            variables.allLoaded = true;
        }
        variables.charImg = data.results[i].image;
        variables.charName = data.results[i].name;
        variables.charStatus = data.results[i].status;
        variables.charSpecies = data.results[i].species;
        variables.charOrigin = data.results[i].origin.name;
        createCard(variables.charImg, variables.charName, variables.charStatus, variables.charSpecies, variables.charOrigin);
    }
};
var createCard = function (charImg, charName, charStatus, charSpecies, charOrigin) {
    var cardRow = document.querySelector(".card_row");
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = document.createElement("div");
    cardContent.classList.add("card__content");
    var cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card__img");
    var cardImg = document.createElement("img");
    cardImg.src = charImg;
    var cardTextContent = document.createElement("div");
    cardTextContent.classList.add("card__text_content");
    var cardName = document.createElement("span");
    cardName.classList.add("card__name");
    cardName.textContent = charName;
    var cardStatus = document.createElement("span");
    cardStatus.classList.add("card__status");
    cardStatus.textContent = charStatus;
    var circle = document.createElement("div");
    circle.classList.add("circle", deadOrAlive(charStatus));
    var cardSpecies = document.createElement("span");
    cardSpecies.classList.add("card__species");
    cardSpecies.textContent = "Species: " + charSpecies;
    var cardOrigin = document.createElement("span");
    cardOrigin.classList.add("card__origin");
    cardOrigin.textContent = "Origin: " + charOrigin;
    ;
    cardRow.appendChild(card).appendChild(cardContent).appendChild(cardImgContainer).appendChild(cardImg);
    cardContent.appendChild(cardTextContent).appendChild(cardName);
    cardContent.appendChild(cardTextContent).append(cardStatus);
    cardStatus.appendChild(circle);
    cardContent.appendChild(cardTextContent).append(cardSpecies);
    cardContent.appendChild(cardTextContent).append(cardOrigin);
};
var deadOrAlive = function (status) {
    if (status === "Alive") {
        return "circle--green";
    }
    else if (status === "Dead") {
        return "circle--red";
    }
    else {
        return "circle--orange";
    }
};
var loadMore = function () {
    if (variables.allLoaded) {
        addListener(variables.allLoaded);
    }
    else {
        var apiLink = "https://rickandmortyapi.com/api/character/?page=";
        apiLink += variables.page.toString();
        variables.page += 1;
        fetch(apiLink)
            .then(function (response) { return response.json(); })
            .then(fetchCardData);
    }
    addListener(variables.allLoaded);
};
var addListener = function (load) {
    var loadMoreBtn = document.querySelector(".load-more--js");
    if (load) {
        loadMoreBtn.removeEventListener("click", loadMore);
        loadMoreBtn.classList.add("btn--disabled");
        loadMoreBtn.innerText = "All loaded!";
    }
    else {
        loadMoreBtn.addEventListener("click", loadMore);
    }
};
loadMore();
