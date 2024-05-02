package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.entity.Student;

import java.util.List;

public interface StudentService {

    List<Student> findAll();

   Student findByPhoneNumber(String phoneNumber);

    Student save(Student student);

    Student save(Parcel parcel, String rollNumber);

}
