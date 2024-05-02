package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.entity.Parcel;

import java.util.List;

public interface ParcelService {

    List<Parcel> findByStatus(int status);

}
