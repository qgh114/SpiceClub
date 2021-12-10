package com.example.spiceclub.repositories;

import com.example.spiceclub.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdminRepository extends JpaRepository <Admin, Long> {

    Admin findAdminByEmail(String email);

    Admin findAdminByEmailAndPassword(String email, String password);








}
