package com.example.backend.APIs;


import com.example.backend.Models.Admin;
import com.example.backend.Models.Credentials;
import com.example.backend.Models.User;
import com.example.backend.controller.BackendControllers;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class Authenticator_API {

    BackendControllers controller = new BackendControllers();


    @PostMapping("/signInAdmin")
    @ResponseBody
    public Admin loginAdmin(@RequestBody Credentials credentials) throws SQLException {
        return controller.loginAdmin(credentials.getUsername(), credentials.getPwd());
    }

    @PostMapping("/signUpAdmin")
    @ResponseBody
    public boolean registerAdmin(@RequestBody Admin admin) throws SQLException {
        return controller.registerAdmin(admin);
    }

    @PostMapping("/signInUser")
    @ResponseBody
    public User loginUser(@PathVariable String username, @PathVariable String pwd) throws SQLException {
        return controller.loginUser(username, pwd);
    }

    @PostMapping("/signUpUser")
    @ResponseBody
    public boolean registerUser(@RequestBody User user) throws SQLException {
        return controller.registerUser(user);
    }

    @PostMapping("/resendOTP")
    @ResponseBody
    public void resendOTP(@RequestBody User user) throws SQLException {
        controller.resendOTP(user);
    }

    @PostMapping("/resendMail")
    @ResponseBody
    public void resendMail(@RequestBody User user) throws SQLException {
        controller.resendEmail(user);
    }

    @PostMapping("/verifyOTPBySMS")
    @ResponseBody
    public boolean verifyUserBySMS(@RequestBody User user) throws SQLException {
        return controller.verifyUserSMS(user);
    }
}
