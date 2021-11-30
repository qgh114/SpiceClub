package com.example.spiceclub.repositories;

import com.example.spiceclub.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository <Admin, Long> {
}
