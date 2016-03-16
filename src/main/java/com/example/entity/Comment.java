package com.example.entity;

import javax.persistence.*;

@Entity
@Table(name="comment")
public class Comment implements java.io.Serializable{

    private Long id;
    private String comment;
    private User user;
    private Story story;

    public Comment() {
    }

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "userComment")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @ManyToOne
    @JoinColumn(name="story_id")
    public Story getStory() {
        return story;
    }

    public void setStory(Story story) {
        this.story = story;
    }

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
