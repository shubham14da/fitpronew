package com.stackroute.authentication.service;

import com.stackroute.authentication.model.Authentication;
import com.stackroute.authentication.model.LoginCredentials;

public interface AuthenticationService {
    Authentication createUser(Authentication authentication);
    void updateUser(Authentication authentication);

    String authenticateUser(LoginCredentials loginCredentials);
}
