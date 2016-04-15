package com.example.controller;

import com.example.entity.Interest;
import com.example.service.interfaces.ApiService;
import com.example.service.interfaces.InterestService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/api/")
public class UserController {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ResponseEntity<?> login() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @RequestMapping(value = "/logout", method = RequestMethod.GET)
//    public ResponseEntity<?> logout() {
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> user(Principal user) {
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
