package com.parcelEase.parcelEase.service;

import com.parcelEase.parcelEase.entity.Parcel;
import com.parcelEase.parcelEase.repository.ParcelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParcelServiceImpl implements ParcelService {
    private ParcelRepository parcelRepository;

@Autowired
public ParcelServiceImpl(ParcelRepository theParcelRepository) {
    parcelRepository = theParcelRepository;
}
    @Override
    public List<Parcel> findByStatus(int status) {return parcelRepository.findByStatus(status);}
}
