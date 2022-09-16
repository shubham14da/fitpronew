package com.stackroute.service;

import com.stackroute.model.Appointment;
import com.stackroute.model.AppointmentStatus;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private Configuration configuration;


    @Override
    public Appointment sendEmail(Appointment appointment) throws MessagingException, IOException, TemplateException {


        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
        //helper.addAttachment("logo.png", new ClassPathResource("logo.png"));

        helper.setTo(appointment.getExpertEmailId());
        helper.setTo(appointment.getUserEmailId());
        AppointmentStatus appointmentStatus = appointment.getAppointmentStatus();
        helper.setSubject("Fit Pro Notification");

        Map<String, Object> expertMap = new HashMap<>();
        expertMap.put("name", appointment.getExpertName());
        expertMap.put("slotDate",  appointment.getAppointmentDate());
        expertMap.put("startTime", appointment.getStartTime());
        expertMap.put("endTime", appointment.getEndTime());

        Map<String, Object> userMap = new HashMap<>();
        userMap.put("name", appointment.getUserName());
        userMap.put("slotDate",  appointment.getAppointmentDate());
        userMap.put("startTime", appointment.getStartTime());
        userMap.put("endTime", appointment.getEndTime());



        if (appointmentStatus.name().equals("BOOKED")){

            Template template = configuration.getTemplate("email-booked.ftl");
            String expertMessage = FreeMarkerTemplateUtils.processTemplateIntoString(template, expertMap);
            helper.setText(expertMessage, true);

            String userMessage = FreeMarkerTemplateUtils.processTemplateIntoString(template, userMap);
            helper.setText(userMessage, true);

        } else if (appointmentStatus.name().equals("CANCELED")) {

            Template template = configuration.getTemplate("email-canceled.ftl");
            String expertMessage = FreeMarkerTemplateUtils.processTemplateIntoString(template, expertMap);
            helper.setText(expertMessage, true);

            String userMessage = FreeMarkerTemplateUtils.processTemplateIntoString(template, userMap);
            helper.setText(userMessage, true);
        }
        mailSender.send(mimeMessage);
        return appointment;

    }


}
