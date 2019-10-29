<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page isELIgnored="false"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Complete Reservation</title>
</head>
<body>

<div>
<h1>Complete Reservation</h1><br>
<ul>

<li>Airlines : ${flightDetails.operatingAirlines}</li> 
<li>Flight No : ${flightDetails.flightNumber}</li>
<li>From : ${flightDetails.departureCity}</li>
<li>To  : ${flightDetails.arrivalCity}</li>
<li>Departure Date : ${flightDetails.estimatedDeparture}</li>
</ul>

<h1>Passenger Details</h1>
<form action ='completeReservation' method ='post'>


First Name : <input type= 'text' name ='passengerFirstName'/><br>
Last Name : <input type= 'text' name ='passengerLastName'/><br>
Phone No. : <input type= 'text' name ='passengerPhoneNo'/><br>
Email : <input type= 'text' name ='passengerEmail'/><br>

<h1>Card Details</h1>

Name on card : <input type= 'text' name ='nameOnCard'/><br>
Card No : <input type= 'text' name ='cardNo'/><br>
Expiry Date : <input type= 'text' name ='expiryDate'/><br>
CVV : <input type= 'text' name ='cvv'/><br>

<input type= 'hidden' name ='flightId' value ='${flightDetails.id}'/><br><br>
<input type ='submit' value ='SUBMIT'/>



</form>






</div>			

</body>
</html>