package com.example.service.interfaces;


import com.example.dto.UserDto;
import com.example.entity.User;

public interface UserService {
    User findById(Long userId);
    User findByUsername(String username);
    User saveAsUser(UserDto userDto);
}
