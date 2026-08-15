const CUSTOM_RECIPES_KEY = "customRecipes";

function getCustomRecipes() {
    try {
        const parsedRecipes = JSON.parse(
            localStorage.getItem(CUSTOM_RECIPES_KEY)
        );

        return Array.isArray(parsedRecipes) ? parsedRecipes : [];
    } catch (error) {
        return [];
    }
}

function getBuiltInRecipes() {
    if (typeof recipes !== "undefined" && Array.isArray(recipes)) {
        return recipes;
    }

    if (Array.isArray(window.recipes)) {
        return window.recipes;
    }

    return [];
}

function getAllRecipes() {
    return getBuiltInRecipes().concat(getCustomRecipes());
}

function getRecipeById(recipeId) {
    return getAllRecipes().find(function (recipe) {
        return recipe.id === recipeId;
    });
}

function getUniqueRecipeId(recipeName) {
    const fallbackName = recipeName || "recipe";
    const baseId = fallbackName
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "recipe";

    const existingIds = new Set(
        getAllRecipes().map(function (recipe) {
            return recipe.id;
        })
    );

    if (!existingIds.has(baseId)) {
        return baseId;
    }

    let suffix = 2;

    while (existingIds.has(baseId + "-" + suffix)) {
        suffix += 1;
    }

    return baseId + "-" + suffix;
}

function saveCustomRecipe(recipe) {
    const savedRecipes = getCustomRecipes();

    savedRecipes.push(recipe);

    localStorage.setItem(
        CUSTOM_RECIPES_KEY,
        JSON.stringify(savedRecipes)
    );
}
