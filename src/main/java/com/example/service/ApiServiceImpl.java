package com.example.service;

import com.example.controller.util.Constants;
import com.example.dto.StoryList;
import com.example.repo.StoryRepo;
import com.example.service.interfaces.ApiService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class ApiServiceImpl implements ApiService{

    @Autowired
    private StoryRepo storyRepo;

    @Override
    public void loadAllStories(String interestName) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> map = new HashMap<>();
        map.put("interestName", interestName);
        map.put("key", Constants.getFarooKey());
        ResponseEntity<StoryList> StoryListEntity = restTemplate.getForEntity(Constants.getFarooUrl(), StoryList.class, map);
        String test="";
    }
}
