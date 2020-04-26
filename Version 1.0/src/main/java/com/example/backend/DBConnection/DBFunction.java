package com.example.backend.DBConnection;

import com.example.backend.Models.Admin;
import com.example.backend.Models.MailModel;
import com.example.backend.Models.User;

import java.sql.*;
import java.util.ArrayList;

public class DBFunction {

    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    String connectionString = "jdbc:mysql://159.203.105.235/xploreLanka";
    String username = "admin";
    String password = "rusiru@1999";
    private PreparedStatement preparedStatement = null;
    String query;


    public DBFunction(){
        try {

            Class.forName("com.mysql.jdbc.Driver");
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
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Delete from user where username = ?");
            statement.setString(1,user.getUsername());
            statement.execute();

            System.out.println("Successfully Deleted!");

            return true;
        }

        catch(Exception ex){
            System.out.println("Error in deleting user : " + ex.getMessage());

            return false;
        }

    }

    //update the user from the database
    public User updateUser(User user) {
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Update user Set fname = ?, lname = ?, address = ?, contact = ?, email = ?, password = ? Where userID = ?");
            statement.setString(1,user.getfName());
            statement.setString(2,user.getlName());
            statement.setString(3,user.getAddress());
            statement.setString(4,user.getContact());
            statement.setString(5,user.getEmail());
            statement.setString(6,user.getPassword());
            statement.setInt(7,user.getUserID());
            statement.execute();

            System.out.println("Successfully Updated!");
            System.out.println("");
            System.out.println(user);
        }

        catch(Exception ex){
            System.out.println("Error in updating user : " + ex.getMessage());
        }

        return user;
    }

    //get the all mails from database
    public ArrayList<String> getAllMails() throws SQLException {

        query = "Select email from user";

        resultSet = statement.executeQuery(query);
        ArrayList<String> selectedMails = new ArrayList<>();

        while(resultSet.next()) {
            try {
                selectedMails.add(resultSet.getString("email"));
            }

            catch (Exception ex){
                System.out.println("Error in getting mails : " + ex.getMessage());
            }
        }
        return selectedMails;
    }
}
