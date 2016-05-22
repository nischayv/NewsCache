package com.example.controller;

import com.example.dto.InterestDtoList;
import com.example.dto.SubscribeDto;
import com.example.entity.Interest;
import com.example.entity.Story;
import com.example.entity.User;
import com.example.service.interfaces.InterestService;
import com.example.service.interfaces.StoryService;
import com.example.service.interfaces.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/interest")
public class InterestController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private UserService userService;

    @Autowired
    private InterestService interestService;

    @RequestMapping(value = "/load/{interestName}",  method = RequestMethod.GET)
    public ResponseEntity<?> loadAllStories(@PathVariable  String interestName) throws JsonProcessingException {
        return new ResponseEntity<>(storyService.loadAllStories(interestName), HttpStatus.OK);
    }

    @RequestMapping(value = "/follow",  method = RequestMethod.POST)
    public ResponseEntity<?> follow(@RequestBody SubscribeDto subscribeDto) throws JsonProcessingException {
        User user = userService.findByUsername(subscribeDto.getUsername());
        Interest interest = interestService.findByName(subscribeDto.getInterestName());
        user.getInterestList().add(interest);
        userService.save(user);
        interest.getUserList().add(user);
        interestService.save(interest);
        Authentication authentication = new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/unfollow",  method = RequestMethod.POST)
    public ResponseEntity<?> unfollow(@RequestBody SubscribeDto subscribeDto) throws JsonProcessingException {
        User user = userService.findByUsername(subscribeDto.getUsername());
        Interest interest = interestService.findByName(subscribeDto.getInterestName());
        List<User> users = interest.getUserList();
        for(int i = 0; i < users.size(); i++) {
            if(users.get(i).equals(user)) {
                users.remove(i);
                break;
            }
        }
        interest.setUserList(users);
        List<Interest> interests = user.getInterestList();
        for(int i = 0; i < interests.size(); i++) {
            if(interests.get(i).equals(interest)) {
                interests.remove(i);
                break;
            }
        }
        user.setInterestList(interests);
        userService.save(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value="/getPics/{username}", method = RequestMethod.GET)
    public ResponseEntity<?> getPics(@PathVariable String username) {
        User user = userService.findByUsername(username);
        InterestDtoList interestDtoList = new InterestDtoList();
        for(Interest interest: user.getInterestList()) {
            List<Story> storyList = storyService.loadAllStories(interest.getName());
            interestDtoList.add(interest.getName(), storyList.get(0).getIurl());
        }
        return new ResponseEntity<>(interestDtoList, HttpStatus.OK);
    }
}
