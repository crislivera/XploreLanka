package com.example.backend.Recovery;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Properties;
import java.util.Random;

public class Recover {
    static final String characterList = "1234567890";
    static Random random = new Random();
    private  String OTP = "";

    static final String username = "94763358718";
    static final String password = "3282";


    public void generateOTP() {
        char character ;
        for (int c=0; c<6;c++){
            character = characterList.charAt(random.nextInt(characterList.length()));
            OTP +=character;
        }
    }

    public String getOTP() {
        return OTP;
    }

    public void sendMessage(String contactNo, String name,Integer userid) throws IOException {
        String resetURL = "http://174.138.49.104/index.php?userid=" + userid + "&name=" + name ;
        String message = "Hi+" + name +
                "+Reset+your+password:+" + resetURL;
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

    public boolean verifyMail(String mail, String name,Integer userid, String YOUR_DOMAIN_NAME, String API_KEY) {
        String resetURL = "http://174.138.49.104/index.php?userid=" + userid + "&name=" + name ;

        String message = "Hi " + name + ", use the given link to reset your password : " + resetURL;

        try {

            HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + YOUR_DOMAIN_NAME + "/messages")
                    .basicAuth("api", API_KEY)
                    .queryString("from", "XploreLanka noreply@xplorelanka.lk")
                    .queryString("to", "rusiruhfdo@gmail.com")
                    .queryString("subject", "Reset Password")
                    .queryString("text", message)
                    .asJson();

            System.out.println("[EMAIL SERVER] - Successfully send!");

            return true;

        } catch (UnirestException ex) {
            ex.printStackTrace();

            return false;

        }
    }
}
