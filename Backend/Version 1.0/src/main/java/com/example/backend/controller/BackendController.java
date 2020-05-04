package com.example.backend.controller;

import com.example.backend.DBConnection.DBConnection;
import com.example.backend.DBConnection.DBFunction;
import com.example.backend.Models.Admin;
import com.example.backend.Models.User;

import java.sql.SQLException;

public class BackendController {

    private DBConnection con = new DBConnection();
    private DBFunction fun = new DBFunction();



    public boolean registerAdmin(Admin obj) throws SQLException{
        return con.registerAdmin(obj);
    }

    public boolean registerUser(User obj) throws SQLException{
        return con.registerUser(obj);
    }



    public Admin loginAdmin(String username,String password) throws SQLException {
        return con.loginAdmin(username,password);
    }

    public User loginUser(String username,String password) throws SQLException {
        return con.loginUser(username,password);
    }

    //connect API and database to delete an admin
    public boolean deleteAdmin(Admin admin) throws SQLException{
        return fun.deleteAdmin(admin);
    }

    //connect API and database to delete a user
    public boolean deleteUser(User user) throws SQLException{
        return fun.deleteUser(user);
    }

    //connect API and database to update an admin
    public Admin updateAdmin(Admin admin) throws SQLException{
        return fun.updateAdmin(admin);
    }

    //connect API and database to update a user
    public User updateUser(User user) throws SQLException{
        return fun.updateUser(user);
    }

    //verify user using OTP
    public boolean verifyUser(User user){
        return con.verifyUser(user);
    }

    //resend OTP code as SMS or change number and send
    public void resendOTP(User user){
        con.resendOTP(user);
    }
}
