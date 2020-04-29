package com.example.backend.userVerification;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Random;

// TEXTIT.BIZ SMS Gateway
public class VerifyBySMS {

    static final String characterList = "1234567890";
    static Random random = new Random();
    private  String OTP = "";

    static final String username = "94763358718";
    static final String password = "3282";




    public void sendMessage(String contactNo) throws IOException {
        String message = "Welcome+To+Xplore+Lanka+" +
                "+Your+one+time+OTP+code+is:+" + OTP +
                "+-XploreLanka+by+InforMates";
        String url ="http://textit.biz/sendmsg/index.php?id=" + username + "&pw=" + password + "&to=" + contactNo + "&text=" + message;
        URL textit = new URL(url);
        BufferedReader in = new BufferedReader(
                new InputStreamReader(textit.openStream()));

        String inputLine;
        while ((inputLine = in.readLine()) != null)
            System.out.println("[SMS GATEWAY] - " + inputLine);
        in.close();
        System.out.println("[SMS GATEWAY] - OTP code: " + OTP);
    }


    public void generateOTP() {
        char character ;
        for (int c=0; c<7;c++){
                character = characterList.charAt(random.nextInt(characterList.length()));
                OTP +=character;
        }
    }

    public String getOTP() {
        return OTP;
    }
}
