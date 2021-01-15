-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for companydirectory
-- CREATE DATABASE IF NOT EXISTS `contactlist` /*!40100 DEFAULT CHARACTER SET utf8 */;
-- USE `contactlist`;

CREATE DATABASE IF NOT EXISTS `dbs1209495` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `dbs1209495`;

-- Dumping structure for table companydirectory.department
CREATE TABLE IF NOT EXISTS `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `locationID` int(11) DEFAULT NULL,
  `managerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.department: ~12 rows (approximately)
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`id`, `name`, `locationID`, `managerID`) VALUES
	(1, 'Human Resources', 1, 1),
	(2, 'Sales', 2, 2),
	(3, 'Marketing', 2, 4),
	(4, 'Legal', 1, NULL),
	(5, 'Services', 1, 6),
	(6, 'Research and Development', 3, 10),
	(7, 'Product Management', 3, 11),
	(8, 'Training', 4, 12),
	(9, 'Support', 4, 13),
	(10, 'Engineering', 5, 17),
	(11, 'Accounting', 5, 26),
	(12, 'Business Development', 3, 24);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table companydirectory.location
CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `shortName` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.location: ~4 rows (approximately)
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` (`id`, `name`, `shortName`) VALUES
	(1, 'London', 'LDN'),
	(2, 'New York', 'NY'),
	(3, 'Paris', 'PAR'),
	(4, 'Munich', 'MUN'),
	(5, 'Rome', 'ROM');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;

-- Dumping structure for table companydirectory.personnel
CREATE TABLE IF NOT EXISTS `personnel` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `jobTitle` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `departmentID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.personnel: ~100 rows (approximately)
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;

