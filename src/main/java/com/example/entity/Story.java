package com.example.entity;

import javax.persistence.*;

@Entity
@Table(name = "story")
public class Story {

    private Long id;

    public Story() {}

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
