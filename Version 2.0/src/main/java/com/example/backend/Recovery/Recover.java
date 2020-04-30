package com.example.backend.Recovery;

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

    public void sendMessage(String contactNo, String name) throws IOException {
        String message = "Hi+" + name +
                "+Welcome+To+Xplore+Lanka.+" +
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

    public boolean verifyMail(String mail, String name) {
        final String username = "xplorelanka@gmail.com";
        final String password = "informates@2020";

        Properties properties = new Properties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.post", "465");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.socketFactory.port", "465");
        properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(String.valueOf(mail)));
            message.setSubject("Verification code from XploreLanka");
            message.setText("Welcome To Xplore Lanka\n" +
                    "Hi " + name + ", your one-time verification code is: " + OTP + ". \n" +
                    "               -XploreLanka by InforMates");

            Transport.send(message);

            System.out.println("[EMAIL SERVER] - Successfully send!");

            return true;

        } catch (MessagingException ex) {
            ex.printStackTrace();

            return false;

        }
    }
}
