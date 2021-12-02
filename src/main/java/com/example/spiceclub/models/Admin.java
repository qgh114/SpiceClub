package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="admins")
public class Admin {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "admin", cascade = CascadeType.ALL)
    List<Recipe> recipes;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "admin", cascade = CascadeType.ALL)
    List<Spice> spices;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "admin", cascade = CascadeType.ALL)
    List<S3_Bucket> S3_Images;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private SuperAdmin superAdmin;
}
