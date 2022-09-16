package com.stackroute.controller;


import com.stackroute.exception.EnthusiastNotFoundException;
import com.stackroute.exception.ExpertNotFoundException;
import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import com.stackroute.service.EnthusiastService;
import com.stackroute.service.ExpertService;
import com.stackroute.service.GoogleService;
import com.stackroute.service.GoogleServiceImpl;
import com.stackroute.utility.CookieUtil;
import com.stackroute.utility.JwtUtil;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;
import java.io.PrintStream;
import java.time.LocalDateTime;
import java.util.Optional;

@RequestMapping({"api/v1/authorize"})
@RestController
public class OAuthController {

    @Value("${enthusiast_home_page_url}")
    String enthusiastHomePageUrl;
    @Value("${expert_home_page_url}")
    String expertHomePageUrl;
    @Value("${Domain}")
    String domain;
    @Value("${enthusiast_redirect_url}")
    String enthusiastRedirectUrl;
    @Value("${expert_redirect_url}")
    String expertRedirectUrl;
    @Value("${logout_redirect_url}")
    String logOutRedirectUrl;


    private GoogleServiceImpl googleService;
    private EnthusiastService enthusiastService;
    private ExpertService expertService;


    @Autowired
    public OAuthController(GoogleServiceImpl googleService, EnthusiastService enthusiastService, ExpertService expertService) {
        this.googleService = googleService;
        this.enthusiastService = enthusiastService;
        this.expertService = expertService;
    }

    public OAuthController() {
    }

    @GetMapping({"/enthusiast/googlelogin"})
    public RedirectView googleEnthusiastLogin() {
        RedirectView redirectview = new RedirectView();
        String url = this.googleService.googleLogin(this.enthusiastRedirectUrl);
        redirectview.setUrl(url);
        return redirectview;
    }

    @GetMapping({"/expert/googlelogin"})
    public RedirectView googleExpertLogin() {
        RedirectView redirectview = new RedirectView();
        String url = this.googleService.googleLogin(this.expertRedirectUrl);
        redirectview.setUrl(url);
        return redirectview;
    }

    @GetMapping({"/logout"})
    public RedirectView googleLogOut(HttpServletResponse res) {
        RedirectView redirectView = new RedirectView();
        CookieUtil.clearCookie(res, "JWT-TOKEN", this.domain);
        redirectView.setUrl(logOutRedirectUrl); //read from config server later
        return redirectView;
    }

    @GetMapping({"/enthusiast/complete"})
    public RedirectView googleEnthusiast(@RequestParam("code") String code, HttpServletResponse res) throws ParseException {
        String accessToken = this.googleService.getGoogleAccessToken(code, this.enthusiastRedirectUrl);
        System.out.println("accessToken: " + accessToken);
        Enthusiast user = this.googleService.getGoogleEnthusiastProfile(accessToken);
        //save user in repo
        try {
            System.out.println("USER:: " + user.toString());
            this.enthusiastService.saveEnthusiast(user);
        } catch (Exception var8) {
            PrintStream var10000 = System.out;
            LocalDateTime var10001 = LocalDateTime.now();
            var10000.println("In google method " + var10001 + " " + var8.getMessage());
        }
        //get saved user from repo
        Optional<Enthusiast> repoUser = Optional.empty();
        try {
            repoUser = enthusiastService.getEnthusiastByUsername(user.getEmailId());
        } catch (EnthusiastNotFoundException ex) {
            ex.getMessage();
        }

        String jwtToken = JwtUtil.addEnthusiastToken(res, repoUser);
        CookieUtil.create(res, "JWT-TOKEN", jwtToken, false, -1, this.domain);
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl(this.enthusiastHomePageUrl);
        return redirectview;
    }

    @GetMapping({"/expert/complete"})
    public RedirectView googleExpert(@RequestParam("code") String code, HttpServletResponse res) throws ParseException {
        String accessToken = this.googleService.getGoogleAccessToken(code, this.expertRedirectUrl);
        System.out.println("accessToken: " + accessToken);
        Expert user = this.googleService.getGoogleExpertProfile(accessToken);
        //save user in repo
        try {
            System.out.println("USER:: " + user.toString());
            this.expertService.saveExpert(user);
        } catch (Exception var8) {
            PrintStream var10000 = System.out;
            LocalDateTime var10001 = LocalDateTime.now();
            var10000.println("In google method " + var10001 + " " + var8.getMessage());
        }
        //get saved user from repo
        Optional<Expert> repoUser = Optional.empty();
        try {
            repoUser = expertService.getExpertByUsername(user.getEmailId());
        } catch (ExpertNotFoundException ex) {
            ex.getMessage();
        }

        String jwtToken = JwtUtil.addExpertToken(res, repoUser);
        CookieUtil.create(res, "JWT-TOKEN", jwtToken, false, -1, this.domain);
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl(this.expertHomePageUrl);
        return redirectview;
    }
}
