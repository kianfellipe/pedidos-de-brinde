package com.kian.brind.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kian.brind.entities.UserModel;

public interface UserRepository extends JpaRepository<UserModel, UUID>{

	Optional<UserModel> findByUsername(String username);	
}
