package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "spices")
public class Spice {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(unique = true)
    private String name;


    @Column(length = 9000)
    private String description;

   @Column
   private int price;

    @Column
    private String image;

   @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Admin admin;


}
