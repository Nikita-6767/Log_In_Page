package com.Login_Page.AlgoCat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Login_Page.AlgoCat.Model.User;
import com.Login_Page.AlgoCat.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to communicate with Spring Boot
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        if (userRepository.findByEmail(user.getEmail()) != null) {
            response.put("message", "User already registered!");
        } else {
            userRepository.save(user);
            response.put("message", "Account has been created! Please Login");
            response.put("user", user);
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            response.put("message", "Login successful!");
            response.put("user", existingUser);
            return ResponseEntity.ok(response);
        }

        response.put("message", "Invalid email or password!");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
}
