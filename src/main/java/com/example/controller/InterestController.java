package com.example.controller;

import com.example.service.interfaces.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api/interest")
public class InterestController {

    @Autowired
    private InterestService interestService;
}
