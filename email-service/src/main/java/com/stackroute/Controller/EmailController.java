package com.stackroute.Controller;

import com.stackroute.model.Appointment;
import com.stackroute.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailSenderService emailSenderService;



    @PostMapping("/sendmail/booked")
    public ResponseEntity<?> sendEmail(@RequestBody Appointment appointment){
        try {
            Appointment appointment1= emailSenderService.sendEmail(appointment);
            return new ResponseEntity<>(appointment1, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>("failed", HttpStatus.CONFLICT);

        }

    }

}
