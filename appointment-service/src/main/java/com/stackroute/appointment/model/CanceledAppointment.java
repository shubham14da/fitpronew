package com.stackroute.appointment.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CanceledAppointment {

    private String appointmentId;
    private AppointmentStatus appointmentStatus;

}
