package com.example.spiceclub.repositories;

import com.example.spiceclub.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository <Recipe, Long> {
}
