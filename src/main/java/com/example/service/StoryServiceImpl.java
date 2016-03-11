package com.example.service;

import com.example.entity.Story;
import com.example.repo.StoryRepo;
import com.example.service.interfaces.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryRepo storyRepo;

    @Override
    public List<Story> loadAllStories(String interestName) {
        return storyRepo.findAllByInterestName(interestName);
    }

}
