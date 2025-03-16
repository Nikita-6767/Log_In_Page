package com.Login_Page.AlgoCat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Login_Page.AlgoCat.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
