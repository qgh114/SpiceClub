package com.example.spiceclub;

import com.example.spiceclub.models.Admin;
import com.example.spiceclub.repositories.AdminRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class AdminRepositoryTest {

    // altså superAdmin kan lave CRUD i Admin table

    @Autowired
    private AdminRepository admins;

    @Test
    public void testCreateAdmin() {

        Admin admin = new Admin();
        admin.setEmail("Lærke@hotmail.com");
        admin.setPassword("1234k");

        Admin savedAdmin = admins.save(admin);
        Assertions.assertNotEquals(savedAdmin, null);
    }

    @Test
    public void testUpdateAdmin() {
        Long adminId = 1L;

        Optional<Admin> optionalAdmin = admins.findById(adminId);
        Admin admin = optionalAdmin.get();

        admin.setEmail("UpdatedLærke@gmail.com");
        admins.save(admin);

        Admin updatedAdmin = admins.findById(adminId).get();
        Assertions.assertEquals(updatedAdmin.getEmail(), "UpdatedLærke@gmail.com");

    }

    @Test
    public void testReadAdmin() {
        Long adminId = 1L;

        Optional<Admin> optionalAdmin = admins.findById(adminId);
        Assertions.assertTrue(optionalAdmin.isPresent());

    }

    @Test
    public void testDeleteAdmin() {

        Long adminId = 1L;
        admins.deleteById(adminId);

        Optional<Admin> optionalAdmin = admins.findById(adminId);
        Assertions.assertFalse(optionalAdmin.isPresent());





    }
}
