package com.stackroute.authentication.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.Id;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Component
@Service
@Table(name = "Authentication")
public class Authentication {
    @Id
    private String userEmailId;
    private String password;
    private UserRole userRole;
}
