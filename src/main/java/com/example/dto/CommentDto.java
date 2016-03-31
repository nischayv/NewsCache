package com.example.dto;


public class CommentDto implements java.io.Serializable{

    private String username;
    private String storyComment;
    private String storyTitle;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStoryComment() {
        return storyComment;
    }

    public void setStoryComment(String storyComment) {
        this.storyComment = storyComment;
    }

    public String getStoryTitle() {
        return storyTitle;
    }

    public void setStoryTitle(String storyTitle) {
        this.storyTitle = storyTitle;
    }
}
