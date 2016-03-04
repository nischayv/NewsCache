package com.example.dto;

import com.example.entity.Story;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.LinkedList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StoryList {

    private List<Story> results;
    private String query;

    StoryList() {
        results = new LinkedList<>();
    }
}
