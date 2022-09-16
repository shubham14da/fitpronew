package com.stackroute.slot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpertAvailability {
    private String expertId;
    private Status Status;
}
