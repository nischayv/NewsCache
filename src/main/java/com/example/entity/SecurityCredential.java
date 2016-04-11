package com.example.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "security_credential")
public class SecurityCredential {

    private Long securityCredentialId;
    private List<UserSecurityCredential> userSecurityCredentials;
    private String authority;

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getSecurityCredentialId() {
        return securityCredentialId;
    }

    public void setSecurityCredentialId(Long securityCredentialId) {
        this.securityCredentialId = securityCredentialId;
    }

    @OneToMany(mappedBy = "securityCredential")
    public List<UserSecurityCredential> getUserSecurityCredentials() {
        return userSecurityCredentials;
    }

    public void setUserSecurityCredentials(List<UserSecurityCredential> userSecurityCredentials) {
        this.userSecurityCredentials = userSecurityCredentials;
    }

    @Column(name = "authority")
    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}
