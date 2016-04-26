package com.example.service;

import com.example.dto.UserDto;
import com.example.entity.SecurityCredential;
import com.example.entity.User;
import com.example.entity.UserSecurityCredential;
import com.example.repo.SecurityCredentialRepo;
import com.example.repo.UserRepo;
import com.example.repo.UserSecurityCredentialRepo;
import com.example.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.LinkedList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private SecurityCredentialRepo securityCredentialRepo;

    @Autowired
    private UserSecurityCredentialRepo userSecurityCredentialRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

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

    @Override
    public User save(User user) {
        if(user != null) {
            return userRepo.save(user);
        }
        else {
            return null;
        }
    }

    @Override
    public User saveAsUser(UserDto userDto) {
        SecurityCredential securityCredential = securityCredentialRepo.findByAuthority("user");
        User user = new User(userDto.getFirstName(), userDto.getLastName(), userDto.getEmail(), userDto.getUsername(), passwordEncoder.encode(userDto.getPassword()));
        List<UserSecurityCredential> userSecurityCredentialList = new LinkedList<>();
        UserSecurityCredential userSecurityCredential = new UserSecurityCredential();
        userSecurityCredential.setSecurityCredential(securityCredential);
        userSecurityCredential.setUser(user);
        userSecurityCredentialList.add(userSecurityCredential);
        user.setUserSecurityCredentials(userSecurityCredentialList);
        userRepo.save(user);
        userSecurityCredentialRepo.save(userSecurityCredential);
        return user;
    }

    @Override
    public void delete(User user){
        if(user != null){
            userRepo.delete(user);
        }
    }
}
