//package com.stackroute.controller;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.exception.EnthusiastAlreadyExistsException;
//import com.stackroute.exception.ExpertAlreadyExistsException;
//import com.stackroute.model.Enthusiast;
//import com.stackroute.model.Expert;
//import com.stackroute.service.EnthusiastService;
//import com.stackroute.service.ExpertService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//
//import org.springframework.test.web.servlet.MockMvc;
//
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//
//import static org.mockito.ArgumentMatchers.*;
//
//import static org.mockito.Mockito.when;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//
//
//
//@WebMvcTest
////@AutoConfigureMockMvc
//public class UserControllerMockitoTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private EnthusiastService enthusiastService;
//
//    private Enthusiast enthusiast;
//
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @MockBean
//    private ExpertService expertService;
//
//
//    private Expert expert;
//
//
//
//    @BeforeEach
//    public  void setup(){
//        enthusiast = Enthusiast.builder().emailId("testing@gmail.com").firstName("testing")
//                .lastName("test").phoneNumber("9087654786").photo("photo").build();
//
//        expert = Expert.builder().emailId("mockito@gmail.com").firstName("testing")
//                .lastName("test").role("SE").specialization("test").phoneNumber("9087654786")
//                .educationalQualification("B.Tech").aboutMe("Mockito").experience("1.5").photo("photo").build();
//    }
//
//
//    @Test
//    public void saveEnthusiastTestSuccess() throws Exception {
//
//        when(enthusiastService.saveEnthusiast(any())).thenReturn(enthusiast);
//
//        mockMvc.perform(post("/api/v1/saveEnthusiast")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(enthusiast)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//
//    }
//
//    @Test
//    public void saveEnthusiastTestFailure() throws Exception {
//
//        when(enthusiastService.saveEnthusiast(any())).thenThrow(EnthusiastAlreadyExistsException.class);
//
//        mockMvc.perform(post("/api/v1/saveEnthusiast")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(enthusiast)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void updateEnthusiastTest() throws Exception{
//
//        enthusiast.setFirstName("testing");
//        enthusiast.setLastName("mockito");
//        enthusiast.setPhoneNumber("9028937477");
//        enthusiast.setPhoto("Photo");
//        when(enthusiastService.updateEnthusiast(eq(enthusiast.getEmailId()), any())).thenReturn(enthusiast);
//        mockMvc.perform(patch("/api/v1/enthusiast/testing@gmail.com")
//                        .contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(enthusiast)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void saveExpertTestSuccess() throws Exception {
//
//        when(expertService.saveExpert(any())).thenReturn(expert);
//
//        mockMvc.perform(post("/api/v1/saveExpert")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(expert)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//
//    }
//
//    @Test
//    public void saveExpertTestFailure() throws Exception {
//
//        when(expertService.saveExpert(any())).thenThrow(ExpertAlreadyExistsException.class);
//
//        mockMvc.perform(post("/api/v1/saveExpert")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(expert)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void updateExpertTest() throws Exception{
//
//        expert.setFirstName("Mockito");
//        expert.setLastName("testing");
//        expert.setPhoneNumber("9874659865");
//        expert.setEducationalQualification("B.E");
//        expert.setAboutMe("test");
//        expert.setExperience("1.6");
//        expert.setPhoto("Photo");
//        when(expertService.updateExpert(eq(expert.getEmailId()), any())).thenReturn(expert);
//        mockMvc.perform(patch("/api/v1/expert/mockito@gmail.com")
//                        .contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(expert)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//    }
//
//}
