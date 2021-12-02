package com.example.spiceclub.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "superAdmin")
public class SuperAdmin {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(unique = true)
    private String email;

    @Column
    private String password;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "superAdmin")
    private List<Admin> admins;

}
