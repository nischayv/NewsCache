package com.example.repo;


import com.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
