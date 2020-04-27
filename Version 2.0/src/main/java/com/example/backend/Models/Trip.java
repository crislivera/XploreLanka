package com.example.backend.Models;

import java.sql.Date;
import java.util.Objects;

public class Trip {

    int userID;
    String locations;
    Date date;
    String weather;

    public Trip(int userID, String locations, Date date, String weather) {
        this.userID = userID;
        this.locations = locations;
        this.date = date;
        this.weather = weather;
    }

    public Trip(String locations, Date date, String weather) {
        this.locations = locations;
        this.date = date;
        this.weather = weather;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getLocations() {
        return locations;
    }

    public void setLocations(String locations) {
        this.locations = locations;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trip trip = (Trip) o;
        return userID == trip.userID &&
                Objects.equals(locations, trip.locations) &&
                Objects.equals(date, trip.date) &&
                Objects.equals(weather, trip.weather);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userID, locations, date, weather);
    }

    @Override
    public String toString() {
        return "Trip{" +
                "userID=" + userID +
                ", locations='" + locations + '\'' +
                ", date=" + date +
                ", weather='" + weather + '\'' +
                '}';
    }
}

