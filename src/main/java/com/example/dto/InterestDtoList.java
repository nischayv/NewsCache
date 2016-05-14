package com.example.dto;


import java.util.LinkedList;
import java.util.List;

public class InterestDtoList {

    private List<InterestDto> interestDtoList;

    public InterestDtoList() {
        interestDtoList = new LinkedList<>();
    }

    public List<InterestDto> getInterestDtoList() {
        return interestDtoList;
    }

    public void setInterestDtoList(List<InterestDto> interestDtoList) {
        this.interestDtoList = interestDtoList;
    }

    public void add(String interestName, String src) {
        interestDtoList.add(new InterestDto(interestName, src));
    }
}
