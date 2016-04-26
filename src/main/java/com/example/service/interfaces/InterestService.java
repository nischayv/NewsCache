package com.example.service.interfaces;


import com.example.entity.Interest;

import java.util.List;

public interface InterestService {
    List<String> findAllInterestNames();
    Interest findByName(String name);
    Interest save(Interest interest);
}
