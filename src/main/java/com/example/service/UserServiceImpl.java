package com.example.service;

import com.example.entity.User;
import com.example.repo.UserRepo;
import com.example.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    public User findByUsername(String username) {
        User user = userRepo.findByUsername(username);
        if(user != null) {
            user.getComments().size();
        }
        return user;
    }
}
