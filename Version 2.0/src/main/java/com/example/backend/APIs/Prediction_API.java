package com.example.backend.APIs;

import com.example.backend.Models.Prediction;
import com.example.backend.controller.BackendControllers;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Date;

@CrossOrigin("*")
@SpringBootApplication
@RestController
public class Prediction_API {

    BackendControllers controller = new BackendControllers();

    //get the date and city from frontend and return the predicted data
    @PostMapping("/getPrediction")
    @ResponseBody
    public Prediction getPrediction(@RequestBody Prediction prediction) throws SQLException {
        return controller.getPrediction(prediction);
    }
}
