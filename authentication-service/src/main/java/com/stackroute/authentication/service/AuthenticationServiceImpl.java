package com.stackroute.authentication.service;

import com.stackroute.authentication.config.AuthenticationToken;
import com.stackroute.authentication.model.Authentication;
import com.stackroute.authentication.model.LoginCredentials;
import com.stackroute.authentication.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private AuthenticationToken authenticationToken;

    private AuthenticationRepository authenticationRepository;
    @Autowired
    public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository,AuthenticationToken authenticationToken) {
        this.authenticationRepository = authenticationRepository;
        this.authenticationToken = authenticationToken;
    }

    @Override
    public Authentication createUser(Authentication authentication) {
     return authenticationRepository.save(authentication);
    }

    @Override
    public void updateUser(Authentication authentication) {
    Authentication authentication1=authenticationRepository.findById(authentication.getUserEmailId()).get();
    authentication1.setPassword(authentication.getPassword());
    authentication1.setUserRole(authentication.getUserRole());
        authenticationRepository.save(authentication1);
    }

    @Override
    public String authenticateUser(LoginCredentials loginCredentials) {
        Authentication authentication1= authenticationRepository.findById(loginCredentials.getUserEmailId()).get();
        if (authentication1!=null && loginCredentials.getPassword().equals(authentication1.getPassword()) ) {
            System.out.println("User validated successfully");
        String jwtToken= authenticationToken.jwtToken(authentication1);
        System.out.println("JWT token "+jwtToken);
        return jwtToken;
        } else {
            System.out.println("User validation failed");
            return null;
        }
    }
}
