package com.parcelEase.parcelEase.repository;

import com.parcelEase.parcelEase.entity.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParcelRepository extends JpaRepository<Parcel,Integer> {

}
