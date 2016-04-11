package com.example.entity;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "user_security_credential")
public class UserSecurityCredential implements GrantedAuthority {

    private Long userSecurityCredentialId;
    private SecurityCredential securityCredential;
    private User user;

    public UserSecurityCredential() {}

    public UserSecurityCredential(Long userSecurityCredentialId) {
        this.userSecurityCredentialId = userSecurityCredentialId;
    }

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getUserSecurityCredentialId() {
        return userSecurityCredentialId;
    }

    public void setUserSecurityCredentialId(Long userSecurityCredentialId) {
        this.userSecurityCredentialId = userSecurityCredentialId;
    }

    @ManyToOne
    @JoinColumn(name = "security_credential_id")
    public SecurityCredential getSecurityCredential() {
        return securityCredential;
    }

    public void setSecurityCredential(SecurityCredential securityCredential) {
        this.securityCredential = securityCredential;
    }

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    @Transient
    public String getAuthority() {
        return securityCredential.getAuthority();
    }

    public void setAuthority(String authority) {
        securityCredential.setAuthority(authority);
    }
}
