package com.example.spiceclub.controllers;

import com.example.spiceclub.models.Admin;
import com.example.spiceclub.models.Spice;
import com.example.spiceclub.models.Recipe;
import com.example.spiceclub.repositories.AdminRepository;
import com.example.spiceclub.repositories.RecipeRepository;
import com.example.spiceclub.repositories.SpiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class adminController {

    @Autowired
    RecipeRepository recipes;
    @Autowired
    SpiceRepository spices;

    @Autowired
    AdminRepository admins;



    @PostMapping("/admins")
    public Admin findAdmin(@RequestBody Admin newAdmin) {

       Admin admin = admins.findAdminByEmailAndPassword(newAdmin.getEmail(), newAdmin.getPassword());

       if(admin == null) {
           return newAdmin;
       }

        return admin;

    }








}
