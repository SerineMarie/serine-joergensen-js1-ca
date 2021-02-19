const url = ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
const nameContainer = document.querySelector (".container");




async function drinks(){

    try{
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

       const drink = json.drinks;

       nameContainer.innerHTML = "";
       

        for (let i = 0; i < drink.length; i++){
            console.log(drink)
            
 

            const nameOfDrink = drink[i].strDrink;
            const drinkType = drink[i].strCategory;
            const glassType = drink[i].strGlass;
            const images = drink[i].strDrinkThumb;
            const id = drink[i].idDrink;
            
            console.log(id)


        nameContainer.innerHTML += `<a href="details.html?id=${id}" class="detailLink">
                                        <div class="nameContainer">
                                            <p class="name">Drink name :  ${nameOfDrink}</p>
                                            <p class="type">Type of drink :  ${drinkType}</p>
                                            <p class="glass">Type of glass :  ${glassType}</p>
                                            <div class="image" style="background-image: url('${images}')"> </div>
                                        </div>
                                    </a>`
                      
        }
    } 
    catch (error){
        console.log(error);
    }
    

}

drinks();

