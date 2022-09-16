package com.stackroute.service;

import com.stackroute.dto.EnthusiastUpdateRequest;
import com.stackroute.exception.EnthusiastAlreadyExistsException;
import com.stackroute.exception.EnthusiastNotFoundException;
import com.stackroute.model.Enthusiast;

import java.util.Optional;

public interface EnthusiastService {

    Enthusiast saveEnthusiast(Enthusiast enthusiast) throws EnthusiastAlreadyExistsException;

    Enthusiast updateEnthusiast(String emailId, Enthusiast request);

    Optional<Enthusiast> getEnthusiastByUsername(String username) throws EnthusiastNotFoundException;

    Enthusiast getEnthusiastById(String emailId) throws EnthusiastNotFoundException;
}
