package com.example.backend.Models;

import java.util.Objects;

public class Admin implements Comparable<Admin> {

    String username;
    String password;
    String fName;
    String lName;
    String contactNo;

    public Admin() {
    }

    //while registering
    public Admin(String username, String password, String fName, String lName, String contactNo) {
        this.username = username;
        this.password = password;
        this.fName = fName;
        this.lName = lName;
        this.contactNo = contactNo;
    }

    //DB retrieval
    public Admin(String username, String fName, String lName, String contactNo) {
        this.username = username;
        this.fName = fName;
        this.lName = lName;
        this.contactNo = contactNo;
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

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Admin admin = (Admin) o;
        return username.equals(admin.username) &&
                password.equals(admin.password) &&
                fName.equals(admin.fName) &&
                lName.equals(admin.lName) &&
                contactNo.equals(admin.contactNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, password, fName, lName, contactNo);
    }

    @Override
    public int compareTo(Admin o) {
        return 0;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", contactNo='" + contactNo + '\'' +
                '}';
    }
}
