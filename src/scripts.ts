type Vars = {
    charImg: string 
    charName: string
    charStatus: string
    charSpecies: string
    charOrigin: string
    page: number
    allLoaded: boolean;
}

type FetchedObj = {
    "info": {
        "count": number
        "pages": number
        "next": string
        "prev": null
    }
    "results": [
        {
            "id": number
            "name": string
            "status": string
            "species": string
            "type": string
            "gender": string
            "origin": {
                "name": string
                "url": string
            }
            "location": {
                "name": string
                "url": string
            }
            "image": string
            "episode": string[]
            "url": string
            "created": string
        }
    ]
}

let variables: Vars = {
    charImg: "",
    charName: "",
    charStatus: "",
    charSpecies: "",
    charOrigin: "",
    page: 1,
    allLoaded: false
}

const fetchCardData = (data: FetchedObj) => {
    for (let i = 0; i < data.results.length; i++) {
        if (data.results.length < 20) {
            variables.allLoaded = true;
        }
        variables.charImg = data.results[i].image;
        variables.charName = data.results[i].name;
        variables.charStatus = data.results[i].status;
        variables.charSpecies = data.results[i].species;
        variables.charOrigin = data.results[i].origin.name;
        createCard(variables.charImg, variables.charName, variables.charStatus, variables.charSpecies, variables.charOrigin)
    }
  }

const createCard = (charImg: string, charName: string, charStatus: string, 
                    charSpecies: string, charOrigin: string) => {
    const cardRow = document.querySelector<HTMLDivElement>(".card_row");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card__img");

    const cardImg = document.createElement("img");
    cardImg.src = charImg;

    const cardTextContent = document.createElement("div");
    cardTextContent.classList.add("card__text_content");

    const cardName = document.createElement("span");
    cardName.classList.add("card__name");
    cardName.textContent = charName;

    const cardStatus = document.createElement("span");
    cardStatus.classList.add("card__status");
    cardStatus.textContent = charStatus;

    const circle = document.createElement("div");
    circle.classList.add("circle", deadOrAlive(charStatus));

    const cardSpecies = document.createElement("span");
    cardSpecies.classList.add("card__species");
    cardSpecies.textContent = "Species: " + charSpecies;

    const cardOrigin = document.createElement("span");
    cardOrigin.classList.add("card__origin");
    cardOrigin.textContent = "Origin: " + charOrigin;;
    
    cardRow.appendChild(card).appendChild(cardContent).appendChild(cardImgContainer).appendChild(cardImg);
    cardContent.appendChild(cardTextContent).appendChild(cardName);
    cardContent.appendChild(cardTextContent).append(cardStatus);
    cardStatus.appendChild(circle);
    cardContent.appendChild(cardTextContent).append(cardSpecies);
    cardContent.appendChild(cardTextContent).append(cardOrigin);
}

const deadOrAlive = (status:string) => {
    if (status === "Alive") {
        return "circle--green";
    } else if (status === "Dead") {
        return "circle--red";
    } else {
        return "circle--orange";
    }
}

const loadMore = () => {
    if (variables.allLoaded) {
        addListener(variables.allLoaded)
    } else {
    let apiLink = "https://rickandmortyapi.com/api/character/?page="
    apiLink += variables.page.toString();
    variables.page += 1;
    fetch(apiLink)
    .then((response) => response.json())
    .then(fetchCardData);
    }
    addListener(variables.allLoaded);
}

const addListener = (load: boolean) => {
    const loadMoreBtn: HTMLButtonElement = document.querySelector(".load-more--js");
    if (load) {
        loadMoreBtn.removeEventListener("click", loadMore);
        loadMoreBtn.classList.add("btn--disabled")
        loadMoreBtn.innerText = "All loaded!"
    } else {
        loadMoreBtn.addEventListener("click", loadMore);
    }
}

loadMore()
