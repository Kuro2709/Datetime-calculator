import {
    LocalDate,
    LocalDateTime,
    LocalTime,
    Period,
} from "@js-joda/core";

export function daysBetween(
    start: LocalDate,
    end: LocalDate,
): number {
    const startTimestamp = start.toEpochDay();
    const endTimestamp = end.toEpochDay();
    return endTimestamp - startTimestamp;
}

export function afterIntervalTimes(
    start: LocalDate,
    interval: Period,
    multiplier: number,
): LocalDate {
    let resultDate = start;
    for (let i = 0; i < multiplier; i ++)
        resultDate = resultDate.plus(interval);
    return resultDate;
}

export function recurringEvent(
    start: LocalDateTime,
    end: LocalDateTime,
    interval: Period,
    timeOfDay: LocalTime,
): LocalDateTime[] {
    const eventTimes: LocalDateTime[] = [];
    let currentDateTime = start;

    // Find the first event time that is on or after the start date
    if (currentDateTime.toLocalTime().isAfter(timeOfDay)) {
        currentDateTime = currentDateTime.plus(interval);
        currentDateTime = currentDateTime.with(timeOfDay);
    } else {
        currentDateTime = currentDateTime.with(timeOfDay);
    }

    // Generate event times until we reach or exceed the end date
    while (! currentDateTime.isAfter(end)) {
        eventTimes.push(currentDateTime);
        currentDateTime = currentDateTime.plus(interval);
        currentDateTime = currentDateTime.with(timeOfDay);
    }

    return eventTimes;
}
