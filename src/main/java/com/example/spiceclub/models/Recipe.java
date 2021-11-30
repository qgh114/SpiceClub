package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "recipes")
public class Recipe {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(unique = true)
    private String name;

    @Column
    private String recipeMethod;

    @Column
    private String ingredient;

    @Column
    private String image;

    @Column
    private String description;

    @ManyToOne (fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Admin admin;




}
