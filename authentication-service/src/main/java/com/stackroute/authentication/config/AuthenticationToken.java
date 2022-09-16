package com.stackroute.authentication.config;

import com.stackroute.authentication.model.Authentication;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.Date;
@Service
public class AuthenticationToken {

    static final long VALIDITY = 3600000L;
    static String AUTHENTICATION_KEY;

    @Value("${AUTHENTICATION_KEY}")
    public void setAuthenticationKey(String authenticationKey) {
        AUTHENTICATION_KEY = authenticationKey;
    }

    public String jwtToken(Authentication authentication){
        Claims claims = Jwts.claims();
        System.out.println("Authentication key"+AUTHENTICATION_KEY);
        claims.put("userEmailId",authentication.getUserEmailId());
        claims.put("userRole",authentication.getUserRole());
        String jwtToken = Jwts.builder().setClaims(claims).setExpiration(new Date(System.currentTimeMillis()
                + 3600000L)).signWith(SignatureAlgorithm.HS512, AUTHENTICATION_KEY).compact();
        System.out.println("JWT Token"+jwtToken);
        return jwtToken;
    }
}
