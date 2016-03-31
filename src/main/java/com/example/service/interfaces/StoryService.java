package com.example.service.interfaces;


import com.example.entity.Story;

import java.util.List;

public interface StoryService {
    List<Story> loadAllStories(String interestName);
//    Interest findByName(String name);
    Story findByTitle(String title);
}
