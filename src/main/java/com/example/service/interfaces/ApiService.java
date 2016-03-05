package com.example.service.interfaces;


import com.fasterxml.jackson.core.JsonProcessingException;

public interface ApiService {
    void loadAllStories() throws JsonProcessingException;
}
