package com.example.backend.DBConnection;

import com.example.backend.Models.Admin;
import com.example.backend.Models.User;

import java.sql.*;

public class dbFunction {

    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    private String username = "root";
    private String password ="";
    private PreparedStatement preparedStatement = null;
    String query;


    public dbFunction(){
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

    // delete the admin from the database
    public boolean deleteAdmin(Admin admin) {
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Delete from admin Where username = ?");
            statement.setString(1,admin.getUsername());
            statement.execute();

            System.out.println("Successfully Deleted!");

            return true;
        }

        catch(Exception ex){
            System.out.println("Error in deleting admin : " + ex.getMessage());

            return false;
        }
    }

    //update the admin from the database
    public Admin updateAdmin(Admin admin) {
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Update admin Set fname = ?, lname = ?, password = ?, contactNo = ? Where username = ?");
            statement.setString(1,admin.getfName());
            statement.setString(2,admin.getlName());
            statement.setString(3,admin.getPassword());
            statement.setString(4,admin.getContactNo());
            statement.setString(5,admin.getUsername());
            statement.execute();

            System.out.println("Successfully Updated!");
            System.out.println("");
            System.out.println(admin);
        }

        catch(Exception ex){
            System.out.println("Error in updating admin : " + ex.getMessage());
        }

        return admin;
    }

    //delete the user from the database
    public boolean deleteUser(User user) {
        return true;
    }

    //update the user from the database
    public User updateUser(User user) {
        return user;
    }
}
