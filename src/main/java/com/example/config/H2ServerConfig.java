package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.h2.tools.Server;
import org.springframework.context.annotation.DependsOn;

import java.sql.SQLException;

@Configuration
public class H2ServerConfig {

    @Bean(name = "h2WebServer", initMethod="start", destroyMethod="stop")
    public Server h2WebServer() throws SQLException {
        return Server.createWebServer("-web", "-webAllowOthers", "-webPort", "8082");
    }

    @Bean(initMethod="start", destroyMethod="stop")
    @DependsOn(value = "h2WebServer")
    public Server h2Server() throws SQLException {
        return Server.createTcpServer("-tcp", "-tcpAllowOthers", "-tcpPort", "9092");
    }
}
