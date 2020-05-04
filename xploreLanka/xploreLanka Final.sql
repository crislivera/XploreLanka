-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 04, 2020 at 05:49 AM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xploreLanka`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `contactNo` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`fname`, `lname`, `username`, `password`, `contactNo`) VALUES
('Jezzy', 'Perera', 'RoZe', 'jzz123', '0716345334'),
('Rusiru', 'Fernando', 'ruferdz', 'pwd', '0763358718');

-- --------------------------------------------------------

--
-- Table structure for table `mailgun`
--

CREATE TABLE `mailgun` (
  `domain` varchar(100) NOT NULL,
  `apiKey` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mailgun`
--

INSERT INTO `mailgun` (`domain`, `apiKey`) VALUES
('sandbox0d596bd1f21a4f8fa6f8c5ce81f88e34.mailgun.org', '3eb66c5effe3cff59abc28920716efcb-65b08458-ce0b5914');

-- --------------------------------------------------------

--
-- Table structure for table `recoverUser`
--

CREATE TABLE `recoverUser` (
  `recoverID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recoverUser`
--

INSERT INTO `recoverUser` (`recoverID`, `username`, `userID`) VALUES
(13, 'indujasivakumar', 88),
(18, 'annePerera', 94),
(31, 'Ppeter', 99);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `userID` int(11) NOT NULL,
  `location` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `city` varchar(100) NOT NULL,
  `placeID` varchar(30) NOT NULL,
  `weather` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`userID`, `location`, `date`, `city`, `placeID`, `weather`) VALUES
(0, 'temple', '2020-08-12', 'Kandy', 'P1', 'sunny'),
(0, 'Garden', '2020-08-22', 'Peradeniya', 'P3', 'Sunny'),
(0, 'Garden', '2020-08-22', 'Peradeniya', 'P3', 'Sunny'),
(2, 'KFC Marine Drive', '2020-06-06', 'Colombo', 'ChIJK8ioasFb4joRi0VBrHgHo_0', 'Sunny'),
(5, 'Beach', '2020-06-06', 'Negombo', 'P2', 'Rainy'),
(5, 'Garden', '2020-06-07', 'Peradeniya', 'P3', 'Windy');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `OTP` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`fname`, `lname`, `address`, `contact`, `email`, `username`, `password`, `userID`, `verified`, `OTP`) VALUES
('Rusiru', 'Fernando', '994, Pitipana South, Negombo', '94763358718', 'rusiruhfdo@gmail.com', 'ruferdz', 'hasani@1997', 1, 0, '094774'),
('Galgamuge', 'Hashen', '43, Ramakrishna Road, Colombo 07', '+94719922334', 'rusiru.2018194@iit.ac.lk', 'david104', '1234567890', 2, 1, '570554'),
('pasindu', 'fernando', 'No-10, St.Mary\'s Lane, Wadduwa', '0779783993', 'pasindu.fer@gmail.com', 'pasindufer', 'pasindu123', 17, 0, '139702'),
('Dinuka', 'Fonseka', 'wadduwa', '0712621427', 'pasindu.2018237@iit.ac.lk', 'dinukafonseka', 'dinuka123', 30, 0, '002717'),
('Dilanka', 'Harshani', 'No.223 katunayaka', '+94 0763358718', 'dila@somewhere.com', 'dilaharshi23', 'rusiru12340', 34, 0, '720339'),
('Induja updated', 'Sivakumar updated', 'No.223 La Bamba', '+94776236886', 'indusiva5@gmail.com', 'uhu', 'donkeyInduja', 72, 1, '920682'),
('Isuru', 'Nonis', 'No.223 Thalahena, Negombo', '94772540874', 'isuru@gmail.com', 'issa2000', 'rusiru1999', 77, 0, '987918'),
('Crismal', 'Livera', 'No.223 Divulapitiya, Negombo', '94719922334', 'cris@gmail.com', 'cris@1994', 'cris12340', 81, 1, '123456'),
('Tharanga', 'Fernando', 'No.994 Pitipana South, Negombo', '94719922334', 'tharangafdos@gmail.com', 'tharafdo', 'tharanga@1971', 83, 0, '259562'),
('Sanindu', 'Perera', 'No.2 Katana South, Negombo', '94719922334', 'saniya@gmail.com', 'jason', 'jason@1971', 86, 1, '404873'),
('Anne', 'Jason', 'N0 - 5, Lotus road, Colombo - 07', '+94776236886', 'indusiva5@gmail.com', 'anneJason', 'anne1212', 87, 1, '915386'),
('Induja', 'Sivakumar', 'N0 - 5, School road, Colombo - 07', '+94776236886', 'indusiva5@gmail.com', 'indujasivakumar', 'indu1212', 88, 0, '858823'),
('hello', 'world', 'colombo', '+94123456784', 'hello@gmail.com', 'helloworld', 'hw1212', 89, 0, '333100'),
('dd', 'dd', 'dd', 'dd', 'hello@gmail.com', 'dd', 'dd', 90, 0, '125590'),
('ww', 'ww', 'www', 'ww', 'ww@gmail.com', 'ww', 'ww', 92, 0, '576351'),
('rr', 'rr', 'rr', '44444444444', 'rr@gmail.com', 'rr', 'rr', 93, 0, '294915'),
('Anne', 'Perera', 'Nittambuwa', '94776236886', 'indusiva5@gmail.com', 'annePerera', 'anne123', 94, 1, '505267'),
('sinthu', 'siva', 'colombo', '94776236886', 'indusiva5@gmail.com', 'sinthu', 'sinthu123', 95, 1, '549939'),
('Induja', 'Sivakumar', 'No-10, Mihin Road,  Kandy', '94776236886', 'induja.2018001@iit.ac.lk', 'induja', 'indu123', 96, 1, '524222'),
('Shane', 'Perera', 'A/56,Colombo', '0716555334', 'peter1@gmail.com', 'Ppeter', 's1234', 99, 0, '473513'),
('Hasani', 'Dilhari', 'No.30,Gampaha', '0765661821', 'hasani88d@gmail.com', 'Hasi', 'h123', 102, 1, '325257'),
('Imxar12', 'Ahamed12', '23,old tangalle road,matara', '94769442025', 'imzarahamed@Gmail.com', 'Imz', 'imzarahamed123', 103, 1, '067809');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `recoverUser`
--
ALTER TABLE `recoverUser`
  ADD PRIMARY KEY (`recoverID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recoverUser`
--
ALTER TABLE `recoverUser`
  MODIFY `recoverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recoverUser`
--
ALTER TABLE `recoverUser`
  ADD CONSTRAINT `recoverUser_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
