package com.example.spiceclub.repositories;

import com.example.spiceclub.models.SuperAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuperAdminRepository extends JpaRepository <SuperAdmin, Long> {
}
