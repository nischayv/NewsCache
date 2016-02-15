package com.example.config;

import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.ApplicationContextException;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableJpaRepositories(value = "com.example.repo")
public class RepoConfig implements EnvironmentAware{

    private final Logger log = LoggerFactory.getLogger(RepoConfig.class);

    private RelaxedPropertyResolver propertyResolver;
    private Environment environment;

    /*
     * Set local spring environment and propertyResolver
     * Property resolver contains config settings for properties beginning with "spring.datasource"
     */
    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
        this.propertyResolver = new RelaxedPropertyResolver(environment, "spring.datasource.");
    }

    /*
      * HikariCp Connection pooling bean.
      * Will create a connection pool based on settings defined in properties files .yml and .properties)
      * Checks to see if we are using a invalid password, and that a connection can be made before returning a datasource
      * in order to prevent user lockouts.
     */
    @Bean(destroyMethod = "shutdown")
    public DataSource dataSource() {
        log.debug("test");
        log.debug("Configuring Datasource");
        if (propertyResolver.getProperty("url") == null && propertyResolver.getProperty("databaseName") == null) {
            log.error("Your database connection pool configuration is incorrect! The application" +
                            "cannot start. Please check your Spring profile, current profiles are: {}",
                    Arrays.toString(environment.getActiveProfiles()));

            throw new ApplicationContextException("Database connection pool is not configured correctly");
        }
        HikariConfig config = new HikariConfig();
        if (propertyResolver.getProperty("url") != null) {
            config.setDataSourceClassName(propertyResolver.getProperty("dataSourceClassName"));
            config.addDataSourceProperty("url", propertyResolver.getProperty("url"));
        } else {
            config.setDriverClassName(propertyResolver.getProperty("driverClassName"));
            config.setJdbcUrl(propertyResolver.getProperty("jdbcUrl"));
        }

        config.setInitializationFailFast(true);
        config.setConnectionTestQuery(propertyResolver.getProperty("connectionTestQuery"));
        config.setUsername(propertyResolver.getProperty("username"));
        //config.setPassword(getSecurePassword());
        config.setPassword(propertyResolver.getProperty("password"));
        config.setIdleTimeout(getIdleTimeout());
        config.setMaxLifetime(getMaxLife());
        config.setMaximumPoolSize(getMaxPoolSize());

        if (StringUtils.isBlank(config.getPassword())
                || StringUtils.containsIgnoreCase(config.getPassword(), "secret")
                || StringUtils.startsWith(config.getPassword(), "'")) {
            return null;
        }

        return new HikariDataSource(config);
    }

    @Bean(name = {"org.springframework.boot.autoconfigure.AutoConfigurationUtils.basePackages"})
    public List<String> getBasePackages() {
        List<String> basePackages = new ArrayList<>();
        basePackages.add("edu.iastate.sa");
        return basePackages;
    }

    @Bean
    public Hibernate4Module hibernate4Module() {
        return new Hibernate4Module();
    }

    private Long getIdleTimeout() {
        String idle = propertyResolver.getProperty("idleTimeout");
        return getDefaultLong(idle, 1800000L);
    }

    private Long getMaxLife() {
        String maxLife = propertyResolver.getProperty("maxLifetime");
        return getDefaultLong(maxLife, 7200000L);
    }

    private Integer getMaxPoolSize() {
        String maxConn = propertyResolver.getProperty("maximumPoolSize");
        return getDefaultInt(maxConn, 10);
    }

    private Long getDefaultLong(String str, Long defaultVal) {
        if (StringUtils.isNotBlank(str)
                || StringUtils.isNumeric(str)) {
            return Long.valueOf(str);
        }
        return defaultVal;
    }

    private Integer getDefaultInt(String str, Integer defaultVal) {
        if (StringUtils.isNotBlank(str)
                || StringUtils.isNumeric(str)) {
            return Integer.valueOf(str);
        }
        return defaultVal;
    }
}
