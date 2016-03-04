package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "story")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Story {

    private Long id;
    private String url;
    private String iurl;
    private String kwic;
    private String title;
    private String interestName;
//    private List comments;

    public Story() {
      //  comments = new LinkedList<Comment>();
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

    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Column(name = "iurl")
    public String getIurl() {
        return iurl;
    }

    public void setIurl(String iurl) {
        this.iurl = iurl;
    }

    @Column(name = "kwic")
    public String getKwic() {
        return kwic;
    }

    public void setKwic(String kwic) {
        this.kwic = kwic;
    }

    @Column(name = "interestName")
    public String getInterestName() {
        return interestName;
    }

    public void setInterestName(String interestName) {
        this.interestName = interestName;
    }

    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    //    @OneToMany(mappedBy="story")
//    public List getComments() {
//        return comments;
//    }
//
//    public void setComments(List comments) {
//        this.comments = comments;
//    }
}
