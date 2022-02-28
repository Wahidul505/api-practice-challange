const toggleDisplay = (id, displayType) => {
  document.getElementById(id).style.display = displayType;
}
toggleDisplay('not-found-msg', 'none')
toggleDisplay('spinner', 'none');
document.getElementById('search-btn').addEventListener('click', function () {
  const searchText = document.getElementById('search-field').value;
  toggleDisplay('not-found-msg', 'none');
  if (searchText == '') {
    toggleDisplay('not-found-msg', 'block');
    document.getElementById('search-results').textContent = '';
  }
  else {
    document.getElementById('search-results').textContent = '';
    loadDrinks(searchText);
    toggleDisplay('spinner', 'block');
  }
  document.getElementById('search-field').value = '';
})
const loadDrinks = drinks => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
    .then(response => response.json())
    .then(data => displayDrinks(data.drinks));
}
const displayDrinks = drinks => {
  const searchResults = document.getElementById('search-results');
  searchResults.textContent = '';
  if (drinks === null) {
    toggleDisplay('not-found-msg', 'block');
  }
  else {
    toggleDisplay('not-found-msg', 'none')
    drinks.forEach(drink => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="p-3">
          <img onclick="loadDrink(${drink.idDrink})" class="rounded-lg cursor-pointer"
            src="${drink.strDrinkThumb}" alt="">
        </div>
        <h1 class="text-3xl text-pink-700 font-semibold text-center">${drink.strDrink}</h1>
    `
      searchResults.appendChild(div);
    })
  }
  toggleDisplay('spinner', 'none');
}
const loadDrink = (id) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => displayDrink(data.drinks[0]));
}
const displayDrink = drink => {
  console.log(drink);
  const displayContainer = document.getElementById('display-drink');
  displayContainer.innerHTML = `
  <div>
  <img class="rounded" src="${drink.strDrinkThumb}"/>
  </div>
  <h1 class="text-4xl text-pink-700 font-semibold text-center my-2">${drink.strDrink}</h1>
  <hr class="my-3 border-t-2">
  <h2 class="text-2xl text-yellow-700 my-4">Ingredients:</h2>
  <div class="grid grid-cols-3 list-disc text-fuchsia-500">
    <li>${drink.strIngredient1 ? drink.strIngredient1 : '--'}</li>
    <li>${drink.strIngredient2 ? drink.strIngredient2 : '--'}</li>
    <li>${drink.strIngredient3 ? drink.strIngredient3 : '--'}</li>
    <li>${drink.strIngredient4 ? drink.strIngredient4 : '--'}</li>
    <li>${drink.strIngredient5 ? drink.strIngredient5 : '--'}</li>
    <li>${drink.strIngredient6 ? drink.strIngredient6 : '--'}</li>
    <li>${drink.strIngredient7 ? drink.strIngredient7 : '--'}</li>
    <li>${drink.strIngredient8 ? drink.strIngredient8 : '--'}</li>
    <li>${drink.strIngredient9 ? drink.strIngredient9 : '--'}</li>
    </div>
    <h2 class="text-2xl text-yellow-700 my-4">Instructions:</h2>
    <p class="text-fuchsia-700">${drink.strInstructions}</p>
  `
}
