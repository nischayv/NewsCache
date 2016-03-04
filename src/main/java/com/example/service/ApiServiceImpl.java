package com.example.service;

import com.example.repo.StoryRepo;
import com.example.service.interfaces.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiServiceImpl implements ApiService{

    @Autowired
    private StoryRepo storyRepo;

    @Override
    public void loadAllStories() {
        RestTemplate restTemplate = new RestTemplate();
    }
}
