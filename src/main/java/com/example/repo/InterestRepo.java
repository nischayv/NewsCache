package com.example.repo;

import com.example.entity.Interest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface InterestRepo extends JpaRepository<Interest, Long>{
    Interest findByName(String name);
}
