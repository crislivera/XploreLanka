package com.example.backend.DBConnection;

import com.example.backend.Models.Admin;
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
        PreparedStatement statement = null;
        try{
            statement =connection.prepareStatement("insert into admin values (?,?,?,?,?)");
            statement.setString(1,obj.getfName());
            statement.setString(2,obj.getlName());
            statement.setString(3,obj.getUsername());
            statement.setString(4,obj.getPassword());
            statement.setString(5,obj.getContactNo());
            statement.execute();

            System.out.println("Successfully added!");
            System.out.println("");
            System.out.println(obj);

            return true;
        }

        catch(Exception ex){
            System.out.println("Error in adding admin : " + ex.getMessage());

            return false;
        }
    }

    public User loginUser(String username, String password) throws SQLException {
        query = "SELECT * " +
                "FROM user";

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
                obj.setPassword(resultSet.getString("hidden"));
                obj.setUserID(resultSet.getInt("userID"));
            }else if(resultSet.getString("username").equals(username)){
                obj.setfName(resultSet.getString("fname"));
                obj.setlName(resultSet.getString("lname"));
                obj.setAddress(resultSet.getString(""));
                obj.setContact(resultSet.getString(""));
                obj.setEmail(resultSet.getString(""));
                obj.setUsername(resultSet.getString("username"));
                obj.setPassword(resultSet.getString("wrong"));
                obj.setUserID(resultSet.getInt(""));
            }else {
                obj.setfName(resultSet.getString(""));
                obj.setlName(resultSet.getString(""));
                obj.setAddress(resultSet.getString(""));
                obj.setContact(resultSet.getString(""));
                obj.setEmail(resultSet.getString(""));
                obj.setUsername(resultSet.getString(""));
                obj.setPassword(resultSet.getString("invalid"));
                obj.setUserID(resultSet.getInt(""));
            }
            break;
        }
        return obj;
    }

    public boolean registerUser(User obj){
        PreparedStatement statement = null;

        try{
            statement = connection.prepareStatement("insert into user values (?,?,?,?,?,?,?,?,?)");
            statement.setString(1,obj.getfName());
            statement.setString(2,obj.getlName());
            statement.setString(3,obj.getAddress());
            statement.setString(4,obj.getContact());
            statement.setString(5,obj.getEmail());
            statement.setString(6,obj.getUsername());
            statement.setString(7,obj.getPassword());
            statement.setInt(8,obj.getUserID());
            statement.setBoolean(9,obj.isVerify());
            statement.execute();

            System.out.println("Successfully Added!");
            System.out.println("");
            System.out.println(obj);

            return true;
        }

        catch(Exception ex){
            System.out.println("Error in adding user : " + ex.getMessage());

            return false;
        }

    }


}
