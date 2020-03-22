package com.example.backend.Mailer;

import com.example.backend.Models.MailModel;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.ArrayList;
import java.util.Properties;

public class Mailer {

    public boolean sendMail(MailModel mailModel) {

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

        ArrayList<String> mailList = mailModel.getMailList();

        try{
            for(String mail : mailList){
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(username));
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mail));
                message.setSubject(mailModel.getSubject());
                message.setText(mailModel.getBody());

                Transport.send(message);
            }

            System.out.println("Successfully send!");

            return true;
        }

        catch(MessagingException ex){
            ex.printStackTrace();

            return false;
        }
    }
}
