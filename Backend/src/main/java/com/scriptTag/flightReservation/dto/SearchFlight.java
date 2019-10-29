package com.scriptTag.flightReservation.dto;

public class SearchFlight {

	private String departureCityCode;
	private String arrivalCityCode;
	private String departureDate;

	public String getDepartureCityCode() {
		return departureCityCode;
	}

	public void setDepartureCityCode(String departureCityCode) {
		this.departureCityCode = departureCityCode;
	}

	public String getArrivalCityCode() {
		return arrivalCityCode;
	}

	public void setArrivalCityCode(String arrivalCityCode) {
		this.arrivalCityCode = arrivalCityCode;
	}

	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}

	public SearchFlight(String departureCityCode, String arrivalCityCode, String departureDate) {
		super();
		this.departureCityCode = departureCityCode;
		this.arrivalCityCode = arrivalCityCode;
		this.departureDate = departureDate;
	}

}
