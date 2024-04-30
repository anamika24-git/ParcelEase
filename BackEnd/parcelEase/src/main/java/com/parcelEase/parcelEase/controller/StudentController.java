package com.parcelEase.parcelEase.controller;


import com.parcelEase.parcelEase.entity.Student;
import com.parcelEase.parcelEase.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/parcelease")
public class StudentController {

    private StudentService studentService;


    public StudentController(StudentService theStudentService) {
        studentService = theStudentService;
    }

    @GetMapping("/students")
    public List<Student> findAll() {
        return studentService.findAll();
    }

    @GetMapping("/students/{phoneNumber}")

    public Student getStudent(@PathVariable String phoneNumber) {
        Student theStudent = studentService.findByPhoneNumber(phoneNumber);

        if (theStudent == null) {
            throw new RuntimeException(" Student phone number  not found - " + phoneNumber);
        }
        return theStudent;
    }

//    @PostMapping("/parcels")
//    public Student parcelReceived(@RequestBody OrderRequest orderRequest) {
//        return studentRepository.save(orderRequest.getStudent());
//    }

//     @GetMapping("/parcelsList")
//     public List<Student> findAllParcels() {
//         return studentRepository.findAll();
//     }
}
