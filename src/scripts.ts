let charImg: string, charName: string, charStatus: string, charSecies: string, charOrigin: string, page = 1;

const fetchChardData = (data:any) => {
    for (let i = 0; i < data.results.length; i++) {
        charImg = data.results[i].image;
        charName = data.results[i].name;
        charStatus = data.results[i].status;
        charSecies = data.results[i].species;
        charOrigin = data.results[i].origin.name;
        createCard(charImg, charName, charStatus, charSecies, charOrigin)
    }
  }

const createCard = (charImg: string, charName: string, charStatus: string, 
                    charSecies: string, charOrigin: string) => {
    console.log(charImg, charName, charStatus, charSecies, charOrigin)
}

const loadMore = () => {
    let apiLink = "https://rickandmortyapi.com/api/character/?page="
    apiLink += page.toString();
    page += 1;
    fetch(apiLink)
    .then((response) => response.json())
    .then(fetchChardData);
}

loadMore()
