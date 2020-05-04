package com.example.backend.Models;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class Schedule {

    int userID;
    ArrayList<String> location;
    ArrayList<Date> dates;
    ArrayList<String> city;
    ArrayList<String> placeID;
    ArrayList<String> weather;

    SimpleDateFormat format = new SimpleDateFormat("YYYY-MM-DD");

    // This comes when data comes from frontend to be saved
    public Schedule(int userID, ArrayList<String> location, ArrayList<Date> dates, ArrayList<String> city, ArrayList<String> placeID, ArrayList<String> weather) {
        this.userID = userID;
        this.location = location;
        this.dates = dates;
        this.city = city;
        this.placeID = placeID;
        this.weather = weather;
    }

    //This comes while returning stored schedules
    public Schedule(Integer id) {
        this.userID = id;
        dates = new ArrayList<>();
        location = new ArrayList<>();
        placeID = new ArrayList<>();
        city = new ArrayList<>();
        weather = new ArrayList<>();
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

    public void addLocation(String location){
        this.location.add(location);
    }

    public void addDates(Date dates){
        this.dates.add(dates);
    }

    public void addCity(String city){
        this.city.add(city);
    }

    public void addPlaceID(String placeID){
        this.placeID.add(placeID);
    }

    public void addWeather(String weather){
        this.weather.add(weather);
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

