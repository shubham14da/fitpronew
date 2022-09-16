package com.stackroute.appointment.repository;

import com.stackroute.appointment.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

    List<Appointment> findAppointmentByUserEmailId(String userEmailId);

    List<Appointment> findAppointmentByExpertEmailId(String expertEmailId);

    Appointment findAppointmentByAppointmentId(String appointmentId);

    void deleteAppointmentByUserEmailId(String userEmailId);
}
