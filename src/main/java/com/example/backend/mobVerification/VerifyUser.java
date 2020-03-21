package com.example.backend.mobVerification;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.util.Random;

public class VerifyUser {

    static final String SID = "AC5b35daa9ff71b52753698f0b190701dc";
    static final String TOKEN = "fec2af60cb3a2c30516755253b1e37c3";
    static final String characterList = "1234567890";
    static Random random = new Random();
    private  String OTP = "";

    public VerifyUser(String contactNo) {
        Twilio.init(SID,TOKEN);

        generateOTP();

        Message msg = Message.creator(
                new PhoneNumber(contactNo),
                new PhoneNumber("+12057975084"),
                "Welcome To Xplore Lanka, Your verification code is: " + OTP + ". \n" +
                        "               -InforMates"
        ).create();

        System.out.println(msg.getSid());
    }

    public void generateOTP() {
        char character ;
        for (int c=0; c<7;c++){
            if (c==3){
                OTP +=" ";
            }else{
                character = characterList.charAt(random.nextInt(characterList.length()));
                OTP +=character;
            }
        }
        System.out.println(OTP);
    }

    public String getOTP() {
        return OTP;
    }
}
