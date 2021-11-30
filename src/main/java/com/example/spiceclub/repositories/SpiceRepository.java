package com.example.spiceclub.repositories;

import com.example.spiceclub.models.Spice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpiceRepository extends JpaRepository <Spice, Long> {
}
