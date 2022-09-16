//package com.stackroute.appointment;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.appointment.controller.AppointmentController;
//import com.stackroute.appointment.model.Appointment;
//import com.stackroute.appointment.model.CanceledAppointment;
//import com.stackroute.appointment.service.AppointmentService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.Date;
//import java.util.List;
//
//import static com.stackroute.appointment.model.AppointmentStatus.BOOKED;
//import static com.stackroute.appointment.model.AppointmentStatus.CANCELED;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@SpringBootTest
//@ExtendWith(MockitoExtension.class)
//@AutoConfigureMockMvc
//public class AppointmentControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Mock
//    private AppointmentService appointmentService;
//
//    @InjectMocks
//    private AppointmentController appointmentController;
//
//    private Appointment appointment;
//    private CanceledAppointment canceledAppointment;
//    private List<Appointment> list;
//
//    @BeforeEach
//    public void setup() {
//        appointment = Appointment.builder().appointmentId("101").userEmailId("test1@gmail.com").expertEmailId("test@gmail1.com")
//                .userName("testName1").expertName("testName2").appointmentSpecialization("sickness").PatientConcern("testConcern")
//                .startTime("10.00").endTime("11.00").appointmentStatus(BOOKED).appointmentDate(new Date()).bookedOn(new Date()).build();
//
//        canceledAppointment = CanceledAppointment.builder().appointmentId("101").appointmentStatus(CANCELED).build();
//        list = Collections.singletonList(appointment);
//
//    }
//
//
////    @Test
////    public void appointments() throws Exception {
////
////        //     when(appointmentService.saveAppointment(any())).thenReturn(appointment);
////        mockMvc.perform(post("/api/appointment/save")
////                        .contentType(MediaType.APPLICATION_JSON)
////                        .content(objectMapper.writeValueAsString(appointment)))
////                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
////    }
//
//    @Test
//    public void canceledAppointment() throws Exception {
//
////        when(appointmentService.canceledAppointment(any())).thenReturn(appointment);
//        mockMvc.perform(patch("/api/appointment/update")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(canceledAppointment)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//    }
//
////    @Test
////    public void getAllAppointments() throws Exception {
////
////        mockMvc.perform(get("/api/appointment/all")
////                        .contentType(MediaType.APPLICATION_JSON)
////                        .content(objectMapper.writeValueAsString(list)))
////                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
////    }
//
//
//}
