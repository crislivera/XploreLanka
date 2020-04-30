# Backend of XploreLanka App
### Programmers who Worked on Backend
1. Rusiru Fernando - [@RuFerdZ](https://github.com/RuFerdZ)
2. Hasani Dilhari - [@HasaniD](https://github.com/HasaniD)

## Technology Used : [Spring Boot(Java)](https://spring.io/projects/spring-boot)

- Spring Boot is a project that is built on the top of the Spring Framework. It provides an easier and faster way to set up, configure, and run both simple and web-based applications.
- It is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring Framework. It is used to create a stand-alone Spring-based application that you can just run because it needs minimal Spring configuration.


## External Tools, APIs and Gateways used
- ~~[Mailgun](https://www.mailgun.com/)<br>~~
(**used for testing only**)<br>
_Powerful Transactional Email APIs that enable you to send, receive, and track emails_

- ~~[Twilio](https://www.twilio.com/)<br>~~
(**used for testing only**)<br>
_Twilio allows software developers to programmatically make and receive phone calls, send and receive text messages, and perform other communication functions using its web service APIs._

- [Postman Application](https://www.postman.com/)<br>
_Used to quickly and easily send REST requests directly within Postman to the Backend._

- [TEXTIT.BIZ SMS Gateway](http://textit.biz/)<br>
_SMS Gateway to send and receive text messages_

- [JavaMail API](https://javaee.github.io/javamail/)<br>
_he JavaMail API provides a platform-independent and protocol-independent framework to build mail and messaging applications. The JavaMail API is available as an optional package for use with the Java SE platform and is also included in the Java EE platform._
```
        <dependencies>
            <dependency>
                <groupId>com.sun.mail</groupId>
                <artifactId>javax.mail</artifactId>
                <version>1.6.2</version>
            </dependency>
        </dependencies>
```

## Database Hosting

I have created a Droplet in a Digital Ocean(https://www.digitalocean.com/) paid Server where my Database is hosted.

- Database URL : http://159.203.105.235/phpmyadmin/

## Backend Hosting

I have hosted my Spring Boot Application in [Heroku Cloud Platform](https://www.heroku.com/).

Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Our platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.

- API requests can be sent to : https://xplorelanka.herokuapp.com/
_for example:_
```
https://xplorelanka.herokuapp.com/signIn
https://xplorelanka.herokuapp.com/getPlace?id=place2134&weather=light+rain
```
