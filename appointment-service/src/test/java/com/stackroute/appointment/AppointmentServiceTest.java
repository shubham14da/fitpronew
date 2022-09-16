//package com.stackroute.appointment;
//
//
//import com.stackroute.appointment.model.Appointment;
//import com.stackroute.appointment.model.CanceledAppointment;
//import com.stackroute.appointment.repository.AppointmentRepository;
//import com.stackroute.appointment.service.AppointmentServiceImpl;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import java.util.Arrays;
//import java.util.Date;
//import java.util.List;
//
//import static com.stackroute.appointment.model.AppointmentStatus.BOOKED;
//import static com.stackroute.appointment.model.AppointmentStatus.CANCELED;
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.mockito.BDDMockito.given;
//
//
//
//@ExtendWith(MockitoExtension.class)
//public class AppointmentServiceTest {
//
//    @Mock
//    AppointmentRepository appointmentRepository;
//
//    @InjectMocks
//    AppointmentServiceImpl appointmentService;
//
//    public Appointment appointment;
//    private CanceledAppointment canceledAppointment;
//    private List<Appointment> list;
//
//
//    @BeforeEach
//    public  void setup(){
//        appointment = Appointment.builder().appointmentId("101").userEmailId("test1@gmail.com").expertEmailId("test@gmail1.com")
//                .userName("testName1").expertName("testName2").appointmentSpecialization("sickness").PatientConcern("testConcern")
//                .startTime("10.00").endTime("11.00").appointmentStatus(BOOKED).appointmentDate(new Date()).bookedOn(new Date()).build();
//
//        canceledAppointment = CanceledAppointment.builder().appointmentId("101").appointmentStatus(CANCELED).build();
//        list = Arrays.asList(appointment);
//
//    }
//
//
//    @Test
//    public void saveAppointmentTest()  {
//
//        given(appointmentRepository.save(appointment)).willReturn(appointment);
//        appointmentService.saveAppointment(appointment);
//        assertThat(appointmentService).isNotNull();
//    }
//
//}
