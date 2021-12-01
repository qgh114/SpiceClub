package com.example.spiceclub;

import com.example.spiceclub.models.Admin;
import com.example.spiceclub.models.Spice;
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
@Rollback(value = false)
public class SpiceRepositoryTest {

    @Autowired
    private SpiceRepository spices;

    @Test
    public void testCreateSpice() {
        Spice spice = new Spice();
        spice.setPrice(100);
        spice.setDescription("This is the cinnamon spice");
        spice.setImage("https://helsenyt.com/wp-content/uploads/2020/10/helsenyt_1216153735.jpg");
        spice.setName("Cinnamon");

        Spice saveSpice = spices.save(spice);

        //assertThat.(saveSpice);


    }


}
