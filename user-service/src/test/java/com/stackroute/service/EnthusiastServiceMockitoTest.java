package com.stackroute.service;



import com.stackroute.dto.EnthusiastUpdateRequest;
import com.stackroute.exception.EnthusiastAlreadyExistsException;
import com.stackroute.model.Enthusiast;
import com.stackroute.repository.EnthusiastRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class EnthusiastServiceMockitoTest {

    @Mock
    EnthusiastRepository enthusiastRepository;

    @InjectMocks
    EnthusiastServiceImpl enthusiastService;

    public Enthusiast enthusiast;


    @BeforeEach
    public  void setup(){
        enthusiast = Enthusiast.builder().emailId("testing@gmail.com").firstName("testing")
                .lastName("test").phoneNumber("9087654786").photo("photo").build();
    }


    @Test
    public void saveEnthuiastTest() throws EnthusiastAlreadyExistsException {
        given(enthusiastRepository.findByEmailId(enthusiast.getEmailId())).willReturn(Optional.empty());

        given(enthusiastRepository.save(enthusiast)).willReturn(enthusiast);

        enthusiastService.saveEnthusiast(enthusiast);
        assertThat(enthusiastService).isNotNull();
    }


    @Test
    public void saveEnthuiastTestThrowsException(){

        given(enthusiastRepository.findByEmailId(enthusiast.getEmailId())).willReturn(Optional.of(enthusiast));

        assertThrows(EnthusiastAlreadyExistsException.class, () ->{enthusiastService.saveEnthusiast(enthusiast);});

        verify(enthusiastRepository, never()).save(any(Enthusiast.class));


    }

//    @Test
//    public void updateEnthuiastTest(){
//
//        EnthusiastUpdateRequest enthusiastRequest = new EnthusiastUpdateRequest();
//        enthusiast.setFirstName("Mockito");
//        enthusiast.setLastName("testing");
//        enthusiast.setPhoneNumber("9874659865");
//        enthusiast.setPhoto("Photo");
//
//        given(enthusiastRepository.findByEmailId(enthusiast.getEmailId())).willReturn(Optional.of(enthusiast));
//
//        enthusiastService.updateEnthusiast(enthusiast.getEmailId(), enthusiastRequest);
//
//        verify(enthusiastRepository).save(enthusiast);
//
//        verify(enthusiastRepository).findByEmailId(enthusiast.getEmailId());
//
//    }

}
