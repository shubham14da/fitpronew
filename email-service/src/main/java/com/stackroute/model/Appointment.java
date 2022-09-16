package com.stackroute.model;

import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Appointment {

    private String appointmentId;
    private String userEmailId;
    private String expertEmailId;
    private String userName;
    private String expertName;
    private String appointmentSpecialization;
    private String PatientConcern;
    private String startTime;
    private String endTime;
    private AppointmentStatus appointmentStatus;
    private String appointmentDate;
    private Date bookedOn;

}
