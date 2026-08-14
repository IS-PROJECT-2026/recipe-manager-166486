const recipes = [
    {
        id: "fluffy-pancakes",
        name: "Fluffy Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
        category: "Breakfast",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "3 1/2 teaspoons baking powder",
            "1 teaspoon salt",
            "1 1/4 cups milk",
            "1 egg",
            "3 tablespoons melted butter"
        ],
        instructions: [
            "Mix the flour, baking powder, and salt in a bowl.",
            "Whisk together the milk, egg, and melted butter.",
            "Pour the wet ingredients into the dry ingredients and mix until combined.",
            "Heat a lightly oiled pan over medium heat.",
            "Pour batter onto the pan and cook until bubbles form.",
            "Flip and cook until golden brown."
        ],
        cookingTime: 20,
        servings: 4
    },

    {
        id: "creamy-chicken-pasta",
        name: "Creamy Chicken Pasta",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
        category: "Lunch",
        ingredients: [
            "250g pasta",
            "2 chicken breasts",
            "1 cup heavy cream",
            "2 cloves garlic",
            "1/2 cup grated Parmesan",
            "1 tablespoon olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Cook the pasta according to the package instructions.",
            "Cut the chicken into bite-sized pieces.",
            "Heat olive oil and cook the chicken until golden.",
            "Add garlic and cook for one minute.",
            "Add cream and Parmesan and stir until the sauce thickens.",
            "Add the cooked pasta and combine."
        ],
        cookingTime: 35,
        servings: 4
    },

    {
        id: "grilled-beef-bowl",
        name: "Grilled Beef Bowl",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        category: "Dinner",
        ingredients: [
            "400g beef steak",
            "2 cups cooked rice",
            "1 carrot",
            "1 cucumber",
            "1/2 cup broccoli",
            "2 tablespoons soy sauce",
            "1 tablespoon olive oil"
        ],
        instructions: [
            "Season the beef with salt and pepper.",
            "Grill the beef until cooked to your preference.",
            "Slice the carrot and cucumber.",
            "Steam the broccoli until tender.",
            "Place rice into serving bowls.",
            "Add vegetables and sliced beef.",
            "Drizzle with soy sauce and serve."
        ],
        cookingTime: 40,
        servings: 2
    },

    {
        id: "avocado-toast",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80",
        category: "Breakfast",
        ingredients: [
            "2 slices whole-grain bread",
            "1 ripe avocado",
            "1 tablespoon lemon juice",
            "Salt",
            "Black pepper",
            "Chilli flakes"
        ],
        instructions: [
            "Toast the bread until golden.",
            "Mash the avocado with lemon juice.",
            "Season with salt and pepper.",
            "Spread the avocado over the toast.",
            "Top with chilli flakes."
        ],
        cookingTime: 10,
        servings: 2
    },

    {
        id: "chicken-caesar-salad",
        name: "Chicken Caesar Salad",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
        category: "Lunch",
        ingredients: [
            "2 chicken breasts",
            "1 romaine lettuce",
            "1/2 cup Parmesan",
            "1 cup croutons",
            "1/2 cup Caesar dressing",
            "Salt and pepper"
        ],
        instructions: [
            "Season and grill the chicken.",
            "Chop the romaine lettuce.",
            "Slice the cooked chicken.",
            "Combine lettuce, chicken, Parmesan, and croutons.",
            "Add Caesar dressing and toss."
        ],
        cookingTime: 25,
        servings: 2
    },

    {
        id: "beef-burger",
        name: "Classic Beef Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        category: "Dinner",
        ingredients: [
            "400g ground beef",
            "4 burger buns",
            "4 slices cheddar cheese",
            "1 tomato",
            "1 onion",
            "Lettuce",
            "Salt and pepper"
        ],
        instructions: [
            "Season the ground beef and form four patties.",
            "Cook the patties on a hot grill or pan.",
            "Add cheese during the final minute of cooking.",
            "Toast the burger buns.",
            "Assemble the burgers with lettuce, tomato, onion, and beef."
        ],
        cookingTime: 30,
        servings: 4
    },

    {
        id: "vegetable-stir-fry",
        name: "Vegetable Stir-Fry",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        category: "Vegetarian",
        ingredients: [
            "1 bell pepper",
            "1 carrot",
            "1 cup broccoli",
            "1 zucchini",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic"
        ],
        instructions: [
            "Chop all vegetables into similar-sized pieces.",
            "Heat sesame oil in a large pan.",
            "Add garlic and cook briefly.",
            "Add the vegetables and stir-fry until tender.",
            "Add soy sauce and toss everything together."
        ],
        cookingTime: 20,
        servings: 3
    },

    {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        category: "Dessert",
        ingredients: [
            "2 cups flour",
            "1 3/4 cups sugar",
            "3/4 cup cocoa powder",
            "2 eggs",
            "1 cup milk",
            "1/2 cup vegetable oil",
            "1 teaspoon baking powder"
        ],
        instructions: [
            "Preheat the oven to 180°C.",
            "Mix the dry ingredients in a bowl.",
            "Add the eggs, milk, and oil.",
            "Mix until smooth.",
            "Pour the batter into a greased cake tin.",
            "Bake for approximately 35 minutes.",
            "Allow the cake to cool before serving."
        ],
        cookingTime: 45,
        servings: 8
    },

    {
        id: "fruit-smoothie",
        name: "Mixed Berry Smoothie",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
        category: "Breakfast",
        ingredients: [
            "1 cup strawberries",
            "1/2 cup blueberries",
            "1 banana",
            "1 cup milk",
            "1 tablespoon honey",
            "1/2 cup ice"
        ],
        instructions: [
            "Wash the berries.",
            "Add all ingredients to a blender.",
            "Blend until smooth.",
            "Pour into glasses and serve immediately."
        ],
        cookingTime: 5,
        servings: 2
    },

    {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        category: "Dinner",
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "150g mozzarella",
            "Fresh basil",
            "1 tablespoon olive oil"
        ],
        instructions: [
            "Preheat the oven to 220°C.",
            "Roll the pizza dough into a circle.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella and basil.",
            "Drizzle with olive oil.",
            "Bake until the crust is golden and the cheese melts."
        ],
        cookingTime: 25,
        servings: 2
    },

    {
        id: "french-toast",
        name: "French Toast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
        category: "Breakfast",
        ingredients: [
            "4 slices bread",
            "2 eggs",
            "1/2 cup milk",
            "1 teaspoon cinnamon",
            "1 teaspoon vanilla extract",
            "1 tablespoon butter"
        ],
        instructions: [
            "Whisk the eggs, milk, cinnamon, and vanilla.",
            "Dip each slice of bread into the mixture.",
            "Melt butter in a pan.",
            "Cook the bread on both sides until golden.",
            "Serve with your preferred toppings."
        ],
        cookingTime: 15,
        servings: 2
    },

    {
        id: "tomato-soup",
        name: "Creamy Tomato Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        category: "Lunch",
        ingredients: [
            "6 tomatoes",
            "1 onion",
            "2 cloves garlic",
            "2 cups vegetable stock",
            "1/2 cup cream",
            "1 tablespoon olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Chop the tomatoes and onion.",
            "Heat olive oil and cook the onion and garlic.",
            "Add tomatoes and vegetable stock.",
            "Simmer until the tomatoes soften.",
            "Blend until smooth.",
            "Add cream and season before serving."
        ],
        cookingTime: 30,
        servings: 4
    },

    {
        id: "chicken-curry",
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        category: "Dinner",
        ingredients: [
            "500g chicken",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tablespoon curry powder",
            "1 cup coconut milk",
            "1 tablespoon cooking oil"
        ],
        instructions: [
            "Cut the chicken into bite-sized pieces.",
            "Cook the onion and garlic in oil.",
            "Add curry powder and stir.",
            "Add chicken and cook until lightly browned.",
            "Add tomatoes and coconut milk.",
            "Simmer until the chicken is fully cooked."
        ],
        cookingTime: 45,
        servings: 4
    },

    {
        id: "banana-bread",
        name: "Banana Bread",
        image: "https://images.unsplash.com/photo-1606101273945-e9eba5d9b3c3?auto=format&fit=crop&w=800&q=80",
        category: "Dessert",
        ingredients: [
            "3 ripe bananas",
            "2 cups flour",
            "1/2 cup butter",
            "3/4 cup sugar",
            "2 eggs",
            "1 teaspoon baking soda",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "Preheat the oven to 175°C.",
            "Mash the bananas in a bowl.",
            "Mix in the melted butter and sugar.",
            "Add eggs and vanilla.",
            "Stir in flour and baking soda.",
            "Pour into a loaf tin.",
            "Bake for approximately 50 minutes."
        ],
        cookingTime: 60,
        servings: 8
    },

    {
        id: "greek-salad",
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
        category: "Vegetarian",
        ingredients: [
            "2 tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "1/2 cup feta cheese",
            "1/4 cup olives",
            "2 tablespoons olive oil",
            "1 tablespoon lemon juice"
        ],
        instructions: [
            "Chop the tomatoes and cucumber.",
            "Slice the red onion.",
            "Combine the vegetables in a bowl.",
            "Add feta cheese and olives.",
            "Drizzle with olive oil and lemon juice.",
            "Toss gently and serve."
        ],
        cookingTime: 15,
        servings: 2
    },

    {
        id: "pasta-carbonara",
        name: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        category: "Lunch",
        ingredients: [
            "250g spaghetti",
            "150g bacon",
            "2 eggs",
            "1/2 cup Parmesan",
            "2 cloves garlic",
            "Salt and black pepper"
        ],
        instructions: [
            "Cook the spaghetti until al dente.",
            "Cook the bacon until crisp.",
            "Whisk the eggs and Parmesan together.",
            "Add the cooked pasta to the bacon pan.",
            "Remove from heat and quickly stir in the egg mixture.",
            "Season with black pepper and serve."
        ],
        cookingTime: 25,
        servings: 3
    }
];

export default recipes;