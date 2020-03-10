package com.example.backend.controller;

import com.example.backend.DBConnection.dbConnection;
import com.example.backend.Models.Admin;
import com.example.backend.Models.Information_Provider;
import com.example.backend.Models.User;

import java.sql.SQLException;

public class backendController {

    private dbConnection con = new dbConnection();




    public boolean registerAdmin(Admin obj) throws SQLException{
        return con.registerAdmin(obj);
    }

    public boolean registerUser(User obj) throws SQLException{
        return con.registerUser(obj);
    }

    public boolean registerIP(Information_Provider obj) throws SQLException {
        return con.registerIP(obj);
    }

    public Admin loginAdmin(String username,String password) throws SQLException {
        return con.loginAdmin(username,password);
    }

    public User loginUser(String username,String password) throws SQLException {
        return con.loginUser(username,password);
    }

    public Information_Provider loginIP(String username, String password) throws SQLException {
        return con.loginIP(username,password);
    }

}
