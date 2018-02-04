# Timestamp Microservice

## How it works

> Pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date.

* It returns both the Unix timestamp and the natural language form of that date.

* If it does not contain a date or Unix timestamp, it returns null for those properties.

## What is the unix time stamp?

The unix time stamp is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix time stamp is merely the number of seconds between a particular date and the Unix Epoch. It should also be pointed out (thanks to the comments from visitors to this site) that this point in time technically does not change no matter where you are located on the globe. This is very useful to computer systems for tracking and sorting dated information in dynamic and distributed applications both online and client side.
> Source: https://www.unixtimestamp.com/