-- Dumping data for table companydirectory.personnel: ~100 rows (approximately)
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` (`id`, `firstName`, `lastName`, `jobTitle`, `email`, `departmentID`) VALUES
(1, 'Rosana', 'Heffron', 'Head of HR', 'rheffron0@ibm.com', 1),
(2, 'Kris', 'Kovnot', 'Head of Sales', 'kkovnot1@google.nl', 2),
(3, 'Vera', 'Kisbee', 'Sales Manager', 'vkisbee2@nih.gov', 2),
(4, 'Aveline', 'Edgson', 'Head of Marketing', 'aedgson3@wikispaces.com', 3),
(5, 'Bertie', 'Wittke', 'Legal Secretary', 'bwittke4@yahoo.com', 4),
(6, 'Demetre', 'Cossam', 'Head of Services', 'dcossam5@washington.edu', 5),
(7, 'Annabela', 'McGavigan', 'Legal Counsel', 'amcgavigan6@wp.com', 4),
(8, 'Crichton', 'McAndrew', 'HR Advisor', 'cmcandrew7@zdnet.com', 1),
(9, 'Cordula', 'Plain', 'Customer Service Advisor', 'cplain8@google.ca', 5),
(10, 'Glen', 'McDougle', 'Head of R&D', 'gmcdougle9@meetup.com', 6),
(11, 'Theo', 'Audas', 'Head of Product Management', 'taudasa@newsvine.com', 7),
(12, 'Spense', 'Jolliss', 'Head of Training', 'sjollissb@wufoo.com', 8),
(13, 'Leopold', 'Carl', 'Head of Support', 'lcarlc@paginegialle.it', 9),
(14, 'Barr', 'MacAllan', 'Operational Support', 'bmacalland@github.com', 5),
(15, 'Suzie', 'Cromer', 'HR Administrator', 'scromere@imageshack.us', 1),
(16, 'Tracee', 'Gisbourn', 'CAD Engineer', 'tgisbournf@bloglines.com', 10),
(17, 'Taylor', 'St. Quintin', 'Head of Engineering', 'tstquinting@chronoengine.com', 10),
(18, 'Lin', 'Klassmann', 'Maintenance Engineer', 'lklassmannh@indiatimes.com', 10),
(19, 'Lay', 'Fintoph', 'General Ledger Accountant', 'lfintophi@goo.gl', 11),
(20, 'Moishe', 'Flinn', 'Telesales Representative', 'mflinnj@list-manage.com', 12),
(21, 'Gay', 'Bickford', 'Power Electronics Developer', 'gbickfordk@scientificamerican.com', 6),
(22, 'Erik', 'Lindback', 'Online Training Administer', 'elindbackl@virginia.edu', 8),
(23, 'Tamarra', 'Ace', 'Senior IT Technician', 'tacem@vinaora.com', 9),
(24, 'Barbara-anne', 'Rooksby', 'Head of Business Development', 'brooksbyn@issuu.com', 12),
(25, 'Lucien', 'Allsup', 'Office Support', 'lallsupo@goo.ne.jp', 9),
(26, 'Jackelyn', 'Imlach', 'Head of Accounting', 'jimlachp@google.it', 11),
(27, 'Virge', 'Bootes', 'Sales Associate', 'vbootesq@oracle.com', 2),
(28, 'Rafferty', 'Matasov', 'Head of Legal', 'rmatasovr@4shared.com', 4),
(29, 'Vanya', 'Goulder', 'Customer Support', 'vgoulders@phoca.cz', 9),
(30, 'Bonita', 'McGonagle', 'HR Services', 'bmcgonaglet@microsoft.com', 1),
(31, 'Allx', 'Whaley', 'HR Manager', 'awhaleyu@bbb.org', 1),
(32, 'Mavis', 'Lernihan', 'Customer Service Representative', 'mlernihanv@netscape.com', 5),
(33, 'Vern', 'Durling', 'HR Respresentative', 'vdurlingw@goo.gl', 1),
(34, 'Myles', 'Minchi', 'Senior Product Manager', 'mminchix@smugmug.com', 7),
(35, 'Anitra', 'Coleridge', 'R&D Project Manager', 'acoleridgey@nbcnews.com', 6),
(36, 'Ailis', 'Brewster', 'Junior Product Manager', 'abrewsterz@businesswire.com', 7),
(37, 'Rahal', 'Tute', 'Research Engineer', 'rtute10@pinterest.com', 6),
(38, 'Warner', 'Blonden', 'Business Development Representative', 'wblonden11@spiegel.de', 12),
(39, 'Melvyn', 'Canner', 'Private Client Solicitor', 'mcanner12@eepurl.com', 4),
(40, 'Ryann', 'Giampietro', 'Senior Legal Counsel', 'rgiampietro13@theguardian.com', 4),
(41, 'Harwell', 'Jefferys', 'Systems Engineer', 'hjefferys14@jimdo.com', 10),
(42, 'Lanette', 'Buss', 'Commercial Litigation Solicitor', 'lbuss15@51.la', 4),
(43, 'Lissie', 'Reddington', '1st Line Support', 'lreddington16@w3.org', 9),
(44, 'Dore', 'Braidford', 'Senior Accountant', 'dbraidford17@google.com.br', 11),
(45, 'Lizabeth', 'Di Franceshci', 'Online Training Developer', 'ldifranceshci18@mediafire.com', 8),
(46, 'Felic', 'Sharland', 'New Business Development', 'fsharland19@myspace.com', 12),
(47, 'Duff', 'Quail', 'IT Support Analyst', 'dquail1a@vimeo.com', 9),
(48, 'Brendis', 'Shivell', 'Group HR Manager', 'bshivell1b@un.org', 1),
(49, 'Nevile', 'Schimaschke', 'Manufacturing Engineer', 'nschimaschke1c@hexun.com', 10),
(50, 'Jon', 'Calbaithe', 'Property Solicitor', 'jcalbaithe1d@netvibes.com', 4),
(51, 'Emmery', 'Darben', 'Senior Engineer', 'edarben1e@mapquest.com', 10),
(52, 'Staford', 'Whitesel', 'R&D Manager', 'swhitesel1f@nasa.gov', 6),
(53, 'Benjamin', 'Hawkslee', 'Software Product Manager', 'bhawkslee1g@hubpages.com', 7),
(54, 'Myrle', 'Speer', 'Marketing Assistant', 'mspeer1h@tripod.com', 3),
(55, 'Matthus', 'Banfield', 'Digital Marketing Manager', 'mbanfield1i@angelfire.com', 3),
(56, 'Annadiana', 'Drance', 'Marketing Intern', 'adrance1j@omniture.com', 3),
(57, 'Rinaldo', 'Fandrey', 'Sales Representative', 'rfandrey1k@bbc.co.uk', 2),
(58, 'Roanna', 'Standering', 'Marketing Content Officer', 'rstandering1l@cocolog-nifty.com', 3),
(59, 'Lorrie', 'Fattorini', 'Business Support', 'lfattorini1m@geocities.jp', 9),
(60, 'Talbot', 'Andrassy', 'Legal Executive', 'tandrassy1n@bigcartel.com', 4),
(61, 'Cindi', 'O\'Mannion', 'Commercial Accountant', 'comannion1o@ameblo.jp', 11),
(62, 'Pancho', 'Mullineux', 'HR Assistant', 'pmullineux1p@webmd.com', 1),
(63, 'Cynthy', 'Peyntue', 'R&D Tool Maker', 'cpeyntue1q@amazon.co.jp', 6),
(64, 'Kristine', 'Christal', 'Personal Development Trainer', 'kchristal1r@behance.net', 8),
(65, 'Dniren', 'Reboulet', 'Hardware Product Manager', 'dreboulet1s@360.cn', 7),
(66, 'Aggy', 'Napier', 'Meeting and Events Executive', 'anapier1t@sciencedirect.com', 3),
(67, 'Gayleen', 'Hessay', 'Debt Recovery Executive', 'ghessay1u@exblog.jp', 4),
(68, 'Cull', 'Snoden', 'HR Coordinator', 'csnoden1v@so-net.ne.jp', 1),
(69, 'Vlad', 'Crocombe', 'Parts Product Manager', 'vcrocombe1w@mtv.com', 7),
(70, 'Georgeanna', 'Joisce', 'Research Manager', 'gjoisce1x@google.com.au', 6),
(71, 'Ursola', 'Berthomieu', 'Employment Solicitor', 'uberthomieu1y@un.org', 4),
(72, 'Mair', 'McKirdy', 'HR Policy Advisor', 'mmckirdy1z@ovh.net', 1),
(73, 'Erma', 'Runnalls', 'Training Operations Specialist', 'erunnalls20@spiegel.de', 8),
(74, 'Heida', 'Gallone', 'Automation Engineer', 'hgallone21@hostgator.com', 10),
(75, 'Christina', 'Denge', 'Business Development Representative', 'cdenge22@canalblog.com', 12),
(76, 'Wilone', 'Fredi', 'Product Lead', 'wfredi23@gizmodo.com', 7),
(77, 'Stormie', 'Bolderstone', 'Ledger Clerk', 'sbolderstone24@globo.com', 11),
(78, 'Darryl', 'Pool', 'Bookkeeper', 'dpool25@vistaprint.com', 11),
(79, 'Nikolas', 'Mager', 'Online Service Representative', 'nmager26@nifty.com', 5),
(80, 'Brittney', 'Gaskal', 'SAS Engineer', 'bgaskal27@weather.com', 10),
(81, 'Field', 'Gresty', 'Commercial Solicitor', 'fgresty28@networkadvertising.org', 4),
(82, 'Martina', 'Tremoulet', 'Marketing Data Analyst', 'mtremoulet29@sciencedaily.com', 3),
(83, 'Robena', 'Ivanyutin', 'Sales Consultant', 'rivanyutin2a@mozilla.org', 2),
(84, 'Reagen', 'Corner', 'Finance Manager', 'rcorner2b@qq.com', 11),
(85, 'Eveleen', 'Sulter', 'R&D Business Analyst', 'esulter2c@nature.com', 6),
(86, 'Christy', 'Dunbobbin', 'E2 Training Planner', 'cdunbobbin2d@feedburner.com', 8),
(87, 'Winthrop', 'Lansley', 'Training and Development Manager', 'wlansley2e@alibaba.com', 8),
(88, 'Lissa', 'Insley', 'B2B Marketing Manager', 'linsley2f@friendfeed.com', 3),
(89, 'Shell', 'Risebarer', 'Hardware Engineer', 'srisebarer2g@patch.com', 10),
(90, 'Cherianne', 'Liddyard', 'B2B Sales Executive', 'cliddyard2h@com.com', 2),
(91, 'Brendan', 'Fooks', 'International Sales Manager', 'bfooks2i@utexas.edu', 2),
(92, 'Edmund', 'Tace', 'IT Support', 'etace2j@hatena.ne.jp', 9),
(93, 'Ki', 'Tomasini', 'Design and Style Engineer', 'ktomasini2k@cnbc.com', 10),
(94, 'Chadd', 'McGettrick', 'Software Engineer', 'cmcgettrick2l@simplemachines.org', 10),
(95, 'Dulcie', 'Baudi', 'Digital Content Creator', 'dbaudi2m@last.fm', 3),
(96, 'Barnebas', 'Mowbray', 'Payroll Coordinator', 'bmowbray2n@cbslocal.com', 1),
(97, 'Stefanie', 'Anker', 'Service Delivery Manager', 'sanker2o@hud.gov', 5),
(98, 'Cherye', 'de Cullip', 'Electronics Engineer', 'cdecullip2p@loc.gov', 10),
(99, 'Sinclare', 'Deverall', 'R&D Systems Engineer', 'sdeverall2q@ow.ly', 6),
(100, 'Shae', 'Johncey', 'Test Development Engineer', 'sjohncey2r@bluehost.com', 10);
/*!40000 ALTER TABLE `personnel` ENABLE KEYS */;
