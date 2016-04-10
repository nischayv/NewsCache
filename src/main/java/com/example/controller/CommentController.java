package com.example.controller;

import com.example.dto.CommentDto;
import com.example.entity.Comment;
import com.example.service.interfaces.CommentService;
import com.example.service.interfaces.StoryService;
import com.example.service.interfaces.UserService;
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

    @Autowired
    private UserService userService;

    @Autowired
    private StoryService storyService;

    @RequestMapping(value = "/save",  method = RequestMethod.POST)
    public ResponseEntity<?> saveComment(@RequestBody CommentDto commentDto) throws JsonProcessingException {
        Comment comment = new Comment(userService.findByUsername((commentDto.getUsername())),
                storyService.findByTitle(commentDto.getStoryTitle()), commentDto.getStoryComment());
        commentService.save(comment);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/load/{storyTitle}",  method = RequestMethod.GET)
    public ResponseEntity<?> loadComments(@PathVariable String storyTitle) throws JsonProcessingException {
        return new ResponseEntity<>(commentService.findAllByStoryTitle(storyTitle), HttpStatus.OK);
    }
}
