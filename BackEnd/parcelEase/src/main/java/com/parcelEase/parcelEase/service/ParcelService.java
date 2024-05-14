package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.entity.Student;

import java.util.List;

public interface ParcelService {

    List<Parcel> findByIsCollected(int status);
    Parcel findByPid(String pid);

    Parcel save(Parcel parcel);


}
