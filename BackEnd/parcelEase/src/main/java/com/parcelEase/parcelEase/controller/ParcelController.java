package com.parcelEase.parcelEase.controller;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.entity.Student;
import com.parcelEase.parcelEase.service.ParcelService;
import com.parcelEase.parcelEase.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/parcelease")
public class ParcelController {

    ParcelService parcelService;
    public ParcelController(ParcelService theParcelService) {
        parcelService = theParcelService;
    }
    @GetMapping("/parcels")
    public List<Parcel> getActiveParcels() {
        return parcelService.findByStatus(1);
    }


}
