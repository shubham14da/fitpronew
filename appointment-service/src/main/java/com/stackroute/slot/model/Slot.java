package com.stackroute.slot.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Slot {
    @Id
    private String scheduleId;
    private String expertId;
    private String scheduleDate;
    private String startTime;
    private String endTime;
    private Status status;

}
