const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const customRecipes = getCustomRecipes();

const recipe = customRecipes.find(function (recipe) {
    return recipe.id === recipeId;
});

if (!recipe) {
    window.location.href = "../index.html";
}

document.getElementById("name").value = recipe.name;
document.getElementById("category").value = recipe.category;
document.getElementById("image").value = recipe.image;
document.getElementById("cookingTime").value = recipe.cookingTime;
document.getElementById("servings").value = recipe.servings;

document.getElementById("ingredients").value =
    recipe.ingredients.join("\n");

document.getElementById("instructions").value =
    recipe.instructions.join("\n");


document.getElementById("edit-recipe-form").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        recipe.name = document.getElementById("name").value.trim();
        recipe.category = document.getElementById("category").value;
        recipe.image = document.getElementById("image").value.trim();

        recipe.cookingTime = Number(
            document.getElementById("cookingTime").value
        );

        recipe.servings = Number(
            document.getElementById("servings").value
        );

        recipe.ingredients = document
            .getElementById("ingredients")
            .value
            .split("\n")
            .map(function (item) {
                return item.trim();
            })
            .filter(function (item) {
                return item !== "";
            });

        recipe.instructions = document
            .getElementById("instructions")
            .value
            .split("\n")
            .map(function (item) {
                return item.trim();
            })
            .filter(function (item) {
                return item !== "";
            });

        localStorage.setItem(
            CUSTOM_RECIPES_KEY,
            JSON.stringify(customRecipes)
        );

        window.location.href = `recipe.html?id=${recipe.id}`;
    }
);