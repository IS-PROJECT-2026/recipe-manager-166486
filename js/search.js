const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

const searchResults = document.getElementById("search-results");
const noResults = document.getElementById("no-results");


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


function filterRecipes() {

    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredRecipes = recipes.filter(function (recipe) {

        const matchesSearch =
            recipe.name.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayRecipes(filteredRecipes);
}


searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    filterRecipes();
});


categoryFilter.addEventListener("change", function () {

    filterRecipes();
});