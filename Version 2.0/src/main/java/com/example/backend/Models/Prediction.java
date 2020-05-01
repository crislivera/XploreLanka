package com.example.backend.Models;

import java.util.Date;

public class Prediction {
    Date date = null;
    String city = null;
    String weather = null;
    Integer crowd = null;
    String holidayName = null;
    Boolean isPoya = false;
    Boolean isPublic = false;
    Boolean isBank = false;
    Boolean isMercantile = false;

    public Prediction() {

    }

    public Prediction(Date date, String city) {
        this.date = date;
        this.city = city;
    }

    public Prediction(Date date, String city, String weather, Integer crowd, String holidayName, Boolean isPoya, Boolean isPublic, Boolean isBank, Boolean isMercantile) {
        this.date = date;
        this.city = city;
        this.weather = weather;
        this.crowd = crowd;
        this.holidayName = holidayName;
        this.isPoya = isPoya;
        this.isPublic = isPublic;
        this.isBank = isBank;
        this.isMercantile = isMercantile;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    public Integer getCrowd() {
        return crowd;
    }

    public void setCrowd(Integer crowd) {
        this.crowd = crowd;
    }

    public String getHolidayName() {
        return holidayName;
    }

    public void setHolidayName(String holidayName) {
        this.holidayName = holidayName;
    }

    public Boolean getPoya() {
        return isPoya;
    }

    public void setPoya(Boolean poya) {
        isPoya = poya;
    }

    public Boolean getPublic() {
        return isPublic;
    }

    public void setPublic(Boolean aPublic) {
        isPublic = aPublic;
    }

    public Boolean getBank() {
        return isBank;
    }

    public void setBank(Boolean bank) {
        isBank = bank;
    }

    public Boolean getMercantile() {
        return isMercantile;
    }

    public void setMercantile(Boolean mercantile) {
        isMercantile = mercantile;
    }

    @Override
    public String toString() {
        return "Prediction{" +
                "date=" + date +
                ", city='" + city + '\'' +
                ", weather='" + weather + '\'' +
                ", crowd=" + crowd +
                ", holidayName='" + holidayName + '\'' +
                ", isPoya=" + isPoya +
                ", isPublic=" + isPublic +
                ", isBank=" + isBank +
                ", isMercantile=" + isMercantile +
                '}';
    }
}
