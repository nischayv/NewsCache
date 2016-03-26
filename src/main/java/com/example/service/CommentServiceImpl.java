package com.example.service;


import com.example.entity.Comment;
import com.example.repo.CommentRepo;
import com.example.service.interfaces.CommentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.LinkedList;
import java.util.List;

public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepo commentRepo;

    @Override
    public List<Comment> findAllByStoryTitle(String storyTitle) {
        List<Comment> list = new LinkedList<>();
        for(Comment comment: commentRepo.findAll()){
            if(comment.getStory().getTitle().compareToIgnoreCase(storyTitle) == 0) {
                list.add(comment);
            }
        }
        return list;
    }

    @Override
    public Comment save(Comment comment) {
        return commentRepo.save(comment);
    }
}