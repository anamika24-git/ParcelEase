package com.parcelEase.parcelEase;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.repository.ParcelRepository;
import com.parcelEase.parcelEase.service.ParcelServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ParcelServiceTest {

    @Mock
    private ParcelRepository parcelRepository;

    @InjectMocks
    private ParcelServiceImpl parcelService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindByIsCollected() {
        // Arrange
        int status = 0;
        List<Parcel> parcels = new ArrayList<>();
        parcels.add(new Parcel(1, "PID123", null, "Origin", LocalDate.now(), "Shelf1", "John Doe", 0));
        parcels.add(new Parcel(2, "PID456", null, "Origin", LocalDate.now(), "Shelf2", "Jane Doe", 0));
        when(parcelRepository.findByIsCollected(status)).thenReturn(parcels);

        // Act
        List<Parcel> result = parcelService.findByIsCollected(status);

        // Assert
        assertEquals(2, result.size());
        verify(parcelRepository, times(1)).findByIsCollected(status);
    }

    @Test
    public void testFindByPid() {
        // Arrange
        String pid = "PID123";
        Parcel parcel = new Parcel(1, pid, null, "Origin", LocalDate.now(), "Shelf1", "John Doe", 0);
        when(parcelRepository.findByPid(pid)).thenReturn(parcel);

        // Act
        Parcel result = parcelService.findByPid(pid);

        // Assert
        assertEquals("Shelf1", result.getShelfNumber());
        verify(parcelRepository, times(1)).findByPid(pid);
    }

    // Add more test cases as needed
}


