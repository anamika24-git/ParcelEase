package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parcelEase.parcelEase.entity.Student;

import java.util.List;
import java.util.Optional;

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

        @Override
        public Student save(Student student) {
            return studentRepository.save(student);
        }

        @Override
        public Student save(Parcel parcel, String rollNumber) {
           Optional<Student> theStudent = studentRepository.findById(rollNumber);
           Student finalStudent = null;
           if(theStudent.isPresent()) {
                finalStudent = theStudent.get();
                parcel.setStudent(finalStudent);
               finalStudent.getParcels().add(parcel);

               studentRepository.save(finalStudent);
           }
           else {
               throw new RuntimeException(" Student roll number  not found - " + rollNumber);
           }
            return finalStudent;
        }



    }
