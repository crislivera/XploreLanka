package com.example.backend.Models;

import java.util.Objects;

public class Information_Provider implements Comparable<Information_Provider>{

    int infoID;
    String fName;
    String lName;
    String email;
    String address;
    String contactNo;
    boolean locationFlag;
    String location;
    boolean hotelFlag;
    String hotelName;
    String username;
    String password;
    boolean verify;

    public Information_Provider() {
    }

    public Information_Provider(int infoID, String fName, String lName, String email, String address, String contactNo, boolean locationFlag, String location, boolean hotelFlag, String hotelName, String username, String password) {
        this.infoID = infoID;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.address = address;
        this.contactNo = contactNo;
        this.locationFlag = locationFlag;
        this.location = location;
        this.hotelFlag = hotelFlag;
        this.hotelName = hotelName;
        this.username = username;
        this.password = password;
        this.verify=false;
    }

    public Information_Provider(String fName, String lName, String email, String address, String contactNo, boolean locationFlag, String location, boolean hotelFlag, String hotelName, String username, String password) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.address = address;
        this.contactNo = contactNo;
        this.locationFlag = locationFlag;
        this.location = location;
        this.hotelFlag = hotelFlag;
        this.hotelName = hotelName;
        this.username = username;
        this.password = password;
        this.verify=false;
    }

    public int getInfoID() {
        return infoID;
    }

    public void setInfoID(int infoID) {
        this.infoID = infoID;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public boolean isLocationFlag() {
        return locationFlag;
    }

    public void setLocationFlag(boolean locationFlag) {
        this.locationFlag = locationFlag;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isHotelFlag() {
        return hotelFlag;
    }

    public void setHotelFlag(boolean hotelFlag) {
        this.hotelFlag = hotelFlag;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
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
        Information_Provider that = (Information_Provider) o;
        return infoID == that.infoID &&
                locationFlag == that.locationFlag &&
                hotelFlag == that.hotelFlag &&
                fName.equals(that.fName) &&
                lName.equals(that.lName) &&
                email.equals(that.email) &&
                Objects.equals(address, that.address) &&
                contactNo.equals(that.contactNo) &&
                location.equals(that.location) &&
                hotelName.equals(that.hotelName) &&
                username.equals(that.username) &&
                password.equals(that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(infoID, fName, lName, email, address, contactNo, locationFlag, location, hotelFlag, hotelName, username, password);
    }

    @Override
    public int compareTo(Information_Provider o) {
        return 0;
    }

    @Override
    public String toString() {
        return "Information_Provider{" +
                "infoID=" + infoID +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", contactNo='" + contactNo + '\'' +
                ", locationFlag=" + locationFlag +
                ", location='" + location + '\'' +
                ", hotelFlag=" + hotelFlag +
                ", hotelName='" + hotelName + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

