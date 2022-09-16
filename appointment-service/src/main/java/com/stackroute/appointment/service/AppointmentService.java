package com.stackroute.appointment.service;

import com.stackroute.appointment.model.Appointment;
import com.stackroute.appointment.model.CanceledAppointment;

import java.util.List;

public interface AppointmentService {

    Appointment saveAppointment(Appointment appointment);

    Appointment canceledAppointment(CanceledAppointment canceledAppointment);

    List<Appointment> getAllAppointments();

    List<Appointment> listAppointmentByUserEmailId(String userEmail);

    List<Appointment> listAppointmentByExpertEmailId(String expertEmail);

    void deleteAppointmentByUserId(String userEmail);

    String sendAppointmentMessage(Appointment message);
}
