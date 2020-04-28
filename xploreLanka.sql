-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 28, 2020 at 08:05 PM
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
('Crismal', 'Livera', 'cris', 'cris@1997', '0312223587'),
('Dilanka', 'Harshi', 'Harshani', 'dilanka1234', '0716655334'),
(NULL, NULL, 'hdilhari', '1234', NULL),
('Induja', 'Dumb Fool', 'indu', 'indu@1998', '119'),
('Rusiru', 'Fernando', 'ruferdz', 'pwd', '0763358718');

-- --------------------------------------------------------

--
-- Table structure for table `tempSessionForPlace`
--

CREATE TABLE `tempSessionForPlace` (
  `userId` varchar(20) NOT NULL,
  `placeId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tempSessionForPlace`
--

INSERT INTO `tempSessionForPlace` (`userId`, `placeId`) VALUES
('u1test', 'ChIJpZyTCJaIFkcRibEOounaP7M'),
('u1test', 'ChIJkabdhQzwdkgRtOhaiO39Qt0'),
('u1test', 'ChIJkabdhQzwdkgRtOhaiO39Qt0');

-- --------------------------------------------------------

--
-- Table structure for table `Trips`
--

CREATE TABLE `Trips` (
  `tripID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `locationName` varchar(100) NOT NULL,
  `placeID` varchar(100) NOT NULL,
  `city` varchar(30) NOT NULL,
  `weather` varchar(30) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `OTP` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`fname`, `lname`, `address`, `contact`, `email`, `username`, `password`, `userID`, `verified`, `OTP`) VALUES
('Rusiru', 'Fernando', '994, Pitipana South, Negombo', '+94763358718', 'rusiruhfdo@gmail.com', 'ruferdz', 'russa@1999', 1, 0, '094 774'),
('Galgamuge', 'Hashen', '43, Ramakrishna Road, Colombo 07', '+94719922334', 'rusiru.2018194@iit.ac.lk', 'david104', 'lkjJKHid9092nk', 2, 1, '570 554'),
('pasindu', 'fernando', 'No-10, St.Mary\'s Lane, Wadduwa', '0779783993', 'pasindu.fer@gmail.com', 'pasindufer', 'pasindu123', 17, 0, '139 702'),
('Dinuka', 'Fonseka', 'wadduwa', '0712621427', 'pasindu.2018237@iit.ac.lk', 'dinukafonseka', 'dinuka123', 30, 0, '002 717'),
('Dilanka', 'Harshani', 'No.223 katunayaka', '+94 0763358718', 'dila@somewhere.com', 'dilaharshi23', 'rusiru12340', 34, 0, '720 339');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `Trips`
--
ALTER TABLE `Trips`
  ADD PRIMARY KEY (`tripID`);

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
-- AUTO_INCREMENT for table `Trips`
--
ALTER TABLE `Trips`
  MODIFY `tripID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
