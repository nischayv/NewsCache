package com.example.controller;

import com.example.service.interfaces.InterestService;
import com.example.service.interfaces.StoryService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api/interest")
public class InterestController {

    @Autowired
    private StoryService storyService;

    @RequestMapping(value = "/load/{interestName}",  method = RequestMethod.GET)
    public ResponseEntity<?> loadAllStories(@PathVariable  String interestName) throws JsonProcessingException {
        return new ResponseEntity<>(storyService.loadAllStories(interestName), HttpStatus.OK);
    }
}
