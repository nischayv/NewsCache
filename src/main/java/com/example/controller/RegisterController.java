package com.example.controller;

import com.example.dto.UserDto;
import com.example.entity.User;
import com.example.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class RegisterController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        userService.saveAsUser(userDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
