package com.example.backend.Models;

import java.sql.Date;
import java.util.Objects;

public class Trip_Schedule implements Comparable<Trip_Schedule> {

    int userID;
    String locations;
    Date startDate;
    Date endDate;

    public Trip_Schedule(int userID, String locations, Date startDate, Date endDate) {
        this.userID = userID;
        this.locations = locations;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Trip_Schedule(String locations, Date startDate, Date endDate) {
        this.locations = locations;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trip_Schedule that = (Trip_Schedule) o;
        return userID == that.userID &&
                locations.equals(that.locations) &&
                startDate.equals(that.startDate) &&
                endDate.equals(that.endDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userID, locations, startDate, endDate);
    }

    @Override
    public int compareTo(Trip_Schedule o) {
        return 0;
    }

    @Override
    public String toString() {
        return "Trip_Schedule{" +
                "userID=" + userID +
                ", locations='" + locations + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
