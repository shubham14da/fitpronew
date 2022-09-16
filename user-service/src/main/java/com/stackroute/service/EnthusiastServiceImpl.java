package com.stackroute.service;

import com.stackroute.dto.EnthusiastUpdateRequest;
import com.stackroute.exception.EnthusiastAlreadyExistsException;
import com.stackroute.exception.EnthusiastNotFoundException;
import com.stackroute.model.Enthusiast;
import com.stackroute.repository.EnthusiastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class EnthusiastServiceImpl implements EnthusiastService {

    @Autowired
    private EnthusiastRepository enthusiastRepository;
    @Override
    public Enthusiast saveEnthusiast(Enthusiast enthusiast) throws EnthusiastAlreadyExistsException {
        Optional<Enthusiast> emailIdOptional = enthusiastRepository.findByEmailId(enthusiast.getEmailId());
        if(emailIdOptional.isPresent()){
            throw new EnthusiastAlreadyExistsException("Enthusiast with given emailId "+ enthusiast.getEmailId() + " already exist");
        }else {
            enthusiastRepository.save(enthusiast);
            return enthusiast;
        }
    }

    @Override
    public Enthusiast updateEnthusiast(String emailId, Enthusiast request) {
        Optional<Enthusiast> emailIdOptional = enthusiastRepository.findByEmailId(emailId);
        Enthusiast enthusiast = emailIdOptional.get();
        enthusiast.setFirstName(request.getFirstName());
        enthusiast.setLastName(request.getLastName());
        enthusiast.setPhoneNumber(request.getPhoneNumber());
        enthusiast.setPhoto(request.getPhoto());
        return enthusiastRepository.save(enthusiast);
    }

    @Override
    public Optional<Enthusiast> getEnthusiastByUsername(String username) throws EnthusiastNotFoundException {
        if(!this.enthusiastRepository.findById(username).isPresent()){
            throw new EnthusiastNotFoundException();
        }
        else{
            return enthusiastRepository.findById(username);
        }
    }

    @Override
    public Enthusiast getEnthusiastById(String emailId) throws EnthusiastNotFoundException{
        if(enthusiastRepository.existsById(emailId)){
            return enthusiastRepository.findById(emailId).get();
        }
        throw new EnthusiastNotFoundException();
    }

}
