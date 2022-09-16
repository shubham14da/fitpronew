/**
 * Created by Shanmukha
 * Date 23-07-2022
 * Time 20:34
 */
package com.stackroute.authentication.model;

import lombok.Data;

@Data
public class LoginCredentials {
    private String userEmailId;
    private String password;
}
