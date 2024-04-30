package com.parcelEase.parcelEase.controller;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.entity.Student;
import com.parcelEase.parcelEase.service.ParcelService;
import com.parcelEase.parcelEase.service.StudentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parcelease")
public class ParcelController {


//    public ParcelController(ParcelService theParcelService) {
//        parcelService = theParcelService;
//    }
//    @PostMapping("/parcels")
//
//    public Parcel addParcel(@RequestBody Parcel theParcel) {
//
//        System.out.println(theParcel);
//
//        theParcel.setPid(0);
//        return parcelService.save(theParcel);
//
//    }

//    @PostMapping("/parcels")
//    public Parcel addParcel(@RequestBody Parcel theParcel) {
//        // Retrieve the student by rollNo
//        Student student = studentService.findByPhoneNumber(theParcel.getPhoneNumber());
//
//        // If the student is not found, you may handle this case according to your business logic.
//        if (student == null) {
//            throw new RuntimeException(" Student Not Found ");
//        }
//
//        // Create a new Parcel object
//        Parcel theParcel = new Parcel(student, parcelRequest.getOrigin(), parcelRequest.getDate(), parcelRequest.getShelfNumber());
//
//        // Save and return the Parcel object
//        return parcelService.save(theParcel);
//    }


}
