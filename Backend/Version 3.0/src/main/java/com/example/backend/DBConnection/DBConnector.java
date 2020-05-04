package com.example.backend.DBConnection;


import com.example.backend.Models.*;
import com.example.backend.Recovery.Recover;
import com.example.backend.userVerification.VerifyByMail;
import com.example.backend.userVerification.VerifyBySMS;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;

public class DBConnector {

    private java.sql.Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    String connectionString1 = "jdbc:mysql://159.203.105.235/xploreLanka";
    String connectionString2 = "jdbc:mysql://159.203.105.235/xploreLankaPrediction";
    String username = "admin";
    String password = "rusiru@1999";
    private PreparedStatement preparedStatement = null;
    String query;

    private static  String api_key = "";
    private static  String domain = "";

    public DBConnector() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(connectionString1, username, password);
            System.out.println("[SERVER] " + timestamp + " - Connected to the Server");
            statement = connection.createStatement();


            query = "SELECT * " +
                    "FROM mailgun";

            resultSet = statement.executeQuery(query);

            while (resultSet.next()){
                api_key = resultSet.getString("apiKey");
                domain =  resultSet.getString("domain");
            }


        } catch (Exception ex) {
            System.out.println("[SERVER]" + timestamp + " - Connection error...\n" + ex);
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
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            if ((resultSet.getString("username").equals(username) && (resultSet.getString("password").equals(password)))) {
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setPassword("******");
                obj.setUsername(resultSet.getString("username"));
                obj.setContactNo(resultSet.getString("contactNo"));
                System.out.println("[SERVER] " + timestamp + " - Successfully logged in by Admin: " + username);
                break;
            } else{
                obj.setfName("");
                obj.setlName("");
                obj.setPassword("");
                obj.setUsername("");
                obj.setContactNo("");
                System.out.println("[SERVER] " + timestamp + " - No Admin found! ");
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

            verifyUser.sendMessage(obj.getContact(),obj.getfName());
            System.out.println("[SERVER] " + timestamp + " - Successfully added User: " + obj);
            return true;
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in adding user : " + ex.getMessage());
            return false;
        }
    }

    //this will resend the OTP incase number is correct but didnt receive OTP
    public void resendOTP(User obj) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        VerifyBySMS verifyUser = new VerifyBySMS();
        verifyUser.generateOTP();
        try {
            statement = connection.prepareStatement("Update user Set OTP = ? Where username = ?");
            statement.setString(1, verifyUser.getOTP());
            statement.setString(2, obj.getUsername());
            statement.execute();

            verifyUser.sendMessage(obj.getContact(),obj.getfName());
            System.out.println("[SERVER] " + timestamp + " - Successfully Updated " + obj);
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in updating admin : " + ex.getMessage());
        }
    }

    public void resendEmail(User obj) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        VerifyByMail verifyUser = new VerifyByMail();
        verifyUser.verifyMail(obj.getEmail(),obj.getfName(),domain,api_key);
        try {
            statement = connection.prepareStatement("Update user Set OTP = ? Where username = ?");
            statement.setString(1, verifyUser.getOTP());
            statement.setString(2, obj.getUsername());
            statement.execute();

            System.out.println("[SERVER] " + timestamp + " - Successfully Updated " + obj);
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in updating admin : " + ex.getMessage());
        }
    }

    // This will verify if the users entered OTP matches
    // if matched set verify = true
    // user can now login
    public boolean verifyUser(User obj) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
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
                    System.out.println("[SERVER] " + timestamp + " - User Verified " + obj);
                    return true;
                }
            System.out.println("[SERVER] " + timestamp + " - Verification Code is incorrect " + obj);
            return false;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // check from front end for verified or not
    // return object
    // check for empty object if user doesnt exist
    public User loginUser(Credentials credentials) throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        query = "SELECT * " + "FROM user";
        resultSet = statement.executeQuery(query);
        User obj = new User();
        while (resultSet.next()){
            if((resultSet.getString("username").equals(credentials.getUsername())&&(resultSet.getString("password").equals(credentials.getPwd())))){
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setAddress(resultSet.getString("address"));
                obj.setContact(resultSet.getString("contact"));
                obj.setEmail(resultSet.getString("email"));
                obj.setUsername(resultSet.getString("username"));
                obj.setPassword(resultSet.getString("password"));
                obj.setUserID(resultSet.getInt("userID"));
                obj.setVerify(resultSet.getBoolean("verified"));
                System.out.println("[SERVER] " + timestamp + " - Successfully logged in by User: " + credentials.getUsername());
                break;
            }else {
                obj.setfName("");
                obj.setlName("");
                obj.setAddress("");
                obj.setContact("");
                obj.setEmail("");
                obj.setUsername("");
                obj.setPassword("");
                obj.setUserID(0);
                System.out.println("[SERVER] " + timestamp + " - No user found! ");
            }
        }
        return obj;
    }


