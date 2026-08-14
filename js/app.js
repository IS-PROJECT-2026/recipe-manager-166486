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
                ${recipe.description}
            </p>

            <div class="recipe-card-footer">
                <span class="recipe-time">
                    ${recipe.time} minutes
                </span>

                <a
                    href="${recipe.link}"
                    class="recipe-link"
                >
                    View Recipe
                </a>
            </div>
        </div>
    `;

    return article;
}

const sampleRecipes = [
    {
        name: "Fluffy Pancakes",
        category: "Breakfast",
        time: 20,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
        description: "Light and fluffy pancakes perfect for a relaxed breakfast.",
        link: "pages/recipe.html"
    },
    {
        name: "Creamy Chicken Pasta",
        category: "Lunch",
        time: 35,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
        description: "A comforting pasta dish with tender chicken and a creamy sauce.",
        link: "pages/recipe.html"
    },
    {
        name: "Grilled Beef Bowl",
        category: "Dinner",
        time: 40,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        description: "A satisfying bowl combining grilled beef with fresh vegetables.",
        link: "pages/recipe.html"
    }
];


const recipeGrid = document.getElementById("recipe-grid");

sampleRecipes.forEach(function (recipe) {
    const recipeCard = createRecipeCard(recipe);

    recipeGrid.appendChild(recipeCard);
});