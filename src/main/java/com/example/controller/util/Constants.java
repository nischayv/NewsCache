package com.example.controller.util;


public class Constants {

    private static final String farooKey = "AjFzRJttLvOXBpb3BLsR@Qq-yp8_";
    private static final String farooUrl  = "http://www.faroo.com/api?q={interestName}&start=1&length=10&l=en&src=news&i=false&f=json&key={key}";

    public static String getFarooKey() {
        return farooKey;
    }

    public static String getFarooUrl() {
        return farooUrl;
    }
}
