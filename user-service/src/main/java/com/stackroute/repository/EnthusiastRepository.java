package com.stackroute.repository;

import com.stackroute.model.Enthusiast;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface EnthusiastRepository extends MongoRepository<Enthusiast, String> {

    @Query("{'emailId' : ?0}")
    Optional<Enthusiast> findByEmailId(String emailId);

}
