//package com.stackroute.slot;
//
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.slot.controller.SlotController;
//import com.stackroute.slot.model.Slot;
//import com.stackroute.slot.model.Status;
//import com.stackroute.slot.service.SlotService;
//import lombok.Builder;
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
//import java.util.Date;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//
//@SpringBootTest
//@ExtendWith(MockitoExtension.class)
//@AutoConfigureMockMvc
//
//public class SlotControllerTest {
//
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Mock
//    private SlotService slotService;
//
//    @InjectMocks
//    private SlotController slotController;
//
//    private Slot slot;
//
//    @BeforeEach
//
//    public void setup(){
//       slot=Slot.builder().scheduleId("1001").expertId("expert@gmail.com").scheduleDate(new Date()).startTime("10AM")
//               .endTime("11AM").Status(Status.BOOKED).build();
//
//    }
//
//    @Test
//    public void slot() throws Exception{
//        mockMvc.perform(post("/slot/newslot").contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(slot)))
//                .andDo(MockMvcResultHandlers.print());
//
//
//
//
//
//
//    }
//}
