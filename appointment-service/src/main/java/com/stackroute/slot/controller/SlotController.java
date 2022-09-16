package com.stackroute.slot.controller;

import com.stackroute.slot.model.Slot;
import com.stackroute.slot.service.SlotService;
import com.stackroute.slot.service.SlotServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/slot")
@CrossOrigin
public class SlotController {

    private SlotServiceImpl slotService;

    @Autowired
    public SlotController(SlotServiceImpl slotService) {
        this.slotService = slotService;
    }

    @PostMapping("/newslot")
    public ResponseEntity<?> addSlot(@RequestBody Slot slot){
        try {
            System.out.println(slot.toString());
            slotService.addSlot(slot);
            return new ResponseEntity<>("Slot Added Successfully",HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
    @DeleteMapping("/delete/{scheduleId}")
    public ResponseEntity<?> deleteSlotByScheduleId(@PathVariable String scheduleId){
        try {
            slotService.deleteSlotByScheduleId(scheduleId);
            return new ResponseEntity<>("slot Deleted Successfully",HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>("This Schedule Id is not Exist",HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/expertslot/{expertId}")
    public ResponseEntity<?> allSlotByExpertId(@PathVariable String expertId){
        try{
            //slotService.listSlotByExpertId(expertId);
            return new ResponseEntity<>(slotService.listSlotByExpertId(expertId),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateSlotByExpertId(@RequestBody Slot slot){
        try{
            System.out.println(slot.toString());
                slotService.updateStatusByExpertId(slot);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

}