package com.scriptTag.flightReservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scriptTag.flightReservation.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

}
