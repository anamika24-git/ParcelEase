package com.parcelEase.parcelEase.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "student")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @Column(name = "roll_no", nullable = false, unique = true)
    private String rollNo;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "course")
    private String course;

    @Column(name = "phone_number", nullable = false, unique = true)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "address")
    private String address;


    @JsonBackReference
    @OneToMany(mappedBy = "student" , cascade = CascadeType.MERGE)
    private List<Parcel> parcels;

    public Student(String number, String john, String s, String doe, String course, String number1, String mail, String address) {
    }
}

