package com.stackroute.service;

import com.stackroute.authentication.model.Authentication;
import com.stackroute.authentication.model.UserRole;
import com.stackroute.authentication.repository.AuthenticationRepository;
import com.stackroute.authentication.service.AuthenticationServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.hamcrest.Matchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
@RunWith(MockitoJUnitRunner.class)
public class AuthenticationServiceApplicationTest {
    @Mock
    private AuthenticationRepository authenticationRepository;
    @InjectMocks
    private AuthenticationServiceImpl authenticationService;
    @Test
    public void testCreateUser(){
        Authentication authentication=new Authentication();
        authentication.setUserEmailId("amol@gmail.com");
        authentication.setUserRole(UserRole.EXPERT);
        authentication.setPassword("amol");

        when(authenticationRepository.save(ArgumentMatchers.any(Authentication.class))).thenReturn(authentication);

        Authentication createdAuthentication = authenticationService.createUser(authentication);
        assertThat(createdAuthentication.getUserEmailId()).isSameAs(authentication.getUserEmailId());
        verify(authenticationRepository).save(authentication);
    }
/*@Test
    public void testUpdateUserIfExist(){
    Authentication authentication=new Authentication();
    authentication.setUserEmailId("satishmisra@gmail.com");
    authentication.setUserRole(UserRole.EXPERT);
    authentication.setPassword("satish");

    when(authenticationRepository.save(any(Authentication.class))).thenReturn(authentication);

    Authentication savedAuthentication = authenticationRepository.save(authentication);
    assertThat(savedAuthentication.getUserEmailId().;



    Authentication newAuthentication = authenticationRepository.findById(authentication.getUserEmailId()).get();
    newAuthentication.setPassword("satishmisra");

    given(authenticationRepository.findById(authentication.getUserEmailId())).willReturn(Optional.of(authentication));
    authenticationService.updateUser(newAuthentication);
    verify(authenticationRepository).save(newAuthentication);
    verify(authenticationRepository).findById(authentication.getUserEmailId());
    }

    @Test(expected = RuntimeException.class)
    public void testUpdateUserIfNotExist(){
        Authentication authentication=new Authentication();
        authentication.setUserEmailId("satishmisra@gmail.com");
        authentication.setUserRole(UserRole.EXPERT);
        authentication.setPassword("satish");

        Authentication newAuthentication = authenticationRepository.findById(authentication.getUserEmailId()).get();
        newAuthentication.setPassword("satishmisra");
        given(authenticationRepository.findById(authentication.getUserEmailId())).willReturn(Optional.ofNullable(null));
        authenticationService.updateUser(newAuthentication);
    }*/
}
