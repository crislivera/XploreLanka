package com.example.backend.APIs;

import com.example.backend.Models.Trip_Schedule;
import com.example.backend.Models.User;
import com.example.backend.controller.BackendControllers;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class User_API {

    BackendControllers controller = new BackendControllers();

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

    //get the user object from the frontend that is to be deleted
    @PostMapping("/deleteUser")
    @ResponseBody
    public boolean deleteUser(@RequestBody User user) throws SQLException{
        return controller.deleteUser(user);
    }

    //get the user object from the frontend that is to be updated
    @PostMapping("/updateUser")
    @ResponseBody
    public User updateUser(@RequestBody User user) throws SQLException{
        return controller.updateUser(user);
    }
}
