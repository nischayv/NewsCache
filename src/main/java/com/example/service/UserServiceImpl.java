package com.example.service;

import com.example.entity.User;
import com.example.repo.UserRepo;
import com.example.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService{

    @Autowired
    private UserRepo userRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);
        if (user == null || user.getUserSecurityCredentials().isEmpty()) {
            throw new UsernameNotFoundException("Invalid Credentials");
        }
        return user;
    }

    @Override
    public User findById(Long userId) {
        return userRepo.findOne(userId);
    }

    public User findByUsername(String username) {
        User user = userRepo.findByUsername(username);
        if(user != null) {
            user.getComments().size();
        }
        return user;
    }
}
