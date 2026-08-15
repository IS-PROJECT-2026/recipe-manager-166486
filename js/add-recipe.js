const recipeForm = document.getElementById("recipe-form");

recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value.trim();
    const cookingTime = Number(document.getElementById("cookingTime").value);
    const servings = Number(document.getElementById("servings").value);

    const ingredients = document
        .getElementById("ingredients")
        .value
        .split("\n")
        .map(function (ingredient) {
            return ingredient.trim();
        })
        .filter(function (ingredient) {
            return ingredient !== "";
        });

    const instructions = document
        .getElementById("instructions")
        .value
        .split("\n")
        .map(function (instruction) {
            return instruction.trim();
        })
        .filter(function (instruction) {
            return instruction !== "";
        });

    const recipe = {
        id: getUniqueRecipeId(name),
        name: name,
        image: image,
        category: category,
        ingredients: ingredients,
        instructions: instructions,
        cookingTime: cookingTime,
        servings: servings
    };

    saveCustomRecipe(recipe);

    recipeForm.reset();

    alert("Recipe added successfully!");
});