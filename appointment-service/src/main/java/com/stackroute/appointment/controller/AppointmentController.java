package com.stackroute.appointment.controller;

import com.stackroute.appointment.model.Appointment;
import com.stackroute.appointment.model.CanceledAppointment;
import com.stackroute.appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/appointment")
@CrossOrigin
public class AppointmentController {

    // ResponseEntity;

    private AppointmentService appointmentService;

    @Autowired
    public AppointmentController( AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> appointments(@RequestBody Appointment appointment) {
        try {
            appointmentService.saveAppointment(appointment);
            appointmentService.sendAppointmentMessage(appointment);
            return new ResponseEntity<>("Created Successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Couldn't add the appointment", HttpStatus.CONFLICT);
        }
    }

    @PatchMapping("/update")
    public ResponseEntity<?> canceledAppointment(@RequestBody CanceledAppointment canceledAppointment) {
        try {
            appointmentService.canceledAppointment(canceledAppointment);
            return new ResponseEntity<>("Updated Successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Couldn't cancel the appointment", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> allAppointments() {
        try {
            return new ResponseEntity<>(appointmentService.getAllAppointments(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/expertId/{expertId}")
    public ResponseEntity<?> allAppointmentsByExpertId(@PathVariable String expertId) {
        try {
            return new ResponseEntity<>(appointmentService.listAppointmentByExpertEmailId(expertId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Couldn't find the appointment by expert ID", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/userId/{userId}")
    public ResponseEntity<?> allAppointmentsByUserId(@PathVariable String userId) {
        try {
            return new ResponseEntity<>(appointmentService.listAppointmentByUserEmailId(userId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Couldn't find the appointment by user ID", HttpStatus.CONFLICT);
        }
    }
}
