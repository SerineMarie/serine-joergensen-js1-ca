const nameContainer = document.querySelector (".container");
const url = ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")




async function drinks(){

    try{
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        nameContainer.innerHTML = "";

        const drink = json.drinks;

        drink.forEach(function(cocktails){
            nameContainer.innerHTML += `<a href="details.html?id=${cocktails.idDrink}" class="detailLink">
                                         <div class="nameContainer">
                                             <p class="name">Drink name :  ${cocktails.strDrink}</p>
                                             <p class="type">Type of drink :  ${cocktails.strCategory}</p>
                                             <p class="type">Type of glass :  ${cocktails.strGlass}</p>
                                             <div class="image" style="background-image: url('${cocktails.strDrinkThumb}')"> </div>
                                         </div>
                                     </a>`
        })
       

        // for (let i = 0; i < drink.length; i++){
        //     console.log(drink)
            
 

        //     const nameOfDrink = drink[i].strDrink;
        //     const drinkType = drink[i].strCategory;
        //     const glassType = drink[i].strGlass;
        //     const images = drink[i].strDrinkThumb;
        //     const id = drink[i].idDrink;
            
        //     console.log(id)


        // nameContainer.innerHTML += ``
                      
        // }
    } 
    catch (error){
        console.log(error);
        nameContainer.innerHTML = displayError ("Oh no, something went wrong");
    }
    

}


drinks();


setTimeout(drinks, 2000);