package com.example.service;

import com.example.repo.UserSecurityCredentialRepo;
import com.example.service.interfaces.UserSecurityCredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;


@Service
@Transactional
public class UserSecurityCredentialServiceImpl implements UserSecurityCredentialService {

    @Autowired
    private UserSecurityCredentialRepo userSecRepo;

    @Override
    public String getAuthority(Long userId) {
        if(userId != null) {
            return userSecRepo.findOne(userId).getAuthority();
        }
        else {
            return "ANONYMOUS";
        }
    }
}
