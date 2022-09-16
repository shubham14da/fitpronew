package com.stackroute.service;

import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Service;

import org.springframework.web.client.RestTemplate;

@Service
public class GoogleServiceImpl implements GoogleService {
    @Value("${spring.social.google.app-id}")
    private String googleId;
    @Value("${spring.social.google.app-secret}")
    private String googleSecret;


    public GoogleServiceImpl() {
    }

    private GoogleConnectionFactory createGoogleConnection() {
        return new GoogleConnectionFactory(this.googleId, this.googleSecret);
    }

    public String googleLogin(String redirectUrl) {
        OAuth2Parameters parameters = new OAuth2Parameters();
        parameters.setRedirectUri(redirectUrl);
        parameters.setScope("profile email");
        return this.createGoogleConnection().getOAuthOperations().buildAuthenticateUrl(parameters);
    }

    public String getGoogleAccessToken(String code, String redirectUrl) {
        return this.createGoogleConnection().getOAuthOperations().exchangeForAccess(code, redirectUrl, null).getAccessToken();
    }

    public Enthusiast getGoogleEnthusiastProfile(String accessToken) throws ParseException {
        RestTemplate restTemplate = new RestTemplate();
        String profileData = restTemplate.getForObject("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + accessToken, String.class, new Object[0]);
        System.out.println("profileData" + profileData.getClass());
        System.out.println("profileData" + profileData);
        JSONParser parser = new JSONParser();
        JSONObject profileObj = (JSONObject)parser.parse(profileData);
        Enthusiast user = new Enthusiast();
        System.out.println("profileobj" + profileObj.getClass());
        System.out.println("name" + profileObj.get("name"));

        user.setEmailId(profileObj.get("email").toString());
        String name = profileObj.get("name").toString();
        String[] fullName = name.split(" ", 2);

        user.setFirstName(fullName[0]);
        user.setLastName(fullName[1]);
        user.setPhoneNumber("");
        user.setEmailId(profileObj.get("email").toString());
        user.setAvatarUrl(profileObj.get("picture").toString());
        return user;
    }

    public Expert getGoogleExpertProfile(String accessToken) throws ParseException {
        RestTemplate restTemplate = new RestTemplate();
        String profileData = restTemplate.getForObject("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + accessToken, String.class, new Object[0]);
        System.out.println("profileData" + profileData.getClass());
        System.out.println("profileData" + profileData);
        JSONParser parser = new JSONParser();
        JSONObject profileObj = (JSONObject)parser.parse(profileData);
        Expert user = new Expert();
        System.out.println("profileobj" + profileObj.getClass());
        System.out.println("name" + profileObj.get("name"));

        user.setEmailId(profileObj.get("email").toString());
        String name = profileObj.get("name").toString();
        String[] fullName = name.split(" ", 2);

        user.setFirstName(fullName[0]);
        user.setLastName(fullName[1]);
        user.setPhoneNumber("");
        user.setEmailId(profileObj.get("email").toString());
        user.setAvatarUrl(profileObj.get("picture").toString());
        System.out.print(user);
        return user;
    }
}
