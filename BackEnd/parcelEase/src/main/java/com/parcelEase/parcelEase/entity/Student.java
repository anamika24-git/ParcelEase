package com.parcelEase.parcelEase.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "student")
@Getter
@Setter
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

    // Phone number is no longer unique (one-to-many relationship)
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "address")
    private String address;

    // Removed constructor with phone number arguments
    public Student() {
    }

    public Student(String firstName, String middleName, String lastName, String course, String email, String address) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.course = course;
        this.email = email;
        this.address = address;
    }

    // Add a one-to-many relationship with Parcel class (optional, for clarity)
    @OneToMany(mappedBy = "student")
    private List<Parcel> parcels;
}
