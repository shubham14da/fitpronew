package com.stackroute.authentication.controller;

import com.stackroute.authentication.model.Authentication;
import com.stackroute.authentication.model.LoginCredentials;
import com.stackroute.authentication.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> authentication(@RequestBody Authentication authentication) {
        try {
            System.out.println(authentication.toString());
            authenticationService.createUser(authentication);
            return new ResponseEntity<>("User created Successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("User creation failed", HttpStatus.CONFLICT);
        }
    }


    @PutMapping("/updateUser")
    public ResponseEntity<?> updateAuthentication( @RequestBody Authentication authentication) {
        try {
            authenticationService.updateUser(authentication);
            return new ResponseEntity<>("User updated Successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("User update failed", HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/authenticateUser")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginCredentials loginCredentials){
        try {
              String jwtToken= authenticationService.authenticateUser(loginCredentials);
              if (jwtToken!=null)
               return new ResponseEntity<>(jwtToken,HttpStatus.OK);
              else
                  throw new Exception("User authentication failed");
        }catch (Exception e){
            return new ResponseEntity<>("User authentication failed",HttpStatus.NOT_FOUND);
        }
    }

}
