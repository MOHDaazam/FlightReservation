package com.scriptTag.flightReservation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.scriptTag.flightReservation.dto.SearchFlight;
import com.scriptTag.flightReservation.entities.Flight;
import com.scriptTag.flightReservation.repos.FlightRepository;
import com.scriptTag.flightReservation.util.EmailUtil;
import com.scriptTag.flightReservation.util.EmailUtilImpl;

@RestController
public class FlightController {

	FlightRepository flightRepository;
	@Autowired
	EmailUtil email;

	@Autowired
	public FlightController(FlightRepository flightRepository) {
		super();
		this.flightRepository = flightRepository;
	}

	@PostMapping(value = "findFlights")
	public List<?> findFlights(@RequestBody SearchFlight searchFlight) {
		String from = searchFlight.getDepartureCityCode();
		String to = searchFlight.getArrivalCityCode();
		String departureDate = searchFlight.getDepartureDate();
		List<Flight> listFlight = flightRepository.findFlights(from, to, departureDate);
	//	EmailUtil email = new EmailUtilImpl();
     //	email.sendEmail("azamkhanaonla@gmail.com", "sample", "hello");

		return listFlight;
	}

	@PostMapping(value = "saveFlights")
	public ResponseEntity<?> saveFlights(@RequestBody Flight flight) {

		ResponseEntity<?> responseEntity;
		Example<Flight> flightDuplicate = Example.of(flight);
		List<Flight> flightData = flightRepository.findAll(flightDuplicate);

		Flight savedFlight = new Flight();
		if (flightData.isEmpty()) {
			savedFlight = flightRepository.save(flight);
			responseEntity = new ResponseEntity<Flight>(savedFlight, HttpStatus.OK);
		} else
			responseEntity = new ResponseEntity<String>("Flight Data Already Exists!", HttpStatus.CONFLICT);

		return responseEntity;
	}

}
