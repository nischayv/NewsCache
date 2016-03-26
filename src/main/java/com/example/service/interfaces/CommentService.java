package com.example.service.interfaces;


import com.example.entity.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> findAllByStoryTitle(String storyTitle);
    Comment save(Comment comment);
}
