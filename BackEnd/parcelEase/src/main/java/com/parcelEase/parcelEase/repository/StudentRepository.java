package com.parcelEase.parcelEase.repository;

import com.parcelEase.parcelEase.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,String> {

    Student findByPhoneNumber(String phoneNumber);
}


