/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 5.6.44-log : Database - portfolio_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`portfolio_db` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `portfolio_db`;

/*Table structure for table `tbl_project` */

DROP TABLE IF EXISTS `tbl_project`;

CREATE TABLE `tbl_project` (
  `seq` int(11) NOT NULL AUTO_INCREMENT,
  `p_title` varchar(30) DEFAULT NULL,
  `p_img` varchar(100) DEFAULT NULL,
  `p_desc` text,
  `reg_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `term` varchar(30) DEFAULT NULL,
  `language` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_project` */

insert  into `tbl_project`(`seq`,`p_title`,`p_img`,`p_desc`,`reg_date`,`update_date`,`term`,`language`) values 
(1,'원내 위치/낙상 모니터링 시스템','/img/project_img/welltagBack.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL),
(2,'선내 위치/응급 모니터링 시스템','/img/project_img/mtagBack.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL),
(3,'공장 설비 모니터링 시스템','/img/project_img/smart_factory.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL),
(4,'굴착기 모션 모니터링 시스템','/img/project_img/excavator.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL),
(5,'홈페이지','/img/project_img/muppy.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL),
(6,'센서 모니터링','/img/project_img/sensor.png','프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.\r\n프로젝트 설명입니다.\r\n프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.',NULL,NULL,NULL,NULL);

/*Table structure for table `tbl_user` */

DROP TABLE IF EXISTS `tbl_user`;

CREATE TABLE `tbl_user` (
  `seq` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(60) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `reg_date` datetime DEFAULT NULL,
  PRIMARY KEY (`seq`,`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_user` */

insert  into `tbl_user`(`seq`,`uid`,`password`,`name`,`reg_date`) values 
(1,'admin','qkrgks21','admin','2020-02-04 18:57:14');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
