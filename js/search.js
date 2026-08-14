const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const noResults = document.getElementById("no-results");

if (typeof recipes === "undefined") {
    noResults.textContent = "Recipe data failed to load.";
    noResults.style.display = "block";
    throw new Error("recipes is undefined. Ensure data/recipes.js is loaded before search.js.");
}


function displayRecipes(recipeList) {

    searchResults.innerHTML = "";

    if (recipeList.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    recipeList.forEach(function (recipe) {

        const article = document.createElement("article");

        article.classList.add("recipe-card");

        article.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="recipe-content">

                <p class="recipe-category">
                    ${recipe.category}
                </p>

                <h3>${recipe.name}</h3>

                <div class="recipe-card-footer">

                    <span class="recipe-time">
                        ${recipe.cookingTime} minutes
                    </span>

                    <a
                        href="recipe.html?id=${recipe.id}"
                        class="recipe-link"
                    >
                        View Recipe
                    </a>

                </div>

            </div>
        `;

        searchResults.appendChild(article);
    });
}


searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchTerm = searchInput.value.trim().toLowerCase();

    const matchingRecipes = recipes.filter(function (recipe) {

        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );

    });

    displayRecipes(matchingRecipes);
});

displayRecipes(recipes);