/*        Admin FUNCTIONS                         */

    // delete the admin from the database
    // true if deleted
    // need to check if non existing admin is deleted
    public boolean deleteAdmin(Admin admin) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Delete from admin Where username = ?");
            statement.setString(1,admin.getUsername());
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully Deleted " + admin);
            return true;
        } catch(Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in deleting admin : " + ex.getMessage());
            return false;
        }
    }

    //delete the user from the database
    public boolean deleteUser(User user) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Delete from user where username = ?");
            statement.setString(1,user.getUsername());
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully Deleted " + user);
            return true;
        } catch(Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in deleting user : " + ex.getMessage());
            return false;
        }
    }

    //update the admin from the database
    public Admin updateAdmin(Admin admin) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Update admin Set fname = ?, lname = ?, password = ?, contactNo = ? Where username = ?");
            statement.setString(1,admin.getfName());
            statement.setString(2,admin.getlName());
            statement.setString(3,admin.getPassword());
            statement.setString(4,admin.getContactNo());
            statement.setString(5,admin.getUsername());
            statement.execute();

            System.out.println("[SERVER] " + timestamp + " - Successfully Updated " + admin);
            System.out.println("");
        } catch(Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in updating admin : " + ex.getMessage());
        }
        return admin;
    }

    //update the user from the database
    public User updateUser(User user) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try{
            statement = connection.prepareStatement("Update user Set fname = ?, lname = ?, address = ?, password = ? Where username = ?");
            statement.setString(1,user.getfName());
            statement.setString(2,user.getlName());
            statement.setString(3,user.getAddress());
            statement.setString(4,user.getPassword());
            statement.setString(5,user.getUsername());
            statement.execute();

            System.out.println("[SERVER] " + timestamp + " - Successfully Updated " + user);
            System.out.println("");
            System.out.println(user);
        } catch(Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in updating user : " + ex.getMessage());
        }
        return user;
    }

    //return true if user added a schedule successfully
    public Boolean saveSchedule(Schedule schedule) {
        System.out.println(schedule);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;

        try{
            for(int i = 0; i < schedule.getLocation().size(); i++){
                statement = connection.prepareStatement("insert into schedule values (?,?,?,?,?,?)");

                statement.setInt(1, schedule.getUserID());
                statement.setString(2, schedule.getLocation().get(i));
                java.sql.Date date = new java.sql.Date(schedule.getDates().get(i).getTime());
                statement.setDate(3, date);
                statement.setString(4, schedule.getCity().get(i));
                statement.setString(5, schedule.getPlaceID().get(i));
                statement.setString(6, schedule.getWeather().get(i));
                statement.execute();
            }


            System.out.println("[SERVER] " + timestamp + " - Successfully added a schedule: " + schedule);
            return true;

        }catch (Exception ex) {

            System.out.println("[SERVER] " + timestamp + " - Error in adding a schedule : " + ex);
            return false;
        }
    }

    //return all existing schedules according to user id
    public Schedule getSchedule(Integer id) throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        query = "SELECT * " + "FROM schedule";
        resultSet = statement.executeQuery(query);

        Schedule schedule = new Schedule(id);

        try {
            while (resultSet.next()) {
                if (id == resultSet.getInt("userID")) {
                    schedule.addCity(resultSet.getString("city"));
                    java.sql.Date date = resultSet.getDate("date");
                    schedule.addDates(new java.util.Date(date.getTime()));
                    schedule.addLocation(resultSet.getString("location"));
                    schedule.addPlaceID(resultSet.getString("placeID"));
                    schedule.addWeather(resultSet.getString("weather"));
                }
            }
        }catch (Exception ex){
            System.out.println(ex);
        }
        return schedule;
    }

    //edit the existing schedule in database
    public Boolean editSchedule(Schedule schedule) throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        deleteSchedule(String.valueOf(schedule.getUserID()));
        saveSchedule(schedule);
        System.out.println("[SERVER] " + timestamp + " - Successfully Edited ");
        return null;
        
    }

    //delete a schedule from database
    public Boolean deleteSchedule(String id) throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;

        try{
            statement = connection.prepareStatement("Delete from schedule Where userID = ?");
            statement.setInt(1, Integer.parseInt(id));
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully Deleted ");
            return true;
        }
        catch(Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in deleting admin : " + ex.getMessage());
            return false;
        }
    }

    //temporarily saved in database
    public void setPlace(PlaceSession session) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;

        try {
            statement = connection.prepareStatement("Insert into tempSessionForPlace values (?,?)");
            statement.setString(1, session.getUserID());
            statement.setString(2, session.getPlaceID());
            statement.execute();

            System.out.println("[SERVER] " + timestamp + " - Successfully saved " + session);
            System.out.println(session);
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in saving values : " + ex.getMessage());
        }
    }

    //return the placeID and delete the record from database
    public String getPlace(String id)throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        query = "SELECT * " + "FROM tempSessionForPlace";
        resultSet = statement.executeQuery(query);

        String placeID = "";
        while (resultSet.next()) {
            if (resultSet.getString("userId").equals(id))
                placeID = resultSet.getString("placeId");
            break;
        }

        PreparedStatement statement = null;
        try {
            statement = connection.prepareStatement("Delete from tempSessionForPlace Where userId = ?");
            statement.setString(1, id);
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully Deleted id: " + id);
        } catch (Exception ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in deleting : " + ex.getMessage());
        }
        return placeID;

    }

    // recover password method
    public Boolean recoverPassword(String username) throws SQLException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        query = "SELECT * " + "FROM user";
        resultSet = statement.executeQuery(query);
        User obj = new User();
        String mobileNo = null;
        String email = null;
        String name = null;
        int userId =0;
        while (resultSet.next()){
            if (username.equals(resultSet.getString("username"))){
                userId = resultSet.getInt("userID");
                name = resultSet.getString("fname") + "+" + resultSet.getString("lname");
                mobileNo = resultSet.getString("contact");
                email = resultSet.getString("email");
            }
        }

        if (name==null){
            System.out.println("[SERVER] " + timestamp + " - Username not found: " + username);
            return false;
        }

        Recover recover = new Recover();
        recover.generateOTP();
        System.out.println("[SERVER] " + timestamp + " - OTP generated: " + recover.getOTP());

        try {
            recover.sendMessage(mobileNo, name,userId);
        }catch (IOException ex){
            System.out.println("[SERVER] " + timestamp + " - error in sending recovery SMS: " + ex);
            return false;
        }

        if(recover.verifyMail(email,name,userId,domain,api_key)){
            System.out.println("[SERVER] " + timestamp + " - Success in sending recovery email" );
        }else {
            System.out.println("[SERVER] " + timestamp + " - error in sending recovery Email " );
//            return false;    // Online daddi awul yana nisa meheme comment kere
        }

        timestamp = new Timestamp(System.currentTimeMillis());
        PreparedStatement statement = null;
        try {
            statement = connection.prepareStatement("insert into recoverUser values (?,?,?)");
            statement.setString(1, null);
            statement.setString(2, username);
            statement.setInt(3, userId);
            statement.execute();
            System.out.println("[SERVER] " + timestamp + " - Successfully added recovery: ");
        } catch (SQLException ex) {
            System.out.println("[SERVER] " + timestamp + " - Error in recovering : " + ex.getMessage());
            return false;
        }

        return true;
    }

    public Prediction getPrediction(Prediction prediction) throws SQLException {


        Timestamp timestamp = new Timestamp(System.currentTimeMillis());


        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(connectionString2, username, password);
            System.out.println("[SERVER] " + timestamp + " - Switched Database");
            statement = connection.createStatement();

        } catch (Exception ex) {
            System.out.println("[SERVER]" + timestamp + " - Connection error...\n" + ex);
        }



        timestamp = new Timestamp(System.currentTimeMillis());
        System.out.println("[SERVER] " + timestamp + " - Getting prediction for {" + prediction.getCity() + " | " + prediction.getDate() + "}");

        query = "SELECT * " + "FROM Holidays";
        resultSet = statement.executeQuery(query);

        while (resultSet.next()){
            java.sql.Date date = resultSet.getDate("date");
            if (prediction.getDate().equals(resultSet.getDate("Date"))){
                prediction.setHolidayName(resultSet.getString("holiday_name"));
                prediction.setPoya(resultSet.getBoolean("poya"));
                prediction.setPublic(resultSet.getBoolean("public"));
                prediction.setBank(resultSet.getBoolean("bank"));
                prediction.setMercantile(resultSet.getBoolean("merchantile"));
                break;
            }
        }

        timestamp = new Timestamp(System.currentTimeMillis());

        try {
            query = "SELECT * "  + "FROM " + prediction.getCity().toLowerCase();

            java.util.Date date = prediction.getDate();
            prediction.setDate(date);

            resultSet = statement.executeQuery(query);

            while (resultSet.next()){

                java.sql.Date dbdate = resultSet.getDate("date");
                java.util.Date condate = new java.util.Date(dbdate.getTime());

                if (condate!=date){
                    prediction.setDayOfWeek(resultSet.getString("day"));
                    prediction.setWeather(resultSet.getString("weatherDesc"));
                    prediction.setCrowd(resultSet.getInt("crowd"));
                    break;
                }
            }
            System.out.println("[SERVER] " + timestamp + " - Successfully returned Prediction");
        }catch (Exception ex){
            System.out.println("[SERVER] " + timestamp + " - Error in get details : " + ex.getMessage());
        }

        return prediction;
    }
}
