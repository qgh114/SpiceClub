package com.example.spiceclub;


import com.example.spiceclub.models.Spice;
import com.example.spiceclub.repositories.SpiceRepository;
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

        Spice savedspice = spices.save(spice);
        Assertions.assertNotEquals(savedspice, null);


    }

    @Test
    public void testUpdateSpice() {
        Long spiceId = Long.valueOf(2);

        Optional<Spice> optionalSpice = spices.findById(spiceId);
        Spice spice = optionalSpice.get();

        spice.setName("Salt");
        spices.save(spice);

        Spice updatedSpice = spices.findById(spiceId).get();
        Assertions.assertEquals(updatedSpice.getName(), "Salt");

    }

    @Test
    public void testReadSpice() {
        Long spiceId = Long.valueOf(2);

        Optional<Spice> optionalSpice = spices.findById(spiceId);
        Assertions.assertTrue(optionalSpice.isPresent());

    }

    @Test
    public void testDeleteSpice() {
        // vi laver lige nyt spice objekt i databasen MED ID 4! for så derefter slette spice objekt med ID 4.
        Spice spice = new Spice();
        spice.setId(4L);
        spice.setPrice(100);
        spice.setDescription("This is the pepper spice");
        spice.setImage("https://helsenyt.com/wp-content/uploads/2020/10/helsenyt_1216153735.jpg");
        spice.setName("Pepper");
        spices.save(spice);

        //nu sletter vi
        Long spiceId = Long.valueOf(4);
        spices.deleteById(spiceId);

        Optional<Spice> optionalSpice = spices.findById(spiceId);
        Assertions.assertFalse(optionalSpice.isPresent());


    }

}
