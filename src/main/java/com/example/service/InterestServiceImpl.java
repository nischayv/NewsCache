package com.example.service;

import com.example.entity.Interest;
import com.example.repo.InterestRepo;
import com.example.service.interfaces.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class InterestServiceImpl implements InterestService{

    @Autowired
    private InterestRepo interestRepo;

    @Override
    public List<String> findAllInterestNames() {
        List<String> list =  new LinkedList<>();
        for(Interest interest: interestRepo.findAll()) {
            list.add(interest.getName());
        }
        return list;
    }

    @Override
    public Interest findByName(String name) {
        return interestRepo.findByName(name);
    }
}
