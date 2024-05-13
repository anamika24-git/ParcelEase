package com.parcelEase.parcelEase.controller;

import com.parcelEase.parcelEase.dto.ParcelDTO;
import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.entity.Student;
import com.parcelEase.parcelEase.service.ParcelService;
import com.parcelEase.parcelEase.service.StudentService;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.type.ArrayType;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/parcelease")
@CrossOrigin(origins = "*")
public class ParcelController {

    ParcelService parcelService;
    public ParcelController(ParcelService theParcelService) {
        parcelService = theParcelService;
    }
    @GetMapping("/parcels")
    public List<ParcelDTO> getActiveParcels() {
        List<Parcel> activeParcels =  parcelService.findByIsCollected(1);
        List<ParcelDTO> parcelDTOs = new ArrayList<>();
        for (Parcel parcel : activeParcels) {
            String studentRollNo = parcel.getStudent().getRollNo(); // Extract student roll number
            String firstName = parcel.getStudent().getFirstName();
            String middleName = parcel.getStudent().getMiddleName();
            String lastName = parcel.getStudent().getLastName();

            String studentName = firstName;
            if (middleName != null && !middleName.isEmpty()) {
                studentName += " " + middleName;
            }
            studentName += " " + lastName;
            String studentEmail = parcel.getStudent().getEmail();

            // Create a new ParcelDTO object and include the studentRollNo
            ParcelDTO parcelDTO = new ParcelDTO(
                    parcel.getPid(),
                    parcel.getOrigin(),       // Set origin from Parcel
                    parcel.getDate(),         // Set date from Parcel
                    parcel.getShelfNumber(),  // Set shelfNumber from Parcel
                    parcel.getReceivedBy(),   // Set receivedBy from Parcel
                    parcel.getIsCollected(),     // Set status from Parcel
                    studentName,
                    studentEmail

                    // Set studentRollNo extracted earlier
            );

            // Add the newly created ParcelDTO object to the list
            parcelDTOs.add(parcelDTO);
        }

        return parcelDTOs; // Return the list of ParcelDTO objects
    }
    }
