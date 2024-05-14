package com.parcelEase.parcelEase;

import com.parcelEase.parcelEase.entity.Student;
import com.parcelEase.parcelEase.repository.StudentRepository;
import com.parcelEase.parcelEase.service.StudentServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class StudentServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentServiceImpl studentService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindAll() {
        // Arrange
        List<Student> students = new ArrayList<>();
        students.add(new Student("1", "John", "", "Doe", "Course", "1234567890", "john@example.com", "Address"));
        students.add(new Student("2", "Jane", "", "Doe", "Course", "9876543210", "jane@example.com", "Address"));
        when(studentRepository.findAll()).thenReturn(students);

        // Act
        List<Student> result = studentService.findAll();

        // Assert
        assertEquals(2, result.size());
        verify(studentRepository, times(1)).findAll();
    }

//    @Test
//    public void testFindByPhoneNumber() {
//        // Arrange
//        String phoneNumber = "1234567890";
//        Student student = new Student("1", "John", "", "Doe", "Course", phoneNumber, "john@example.com", "Address");
//        when(studentRepository.findByPhoneNumber(phoneNumber)).thenReturn(student);
//
//        // Act
//        Student result = studentService.findByPhoneNumber(phoneNumber);
//
//        // Assert
//        assertEquals("1", result.getRollNo());
//        verify(studentRepository, times(1)).findByPhoneNumber(phoneNumber);
//    }

    // Add more test cases as needed
}
