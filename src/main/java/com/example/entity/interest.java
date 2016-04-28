package com.example.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "interest")
public class Interest implements java.io.Serializable{

    private Long id;
    private String name;
    @JsonIgnore
    private List<User> userList;

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

    @ManyToMany(mappedBy = "interestList", fetch = FetchType.EAGER)
    public List<User> getUserList() {
        return this.userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    @Override
    public boolean equals(Object object) throws ClassCastException{
        if(object instanceof Interest){
            Interest user = (Interest) object;
            if(this.getId().equals(user.getId())){
                return true;
            }
            else{
                return false;
            }
        }
        return false;

    }
}
