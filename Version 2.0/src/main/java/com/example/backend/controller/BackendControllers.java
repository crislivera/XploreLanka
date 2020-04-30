package com.example.backend.controller;

import com.example.backend.DBConnection.DBConnector;
import com.example.backend.Models.*;

import java.sql.SQLException;
import java.util.ArrayList;

public class BackendControllers {

    DBConnector connector = new DBConnector();

    public boolean registerAdmin(Admin obj) throws SQLException {
        return connector.registerAdmin(obj);
    }

    public boolean registerUser(User obj) throws SQLException{
        return connector.registerUser(obj);
    }

    public Admin loginAdmin(String username,String password) throws SQLException {
        return connector.loginAdmin(username,password);
    }

    public User loginUser(Credentials credentials) throws SQLException {
        return connector.loginUser(credentials);
    }

    //verify user using OTP
    public boolean verifyUser(User user){
        return connector.verifyUser(user);
    }

    //resend OTP code as SMS or change number and send
    public void resendOTP(User user){
        connector.resendOTP(user);
    }

    public void resendEmail(User user) {
        connector.resendEmail(user);
    }

    //connect API and database to delete an admin
    public boolean deleteAdmin(Admin admin) throws SQLException{
        return connector.deleteAdmin(admin);
    }

    //connect API and database to delete a user
    public boolean deleteUser(User user) throws SQLException{
        return connector.deleteUser(user);
    }

    //connect API and database to update an admin
    public Admin updateAdmin(Admin admin) throws SQLException{
        return connector.updateAdmin(admin);
    }

    //connect API and database to update a user
    public User updateUser(User user) throws SQLException{
        return connector.updateUser(user);
    }

    //connect API and database to save a new schedule
    public Boolean saveSchedule(Schedule schedule) {
        return connector.saveSchedule(schedule);
    }

    //connect API and database to return an existing schedule
    public ArrayList<Schedule> getSchedule(String id) {
        return connector.getSchedule(id);
    }

    //connect API and database to add and delete an existing schedule
    public Boolean editSchedule(ArrayList<Schedule> schedule) {
        return connector.editSchedule(schedule);
    }

    //connect API and database to delete a schedule
    public Boolean deleteSchedule(String id) {
        return connector.deleteSchedule(id);
    }

    //connect API and database to save placeID temporarily
    public void setPlace(PlaceSession session) {
        connector.setPlace(session);
    }

    //connect API and database to return placeID and delete that record
    public String getPlace(String id) throws SQLException {
        return connector.getPlace(id);
    }
}
