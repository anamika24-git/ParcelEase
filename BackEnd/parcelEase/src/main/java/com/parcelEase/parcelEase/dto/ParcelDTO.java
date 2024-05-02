package com.parcelEase.parcelEase.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParcelDTO {

    private String origin;
    private String date;
    private String shelfNumber;
    private String receivedBy;
    private int status;
    private String phNumber;
    private String studentRollNo;


}
