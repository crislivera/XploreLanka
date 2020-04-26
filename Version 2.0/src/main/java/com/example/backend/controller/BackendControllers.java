package com.example.backend.controller;

import com.example.backend.DBConnection.DBConnector;
import com.example.backend.Models.Admin;
import com.example.backend.Models.User;

import java.sql.SQLException;

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

    public User loginUser(String username,String password) throws SQLException {
        return connector.loginUser(username,password);
    }

    //verify user using OTP
    public boolean verifyUserSMS(User user){
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
}
