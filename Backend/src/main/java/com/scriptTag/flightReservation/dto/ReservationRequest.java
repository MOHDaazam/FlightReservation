package com.scriptTag.flightReservation.dto;

public class ReservationRequest {
	
	private Long FlightId;
	
	private String passengerFirstName;
	private String passengerLastName;
	private String passengerPhoneNo;
	private String passengerEmail;
	
	private String nameOnCard;
	private String cardNO;
	private String expiry;
	private String cvv;
	
	
	public Long getFlightId() {
		return FlightId;
	}
	public void setFlightId(Long flightId) {
		FlightId = flightId;
	}
	public String getPassengerFirstName() {
		return passengerFirstName;
	}
	public void setPassengerFirstName(String passengerFirstName) {
		this.passengerFirstName = passengerFirstName;
	}
	public String getPassengerLastName() {
		return passengerLastName;
	}
	public void setPassengerLastName(String passengerLastName) {
		this.passengerLastName = passengerLastName;
	}
	public String getPassengerPhoneNo() {
		return passengerPhoneNo;
	}
	public void setPassengerPhoneNo(String passengerPhoneNo) {
		this.passengerPhoneNo = passengerPhoneNo;
	}
	public String getPassengerEmail() {
		return passengerEmail;
	}
	public void setPassengerEmail(String passengerEmail) {
		this.passengerEmail = passengerEmail;
	}
	public String getNameOnCard() {
		return nameOnCard;
	}
	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}
	public String getCardNO() {
		return cardNO;
	}
	public void setCardNO(String cardNO) {
		this.cardNO = cardNO;
	}
	public String getExpiry() {
		return expiry;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
	
	@Override
	public String toString() {
		return "ReservationRequest [passengerFirstName=" + passengerFirstName + ", passengerLastName="
				+ passengerLastName + ", passengerPhoneNo=" + passengerPhoneNo + ", passengerEmail=" + passengerEmail
				+ ", nameOnCard=" + nameOnCard + ", cardNO=" + cardNO + ", expiry=" + expiry + ", cvv=" + cvv + "]";
	}
	
	
	

}
