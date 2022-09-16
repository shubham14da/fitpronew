package com.stackroute.appointment.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "appointment")
public class Appointment {

    @Id
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
