const detailContainer = document.querySelector (".details");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("idDrink");

console.log(id)

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" + id;

async function drinks (){
    try{
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        const drink = json.drinks;

        detailContainer.innerHTML = "";

        
    } catch(error){

    }
}

drinks();

function createDetails (){
    detailContainer.innerHTML = `<h1>${idDrinks}</h1>
    <div class="image" style="background-image: url ('${strDrinkThumb}')"></div>
    <p> Type of drink : ${strCategory}</p>
    <p> Glass : ${strGlass}</p>
    <div>${strInstructions}</div>`
}