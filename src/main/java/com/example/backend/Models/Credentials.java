package com.example.backend.Models;

public class Credentials {
    String userID;
    String username;
    String pwd;
    String pin;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
