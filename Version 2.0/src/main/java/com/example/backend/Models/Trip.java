package com.example.backend.Models;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Objects;

public class Trip {

    int tripID;
    int userID;
    String locationName;
    String placeID;
    String city;
    String weather;
    Date date;

    SimpleDateFormat format = new SimpleDateFormat("YYYY-MM-dd");

    // while returning stored schedules
    public Trip(int tripID, int userID, String locationName, String placeID, String city, String weather, String date) throws ParseException {
        this.tripID = tripID;
        this.userID = userID;
        this.locationName = locationName;
        this.placeID = placeID;
        this.city = city;
        this.weather = weather;
        this.date = format.parse(date);
    }

    // This comes when data comes from front end to be saved
    public Trip(int userID, String locationName, String placeID, String city, String weather, String date) throws ParseException {
        this.userID = userID;
        this.locationName = locationName;
        this.placeID = placeID;
        this.city = city;
        this.weather = weather;
        this.date = format.parse(date);
    }

    public int getTripID() {
        return tripID;
    }

    public void setTripID(int tripID) {
        this.tripID = tripID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getPlaceID() {
        return placeID;
    }

    public void setPlaceID(String placeID) {
        this.placeID = placeID;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

