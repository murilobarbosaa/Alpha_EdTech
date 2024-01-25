let recipes = [];
let currentRecipeIndex = null;

function addRecipe() {
    const newIndex = recipes.length;
    recipes.push({ title: "Sem Título", ingredients: "", preparation: "" });
    renderRecipes();
    editRecipe(newIndex);
}

function editRecipe(index) {
    currentRecipeIndex = index;
    const currentRecipe = recipes[index];
    document.getElementById("title-input").value = currentRecipe.title;
    document.getElementById("ingredients-textarea").value = currentRecipe.ingredients;
    document.getElementById("preparation-textarea").value = currentRecipe.preparation;
    document.getElementById("recipe-editor").style.display = "block";
}

function deleteCurrentRecipe() {
    if (currentRecipeIndex !== null) {
        recipes.splice(currentRecipeIndex, 1);
        currentRecipeIndex = null;
        renderRecipes();
        closeEditor();
    }
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    renderRecipes();
    if (currentRecipeIndex === index) {
        closeEditor();
    }
}

function closeEditor() {
    currentRecipeIndex = null;
    document.getElementById("recipe-editor").style.display = "none";
}

function saveRecipe() {
    if (currentRecipeIndex !== null) {
        recipes[currentRecipeIndex].title = document.getElementById("title-input").value;
        recipes[currentRecipeIndex].ingredients = document.getElementById("ingredients-textarea").value;
        recipes[currentRecipeIndex].preparation = document.getElementById("preparation-textarea").value;
        renderRecipes();
        closeEditor();
    }
}

function renderRecipes() {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.dataset.index = index;
        recipeCard.onclick = () => editRecipe(index);

        const recipeHeader = document.createElement("div");
        recipeHeader.classList.add("recipe-header");

        const titleSpan = document.createElement("span");
        titleSpan.classList.add("recipe-title");
        titleSpan.textContent = recipe.title;

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Deletar";
        deleteBtn.onclick = (event) => {
            event.stopPropagation();
            deleteRecipe(index);
        };

        recipeHeader.appendChild(titleSpan);
        recipeHeader.appendChild(deleteBtn);

        recipeCard.appendChild(recipeHeader);
        recipeContainer.appendChild(recipeCard);
    });

    const addBtn = document.createElement("div");
    addBtn.classList.add("add-btn");
    addBtn.textContent = "+";
    addBtn.onclick = addRecipe;
    recipeContainer.appendChild(addBtn);
}

renderRecipes();
