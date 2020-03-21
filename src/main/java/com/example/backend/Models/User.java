package com.example.backend.Models;

import com.example.backend.mobVerification.VerifyUser;

import java.util.Objects;

public class User implements Comparable<User>{

    String fName;
    String lName;
    String address;
    String contact;
    String email;
    String username;
    String password;
    int userID;
    boolean verify;


    public User() {
    }

    //during retrieval from DB
    public User(String fName, String lName, String address, String contact, String email, String username, String password, int userID) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.username = username;
        this.password = password;
        this.userID = userID;
    }

    //while registering
    public User(String fName, String lName, String address, String contact, String email, String username, String password) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.username = username;
        this.password = password;
        setVerify(false);
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public boolean isVerify() {
        return verify;
    }

    public void setVerify(boolean verify) {
        this.verify = verify;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userID == user.userID &&
                fName.equals(user.fName) &&
                lName.equals(user.lName) &&
                address.equals(user.address) &&
                contact.equals(user.contact) &&
                email.equals(user.email) &&
                username.equals(user.username) &&
                password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fName, lName, address, contact, email, username, password, userID);
    }

    @Override
    public int compareTo(User o) {
        return 0;
    }

    @Override
    public String toString() {
        return "User{" +
                "fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", userID=" + userID +
                ", verify=" + verify +
                '}';
    }
}
