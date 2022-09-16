package com.stackroute.utility;


import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtUtil {
    static final long EXPIRATIONTIME = 3600000L;
    static String SIGNINGKEY;
    static final String PREFIX = "Bearer";

    public JwtUtil() {
    }

    @Value("${SIGNING_KEY}")
    public void setSigningkey(String signingkey) {
        SIGNINGKEY = signingkey;
    }

    public static String addExpertToken(HttpServletResponse res, Optional<Expert> expert) {
        Claims claims = Jwts.claims();
        System.out.println("SIGNINGKEY" + SIGNINGKEY);
        Expert exp = expert.get();
        claims.put("firstName", exp.getFirstName());
        claims.put("lastName", exp.getLastName());
        claims.put("avatar", exp.getAvatarUrl());
        claims.put("email", exp.getEmailId());
        claims.put("specialization", exp.getSpecialization());
        String jwtToken = Jwts.builder().setClaims(claims).setExpiration(new Date(System.currentTimeMillis() + 3600000L)).signWith(SignatureAlgorithm.HS512, SIGNINGKEY).compact();
        return jwtToken;
    }

    public static String addEnthusiastToken(HttpServletResponse res, Optional<Enthusiast> enthusiast) {
        Claims claims = Jwts.claims();
        System.out.println("SIGNINGKEY" + SIGNINGKEY);
        Enthusiast enthu = enthusiast.get();
        claims.put("firstName", enthu.getFirstName());
        claims.put("lastName", enthu.getLastName());
        claims.put("avatar", enthu.getAvatarUrl());
        claims.put("email", enthu.getEmailId());
        String jwtToken = Jwts.builder().setClaims(claims).setExpiration(new Date(System.currentTimeMillis() + 3600000L)).signWith(SignatureAlgorithm.HS512, SIGNINGKEY).compact();
        return jwtToken;
    }
}

