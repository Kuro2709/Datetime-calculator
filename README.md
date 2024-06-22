# Date & Time Calculator

This is a project template for a simple calculator with three date/time-related features:

- calculating the number of days between two dates
Examples:

```
start = 2022-01-31
end = 2022-01-31
return value = 0

start = 2022-01-30
end = 2022-01-31
return value = 1

start = 2022-01-31
end = 2022-01-30
return value = -1

start = 2022-01-31
end = 2022-03-31
return value = 59
```
- calculating the date some multiplied interval after a start date
Examples:

```
start = 2022-01-31
interval = P1D
multiplier = 3
return value = 2022-02-03

start = 2022-01-31
interval = P1D
multiplier = 0
return value = 2022-01-31

start = 2022-01-31
interval = P1M
multiplier = 1
return value = 2022-02-28

start = 2019-01-31
interval = P1Y1M
multiplier = 1
return value = 2020-02-29
```
- calculating all recurring event dates and times between two dates
Examples:

```
start = 2022-01-01T00:00
end = 2022-01-04T23:59
interval = P1D
timeOfDay = 01:00
return value = [
  2022-01-01T01:00,
  2022-01-02T01:00,
  2022-01-03T01:00,
  2022-01-04T01:00,
]

start = 2022-01-01T02:00
end = 2022-01-04T23:59
interval = P1D
timeOfDay = 01:00
return value = [
  2022-01-02T01:00,
  2022-01-03T01:00,
  2022-01-04T01:00,
]

start = 2022-01-01T00:00
end = 2022-01-04T00:00
interval = P1D
timeOfDay = 01:00
return value = [
  2022-01-01T01:00,
  2022-01-02T01:00,
  2022-01-03T01:00,
]

start = 2022-01-31T00:00
end = 2022-05-15T00:00
interval = P1M
timeOfDay = 01:00
return value = [
  2022-01-31T01:00,
  2022-02-28T01:00,
  2022-03-28T01:00,
  2022-04-28T01:00,
]
```
