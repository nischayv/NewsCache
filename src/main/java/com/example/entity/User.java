package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;


@Entity
@Table(name = "user")
public class User implements java.io.Serializable, UserDetails {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String password;
    @JsonIgnore
    private List<Comment> comments;
    @JsonIgnore
    private List<UserSecurityCredential> userSecurityCredentials;

    public User() {
        comments = new LinkedList<>();
        userSecurityCredentials = new LinkedList<>();
    }

    public User(String firstName, String lastName, String email, String username, String password) {
        comments = new LinkedList<>();
        userSecurityCredentials = new LinkedList<>();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
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


    @Column(name = "firstname")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "lastname")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @OneToMany(mappedBy = "user")
    public List<UserSecurityCredential> getUserSecurityCredentials() {
        return userSecurityCredentials;
    }

    public void setUserSecurityCredentials(List<UserSecurityCredential> userSecurityCredentials) {
        this.userSecurityCredentials = userSecurityCredentials;
    }
    @Override
    @Transient
    public List<UserSecurityCredential> getAuthorities() {
        return getUserSecurityCredentials();
    }

    @Override
    @Transient
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @Transient
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isEnabled() {
        return true;
    }

}
