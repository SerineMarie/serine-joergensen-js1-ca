const detailContainer = document.querySelector (".details");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("idDrink");


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?" + id;


async function drinks (){
    try{
        const response = await fetch(url2);
        const json = await response.json();

        console.log(json);

        const drink = json.drinks;

        detailContainer.innerHTML = "";

        // createDetails(json)

        detailContainer.innerHTML = `<h1 class=".header">${json.idDrink}</h1>
    <div class="image" style="background-image: url ('${json.strDrinkThumb}')"></div>
    <p> Type of drink : ${strCategory}</p>
    <p> Glass : ${strGlass}</p>
    <div>${strInstructions}</div>`




    } catch(error){

    }
}



drinks();

// function createDetails (json){
//     detailContainer.innerHTML = `<h1>${json.idDrink}</h1>
//     <div class="image" style="background-image: url ('${json.strDrinkThumb}')"></div>
//     <p> Type of drink : ${strCategory}</p>
//     <p> Glass : ${strGlass}</p>
//     <div>${strInstructions}</div>`
// }

// createDetails();