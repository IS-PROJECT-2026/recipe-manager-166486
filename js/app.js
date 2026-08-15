function createRecipeCard(recipe) {
    const article = document.createElement("article");

    article.classList.add("recipe-card");

    article.innerHTML = `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>

        <div class="recipe-content">
            <p class="recipe-category">${recipe.category}</p>

            <h3>${recipe.name}</h3>

            <p>
                ${recipe.description || ""}
            </p>

            <div class="recipe-card-footer">
                <span class="recipe-time">
                    ${recipe.cookingTime} minutes
                </span>

                <a
                    href="pages/recipe.html?id=${recipe.id}"
                    class="recipe-link"
                >
                    View Recipe
                </a>
            </div>
        </div>
    `;

    return article;
}

const recipeGrid = document.getElementById("recipe-grid");

const allRecipes = getAllRecipes();

allRecipes.forEach(function (recipe) {
    const recipeCard = createRecipeCard(recipe);

    recipeGrid.appendChild(recipeCard);
});