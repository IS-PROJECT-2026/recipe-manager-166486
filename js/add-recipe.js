const recipeForm = document.getElementById("recipe-form");

const fieldOrder = [
    "name",
    "category",
    "image",
    "cookingTime",
    "servings",
    "ingredients",
    "instructions"
];

const formStatus = document.getElementById("form-status");

function ensureErrorElement(fieldId) {
    const existingError = document.getElementById(fieldId + "-error");

    if (existingError) {
        return existingError;
    }

    const fieldElement = document.getElementById(fieldId);
    const errorElement = document.createElement("p");

    errorElement.id = fieldId + "-error";
    errorElement.className = "field-error";
    errorElement.setAttribute("aria-live", "polite");

    fieldElement.insertAdjacentElement("afterend", errorElement);

    return errorElement;
}

function setFieldError(fieldId, message) {
    const fieldElement = document.getElementById(fieldId);
    const errorElement = ensureErrorElement(fieldId);

    errorElement.textContent = message;
    errorElement.style.display = "block";

    fieldElement.classList.add("input-invalid");
    fieldElement.setAttribute("aria-invalid", "true");
    fieldElement.setAttribute("aria-describedby", errorElement.id);
}

function clearFieldError(fieldId) {
    const fieldElement = document.getElementById(fieldId);
    const errorElement = ensureErrorElement(fieldId);

    errorElement.textContent = "";
    errorElement.style.display = "none";

    fieldElement.classList.remove("input-invalid");
    fieldElement.removeAttribute("aria-invalid");
}

function setFormStatus(message, type) {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = message;
    formStatus.className = "form-status form-status-" + type;
    formStatus.style.display = "block";
}

function clearFormStatus() {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = "";
    formStatus.className = "form-status";
    formStatus.style.display = "none";
}

function parseLineItems(value) {
    return value
        .split("\n")
        .map(function (item) {
            return item.trim();
        })
        .filter(function (item) {
            return item !== "";
        });
}

function getFieldValues() {
    return {
        name: document.getElementById("name").value.trim(),
        category: document.getElementById("category").value,
        image: document.getElementById("image").value.trim(),
        cookingTime: document.getElementById("cookingTime").value.trim(),
        servings: document.getElementById("servings").value.trim(),
        ingredientsRaw: document.getElementById("ingredients").value,
        instructionsRaw: document.getElementById("instructions").value
    };
}

function validateSingleField(fieldId, values) {
    if (fieldId === "name") {
        if (!values.name) {
            return "Recipe name is required.";
        }

        if (values.name.length < 3) {
            return "Recipe name must be at least 3 characters.";
        }
    }

    if (fieldId === "category" && !values.category) {
        return "Please select a category.";
    }

    if (fieldId === "image") {
        if (!values.image) {
            return "Image URL is required.";
        }

        try {
            const url = new URL(values.image);
            const isHttp = url.protocol === "http:" || url.protocol === "https:";

            if (!isHttp) {
                return "Image URL must start with http:// or https://.";
            }
        } catch (error) {
            return "Please enter a valid image URL.";
        }
    }

    if (fieldId === "cookingTime") {
        if (!values.cookingTime) {
            return "Cooking time is required.";
        }

        const cookingTimeValue = Number(values.cookingTime);

        if (!Number.isInteger(cookingTimeValue) || cookingTimeValue < 1) {
            return "Cooking time must be a whole number of at least 1.";
        }
    }

    if (fieldId === "servings") {
        if (!values.servings) {
            return "Servings is required.";
        }

        const servingsValue = Number(values.servings);

        if (!Number.isInteger(servingsValue) || servingsValue < 1) {
            return "Servings must be a whole number of at least 1.";
        }
    }

    if (fieldId === "ingredients") {
        if (parseLineItems(values.ingredientsRaw).length === 0) {
            return "Add at least one ingredient (one per line).";
        }
    }

    if (fieldId === "instructions") {
        if (parseLineItems(values.instructionsRaw).length === 0) {
            return "Add at least one instruction (one per line).";
        }
    }

    return "";
}

function validateAllFields() {
    const values = getFieldValues();
    let firstInvalidField = "";

    fieldOrder.forEach(function (fieldId) {
        const errorMessage = validateSingleField(fieldId, values);

        if (errorMessage) {
            setFieldError(fieldId, errorMessage);

            if (!firstInvalidField) {
                firstInvalidField = fieldId;
            }
        } else {
            clearFieldError(fieldId);
        }
    });

    return {
        isValid: firstInvalidField === "",
        firstInvalidField: firstInvalidField,
        values: values
    };
}

fieldOrder.forEach(function (fieldId) {
    const fieldElement = document.getElementById(fieldId);

    ensureErrorElement(fieldId);

    fieldElement.addEventListener("blur", function () {
        const values = getFieldValues();
        const errorMessage = validateSingleField(fieldId, values);

        if (errorMessage) {
            setFieldError(fieldId, errorMessage);
        } else {
            clearFieldError(fieldId);
        }
    });

    fieldElement.addEventListener("input", function () {
        const values = getFieldValues();
        const errorMessage = validateSingleField(fieldId, values);

        if (errorMessage) {
            setFieldError(fieldId, errorMessage);
        } else {
            clearFieldError(fieldId);
        }
    });
});

recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormStatus();

    const validationResult = validateAllFields();

    if (!validationResult.isValid) {
        setFormStatus(
            "Please fix the highlighted fields and submit again.",
            "error"
        );

        document.getElementById(validationResult.firstInvalidField).focus();

        return;
    }

    const values = validationResult.values;
    const ingredients = parseLineItems(values.ingredientsRaw);
    const instructions = parseLineItems(values.instructionsRaw);

    const recipeId =
        typeof getUniqueRecipeId === "function"
            ? getUniqueRecipeId(values.name)
            : values.name.toLowerCase().replace(/\s+/g, "-");

    const recipe = {
        id: recipeId,
        name: values.name,
        image: values.image,
        category: values.category,
        ingredients: ingredients,
        instructions: instructions,
        cookingTime: Number(values.cookingTime),
        servings: Number(values.servings)
    };

    if (typeof saveCustomRecipe === "function") {
        saveCustomRecipe(recipe);
    } else {
        const savedRecipes = JSON.parse(
            localStorage.getItem("customRecipes")
        ) || [];

        savedRecipes.push(recipe);

        localStorage.setItem(
            "customRecipes",
            JSON.stringify(savedRecipes)
        );
    }

    recipeForm.reset();

    fieldOrder.forEach(function (fieldId) {
        clearFieldError(fieldId);
    });

    setFormStatus("Recipe added successfully!", "success");

});