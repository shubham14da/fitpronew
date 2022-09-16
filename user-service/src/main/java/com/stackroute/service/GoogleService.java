package com.stackroute.service;

import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import org.json.simple.parser.ParseException;


public interface GoogleService {
    String googleLogin(String redirectUrl);

    String getGoogleAccessToken(String code, String redirectUrl);

    Expert getGoogleExpertProfile(String accessToken) throws ParseException;

    Enthusiast getGoogleEnthusiastProfile(String accessToken) throws ParseException;
}

