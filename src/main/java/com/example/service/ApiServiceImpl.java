package com.example.service;

import com.example.controller.util.Constants;
import com.example.dto.StoryList;
import com.example.entity.Story;
import com.example.repo.StoryRepo;
import com.example.service.interfaces.ApiService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class ApiServiceImpl implements ApiService{

    @Autowired
    private StoryRepo storyRepo;

    @Override
    @Scheduled(cron = "0 * * * *")
    public void loadAllStories() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> map = new HashMap<>();
        map.put("interestName", "Star Wars");
        map.put("key", Constants.getFarooKey());
        ResponseEntity<StoryList> storyListEntity = restTemplate.getForEntity(Constants.getFarooUrl(), StoryList.class, map);

        if(storyListEntity.getStatusCode() == HttpStatus.OK) {
            for(Story story: storyListEntity.getBody().getResults()) {
                if(story.getIurl() != null) {
                    story.setInterestName("Star Wars");
                    storyRepo.save(story);
                }
            }
        }
    }
}
