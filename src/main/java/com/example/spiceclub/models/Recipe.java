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

    @Column(columnDefinition="TEXT")
    private String recipe_method;

    @Column(columnDefinition="TEXT")
    private String ingredient;

    @Column
    private String image;

    @Column(columnDefinition="TEXT")
    private String description;

    @ManyToOne (fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Admin admin;




}
