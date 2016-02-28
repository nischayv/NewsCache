package com.example.entity;


import javax.persistence.*;

@Entity
@Table(name = "interest")
public class Interest implements java.io.Serializable{

    private Long id;
    private String name;
    private String image;

    public Interest() {}

    public Interest(String name) {
        this.name = name;
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

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name="image")
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
