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