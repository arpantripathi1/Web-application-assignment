package com.backend.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.backend.assignment.model.User;
import com.backend.assignment.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return userService.signUp(user);
    }

    @PostMapping("/signin")
    public String signIn(@RequestParam String email, @RequestParam String password) {
        return userService.signIn(email, password);
    }

    @PutMapping("/{userId}")
    public User updateProfile(@PathVariable Long userId, @RequestBody User updatedUser) {
        return userService.updateProfile(userId, updatedUser);
    }

    @GetMapping("/{userId}")
    public User getProfile(@PathVariable Long userId) {
        return userService.getProfile(userId);
    }

    @DeleteMapping("/{userId}")
    public void deleteProfile(@PathVariable Long userId) {
        userService.deleteProfile(userId);
    }
    @GetMapping("/get")
    public User getProfile() {
        return null;
    }
}
