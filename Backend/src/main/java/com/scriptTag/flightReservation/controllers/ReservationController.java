package com.scriptTag.flightReservation.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.scriptTag.flightReservation.dto.ReservationRequest;
import com.scriptTag.flightReservation.entities.Flight;
import com.scriptTag.flightReservation.entities.Reservation;
import com.scriptTag.flightReservation.repos.FlightRepository;
import com.scriptTag.flightReservation.services.ReservationService;

@Controller
public class ReservationController {

	FlightRepository flightRepository;

	ReservationService reservationService;

	@Autowired
	public ReservationController(FlightRepository flightRepository, ReservationService reservationService) {
		super();
		this.flightRepository = flightRepository;
		this.reservationService = reservationService;
	}

	@RequestMapping(value = "showCompleteReservation")
	public String showReservation(@RequestParam("flightId") Long FlightId, ModelMap modelMap) {

		Optional<Flight> flightDetails = flightRepository.findById(FlightId);
		// System.out.println("------------------" + flightDetails);
		if (flightDetails.isPresent())
			modelMap.addAttribute("flightDetails", flightDetails.get());
		else
			modelMap.addAttribute("flightDetails", "no data found");

		return "completeReservation";
	}

	@RequestMapping(value = "/completeReservation", method = RequestMethod.POST)
	public String completeReservation(ReservationRequest request, ModelMap modelMap) {

		Reservation bookedFlight = reservationService.bookFLight(request);
		modelMap.addAttribute("BookingMsg",
				"Reservation created Succesfully & Please note down booking ID is " + bookedFlight.getId());

		return "reservationConfirmation";
	}

}
