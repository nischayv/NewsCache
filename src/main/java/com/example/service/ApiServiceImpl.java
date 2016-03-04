package com.example.service;

import com.example.dto.StoryList;
import com.example.repo.StoryRepo;
import com.example.service.interfaces.ApiService;
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
    public void loadAllStories(String interestName) {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> map = new HashMap<>();
        map.put("interestName", interestName);
        map.put("key","AjFzRJttLvOXBpb3BLsR@Qq-yp8_");
        String url = "http://www.faroo.com/api?q={interestName}&start=1&length=10&l=en&src=news&i=false&f=json&key={key}";
        ResponseEntity<StoryList> StoryListEntity = restTemplate.getForEntity(url, StoryList.class, map);
    }
}
