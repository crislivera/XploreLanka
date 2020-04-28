package com.example.backend.DBConnection;


import com.example.backend.Models.Admin;
import com.example.backend.Models.Trip;
import com.example.backend.Models.User;
import com.example.backend.userVerification.VerifyByMail;
import com.example.backend.userVerification.VerifyBySMS;

import java.sql.*;
import java.text.ParseException;
import java.util.ArrayList;

public class DBConnector {

    private java.sql.Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    String connectionString = "jdbc:mysql://159.203.105.235/xploreLanka";
    String username = "admin";
    String password = "rusiru@1999";
    private PreparedStatement preparedStatement = null;
    String query;

    public DBConnector() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(connectionString, username, password);
            System.out.println("[SERVER] " + timestamp + " - Connected to the Server");
            statement = connection.createStatement();

        } catch (Exception ex) {
            System.out.println("[SERVER]" + timestamp + "Connection error...\n" + ex);
        }
    }

    /*         FROM THIS SECTION ONWARDS AUTHENTICATION PROCESS       */

    // register admin
    // if true admin registered successfully
    // else false
    public boolean registerAdmin(Admin obj) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try {
            statement = connection.prepareStatement("insert into admin values (?,?,?,?,?)");
            statement.setString(1, obj.getfName());
            statement.setString(2, obj.getlName());
            statement.setString(3, obj.getUsername());
            statement.setString(4, obj.getPassword());
            statement.setString(5, obj.getContactNo());
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully added Admin: " + obj);
            return true;
        } catch (SQLException ex) {
            System.out.println("[SERVER] " + timestamp + " - Duplicating admin usernames : " + ex.getMessage());
            return false;
        }
    }

    // if admin exists returns a admin object
    // if admin doesnt exists return an empty object
    public Admin loginAdmin(String username,String password) throws SQLException {
        query = "SELECT * " +
                "FROM admin";

        resultSet = statement.executeQuery(query);

        Admin obj = new Admin();

        while (resultSet.next()) {
            if ((resultSet.getString("username").equals(username) && (resultSet.getString("password").equals(password)))) {
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setPassword("******");
                obj.setUsername(resultSet.getString("username"));
                obj.setContactNo(resultSet.getString("contactNo"));
                break;
            } else{
                obj.setfName(resultSet.getString(""));
                obj.setlName(resultSet.getString(""));
                obj.setPassword("");
                obj.setUsername(resultSet.getString(""));
                obj.setContactNo(resultSet.getString(""));
            }
        }
        return obj;
    }

    // if user is registered it will return back true or false
    // Generate otp
    public boolean registerUser(User obj) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;

        VerifyBySMS verifyUser = new VerifyBySMS();
        verifyUser.generateOTP();
        try {
            statement = connection.prepareStatement("insert into user values (?,?,?,?,?,?,?,?,?,?)");
            statement.setString(1, obj.getfName());
            statement.setString(2, obj.getlName());
            statement.setString(3, obj.getAddress());
            statement.setString(4, obj.getContact());
            statement.setString(5, obj.getEmail());
            statement.setString(6, obj.getUsername());
            statement.setString(7, obj.getPassword());
            statement.setInt(8, obj.getUserID());
            statement.setBoolean(9, obj.isVerify());
            obj.setOTP(verifyUser.getOTP());
            statement.setString(10, obj.getOTP());
            statement.execute();

            verifyUser.sendMessage(obj.getContact());
            System.out.println("[SERVER] " + timestamp + " - Successfully added User: " + obj);
            return true;
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Duplicating user usernames : " + ex.getMessage());
            return false;
        }
    }

    //this will resend the OTP incase number is correct but didnt receive OTP
    public void resendOTP(User obj) {
        PreparedStatement statement = null;
        VerifyBySMS verifyUser = new VerifyBySMS();
        verifyUser.generateOTP();
        try {
            statement = connection.prepareStatement("Update user Set OTP = ? Where username = ?");
            statement.setString(1, verifyUser.getOTP());
            statement.setString(2, obj.getUsername());
            statement.execute();

            System.out.println("Successfully Updated!");
            System.out.println(obj);
        } catch (Exception ex) {
            System.out.println("Error in updating admin : " + ex.getMessage());
        }
    }

    public void resendEmail(User obj) {
        PreparedStatement statement = null;
        VerifyByMail verifyUser = new VerifyByMail();
        verifyUser.verifyMail(obj.getEmail());
        try {
            statement = connection.prepareStatement("Update user Set OTP = ? Where username = ?");
            statement.setString(1, verifyUser.getOTP());
            statement.setString(2, obj.getUsername());
            statement.execute();

            System.out.println("Successfully Updated!");
            System.out.println(obj);
        } catch (Exception ex) {
            System.out.println("Error in updating admin : " + ex.getMessage());
        }
    }

    // This will verify if the users entered OTP matches
    // if matched set verify = true
    // user can now login
    public boolean verifyUser(User obj) {
        query = "SELECT OTP,username FROM user";
        try {
            resultSet = statement.executeQuery(query);

            while (resultSet.next())
                if ((resultSet.getString("username").equals(obj.getUsername())) && (resultSet.getString("OTP").equals(obj.getOTP()))) {
                    PreparedStatement statement = null;
                    statement = connection.prepareStatement("Update user Set verified=?,contact=? Where username = ? ");
                    statement.setBoolean(1, true);
                    statement.setString(2, obj.getContact());
                    statement.setString(3, obj.getUsername());
                    statement.execute();
                    System.out.println("User Verified!");
                    return true;
                }
            System.out.println("Verification Code is incorrect");
            return false;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // check from front end for verified or not
    // return object
    // check for empty object if user doesnt exist
    public User loginUser(String username, String password) throws SQLException {
        query = "SELECT * " + "FROM user";
        resultSet = statement.executeQuery(query);
        User obj = new User();
        while (resultSet.next()){
            if((resultSet.getString("username").equals(username)&&(resultSet.getString("password").equals(password)))){
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setAddress(resultSet.getString("address"));
                obj.setContact(resultSet.getString("contact"));
                obj.setEmail(resultSet.getString("email"));
                obj.setUsername(resultSet.getString("username"));
                obj.setPassword(resultSet.getString("******"));
                obj.setUserID(resultSet.getInt("userID"));
                obj.setVerify(resultSet.getBoolean("verified"));
                break;
            }else {
                obj.setfName(resultSet.getString(""));
                obj.setlName(resultSet.getString(""));
                obj.setAddress(resultSet.getString(""));
                obj.setContact(resultSet.getString(""));
                obj.setEmail(resultSet.getString(""));
                obj.setUsername(resultSet.getString(""));
                obj.setPassword(resultSet.getString(""));
                obj.setUserID(resultSet.getInt(""));
            }
        }
        return obj;
    }


/*        Admin FUNCTIONS                         */

    // delete the admin from the database
    // true if deleted
    // need to check if non existing admin is deleted
    public boolean deleteAdmin(Admin admin) {
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Delete from admin Where username = ?");
            statement.setString(1,admin.getUsername());
            statement.execute();
            System.out.println("Successfully Deleted!");
            return true;
        } catch(Exception ex){
            System.out.println("Error in deleting admin : " + ex.getMessage());
            return false;
        }
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
        } catch(Exception ex){
            System.out.println("Error in deleting user : " + ex.getMessage());
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
        } catch(Exception ex){
            System.out.println("Error in updating admin : " + ex.getMessage());
        }
        return admin;
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
        } catch(Exception ex){
            System.out.println("Error in updating user : " + ex.getMessage());
        }
        return user;
    }


    public Boolean saveSchedule(ArrayList<Trip> schedule) {

        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;

        try {
            for(int i = 0; i < schedule.size(); i++){
            Trip trip = schedule.get(i);

            statement = connection.prepareStatement("insert into Trips values (?,?,?,?,?,?,?)");
            statement.setInt(1, trip.getTripID());
            statement.setInt(2, trip.getUserID());
            statement.setString(3, trip.getLocationName());
            statement.setString(4, trip.getPlaceID());
            statement.setString(5, trip.getCity());
            statement.setString(6, trip.getWeather());
            statement.setDate(7, (Date) trip.getDate());
            statement.execute();

            System.out.println("[SERVER] " + timestamp + " - Successfully added a trip: " + trip);

            }

            return true;

        }catch (SQLException ex) {

            System.out.println("[SERVER] " + timestamp + " - Error in adding a trip : " + ex.getMessage());
            return false;
        }
    }

    public ArrayList<Trip> getSchedule(String id) {
        return null;
    }

    public Boolean editSchedule(ArrayList<Trip> schedule) {
        return null;
    }

    public Boolean deleteSchedule(String id) {
        return null;
    }
}
