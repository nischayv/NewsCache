package com.example.service.interfaces;


import com.example.entity.User;

public interface UserService {

    User findByUsername(String username);
}
