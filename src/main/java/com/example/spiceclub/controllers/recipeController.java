package com.example.spiceclub.controllers;

import com.example.spiceclub.models.Recipe;
import com.example.spiceclub.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class recipeController {
    @Autowired
    private RecipeRepository recipes;

    @GetMapping("/recipes")
    public Iterable<Recipe> getRecipe(){
        return recipes.findAll();
    }

    @GetMapping("/recipes/{id}")
    public Recipe getRecipe(@PathVariable Long id){
        return recipes.findById(id).get();
    }

    @PostMapping("/recipes")
    public Recipe addRecipe(@RequestBody Recipe newRecipe){
        return recipes.save(newRecipe);
    }

    @PatchMapping("/recipes/{id}")
    public String patchRecipeById(@PathVariable Long id, @RequestBody Recipe recipeToUpdateWith) {
        return recipes.findById(id).map(foundRecipe -> {
            if (recipeToUpdateWith.getName() != null) foundRecipe.setName(recipeToUpdateWith.getName());
            if (recipeToUpdateWith.getRecipe_method() != null) foundRecipe.setRecipe_method(recipeToUpdateWith.getRecipe_method());
            if (recipeToUpdateWith.getIngredient() != null) foundRecipe.setIngredient(recipeToUpdateWith.getIngredient());
            if (recipeToUpdateWith.getImage() != null) foundRecipe.setImage(recipeToUpdateWith.getImage());
            if (recipeToUpdateWith.getDescription() != null) foundRecipe.setDescription(recipeToUpdateWith.getDescription());
            recipes.save(foundRecipe);
            return "Recipe updated";
        }).orElse("Recipe not found");
    }

    @PutMapping("/recipe/{id}")
    public String updateRecipeById(@PathVariable Long id, @RequestBody Recipe recipeToUpdate) {
        if (recipes.existsById(id)) {
            recipeToUpdate.setId(id);
            recipes.save(recipeToUpdate);
            return "Spice was created";
        } else {
            return "Spice not found";
        }
    }


    @DeleteMapping("/recipes/{id}")
    public void deleteRecipeById(@PathVariable Long id) {
        recipes.deleteById(id);
    }


}

