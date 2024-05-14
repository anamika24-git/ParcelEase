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
    public List<Parcel> findByIsCollected(int status) {return parcelRepository.findByIsCollected(status);}

    @Override
    public Parcel findByPid(String pid) {
        return parcelRepository.findByPid(pid);
    }

    @Override
    public Parcel save(Parcel parcel) {
        return parcelRepository.save(parcel);
    }

}
