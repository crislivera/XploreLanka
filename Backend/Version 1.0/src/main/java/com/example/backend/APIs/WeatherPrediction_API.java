package com.example.backend.APIs;

import com.example.backend.controller.BackendController;
import com.example.backend.controller.PredictionController;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;

@CrossOrigin ("*")
@SpringBootApplication
@RestController
public class WeatherPrediction_API {

    PredictionController controller = new PredictionController();

    @GetMapping("/weatherPrediction")
    @ResponseBody
    public HashMap <Date, String> weatherPrediction(@RequestParam Date date, @RequestParam String city){
        return controller.weatherPrediction(date, city);
    }

}
