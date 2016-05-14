package com.example.dto;


public class InterestDto {

    private String interestName;
    private String src;

    public InterestDto(String interestName, String src) {
        this.interestName = interestName;
        this.src = src;
    }

    public String getInterestName() {
        return interestName;
    }

    public void setInterestName(String interestName) {
        this.interestName = interestName;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }
}
