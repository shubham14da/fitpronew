package com.stackroute.service;

import com.stackroute.dto.ExpertUpdateRequest;


import com.stackroute.exception.ExpertAlreadyExistsException;
import com.stackroute.exception.ExpertNotFoundException;
import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import com.stackroute.repository.ExpertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ExpertServiceImpl implements ExpertService{

    @Autowired
    private ExpertRepository expertRepository;

    @Override
    public Expert saveExpert(Expert expert) throws ExpertAlreadyExistsException {
        Optional<Expert> emailIdOptional = expertRepository.findByEmailId(expert.getEmailId());
        if(emailIdOptional.isPresent()){
            throw new ExpertAlreadyExistsException("Expert with given emailId "+ expert.getEmailId() + " already exist");
        }else{
            expertRepository.save(expert);
            return expert;
        }
    }

    @Override
    public Expert updateExpert(String emailId, Expert request) {
        Optional<Expert> emailIdOptional = expertRepository.findByEmailId(emailId);
        Expert expert = emailIdOptional.get();
        expert.setFirstName(request.getFirstName());
        expert.setLastName(request.getLastName());
        expert.setPhoneNumber(request.getPhoneNumber());
        expert.setEducationalQualification(request.getEducationalQualification());
        expert.setAboutMe(request.getAboutMe());
        expert.setExperience(request.getExperience());
        expert.setPhoto(request.getPhoto());
        return expertRepository.save(expert);
    }

    @Override
    public Optional<Expert> getExpertByUsername(String username) throws ExpertNotFoundException{
        if(!this.expertRepository.findById(username).isPresent()){
            throw new ExpertNotFoundException();
        }
        else{
            return expertRepository.findById(username);
        }
    }

    @Override
    public Expert getExpertById(String emailId) throws ExpertNotFoundException {
        if(expertRepository.existsById(emailId))
            return expertRepository.findById(emailId).get();
        throw new ExpertNotFoundException();
    }

    @Override
    public List<Expert> getAllExperts(){
        return expertRepository.findAll();
    }

}
