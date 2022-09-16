package com.stackroute.service;

import com.stackroute.model.Appointment;
import freemarker.template.TemplateException;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.IOException;

@Service
public interface EmailSenderService {
    Appointment sendEmail(Appointment appointment) throws MessagingException, IOException, TemplateException;
}
