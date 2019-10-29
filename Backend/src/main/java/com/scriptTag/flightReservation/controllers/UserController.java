package com.scriptTag.flightReservation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.scriptTag.flightReservation.entities.User;
import com.scriptTag.flightReservation.repos.UserRepository;

@RestController
public class UserController {

	UserRepository userRepository;

	@Autowired
	public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	@PostMapping(value = "/registerUser")
	public ResponseEntity<?> register(@RequestBody User user) {
		
		ResponseEntity<?> responseEntity;
		User fetchedUser = userRepository.findByEmail(user.getEmail());
		User savedUser =null;
		if(fetchedUser != null) {
			responseEntity = new ResponseEntity<String>("User Already Exists!",HttpStatus.CONFLICT);
		}
		else {
			savedUser = userRepository.save(user);
			responseEntity = new ResponseEntity<User>(savedUser,HttpStatus.CREATED);
		}
		
		return responseEntity;
	}

	@PostMapping(value="/loginUser")
	public ResponseEntity<?> login(@RequestBody User user){
		ResponseEntity<?> responseEntity;
		User fetchedUser = userRepository.findByEmail(user.getEmail());
		
		if(fetchedUser == null) {
			responseEntity = new ResponseEntity<String>("User does not exist ! ",HttpStatus.NOT_FOUND);
		}
		else if (!fetchedUser.getPassword().equals(user.getPassword())) {
			responseEntity = new ResponseEntity<String>("Please check your password ! ",HttpStatus.NOT_FOUND);
		}
		else {
			responseEntity = new ResponseEntity<User>(fetchedUser,HttpStatus.OK);
		}
		return responseEntity;
	}
	
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestParam("email") String email, @RequestParam("password") String password,
			ModelMap modelMap) {

		User user = userRepository.findByEmail(email);
		
		if(user==null) {
			
		}

		if (user.getPassword().equals(password)) {
			return "findFlights";
		} else {
			modelMap.addAttribute("msg", "Invalid  username or password . Please try again");
		}

		return "login/userLogin";
	}

}
