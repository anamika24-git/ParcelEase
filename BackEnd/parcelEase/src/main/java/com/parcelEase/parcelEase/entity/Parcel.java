package com.parcelEase.parcelEase.entity;

import com.parcelEase.parcelEase.entity.Student;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Service;


@Entity
@Table(name = "parcel")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Parcel {

    // Removed phone number field (foreign key)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pid", nullable = false)
    private int pid;


    @ManyToOne
    @JoinColumn(name = "roll_no", nullable = false) // Assuming phone_number is the foreign key column in Parcel referencing Student
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

    @Column(name = "received_by", nullable = false)
    private String  receivedBy;

    @Column(name = "is_collected", nullable = false)
    private int isCollected;

}



