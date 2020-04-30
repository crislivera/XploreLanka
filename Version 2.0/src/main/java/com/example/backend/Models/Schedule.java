package com.example.backend.Models;

import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;

public class Schedule {

    int userID;
    ArrayList<String> location;
    ArrayList<Date> dates;
    ArrayList<String> city;
    ArrayList<String> placeID;
    ArrayList<String> weather;

    SimpleDateFormat format = new SimpleDateFormat("YYYY-MM-DD");

    // This comes when data comes from frontend to be saved and while returning stored schedules
    public Schedule(int userID, ArrayList<String> location, ArrayList<Date> dates, ArrayList<String> city, ArrayList<String> placeID, ArrayList<String> weather) {
        this.userID = userID;
        this.location = location;
        this.dates = dates;
        this.city = city;
        this.placeID = placeID;
        this.weather = weather;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public ArrayList<String> getLocation() {
        return location;
    }

    public void setLocation(ArrayList<String> location) {
        this.location = location;
    }

    public ArrayList<Date> getDates() {
        return dates;
    }

    public void setDates(ArrayList<Date> dates) {
        this.dates = dates;
    }

    public ArrayList<String> getCity() {
        return city;
    }

    public void setCity(ArrayList<String> city) {
        this.city = city;
    }

    public ArrayList<String> getPlaceID() {
        return placeID;
    }

    public void setPlaceID(ArrayList<String> placeID) {
        this.placeID = placeID;
    }

    public ArrayList<String> getWeather() {
        return weather;
    }

    public void setWeather(ArrayList<String> weather) {
        this.weather = weather;
    }


    @Override
    public String toString() {
        return "Schedule{" +
                "userID=" + userID +
                ", location=" + location +
                ", dates=" + dates +
                ", city=" + city +
                ", placeID=" + placeID +
                ", weather=" + weather +
                '}';
    }
}

