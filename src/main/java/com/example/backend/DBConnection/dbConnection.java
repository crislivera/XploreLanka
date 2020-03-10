package com.example.backend.DBConnection;

import com.example.backend.Models.Admin;
import com.example.backend.Models.Information_Provider;
import com.example.backend.Models.User;

import java.sql.*;

public class dbConnection {
    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    private String username = "root";
    private String password ="";
    private PreparedStatement preparedStatement = null;
    String query;


    public dbConnection(){
        try {

            Class.forName("com.mysql.jdbc.Driver");
            String connectionString = "jdbc:mysql://localhost/xplore_lanka";
            connection = DriverManager.getConnection(connectionString,username , password);
            System.out.println("Connected to Database...");
            statement = connection.createStatement();

        } catch (Exception ex) {
            System.out.println("Connection error...\n" + ex);
        }
    }

    public Admin loginAdmin(String username,String password) throws SQLException {
        query = "SELECT * " +
                "FROM admin";

        resultSet = statement.executeQuery(query);

        Admin obj = new Admin();

        while (resultSet.next()){
            if((resultSet.getString("username").equals(username)&&(resultSet.getString("password").equals(password)))){
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setPassword("hidden");
                obj.setUsername(resultSet.getString("username"));
                obj.setContactNo(resultSet.getString("contactNo"));
            }else if(resultSet.getString("username").equals(username)){
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setPassword("wrong");
                obj.setUsername(resultSet.getString(""));
                obj.setContactNo(resultSet.getString(""));
            }else {
                obj.setfName(resultSet.getString(""));
                obj.setlName(resultSet.getString(""));
                obj.setPassword("Invalid");
                obj.setUsername(resultSet.getString(""));
                obj.setContactNo(resultSet.getString(""));
            }
            break;
        }
        return obj;
    }

    public boolean registerAdmin(Admin obj){
        return false;
    }

    public User loginUser(String username, String password) throws SQLException {
        return obj;
    }

    public boolean registerUser(User obj){
        return false;
    }

    public Information_Provider loginIP(String username, String password) throws SQLException {
        query = "SELECT * " +
                "FROM information_provider";

        resultSet = statement.executeQuery(query);

        Information_Provider obj = new Information_Provider();

        return obj;
    }

    public boolean registerIP(Information_Provider obj){
        return false;
    }
}
