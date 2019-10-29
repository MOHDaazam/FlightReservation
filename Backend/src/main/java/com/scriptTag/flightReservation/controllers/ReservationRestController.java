package com.scriptTag.flightReservation.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.scriptTag.flightReservation.dto.ReservationUpdateRequest;
import com.scriptTag.flightReservation.entities.Reservation;
import com.scriptTag.flightReservation.repos.ReservationRepository;

@RestController
public class ReservationRestController {

	@Autowired
	private ReservationRepository reservationRepository;

	@RequestMapping(value = "reservations/{id}", method = RequestMethod.GET)
	public Reservation findReservation(@PathVariable("id") Long id) {

		Optional<Reservation> reservationDetails = reservationRepository.findById(id);
		return reservationDetails.get();

	}

	@RequestMapping(value = "reservations", method = RequestMethod.POST)
	public Reservation updateReservation(@RequestBody ReservationUpdateRequest request) {

		Reservation reservationDetails = reservationRepository.findAllById(request.getId());

		reservationDetails.setCheckedIn(request.getCheckedIn());
		reservationDetails.setNumberOfBags(request.getNumberOfBags());

		Reservation savedReservation = reservationRepository.save(reservationDetails);

		return savedReservation;

	}
	
	

}
