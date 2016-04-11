package com.example.repo;


import com.example.entity.UserSecurityCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UserSecurityCredentialRepo extends JpaRepository<UserSecurityCredential, Long> {
}
