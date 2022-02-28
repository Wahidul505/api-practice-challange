const toggleDisplay = (id, state) => {
  document.getElementById(id).style.display = state;
}
toggleDisplay('loading', 'none');
const searchMeal = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  if (searchText == '' || searchText == ' ' || searchText == '  ' || searchText == '   ') {
    document.getElementById('display-meal').textContent = '';
    document.getElementById('meals-container').textContent = '';
    alert('Please Enter a valid Meal');
  }
  else {
    toggleDisplay('loading', 'block');
    document.getElementById('meals-container').textContent = '';
    document.getElementById('display-meal').textContent = '';
    loadMeals(searchText);
  }
}
const loadMeals = searchText => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
  if (meals === null) {
    document.getElementById('display-meal').textContent = '';
    document.getElementById('meals-container').textContent = '';
    alert('Please, Enter a valid Meal');
  }
  else {
    console.log(meals)
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.textContent = '';
    meals.forEach(meal => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div class="col">
          <div onclick="loadMeal('${meal.idMeal}')" class="card bg-dark text-white">
            <img src="${meal.strMealThumb}" class="card-img opacity-50" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        </div>
      `
      mealsContainer.appendChild(div);
    })
  }
  toggleDisplay('loading', 'none');
}
const loadMeal = mealId => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals[0]));
}
const displayMeal = meal => {
  const displayMealContainer = document.getElementById('display-meal');
  displayMealContainer.innerHTML = `
  <h1 class="text-center text-primary"> Your Meal </h1>
  <div class="card mb-3 w-75 mx-auto">
  <img src="${meal.strMealThumb}" class="card-img-top h-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
  </div>
</div>
  `
}