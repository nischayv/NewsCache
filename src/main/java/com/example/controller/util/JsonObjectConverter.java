package com.example.controller.util;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonObjectConverter {
    public static String toJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
