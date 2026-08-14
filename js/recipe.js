const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find(function (recipe) {
    return recipe.id === recipeId;
});

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

            </div>

        </div>
    `;
}