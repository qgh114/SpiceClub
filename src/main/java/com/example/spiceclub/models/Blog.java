package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "blogs")
public class Blog {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String title;

    @Column(columnDefinition="TEXT")
    private String description;

    @Column
    private String image;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Admin admin;
}
