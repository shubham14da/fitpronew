package com.stackroute.rabbitmq;

import com.stackroute.model.Appointment;
import com.stackroute.service.EmailSenderService;
import freemarker.template.TemplateException;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import java.io.IOException;

@Component
public class MessageListener {

    private EmailSenderService emailSenderService;

    @Autowired
    public MessageListener(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @RabbitListener(queues = MQConfig.QUEUE)
    public void listener(Appointment appointment) throws MessagingException, TemplateException, IOException {
        emailSenderService.sendEmail(appointment);
    }
}
