package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "spices")
public class Spice {

    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(unique = true)
    private String name;

    @Column
    private String image;

    @Column
    private String description;

   @Column
   private int price;

   @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Admin admin;


}
