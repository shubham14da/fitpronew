/**
 * Created by Shanmukha
 * Date 23-07-2022
 * Time 15:56
 */
package com.stackroute.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
        private static final String GET = "GET";
        private static final String POST = "POST";
        private static final String DELETE = "DELETE";
        private static final String PUT = "PUT";
        private static final String PATCH = "PATCH";

        public WebMvcConfigurer corsConfigurer(){
            return new WebMvcConfigurer() {

                @Override
                public void addCorsMappings(CorsRegistry registry) {

                    registry.addMapping("/**")
                            .allowedMethods(GET, PUT, POST, DELETE, PATCH)
                            .allowedHeaders("*")
                            .allowedOriginPatterns("*")
                            .allowCredentials(true)
                    ;

                }

            };
        }

    }

