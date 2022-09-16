package com.stackroute.appointment.service;

import com.stackroute.appointment.model.Appointment;
import com.stackroute.appointment.model.CanceledAppointment;
import com.stackroute.appointment.rabbitmq.MQConfig;
import com.stackroute.appointment.repository.AppointmentRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private RabbitTemplate template;

    //Adding appointments
    public Appointment saveAppointment(Appointment appointment) {
        appointment.setAppointmentId(UUID.randomUUID().toString());
        return appointmentRepository.save(appointment);
    }

   //Cancelling appointments
    public Appointment canceledAppointment(CanceledAppointment canceledAppointment) {
        Appointment appointment = appointmentRepository.findById(canceledAppointment.getAppointmentId()).get();
        appointment.setAppointmentStatus(canceledAppointment.getAppointmentStatus());
        return appointmentRepository.save(appointment);
    }

    //Get all the appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    //Get the list of appointment by user email ID
    public List<Appointment> listAppointmentByUserEmailId(String userEmail) {
        return appointmentRepository.findAppointmentByUserEmailId(userEmail);
    }

    //Get the list of appointment by expert email ID
    public List<Appointment> listAppointmentByExpertEmailId(String expertEmail) {
        return appointmentRepository.findAppointmentByExpertEmailId(expertEmail);
    }

    public void deleteAppointmentByUserId(String userEmail) {
        appointmentRepository.deleteAppointmentByUserEmailId(userEmail);
    }

    //Send the appointment details to the user
    public String sendAppointmentMessage(Appointment appointment) {
        template.convertAndSend(MQConfig.EXCHANGE, MQConfig.ROUTING_KEY, appointment);
        return "send successfully";
    }
}
