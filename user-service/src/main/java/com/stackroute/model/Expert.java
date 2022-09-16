package com.stackroute.model;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Builder
@Data
@Document(collection = "expert")
public class Expert {

    @Id
    private String emailId;

    private String firstName;
    private String lastName;
    private String role;
    private String specialization;

    private String phoneNumber;

    private String educationalQualification;

    private String aboutMe;

    private String experience;
    private String avatarUrl;

    private String photo;

    public Expert(){

    }
    public Expert(String emailId, String firstName, String lastName, String role, String specialization,
                  String phoneNumber, String educationalQualification, String aboutMe, String experience, String avatarUrl,
                  String photo) {
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.specialization = specialization;
        this.phoneNumber = phoneNumber;
        this.educationalQualification = educationalQualification;
        this.aboutMe = aboutMe;
        this.experience = experience;
        this.avatarUrl = avatarUrl;
        this.photo = photo;
    }
}
