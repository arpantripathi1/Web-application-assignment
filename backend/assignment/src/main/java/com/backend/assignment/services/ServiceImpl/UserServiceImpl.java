package com.backend.assignment.services.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.assignment.model.User;
import com.backend.assignment.repository.UserRepository;
import com.backend.assignment.services.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public User signUp(User user) {
        // Encode the password before saving to the database
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public String signIn(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            // Implement JWT token generation logic here
            return "JWT_TOKEN";
        }
        return null; // Return null or throw exception for authentication failure
    }

    @Override
    public User updateProfile(Long userId, User updatedUser) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Update user details
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPhoneNumber(updatedUser.getPhoneNumber());
        // You can add more fields to update as needed

        return userRepository.save(existingUser);
    }

    @Override
    public User getProfile(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public void deleteProfile(Long userId) {
        userRepository.deleteById(userId);
    }

   
}
