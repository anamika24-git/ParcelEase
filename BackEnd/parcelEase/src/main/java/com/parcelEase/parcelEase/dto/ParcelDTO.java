package com.parcelEase.parcelEase.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParcelDTO {
    private String pid;
    private String origin;
    private LocalDate date;
    private String shelfNumber;
    private String receivedBy;
    private int isCollected;
    private String studentName;
    private String studentEmail;

}
