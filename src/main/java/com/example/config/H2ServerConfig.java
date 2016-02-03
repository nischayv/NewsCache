package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.h2.tools.Server;

import java.sql.SQLException;

/**
 * Created by nischay on 30/01/2016.
 */
@Configuration
public class H2ServerConfig {

    @Bean(name = "h2WebServer", initMethod="start", destroyMethod="stop")
    public Server h2WebServer() throws SQLException {
        return Server.createWebServer("-web", "-webAllowOthers", "-webPort", "8082");
    }
}
