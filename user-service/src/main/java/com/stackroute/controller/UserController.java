package com.stackroute.controller;

import com.stackroute.dto.EnthusiastUpdateRequest;
import com.stackroute.dto.ExpertUpdateRequest;

import com.stackroute.exception.EnthusiastAlreadyExistsException;
import com.stackroute.exception.EnthusiastNotFoundException;
import com.stackroute.exception.ExpertAlreadyExistsException;
import com.stackroute.exception.ExpertNotFoundException;
import com.stackroute.model.Enthusiast;
import com.stackroute.model.Expert;
import com.stackroute.service.EnthusiastService;
import com.stackroute.service.ExpertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {


    @Autowired
    private EnthusiastService enthusiastService;

    @Autowired
    private ExpertService expertService;

    @PostMapping("/saveEnthusiast")
    public ResponseEntity<String> saveEnthusiast(@RequestBody Enthusiast enthusiast){

        try{
            System.out.println(enthusiast.toString());
            enthusiastService.saveEnthusiast(enthusiast);
            return new ResponseEntity<>("Enthusiast have Registered Successfully", HttpStatus.OK);
        }catch(EnthusiastAlreadyExistsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);

        }
    }

    @PutMapping("/enthusiast/{emailId}")
    public ResponseEntity<?> updateEnthusiast(@PathVariable String emailId, @RequestBody Enthusiast request){
        enthusiastService.updateEnthusiast(emailId, request);
        return new ResponseEntity<>("Details are Updated", HttpStatus.OK);
    }

    @PostMapping("/saveExpert")
    public ResponseEntity<String> saveExpert(@RequestBody Expert expert) {

        try {
            expertService.saveExpert(expert);
            return new ResponseEntity<>("Expert have Registered Successfully", HttpStatus.OK);
        }catch(ExpertAlreadyExistsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/expert/{emailId}")
    public ResponseEntity<String> updateExpert(@PathVariable String emailId, @RequestBody Expert request){
        expertService.updateExpert(emailId, request);
        return new ResponseEntity<String>("Details are Updated", HttpStatus.OK);
    }

    @GetMapping("/enthusiatprofile/{emailId}")
    public ResponseEntity<Enthusiast> getEnthusiastProfile(@PathVariable String emailId){
        try{
            return new ResponseEntity<>(enthusiastService.getEnthusiastById(emailId), HttpStatus.OK);
        } catch (EnthusiastNotFoundException e) {
            return new ResponseEntity("Enthusiast not found", HttpStatus.NOT_FOUND);
        }
        catch (Exception ex){
            return new ResponseEntity("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/expertprofile/{emailId}")
    public ResponseEntity<Expert> getExpertProfile(@PathVariable String emailId){
        try{
            return new ResponseEntity<>(expertService.getExpertById(emailId), HttpStatus.OK);
        } catch (ExpertNotFoundException e) {
            return new ResponseEntity("Expert not found", HttpStatus.NOT_FOUND);
        }
        catch (Exception ex){
            return new ResponseEntity("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/experts")
    public ResponseEntity<List<Expert>> getAllExpertProfile(){
        try{
            return new ResponseEntity(expertService.getAllExperts(), HttpStatus.OK);
        }
        catch (Exception ex){
            return new ResponseEntity("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
