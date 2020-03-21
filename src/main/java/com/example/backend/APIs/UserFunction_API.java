package com.example.backend.APIs;

import com.example.backend.Models.Admin;
import com.example.backend.Models.Trip_Schedule;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

public class UserFunction_API {
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
}
