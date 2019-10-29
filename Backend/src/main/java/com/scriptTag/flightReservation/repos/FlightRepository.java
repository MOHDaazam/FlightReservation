package com.scriptTag.flightReservation.repos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.scriptTag.flightReservation.entities.Flight;
@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {

	@Query(nativeQuery=true,value= "select * from Flight  where departure_CITY=:departureCity and arrival_City=:arrivalCity and departure_date=:dateOfDeparture")
	public List<Flight> findFlights(@Param("departureCity") String from, @Param("arrivalCity") String to,
			@Param("dateOfDeparture") String departureDate);

}
