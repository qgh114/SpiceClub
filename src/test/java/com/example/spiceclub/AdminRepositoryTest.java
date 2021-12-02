package com.example.spiceclub;

import com.example.spiceclub.models.Admin;
import com.example.spiceclub.models.Spice;
import com.example.spiceclub.models.SuperAdmin;
import com.example.spiceclub.repositories.AdminRepository;
import com.example.spiceclub.repositories.SpiceRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class AdminRepositoryTest {


    @Autowired
    private AdminRepository admins;

    @Test
    public void testCreateAdmin() {

        Admin admin = new Admin();
        admin.setEmail("Peter@hotmail.com");
        admin.setPassword("1234k");



        Admin savedAdmin = admins.save(admin);
        Assertions.assertNotEquals(savedAdmin, null);


    }
}
