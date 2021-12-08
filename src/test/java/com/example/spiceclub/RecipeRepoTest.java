package com.example.spiceclub;

import com.example.spiceclub.models.Recipe;
import com.example.spiceclub.models.Spice;
import com.example.spiceclub.repositories.RecipeRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class RecipeRepoTest {

    @Autowired
    RecipeRepository recipes;

    @Test
    public void testCreateRecipe() {
        Recipe recipe = new Recipe();
        recipe.setName("Spaghetti Bolo");
        recipe.setRecipe_method("boil water add pasta");
        recipe.setImage("https://images.arla.com/recordid/74c3865a0e434b278cb1a6e500c5ac6f/spaghetti-bolognese.jpg?crop=(0,1468,0,-2276)&w=1200&h=630&scale=both&format=jpg&quality=80&ak=6826258c&hm=1f740233");
        recipe.setDescription("epic spaghetti");

        Recipe savedRecipe = recipes.save(recipe);
        Assertions.assertNotEquals(savedRecipe, null);
    }

    @Test
    public void testUpdateRecipe() {

        Long recipeId = Long.valueOf(1);

        Optional<Recipe> optionalRecipe = recipes.findById(recipeId);
        Recipe recipe = optionalRecipe.get();

        recipe.setName("Spaghetti Carbonara");
        recipes.save(recipe);

        Recipe updatedRecipe = recipes.findById(recipeId).get();
        Assertions.assertEquals(updatedRecipe.getName(), "Spaghetti Carbonara");
    }

    @Test
    public void testFindRecipeById() {
        Long recipeId = Long.valueOf(1);

        Optional<Recipe> optionalRecipe = recipes.findById(recipeId);
        Assertions.assertTrue(optionalRecipe.isPresent());

    }

    @Test
    public void testDeleteRecipe() {

        Long recipeId = Long.valueOf(1);
        recipes.deleteById(recipeId);

        Optional<Recipe> optionalRecipe = recipes.findById(recipeId);
        Assertions.assertFalse(optionalRecipe.isPresent());


    }
}
