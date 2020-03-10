package com.example.backend.APIs;

import com.example.backend.Models.Admin;
import com.example.backend.Models.Credentials;
import com.example.backend.Models.Information_Provider;
import com.example.backend.Models.User;
import com.example.backend.controller.backendController;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class authentication_API {

    backendController controller = new backendController();

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        backendController controller = new backendController();
        return "HI, This is a test API call";
    }

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

    @PostMapping("/signInIP")
    @ResponseBody
    public Information_Provider loginIP(@PathVariable String username, @PathVariable String pwd) throws SQLException {
        return controller.loginIP(username, pwd);
    }

    @PostMapping("/signUpIP")
    @ResponseBody
    public boolean registerIP(@RequestBody Information_Provider ip) throws SQLException {
        return controller.registerIP(ip);
    }

}
