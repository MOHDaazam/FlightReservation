package com.scriptTag.flightReservation.services;

import com.scriptTag.flightReservation.dto.ReservationRequest;
import com.scriptTag.flightReservation.entities.Reservation;


public interface ReservationService {
	
	public Reservation bookFLight (ReservationRequest request) ;
		
	

}
