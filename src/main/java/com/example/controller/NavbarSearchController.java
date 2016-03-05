package com.example.controller;

import com.example.entity.Interest;
import com.example.service.interfaces.ApiService;
import com.example.service.interfaces.InterestService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/navbar_search")
public class NavbarSearchController {

    @Autowired
    private InterestService interestService;

    @Autowired
    private ApiService apiService;

    @RequestMapping(value = "/load",  method = RequestMethod.GET)
    public ResponseEntity<?> loadAllInterests() throws JsonProcessingException{
        return new ResponseEntity<>(interestService.findAllInterestNames(), HttpStatus.OK);
    }

    @RequestMapping(value = "/search/{interestName}",  method = RequestMethod.GET)
    public ResponseEntity<?> findInterest(@PathVariable String interestName) throws JsonProcessingException{
        Interest interest = interestService.findByName(interestName);
        apiService.loadAllStories(interestName);
        if(interest != null) {
            return new ResponseEntity<>(interest, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
