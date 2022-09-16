package com.stackroute.authentication.repository;

import com.stackroute.authentication.model.Authentication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationRepository extends JpaRepository<Authentication,String> {
}
