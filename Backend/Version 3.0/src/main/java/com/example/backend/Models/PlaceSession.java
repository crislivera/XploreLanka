package com.example.backend.Models;

public class PlaceSession {

    String userID;
    String placeID;

    public PlaceSession() {

    }

    public PlaceSession(String userID, String placeID) {
        this.userID = userID;
        this.placeID = placeID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getPlaceID() {
        return placeID;
    }

    public void setPlaceID(String placeID) {
        this.placeID = placeID;
    }

    @Override
    public String toString() {
        return "PlaceSession{" +
                "userID='" + userID + '\'' +
                ", placeID='" + placeID + '\'' +
                '}';
    }
}
