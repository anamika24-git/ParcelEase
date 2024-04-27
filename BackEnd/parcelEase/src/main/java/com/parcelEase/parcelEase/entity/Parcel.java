package com.parcelEase.parcelEase.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parcel")
@Getter
@Setter
public class Parcel {

    // Removed phone number field (foreign key)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="pid")
    private int pid;

//    @ManyToOne
//    @JoinColumn(name = "phone_number")  // Foreign key referencing student phone number
//    private Student student;

    @Column(name = "from", nullable = false)
    private String from;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "shelf_number", nullable = false)
    private String shelfNumber;
    public Parcel() {
    }


    public Parcel(String from, String date, String shelfNumber) {
        this.from = from;
        this.date = date;
        this.shelfNumber = shelfNumber;
    }
}
