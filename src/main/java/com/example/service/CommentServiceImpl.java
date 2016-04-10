package com.example.service;


import com.example.entity.Comment;
import com.example.repo.CommentRepo;
import com.example.service.interfaces.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import java.util.LinkedList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private SimpMessagingTemplate template;

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
        Comment savedComment = commentRepo.save(comment);
        if(savedComment!= null) {
            template.convertAndSend("/topic/message", findAllByStoryTitle(savedComment.getStory().getTitle()));
        }
        return savedComment;
    }
}
