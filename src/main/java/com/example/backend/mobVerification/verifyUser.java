package com.example.backend.mobVerification;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class verifyUser {

    static final String SID = "AC5b35daa9ff71b52753698f0b190701dc";
    static final String TOKEN = "fec2af60cb3a2c30516755253b1e37c3";

    public static void main(String[] args) {
        Twilio.init(SID,TOKEN);



        Message msg = Message.creator(
                new PhoneNumber("+94763358718"),
                new PhoneNumber("+12057975084"),
                "Welcome To Xplore Lanka, Yout verification code is: 098 690. \n" +
                        "  -InforMates"
        ).create();

        System.out.println(msg.getSid());
    }
}
