package com.example.repo;

import com.example.entity.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface StoryRepo extends JpaRepository<Story, Long> {
    Story findByUrl(String url);
    List<Story> findAllByInterestName(String interestName);
    Story findByTitle(String title);
}
