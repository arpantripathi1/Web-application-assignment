package com.backend.assignment.services;


import com.backend.assignment.model.User;

public interface UserService {
  
    User signUp(User user);
    String signIn(String email, String password);
    User updateProfile(Long userId, User updatedUser);
    User getProfile(Long userId);
    void deleteProfile(Long userId);
}
