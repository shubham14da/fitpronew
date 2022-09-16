package com.stackroute.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    @GetMapping
    public String payment(){
            return "Hello World";
        }
}
