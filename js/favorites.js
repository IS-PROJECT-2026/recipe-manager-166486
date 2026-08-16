const favoritesGrid = document.getElementById("favorites-grid");
const noFavorites = document.getElementById("no-favorites");

function createFavoriteCard(recipe) {
    const article = document.createElement("article");

    article.classList.add("recipe-card");

    article.innerHTML = `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>

        <div class="recipe-content">
            <p class="recipe-category">${recipe.category}</p>

            <h3>${recipe.name}</h3>

            <div class="recipe-card-footer">
                <span class="recipe-time">${recipe.cookingTime} minutes</span>

                <a href="recipe.html?id=${recipe.id}" class="recipe-link">
                    View Recipe
                </a>
            </div>
        </div>
    `;

    return article;
}

const favoriteIds = getFavorites();
const allRecipes = getAllRecipes();

const favoriteRecipes = allRecipes.filter(function (recipe) {
    return favoriteIds.includes(recipe.id);
});

if (favoriteRecipes.length === 0) {

    noFavorites.style.display = "block";

} else {

    noFavorites.style.display = "none";

    favoriteRecipes.forEach(function (recipe) {

        const article = createFavoriteCard(recipe);

        favoritesGrid.appendChild(article);
    });
}


const FAVORITES_KEY = "recipe-manager-favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(recipeId) {
    return getFavorites().includes(recipeId);
}

function toggleFavorite(recipeId) {
    const favorites = getFavorites();

    if (favorites.includes(recipeId)) {
        const updatedFavorites = favorites.filter(function (id) {
            return id !== recipeId;
        });

        saveFavorites(updatedFavorites);
    } else {
        favorites.push(recipeId);
        saveFavorites(favorites);
    }
}