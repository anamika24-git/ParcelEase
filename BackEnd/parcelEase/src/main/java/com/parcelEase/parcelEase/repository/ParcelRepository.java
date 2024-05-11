package com.parcelEase.parcelEase.repository;

import com.parcelEase.parcelEase.entity.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParcelRepository extends JpaRepository<Parcel,Integer> {
            List<Parcel> findByIsCollected(int status);

}
