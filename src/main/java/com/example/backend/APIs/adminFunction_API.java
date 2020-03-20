package com.example.backend.APIs;

import com.example.backend.Models.Admin;
import com.example.backend.Models.User;
import com.example.backend.controller.backendController;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin("*")
@SpringBootApplication
@RestController

public class adminFunction_API {

    backendController controller= new backendController();

    @PostMapping("/deleteAdmin")
    @ResponseBody
    public boolean deleteAdmin(@RequestBody Admin admin) throws SQLException{
        return controller.deleteAdmin(admin);
    }

    @PostMapping("/updateAdmin")
    @ResponseBody
    public Admin updateAdmin(@RequestBody Admin admin) throws SQLException{
        return controller.updateAdmin(admin);
    }

    @PostMapping("/deleteUser")
    @ResponseBody
    public boolean deleteUser(@RequestBody User user) throws SQLException{
        return controller.deleteUser(user);
    }

    @PostMapping("/updateUser")
    @ResponseBody
    public User updateUser(@RequestBody User user) throws SQLException{
        return controller.updateUser(user);
    }

}
