package com.scriptTag.flightReservation.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scriptTag.flightReservation.dto.ReservationRequest;
import com.scriptTag.flightReservation.entities.Flight;
import com.scriptTag.flightReservation.entities.Passenger;
import com.scriptTag.flightReservation.entities.Reservation;
import com.scriptTag.flightReservation.repos.FlightRepository;
import com.scriptTag.flightReservation.repos.PassengerRepository;
import com.scriptTag.flightReservation.repos.ReservationRepository;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	FlightRepository flightRespository;

	@Autowired
	PassengerRepository passengerRepository;

	@Autowired
	ReservationRepository reservationRepository;

	@Override
	public Reservation bookFLight(ReservationRequest request) {

		Long flightId = request.getFlightId();
		Optional<Flight> flight = flightRespository.findById(flightId);

		if (flight.isPresent()) {
			Passenger passenger = new Passenger();
			passenger.setFirstName(request.getPassengerFirstName());
			passenger.setLastName(request.getPassengerLastName());
			passenger.setPhone(request.getPassengerPhoneNo());
			passenger.setEmail(request.getPassengerEmail());
			Passenger savedPassenger = passengerRepository.save(passenger);

			Reservation reservation = new Reservation();
			reservation.setPassenger(savedPassenger);
			reservation.setFlight(flight.get());
			reservation.setCheckedIn(true);

			Reservation savedReservation = reservationRepository.save(reservation);

			return savedReservation;

		} else {
			return null;
		}

	}

}
