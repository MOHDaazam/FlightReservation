package com.scriptTag.flightReservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scriptTag.flightReservation.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  User  findByEmail(String email);

}
