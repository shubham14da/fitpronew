package com.stackroute.slot.repository;

import com.stackroute.slot.model.Slot;
import com.stackroute.slot.model.Status;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SlotRepository extends MongoRepository<Slot, String> {


     void deleteSlotByScheduleId(String scheduleId);

    List<Slot> findAllSlotByExpertIdAndStatus(String expertId, Status status);

     Slot findAvailabilityByExpertId(String expertId);

}
