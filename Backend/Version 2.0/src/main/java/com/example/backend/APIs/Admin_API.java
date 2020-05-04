package com.example.backend.APIs;

import com.example.backend.Models.Admin;
import com.example.backend.controller.BackendControllers;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.sql.Timestamp;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class Admin_API {

    BackendControllers controller = new BackendControllers();


    @GetMapping("/")
    public String index() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        return "[API] - " + timestamp + "This is a test for Request Response";
    }


    @PostMapping("/deleteAdmin")
    @ResponseBody
    public boolean deleteAdmin(@RequestBody Admin admin) throws SQLException {
        return controller.deleteAdmin(admin);
    }

    //get the admin object from the frontend that is to be updated
    @PostMapping("/updateAdmin")
    @ResponseBody
    public Admin updateAdmin(@RequestBody Admin admin) throws SQLException{
        return controller.updateAdmin(admin);
    }
}
