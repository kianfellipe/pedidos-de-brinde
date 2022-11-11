package com.kian.brind.config;



import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kian.brind.entities.UserModel;
import com.kian.brind.repositories.UserRepository;

@Service
@Transactional
public class UserDetailsServiceImp implements UserDetailsService {

	final UserRepository userRepository;
	
	public UserDetailsServiceImp(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	UserModel userModel = userRepository.findByUsername(username)
			.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado" + username));	
		return new User(userModel.getUsername(), userModel.getPassword(), true, true, true, true, userModel.getAuthorities());
	}
	
}

