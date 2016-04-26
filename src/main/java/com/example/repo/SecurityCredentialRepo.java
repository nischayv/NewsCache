package com.example.repo;


import com.example.entity.SecurityCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface SecurityCredentialRepo extends JpaRepository<SecurityCredential, Long> {
    SecurityCredential findByAuthority(String authority);
}
