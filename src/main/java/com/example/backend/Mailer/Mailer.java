package com.example.backend.Mailer;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class Mailer {

    public static void main(String[] args) {

        final String username = "ge.rusiru@gmail.com";
        final String password = "Informates";

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

        try{
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("rusiru.2018194@iit.ac.lk"));
            message.setSubject("Testing Mail");
            message.setText("Hiii.. Rusiru. After this is working I'm going to sleep. hee hee..");

            Transport.send(message);
            System.out.println("Successfully send!");
        }

        catch(MessagingException ex){
            ex.printStackTrace();
        }
    }
}
