package com.stackroute.model;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Builder
@Data
@Document(collection = "enthusiast")
public class Enthusiast {

    @Id
    private String emailId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String avatarUrl;
    private String photo;

    public Enthusiast(){

    }
    public Enthusiast(String emailId, String firstName, String lastName, String phoneNumber, String avatarUrl, String photo) {
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.avatarUrl = avatarUrl;
        this.photo = photo;
    }
}
