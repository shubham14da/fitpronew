package com.stackroute.repository;

import com.stackroute.model.Expert;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExpertRepository extends MongoRepository<Expert, String> {
    @Query("{'emailId' : ?0}")
    Optional<Expert> findByEmailId(String emailId);

}
