const detailContainer = document.querySelector (".details");
const title = document.querySelector (".title");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("id");

//console.log(id);

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

console.log(url2)


async function drinks (){
    try{
        const response = await fetch(url2);
        const result = await response.json();

        console.log(result);

        detailContainer.innerHTML = "";

        const cocktail = result.drinks;

        cocktail.forEach(function(one){
            title.innerHTML = `${one.strDrink}`
            detailContainer.innerHTML += `<div class="detailContainer">
                                            <h1 class="heading">${one.strDrink}</h1>
                                            <p class="paragraph">Type of drink: 
                                                <p>${one.strCategory}</p>
                                            </p>
                                            <p class="paragraph">Type of glass: 
                                                <p>${one.strGlass}</p>
                                            </p>                 
                                            <p class="paragraph">Ingredients: 
                                                <p>${one.strIngredient1}</p>
                                                <p>${one.strIngredient2}</p>
                                                <p>${one.strIngredient3}</p>                           
                                            <div class="img" style="background-image: url('${one.strDrinkThumb}')"></div>

                                            <p class="paragraph">Instructions: 
                                                <p>${one.strInstructions}</p>
                                            </p>
                                        </div>
                                            `
        })

        

    } catch (error){
        console.log(error);
        detailContainer.innerHTML = displayError ("Oh no, something went wrong");
    }
}



drinks();


// function createDetails (result){
//     detailContainer.innerHTML = `<h1>${result.strDrink}</h1>
//     <div class="image" style="background-image: url ('${result.strDrinkThumb}')"></div>
//     <p> Type of drink : ${result.strCategory}</p>
//     <p> Glass : ${result.strGlass}</p>
//     <div>Instructions :${result.strInstructions}</div>`
// }

