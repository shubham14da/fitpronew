package com.stackroute.slot.service;

import com.stackroute.slot.model.Slot;

import java.util.List;


public interface SlotService {

    void addSlot(Slot slot);

    void deleteSlotByScheduleId(String scheduleId);

    List<Slot> listSlotByExpertId(String expertId);

    void updateStatusByExpertId(Slot slot);
}
