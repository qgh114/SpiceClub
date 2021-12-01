package com.example.spiceclub.controllers;

import com.example.spiceclub.models.Spice;
import com.example.spiceclub.repositories.SpiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class adminController {


    @Autowired
    SpiceRepository spices;


    @GetMapping("/spices")
    public Iterable<Spice> getSpices() {

        return spices.findAll();
    }


    @GetMapping("/spices/{id}")
    public Spice getSpicesById(@PathVariable Long id) {
        return spices.findById(id).get();
    }


    @PostMapping("/spices")
    public Spice addSpices(@RequestBody Spice newspice) {

        return spices.save(newspice);
    }




    @PatchMapping("/spices/{id}")
    public void patchSpicesById(@PathVariable Long id, @RequestBody Spice spiceToUpdate) {
        spices.findById(id).map(foundSpice -> {
            if (spiceToUpdate.getName() != null) foundSpice.setName(spiceToUpdate.getName());
            if (spiceToUpdate.getImage() != null) foundSpice.setImage(spiceToUpdate.getImage());
            if (spiceToUpdate.getDescription() != null) foundSpice.setDescription(spiceToUpdate.getDescription());
            if (spiceToUpdate.getPrice() != 0) foundSpice.setPrice(spiceToUpdate.getPrice());

            spices.save(foundSpice);
            return "Spice updated";
        }).orElse("Spice not found");


    }

    @PutMapping("/spice/{id}")
    public String updateSpiceById(@PathVariable Long id, @RequestBody Spice spiceToUpdate) {
        if (spices.existsById(id)) {
            spiceToUpdate.setId(id);
            spices.save(spiceToUpdate);
            return "Spice was created";
        } else {
            return "Spice not found";
        }
    }


    @DeleteMapping("/spice/{id}")
    public void deleteSpicesById(@PathVariable Long id) {
        spices.deleteById(id);
    }




}
