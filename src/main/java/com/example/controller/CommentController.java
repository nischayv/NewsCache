package com.example.controller;

import com.example.entity.Comment;
import com.example.service.interfaces.CommentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "/save",  method = RequestMethod.POST)
    public ResponseEntity<?> saveComment(@RequestBody Comment comment) throws JsonProcessingException {
        Comment savedComment = commentService.save(comment);
        return new ResponseEntity<>(savedComment, HttpStatus.OK);
    }

    @RequestMapping(value = "/load/{storyTitle}",  method = RequestMethod.GET)
    public ResponseEntity<?> loadComments(@PathVariable String storyTitle) throws JsonProcessingException {
        return new ResponseEntity<>(commentService.findAllByStoryTitle(storyTitle), HttpStatus.OK);
    }
}
