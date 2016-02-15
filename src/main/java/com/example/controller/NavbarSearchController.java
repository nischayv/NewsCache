package com.example.controller;

import com.example.service.interfaces.InterestService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/navbar_search")
public class NavbarSearchController {

    @Autowired
    private InterestService interestService;

    @RequestMapping(value = "/load",  method = RequestMethod.GET)
    public ResponseEntity<?> loadAllInterests() throws JsonProcessingException{
        return new ResponseEntity<>(interestService.findAllInterestNames(), HttpStatus.OK);
    }
}
