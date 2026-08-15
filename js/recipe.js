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

    const customRecipe = getCustomRecipes().some(function (customRecipe) {
        return customRecipe.id === recipe.id;
    });

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

                <div class="recipe-rating">

                    <h2>Rate this recipe</h2>

                    <div
                        id="rating-stars"
                        class="rating-stars"
                        aria-label="Recipe rating"
                    >
                        <button type="button" data-rating="1">★</button>
                        <button type="button" data-rating="2">★</button>
                        <button type="button" data-rating="3">★</button>
                        <button type="button" data-rating="4">★</button>
                        <button type="button" data-rating="5">★</button>
                    </div>

                    <p id="rating-status">
                        Not rated yet
                    </p>

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

                <button
                    id="favorite-button"
                    class="favorite-button"
                    type="button"
                >
                    Add to Favorites
                </button>

                ${
                    customRecipe
                        ? `
                            <div class="recipe-management-actions">

                                <a
                                    href="edit-recipe.html?id=${recipe.id}"
                                    class="hero-button"
                                >
                                    Edit Recipe
                                </a>

                                <button
                                    id="delete-recipe-button"
                                    class="delete-button"
                                    type="button"
                                >
                                    Delete Recipe
                                </button>

                            </div>
                        `
                        : ""
                }

            </div>

        </div>
    `;


    /* Favorites */

    const favoriteButton =
        document.getElementById("favorite-button");

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


    /* Ratings */

    const ratingStars =
        document.querySelectorAll("#rating-stars button");

    const ratingStatus =
        document.getElementById("rating-status");

    const savedRatings =
        JSON.parse(localStorage.getItem("recipeRatings")) || {};

    const savedRating = savedRatings[recipe.id] || 0;


    function updateRatingDisplay(rating) {

        ratingStars.forEach(function (star) {

            const starRating = Number(
                star.dataset.rating
            );

            if (starRating <= rating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });

        if (rating === 0) {
            ratingStatus.textContent = "Not rated yet";
        } else {
            ratingStatus.textContent =
                "Your rating: " + rating + "/5";
        }
    }


    ratingStars.forEach(function (star) {

        star.addEventListener("click", function () {

            const rating =
                Number(star.dataset.rating);

            savedRatings[recipe.id] = rating;

            localStorage.setItem(
                "recipeRatings",
                JSON.stringify(savedRatings)
            );

            updateRatingDisplay(rating);
        });
    });

    updateRatingDisplay(savedRating);


    /* Delete */

    if (customRecipe) {

        const deleteButton =
            document.getElementById("delete-recipe-button");

        deleteButton.addEventListener("click", function () {

            const confirmed = confirm(
                "Are you sure you want to delete this recipe?"
            );

            if (!confirmed) {
                return;
            }

            const updatedRecipes =
                getCustomRecipes().filter(
                    function (customRecipe) {
                        return customRecipe.id !== recipe.id;
                    }
                );

            localStorage.setItem(
                CUSTOM_RECIPES_KEY,
                JSON.stringify(updatedRecipes)
            );

            window.location.href = "../index.html";
        });
    }
}