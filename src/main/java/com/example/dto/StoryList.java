package com.example.dto;

import com.example.entity.Story;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.LinkedList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StoryList{

    @JsonProperty("results")
    private List<Story> results;

    @JsonProperty("query")
    private String query;

    StoryList() {
        results = new LinkedList<>();
    }

    public List<Story> getResults() {
        return results;
    }

    public void setResults(List<Story> results) {
        this.results = results;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
}
