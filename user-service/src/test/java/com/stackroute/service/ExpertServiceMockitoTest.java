package com.stackroute.service;

import com.stackroute.dto.ExpertUpdateRequest;
import com.stackroute.exception.ExpertAlreadyExistsException;
import com.stackroute.model.Expert;
import com.stackroute.repository.ExpertRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class ExpertServiceMockitoTest {

    @Mock
    ExpertRepository expertRepository;

    @InjectMocks
    ExpertServiceImpl expertService;

    public Expert expert;


    @BeforeEach
    public  void setup(){
        expert = Expert.builder().emailId("mockito@gmail.com").firstName("testing")
                .lastName("test").role("SE").specialization("test").phoneNumber("9087654786")
                .educationalQualification("B.Tech").aboutMe("Mockito").experience("1.5").photo("photo").build();
    }


    @Test
    public void saveExpertTest() throws ExpertAlreadyExistsException {
        given(expertRepository.findByEmailId(expert.getEmailId())).willReturn(Optional.empty());

        given(expertRepository.save(expert)).willReturn(expert);

        expertService.saveExpert(expert);
        assertThat(expertService).isNotNull();
    }

    @Test
    public void saveExpertTestThrowsException(){

        given(expertRepository.findByEmailId(expert.getEmailId())).willReturn(Optional.of(expert));

        assertThrows(ExpertAlreadyExistsException.class, () ->{expertService.saveExpert(expert);});

        verify(expertRepository, never()).save(any(Expert.class));
    }

//    @Test
//    public void updateExpertTest(){
//
//        ExpertUpdateRequest expertRequest = new ExpertUpdateRequest();
//        expert.setFirstName("Mockito");
//        expert.setLastName("testing");
//        expert.setPhoneNumber("9874659865");
//        expert.setEducationalQualification("B.E");
//        expert.setAboutMe("test");
//        expert.setExperience("1.6");
//        expert.setPhoto("Photo");
//
//        given(expertRepository.findByEmailId(expert.getEmailId())).willReturn(Optional.of(expert));
//
//        expertService.updateExpert(expert.getEmailId(), expertRequest);
//
//        verify(expertRepository).save(expert);
//
//        verify(expertRepository).findByEmailId(expert.getEmailId());
//
//    }
}
