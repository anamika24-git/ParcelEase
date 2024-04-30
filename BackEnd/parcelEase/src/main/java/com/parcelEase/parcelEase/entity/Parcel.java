package com.parcelEase.parcelEase.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "parcel")
@Data
public class Parcel {

    // Removed phone number field (foreign key)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pid")
    private int pid;

    @ManyToOne
    @JoinColumn(name = "phone_number", nullable = false) // Assuming phone_number is the foreign key column in Parcel referencing Student
    private Student student;



//    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    @JoinColumn(name = "phone_number")
//    private Student student;

    @Column(name = "origin", nullable = false)
    private String origin;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "shelf_number", nullable = false)
    private String shelfNumber;

    public Parcel() {
    }

    public Parcel(String origin, String date, String shelfNumber) {
        this.origin = origin;
        this.date = date;
        this.shelfNumber = shelfNumber;
    }
}





