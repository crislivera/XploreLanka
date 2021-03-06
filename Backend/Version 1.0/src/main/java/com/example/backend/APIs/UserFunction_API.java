package com.example.backend.APIs;

import com.example.backend.Models.Admin;
import com.example.backend.Models.Trip_Schedule;
import com.example.backend.Models.User;
import com.example.backend.controller.BackendController;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class UserFunction_API {

    BackendController backendController = new BackendController();

    @PostMapping("/saveSchedule")
    @ResponseBody
    public void saveSchedule(@RequestBody Trip_Schedule schedule) throws SQLException {

    }

    @PostMapping("/getSchedule")
    @ResponseBody
    public void getSchedule(@RequestParam String  id) throws SQLException {

    }

    @PostMapping("/editSchedule")
    @ResponseBody
    public void editSchedule(@RequestParam String  id) throws SQLException {

    }

    @PostMapping("/deleteSchedule")
    @ResponseBody
    public void deleteSchedule(@RequestParam String  id) throws SQLException {

    }

    @PostMapping("/verifyUser")
    @ResponseBody
    public boolean verifyUser(@RequestBody User user) throws SQLException {
        System.out.println(user);
        return backendController.verifyUser(user);
    }

    @PostMapping("/resendotp")
    @ResponseBody
    public void resendOTP(@RequestBody User  user) throws SQLException {
        backendController.resendOTP(user);
    }


}


