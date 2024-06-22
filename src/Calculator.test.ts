import "jest-extended";

import {
    daysBetween,
    afterIntervalTimes,
    recurringEvent,
} from "./Calculator";

import {
    LocalDate,
    LocalDateTime,
    LocalTime,
    Period,
} from "@js-joda/core";

describe("daysBetween", () => {
    test("first provided example", () => {
        const start: LocalDate = LocalDate.of(2022, 1, 31);
        const end: LocalDate = LocalDate.of(2022,1,31);
        expect(daysBetween(start, end)).toEqual(0);
    })
})

describe("afterIntervalTimes", () => {
    test("first provided example", () => {
        const start: LocalDate = LocalDate.of(2022, 1, 31);
        const interval: Period = Period.ofDays(1);
        const multiplier: number = 3;
        const expectedResult: LocalDate = LocalDate.of(2022, 2, 3);
    
        const result = afterIntervalTimes(start, interval, multiplier);
        expect(result.equals(expectedResult)).toBe(true);
      });
});

describe("recurringEvent", () => {
    test("first provided example", () => {
        const start: LocalDateTime = LocalDateTime.of(2022, 1, 1, 0, 0);
        const end: LocalDateTime = LocalDateTime.of(2022, 1, 4, 23, 59);
        const interval: Period = Period.ofDays(1);
        const timeOfDay: LocalTime = LocalTime.of(1, 0);
        const expectedResult: LocalDateTime[] = [
          LocalDateTime.of(2022, 1, 1, 1, 0),
          LocalDateTime.of(2022, 1, 2, 1, 0),
          LocalDateTime.of(2022, 1, 3, 1, 0),
          LocalDateTime.of(2022, 1, 4, 1, 0),
        ];
    
        const result = recurringEvent(start, end, interval, timeOfDay);
        expect(result.map(dt => dt.toString())).toEqual(expectedResult.map(dt => dt.toString()));
      });
});
