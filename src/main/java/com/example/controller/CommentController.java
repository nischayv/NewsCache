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
    public ResponseEntity<?> loadAllStories(@RequestBody Comment comment) throws JsonProcessingException {
        return new ResponseEntity<>(commentService.save(comment), HttpStatus.OK);
    }

}
