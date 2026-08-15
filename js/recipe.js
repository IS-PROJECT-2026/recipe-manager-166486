const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = getRecipeById(recipeId);

const container = document.getElementById("recipe-details-content");

if (!recipe) {

    container.innerHTML = `
        <div class="recipe-not-found">
            <h1>Recipe not found</h1>
            <p>The recipe you are looking for does not exist.</p>
        </div>
    `;

} else {

    container.innerHTML = `
        <div class="recipe-details-grid">

            <div class="recipe-details-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="recipe-details-content">

                <p class="recipe-category">
                    ${recipe.category}
                </p>

                <h1>${recipe.name}</h1>

                <div class="recipe-meta">

                    <div>
                        <strong>Cooking Time</strong>
                        <span>${recipe.cookingTime} minutes</span>
                    </div>

                    <div>
                        <strong>Servings</strong>
                        <span>${recipe.servings}</span>
                    </div>

                </div>

                <h2>Ingredients</h2>

                <ul class="ingredients-list">
                    ${recipe.ingredients.map(function (ingredient) {
                        return `<li>${ingredient}</li>`;
                    }).join("")}
                </ul>

                <h2>Instructions</h2>

                <ol class="instructions-list">
                    ${recipe.instructions.map(function (instruction) {
                        return `<li>${instruction}</li>`;
                    }).join("")}
                </ol>
                <button id="favorite-button"class="favorite-button" type="button">
                    Add to Favorites
                </button>
            </div>

        </div>
    `;
    const favoriteButton = document.getElementById("favorite-button");
    function updateFavoriteButton() {

        if (isFavorite(recipe.id)) {
            favoriteButton.textContent = "Remove from Favorites";
        } else {
            favoriteButton.textContent = "Add to Favorites";
        }
    }

    favoriteButton.addEventListener("click", function () {

        toggleFavorite(recipe.id);

        updateFavoriteButton();
    });

    updateFavoriteButton();
}