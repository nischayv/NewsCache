package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
//
//	@Bean
//	public ResourceBundleMessageSource messageSource() {
//		ResourceBundleMessageSource source = new ResourceBundleMessageSource();
//		source.setBasenames("ValidationMessages", "i18n/SuccessMessages");
//		return source;
//	}
}
