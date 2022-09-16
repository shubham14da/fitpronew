package com.stackroute.service;

import com.stackroute.dto.ExpertUpdateRequest;

import com.stackroute.exception.ExpertAlreadyExistsException;
import com.stackroute.exception.ExpertNotFoundException;

import com.stackroute.model.Expert;

import java.util.List;
import java.util.Optional;

public interface ExpertService {

    Expert saveExpert(Expert expert) throws ExpertAlreadyExistsException;

    Expert updateExpert(String emailId, Expert request);

    Optional<Expert> getExpertByUsername(String username) throws ExpertNotFoundException;

    Expert getExpertById(String emailId) throws ExpertNotFoundException;

    List<Expert> getAllExperts();
}
