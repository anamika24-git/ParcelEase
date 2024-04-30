package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parcelEase.parcelEase.entity.Student;

import java.util.List;

    @Service
    public class StudentServiceImpl implements StudentService {
        private StudentRepository studentRepository;

        @Autowired
        public StudentServiceImpl(StudentRepository theStudentRepository) {
            studentRepository = theStudentRepository;
        }


        @Override
        public List<Student> findAll() {
            return studentRepository.findAll();
        }

        @Override
        public Student findByPhoneNumber(String phoneNumber) { return studentRepository.findByPhoneNumber(phoneNumber);}


}
