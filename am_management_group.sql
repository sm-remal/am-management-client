-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2026 at 12:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `am_management_group`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` varchar(191) NOT NULL,
  `jobId` varchar(191) NOT NULL,
  `fullName` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `preferredCompanyId` varchar(191) DEFAULT NULL,
  `cvUrl` varchar(191) NOT NULL,
  `coverMessage` text DEFAULT NULL,
  `status` enum('PENDING','REVIEWED','SHORTLISTED','REJECTED','HIRED') NOT NULL DEFAULT 'PENDING',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `jobId`, `fullName`, `email`, `phone`, `preferredCompanyId`, `cvUrl`, `coverMessage`, `status`, `createdAt`, `updatedAt`) VALUES
('948f7dce-45ce-4329-a3eb-136db131c835', '445ad794-e400-488e-93c4-a1fbc580a587', 'Ashadul islam', 'ashadul.islam.dev@gmail.com', '43484584545', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'https://docs.google.com/document/d/1CWO5PmZvjQtGNhs8-CbyT6SpdNPgpB0rmEXuG8vKZz0/edit?usp=sharing', 'wedwdqwqw qwhedp kuy8qw iuqhw', 'PENDING', '2026-09-10 12:39:59.257', '2026-09-10 12:39:59.257');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `category` enum('MANAGEMENT_INVESTMENT','CLEANING_SERVICES','ENGINEERING_MACHINERY','PLANTATION_AGRICULTURE','RETAIL_TRADING','TRAVEL_TOURISM') NOT NULL,
  `isMainCompany` tinyint(1) NOT NULL DEFAULT 0,
  `shortDescription` varchar(500) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `coverImage` varchar(191) DEFAULT NULL,
  `registrationNumber` varchar(191) DEFAULT NULL,
  `establishedDate` datetime(3) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `businessHours` text DEFAULT NULL,
  `seoTitle` varchar(191) DEFAULT NULL,
  `seoDescription` text DEFAULT NULL,
  `displayOrder` int(11) NOT NULL DEFAULT 0,
  `status` enum('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `slug`, `category`, `isMainCompany`, `shortDescription`, `description`, `logo`, `coverImage`, `registrationNumber`, `establishedDate`, `address`, `phone`, `email`, `businessHours`, `seoTitle`, `seoDescription`, `displayOrder`, `status`, `createdAt`, `updatedAt`) VALUES
('5d8237da-c2e9-44d3-9dab-92946f589a94', 'BM Magnitude Services', 'bm-magnitude-services', 'CLEANING_SERVICES', 0, 'Malaysian Company', 'Malaysian Company', 'https://i.pinimg.com/736x/db/4b/bd/db4bbdb49d44d22ec2ecc467a77c8182.jpg', 'https://i.pinimg.com/1200x/71/50/b2/7150b2493250df64c04b8d3dbd35113e.jpg', 'bmmagnitude123', '2026-09-06 00:00:00.000', 'Malaysia', '796555543', 'bmmagnitude@gmail.com', '9-7', 'Malaysian Company', 'Malaysian Company', 1, 'PUBLISHED', '2026-09-08 11:45:24.113', '2026-09-24 09:31:05.932'),
('a35603ab-b167-4a0f-9ba3-e9332cc3950d', 'MA Travel and Tour', 'ma-travel-and-tour', 'TRAVEL_TOURISM', 0, 'Travel, tourism and related customer-focused services.', 'Premium travel planning, holiday package customization, flight bookings, and complete corporate travel solution management.', 'https://i.pinimg.com/1200x/4a/c5/64/4ac564b1f9c9f73824fc640cc5e0a3b2.jpg', 'https://i.pinimg.com/1200x/57/31/3b/57313bd1d009b97167a4eaf92eb157ec.jpg', 'Reg-006-MA', '2024-06-27 00:00:00.000', 'Kuala Lumpur, Malaysia', '+60 12-345 6794', 'tours@matravel.com', 'Mon - Fri, 9:00 AM - 6:00 PM', 'MA Travel and Tour | Custom Travel Packages & Corporate Tours', 'Complete travel agency services offering customized tour packages, corporate itineraries, and flight arrangements.', 6, 'PUBLISHED', '2026-09-09 11:55:34.433', '2026-09-24 09:38:50.357'),
('b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'AM Management Group', 'am-management-group', 'MANAGEMENT_INVESTMENT', 1, 'Corporate management, investment and strategic business development.', 'AM Management Group focuses on corporate governance, strategic investments, and expanding business operations through sustainable growth strategies.', 'https://i.ibb.co.com/ynmXSkWF/Am-logo.png', 'https://i.ibb.co.com/Zpf1ZkRn/Company-out-Look.png', 'bmmagnitude12', '2012-03-09 00:00:00.000', 'Kuala Lumpur, Malaysia', '1225656678678', 'ammanagmentgroup@gmail.com', 'Mon - Fri, 9:00 AM - 6:00 PM', 'AM Management Group | Corporate & Investment Management', 'Strategic corporate management and investment solutions driving business development and growth.', 1, 'PUBLISHED', '2026-09-09 07:35:16.023', '2026-09-09 07:48:12.673'),
('dd84d1a0-9e54-446d-8387-9a17b92979b4', 'AM Multi Trade Empire', 'am-multi-trade-empire', 'RETAIL_TRADING', 0, 'Retail, trading and consumer-focused business activities.', 'Diversified retail distributions, consumer goods trading, and international supply chain solutions catering to global consumer markets.', 'https://i.pinimg.com/736x/34/ab/1c/34ab1cde17188402b03efb6ae7fd29e3.jpg', 'https://i.pinimg.com/1200x/a5/2c/ec/a52cec4311fc6bfcdd9ebf4cb98c2a22.jpg', 'Reg-005-MT', '2021-03-03 00:00:00.000', 'Penang, Malaysia', '+60 12-345 6793', 'sales@ammultitrade.com', 'Mon - Fri, 9:00 AM - 6:00 PM', 'AM Multi Trade Empire | Global Retail & Trading Services', 'Consumer trading, wholesale retail distribution, and global supply network management.', 5, 'PUBLISHED', '2026-09-09 11:52:49.457', '2026-09-24 09:36:57.005'),
('e599aae4-baf6-4f21-9f74-090e963b99e0', 'Hidensypro Sdn. Bhd.', 'hidensypro-sdn-bhd', 'ENGINEERING_MACHINERY', 0, 'Machinery, technical and engineering-related business solutions.', 'Providing heavy machinery maintenance, technical support, and full-scale engineering operational solutions for industrial projects.', 'https://i.pinimg.com/736x/04/69/53/046953060d9725fdf4a7e526948bee73.jpg', 'https://i.pinimg.com/1200x/83/45/86/83458618a83096bb5a19ff13fe5921fc.jpg', 'bmmagnitude1234', '2021-02-26 00:00:00.000', 'Johor Bahru, Malaysia', NULL, 'support@hidensypro.com', 'Mon - Fri, 9:00 AM - 6:00 PM', 'Hidensypro Sdn. Bhd. | Engineering & Machinery Solutions', 'Specialized technical engineering services and machinery equipment maintenance for industrial sectors.', 3, 'PUBLISHED', '2026-09-09 11:47:43.979', '2026-09-24 09:43:38.349'),
('f2786b17-d66b-42bf-ac81-c1e30749058f', 'CM Plantation Services', 'cm-plantation-services', 'PLANTATION_AGRICULTURE', 0, 'Agriculture and plantation-related operations with a focus on sustainable growth.', 'Leading sustainable plantation management and agricultural site developments adhering to eco-friendly production practices.', 'https://i.pinimg.com/736x/f1/a4/df/f1a4df3852bea8c09853ca23f0a9d43c.jpg', 'https://i.pinimg.com/736x/12/32/a0/1232a0e2bd52e2e264160e76108e7575.jpg', 'Reg-004-CM', '2023-02-07 00:00:00.000', 'Pahang, Malaysia', '+60 12-345 6792', 'info@cmplantation.com', 'Mon - Fri, 9:00 AM - 6:00 PM', 'CM Plantation Services | Sustainable Plantation & Agriculture', 'Comprehensive plantation operations and modern agricultural services dedicated to sustainable practices.', 4, 'PUBLISHED', '2026-09-09 11:50:07.225', '2026-09-24 09:34:17.213');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `imageUrl` varchar(191) NOT NULL,
  `category` varchar(191) NOT NULL,
  `companyId` varchar(191) DEFAULT NULL,
  `displayOrder` int(11) NOT NULL DEFAULT 0,
  `isPublished` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `imageUrl`, `category`, `companyId`, `displayOrder`, `isPublished`, `createdAt`) VALUES
('02204500-a5f4-447c-b858-356251960a69', 'Modern Architecture', 'https://i.pinimg.com/736x/f8/ee/89/f8ee893349310b1417cbaf4e1bf7feac.jpg', 'Construction', '5d8237da-c2e9-44d3-9dab-92946f589a94', 4, 1, '2026-09-09 05:47:19.516'),
('092d037a-0ffd-4f28-bdb1-af7d57e662fe', 'Warehouse & Supply Chain', 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600', 'Services', '5d8237da-c2e9-44d3-9dab-92946f589a94', 6, 1, '2026-09-09 05:46:19.788'),
('29f56085-6889-4c9f-a515-057ec845dfde', 'Construction Management', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600', 'Services', '5d8237da-c2e9-44d3-9dab-92946f589a94', 1, 1, '2026-09-09 05:44:07.295'),
('a3d55006-8bc2-4729-88fd-c244cb61409f', 'Corporate Executive Tour & International Delegation', 'https://i.pinimg.com/1200x/2a/bd/fc/2abdfc207e95475fa812e46d8e69b77d.jpg', 'Tour', 'a35603ab-b167-4a0f-9ba3-e9332cc3950d', 1, 1, '2026-09-10 07:14:10.987'),
('b8c25e78-8fcd-4aaf-8a18-cc8da66694f4', 'Corporate Office Space', 'https://i.pinimg.com/736x/1c/52/bb/1c52bb738447fe1f3b8f8e001976c713.jpg', 'Services', '5d8237da-c2e9-44d3-9dab-92946f589a94', 5, 1, '2026-09-09 05:45:41.807'),
('b8d9c868-eade-4152-bb0f-1dc360a613cd', 'Industrial Machinery', 'https://i.pinimg.com/736x/17/6e/86/176e86eac5ebdd1f9b2dbabd9ad7aa89.jpg', 'Engineering', '5d8237da-c2e9-44d3-9dab-92946f589a94', 3, 1, '2026-09-09 05:46:46.629'),
('c18315ae-49c8-41d2-a813-abc6b6719df2', 'Structural Engineering', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600', 'Engineering', '5d8237da-c2e9-44d3-9dab-92946f589a94', 8, 1, '2026-09-09 05:47:16.973'),
('c6a1166f-b43c-4978-b700-89cf03f6e77c', 'Global Freight & Logistics', 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600', 'Engineering', '5d8237da-c2e9-44d3-9dab-92946f589a94', 7, 1, '2026-09-09 05:46:50.799'),
('d5676374-3dcf-42b2-b11b-a731147c49f5', 'Site Engineering', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600', 'Construction', '5d8237da-c2e9-44d3-9dab-92946f589a94', 2, 1, '2026-09-09 05:45:19.004');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `company` varchar(191) DEFAULT NULL,
  `subject` varchar(191) NOT NULL,
  `message` text NOT NULL,
  `status` enum('NEW','IN_PROGRESS','RESOLVED','ARCHIVED') NOT NULL DEFAULT 'NEW',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inquiries`
--

INSERT INTO `inquiries` (`id`, `name`, `email`, `phone`, `company`, `subject`, `message`, `status`, `createdAt`, `updatedAt`) VALUES
('2b94ec15-5613-4fcb-8916-928590ac6b82', 'Ashadul islam', 'ashadul.islam.dev@gmail.com', '5346346', 'dgzdf', 'dfgdf', 'dfgdfg', 'NEW', '2026-09-12 13:02:06.259', '2026-09-12 13:02:06.259');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `companyId` varchar(191) NOT NULL,
  `location` varchar(191) DEFAULT NULL,
  `employmentType` enum('FULL_TIME','PART_TIME','CONTRACT','INTERNSHIP') NOT NULL DEFAULT 'FULL_TIME',
  `requirements` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `salaryInfo` varchar(191) DEFAULT NULL,
  `deadline` datetime(3) DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `slug`, `companyId`, `location`, `employmentType`, `requirements`, `description`, `salaryInfo`, `deadline`, `isPublished`, `createdAt`, `updatedAt`) VALUES
('226e3e53-d4c3-4a88-8e90-fc44371b44a8', 'Quantity Surveyor (QS)', 'quantity-surveyor-qs', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'Melaka HQ', 'FULL_TIME', 'Diploma or Degree in Quantity Surveying or Civil Engineering,\nProficient in contract valuation and site progress claims,\nMinimum 2 years relevant experience in construction sector', 'Handle contract claims, material estimation, and sub-contractor billings for residential and commercial developments.', 'Negotiation', '2026-10-14 00:00:00.000', 1, '2026-09-12 08:17:49.620', '2026-09-12 09:04:20.936'),
('445ad794-e400-488e-93c4-a1fbc580a587', 'Construction Site Supervisor', 'construction-site-supervisor', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'Melaka / Selangor', 'FULL_TIME', 'Minimum 3 years of experience in structural or finishing works,\nAbility to read architectural drawings and manage site sub-contractors,\nCIDB Green Card holder required', 'Oversee daily plastering, brickwork, and structural sub-contracting operations on active project sites.', 'Negotiation', '2026-09-30 00:00:00.000', 1, '2026-09-10 12:33:22.465', '2026-09-12 09:04:27.449'),
('5002547a-635b-4cff-968b-ec83ced543ac', 'Cleaning Operations Supervisor', 'cleaning-operations-supervisor', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Kuala Lumpur / Selangor', 'FULL_TIME', '* Minimum 2 years of experience in facility cleaning or housekeeping management.\n* Strong leadership and team scheduling skills.\n* Valid driving license and willingness to travel between different sites.', 'Supervise daily commercial and residential cleaning operations, manage cleaning staff, and maintain service quality standards.', '15000 - 20000', '2026-11-11 00:00:00.000', 1, '2026-09-12 09:06:51.789', '2026-09-12 09:06:51.789'),
('d7053d51-6733-46b9-a45f-9ee37617aaf0', 'High-Rise Cleaning Specialist', 'high-rise-cleaning-specialist', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Kuala Lumpur', 'FULL_TIME', '* Certified in Working at Heights / Rope Access (IRATA or equivalent).\n* Minimum 1 year of experience in high-rise window and facade cleaning.\n* Good physical fitness and strict adherence to site safety guidelines.', 'Perform exterior glass and facade cleaning for high-rise commercial buildings following strict safety protocols.', '10000 - 20000', '2026-10-01 00:00:00.000', 1, '2026-09-12 09:09:14.006', '2026-09-12 09:09:14.006');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `excerpt` varchar(500) DEFAULT NULL,
  `content` text NOT NULL,
  `coverImage` varchar(191) DEFAULT NULL,
  `category` varchar(191) DEFAULT NULL,
  `authorId` varchar(191) DEFAULT NULL,
  `status` enum('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  `publishedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `slug`, `excerpt`, `content`, `coverImage`, `category`, `authorId`, `status`, `publishedAt`, `createdAt`, `updatedAt`) VALUES
('508df513-9276-4662-9462-43fde3057cf0', 'AM Group Expands Residential Footprint with New Melaka Project', 'am-group-expands-residential-footprint-with-new-melaka-project', NULL, 'AM Management Group has officially broken ground on a new multi-million ringgit residential development project in Ayer Keroh, Melaka.', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600', 'Project Launch', '70e64315-d31c-46e4-b54b-fb82bb6ba114', 'PUBLISHED', '2026-09-10 07:17:52.547', '2026-09-10 07:17:52.549', '2026-09-10 07:19:33.962'),
('9f233725-5522-40e4-a132-81be1381578f', 'AM Management Group Achieves Outstanding Site Safety Benchmark', 'am-management-group-achieves-outstanding-site-safety-benchmark', NULL, 'Our site supervisory teams achieve zero-loss time injury across all active commercial plastering and construction sites.', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800', 'Safety', '70e64315-d31c-46e4-b54b-fb82bb6ba114', 'PUBLISHED', '2026-09-10 07:20:32.973', '2026-09-10 07:20:32.976', '2026-09-10 07:20:32.976');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `companyId` varchar(191) NOT NULL,
  `category` enum('MANAGEMENT_INVESTMENT','CLEANING_SERVICES','ENGINEERING_MACHINERY','PLANTATION_AGRICULTURE','RETAIL_TRADING','TRAVEL_TOURISM') NOT NULL,
  `location` varchar(191) DEFAULT NULL,
  `clientName` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `scope` text DEFAULT NULL,
  `startDate` datetime(3) DEFAULT NULL,
  `endDate` datetime(3) DEFAULT NULL,
  `status` enum('UPCOMING','ONGOING','COMPLETED') NOT NULL DEFAULT 'UPCOMING',
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `coverImage` varchar(191) DEFAULT NULL,
  `publishStatus` enum('DRAFT','PUBLISHED','ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  `displayOrder` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `highlights` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `slug`, `companyId`, `category`, `location`, `clientName`, `description`, `scope`, `startDate`, `endDate`, `status`, `featured`, `coverImage`, `publishStatus`, `displayOrder`, `createdAt`, `updatedAt`, `highlights`) VALUES
('2e7a1517-3cfb-4e6f-a750-644133949e72', 'KL Gateway Mall Deep Cleaning & Facility Management', 'kl-gateway-mall-deep-cleaning-facility-management', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'CLEANING_SERVICES', 'Bangsar South, Kuala Lumpur', 'UOA Mall Management', 'Complete post-construction deep cleaning, daily hygiene maintenance, and floor care for a commercial shopping complex.', 'Post-construction Cleaning, High-window Glass Washing, Daily Waste Disposal, Escalator Sanitation', '2023-10-27 00:00:00.000', '2026-01-08 00:00:00.000', 'COMPLETED', 1, 'https://i.pinimg.com/736x/be/98/65/be986515b9930bfc4ab22b2cc29e6533.jpg', 'PUBLISHED', 1, '2026-09-10 06:59:44.344', '2026-09-24 09:05:06.739', 'Delivered zero-disruption night-shift services, Awarded high quality safety standard rating, Expanded to long-term contract'),
('5b86de64-0dfd-4f0e-8647-10bc28afa1d1', 'Taman Hilsa Residential Housing Phase 1', 'taman-hilsa-residential-housing-phase-1', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'MANAGEMENT_INVESTMENT', 'Ayer Keroh, Melaka', 'Hilsa Properties Sdn. Bhd.', 'Full structural construction and masonry framework for a modern double-storey residential township.', 'Foundation and Structural Concrete Masonry, Brickwork for Internal Partitions, Exterior Surface Plastering, Roofing Framework Installation', '2024-07-11 00:00:00.000', '2026-05-13 00:00:00.000', 'COMPLETED', 1, 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200', 'PUBLISHED', 3, '2026-09-10 05:05:10.338', '2026-09-10 05:05:10.338', 'Constructed 45 double-storey terrace units, Passed CIDB Malaysia quality standard audits with distinction, Implemented eco-friendly waste management on-site'),
('637c9291-dffd-4b0c-98ae-a1a109016a70', '3-Storey Commercial Shop Offices', '3-storey-commercial-shop-offices', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'MANAGEMENT_INVESTMENT', 'Bukit Katil, Melaka', 'Setia Builder Group', 'Heavy masonry, red bricklaying, and concrete block wall installation for 18 units of commercial shop offices.', 'Clay Brick Wall Construction, Reinforced Concrete Lintels, Expansion Joint Placement, Scaffolding Set Up and Safety Barriers', '2024-06-13 00:00:00.000', NULL, 'ONGOING', 1, 'https://i.pinimg.com/1200x/1f/4d/1e/1f4d1ef3ec2a8ca05c207b5c9b045f42.jpg', 'PUBLISHED', 1, '2026-09-10 06:51:18.766', '2026-09-24 09:44:55.821', 'Over 350,000 bricks laid with strict alignment precision, Delivered 2 weeks ahead of the master schedule, Complied with high thermal insulation requirements'),
('71c3aa2f-f924-4dce-92dc-a0130c230926', 'Pahang Sustainable Palm Oil Estate Operations', 'pahang-sustainable-palm-oil-estate-operations', 'f2786b17-d66b-42bf-ac81-c1e30749058f', 'PLANTATION_AGRICULTURE', 'Kuantan, Pahang', 'Federal Agricultural Development', 'Sustainable agricultural land management, soil enrichment, and organized harvesting workforce deployment.', 'Crop Harvesting Supervision, Soil Health Maintenance, Irrigation System Setup, Workforce Training', '2024-06-07 00:00:00.000', NULL, 'ONGOING', 1, 'https://i.pinimg.com/736x/5b/8d/b1/5b8db1ec953fbcfb03ae03131ff8202a.jpg', 'PUBLISHED', 1, '2026-09-10 07:04:01.176', '2026-09-24 09:03:20.075', 'Achieved RSPO sustainability certification standards, Increased yield productivity by 20%, Zero deforestation policy enforced'),
('89f76bd2-941e-4d40-a940-86effa61218d', 'Tech Park Warehouse & Office Complex', 'tech-park-warehouse-office-complex', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'MANAGEMENT_INVESTMENT', 'Cyberjaya, Selangor', 'Cyberview Development', 'Comprehensive sub-contract works including structural frame plastering, brick facade, and industrial skim coating.', 'Industrial Grade External Wall Plastering, Fire-Rated Brick Wall Assembly, High-Ceiling Wall Surface Preparation, Weatherproof Exterior Coatings', NULL, NULL, 'UPCOMING', 0, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', 'PUBLISHED', 1, '2026-09-10 06:54:08.863', '2026-09-10 06:54:08.863', 'Currently 65% completed on track, Utilizing modern mortar pump technology for high-speed application, Full compliance with Green Building Index (GBI) standards'),
('8e9b5741-5567-4d64-ab7a-ff5010e356af', 'Cyberjaya Tech Park Heavy Machinery Overhaul', 'cyberjaya-tech-park-heavy-machinery-overhaul', 'e599aae4-baf6-4f21-9f74-090e963b99e0', 'ENGINEERING_MACHINERY', 'Cyberjaya, Selangor', 'Cyberview Tech Logistics', 'Complete machinery maintenance, automated conveyor line installation, and industrial technical calibration.', 'Heavy Equipment Servicing, Hydraulic System Repair, Automation Line Assembly, Calibration Audits', '2023-11-04 00:00:00.000', NULL, 'ONGOING', 0, 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200', 'PUBLISHED', 1, '2026-09-10 07:02:01.404', '2026-09-10 07:02:01.404', 'Reduced factory downtime by 35%, Deployed specialized technical squad, Passed safety compliance checks'),
('9036aed3-a529-4126-8eb8-04e1966881b1', 'Corporate Executive Tour & International Delegation', 'corporate-executive-tour-international-delegation', 'a35603ab-b167-4a0f-9ba3-e9332cc3950d', 'TRAVEL_TOURISM', 'Kuala Lumpur, Malaysia', 'Southeast Asia Tech Forum', 'Complete end-to-end travel itinerary planning, VIP transport booking, accommodation, and guided local excursions.', 'Flight & Hotel Booking, VIP Chauffeur Logistics, Guided City Tours, Visa & Ticketing Support', '2022-06-24 00:00:00.000', '2026-09-02 00:00:00.000', 'COMPLETED', 1, 'https://i.pinimg.com/1200x/86/93/83/86938312c34c14da29dca7e2e703dd2f.jpg', 'PUBLISHED', 1, '2026-09-10 07:09:12.437', '2026-09-24 08:58:52.946', 'Managed travel arrangements for 150 international delegates, Achieved 100% positive feedback, Seamless transit coordination'),
('9c039a25-c55f-4c3e-9e52-d6ff59bfc0dc', 'Commercial Retail Hub Interior Surface Finishing', 'commercial-retail-hub-interior-surface-finishing', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'PLANTATION_AGRICULTURE', 'Bangsar South, Kuala Lumpur', 'UOA Group Main Contractor', 'High-precision internal skim coat and plastering works for a multi-level commercial shopping complex.', 'High-rise Interior Skim Coating, Acoustic Wall Plastering Solutions, Curved Wall Surface Smoothing, Final Painting Prep Work', '2024-02-13 00:00:00.000', '2026-01-01 00:00:00.000', 'COMPLETED', 0, 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200', 'PUBLISHED', 1, '2026-09-10 05:07:34.392', '2026-09-10 05:07:34.392', 'Flawless level-5 smooth wall finish, Night-shift operations to meet rapid client opening timelines, Zero material waste achievement'),
('9deff6d9-3859-4822-b2ea-f47faf7392a8', 'Taman Permai 150-Unit Affordable Housing', 'taman-permai-150-unit-affordable-housing', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'MANAGEMENT_INVESTMENT', 'Merlimau, Melaka', 'Rumah Mampu Milik Melaka Scheme', 'Government-backed affordable housing sub-contract covering brickwork, internal skim coat, and exterior render.', 'Mass Bricklaying Operations, Rapid-dry Internal Skim Coating, Exterior Protective Rendering, Perimeter Wall Masonry', '2023-07-22 00:00:00.000', '2025-02-12 00:00:00.000', 'ONGOING', 0, 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200', 'PUBLISHED', 2, '2026-09-09 08:00:31.882', '2026-09-09 08:00:31.882', 'Fast-track construction pipeline implemented, High quality finishes at cost-effective price point, Providing employment opportunities for local craftsmen'),
('ab1303fb-ad84-42ce-8603-f24eca4adfdc', 'Penang Supermarket Logistics & FMCG Distribution', 'penang-supermarket-logistics-fmcg-distribution', 'dd84d1a0-9e54-446d-8387-9a17b92979b4', 'RETAIL_TRADING', 'George Town, Penang', 'Northern Retail Network', 'Direct supply chain execution, wholesale product stocking, and inventory distribution across regional mini-markets.', 'Bulk Goods Import, Warehouse Stocking, Cold-chain Logistics, Supermarket Shelf Distribution', '2024-08-02 00:00:00.000', '2026-09-08 00:00:00.000', 'COMPLETED', 1, 'https://i.pinimg.com/1200x/b6/fb/19/b6fb196f676f080d17110550e4f06797.jpg', 'PUBLISHED', 1, '2026-09-10 07:05:56.651', '2026-09-24 09:00:36.259', 'On-time supply rate reached 99.2%, Expanded distribution network to 25 new retail points, Reduced waste by 12%\n\nGallery:'),
('bc53b576-c747-4dcb-9c22-a46eed941cb3', 'Kota Laksamana High-Rise Condominium', 'kota-laksamana-high-rise-condominium', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'PLANTATION_AGRICULTURE', 'Kota Laksamana, Melaka', 'Faithful Development Corp', 'Internal wall plastering and skim coat application across 24 floors of luxury sea-view apartments.', '24-Storey Internal Skim Coating,\n      Bathroom & Balcony Cement Rendering,\n      Lift Lobby Decorative Plastering,\n      Surface Cracking Remediation', '2025-12-08 00:00:00.000', '2026-02-03 00:00:00.000', 'COMPLETED', 0, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop', 'PUBLISHED', 1, '2026-09-08 12:53:53.907', '2026-09-08 12:53:53.907', 'Successfully completed 280 residential units,\n      Achieved QLASSIC rating above 80%,\n      Specialized anti-crack plaster technology applied');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` varchar(191) NOT NULL,
  `projectId` varchar(191) NOT NULL,
  `imageUrl` varchar(191) NOT NULL,
  `caption` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `projectId`, `imageUrl`, `caption`, `order`, `createdAt`) VALUES
('0a807cc2-f0f0-46a2-8fe6-87bfc69e05a3', 'ab1303fb-ad84-42ce-8603-f24eca4adfdc', 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800', NULL, 3, '2026-09-10 07:05:56.651'),
('285e620f-5180-4719-9ce9-dab4b2652a9a', 'bc53b576-c747-4dcb-9c22-a46eed941cb3', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', NULL, 3, '2026-09-08 12:53:53.907'),
('2db32e09-225d-4724-967a-ca6a14880f37', '2e7a1517-3cfb-4e6f-a750-644133949e72', 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=800', NULL, 2, '2026-09-10 06:59:44.344'),
('3f4449cf-3a7d-4806-a71f-8675bbd800e0', '89f76bd2-941e-4d40-a940-86effa61218d', 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800', NULL, 3, '2026-09-10 06:54:08.863'),
('466b1c5b-602d-49f3-9a9c-b2192240e0e5', '637c9291-dffd-4b0c-98ae-a1a109016a70', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800', NULL, 3, '2026-09-10 06:51:18.766'),
('4a9e8c09-86c2-48c9-b2ba-d60e04dc6060', '9deff6d9-3859-4822-b2ea-f47faf7392a8', 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800', NULL, 1, '2026-09-09 08:00:31.882'),
('559f4a99-584a-49d9-8610-f08276579820', 'bc53b576-c747-4dcb-9c22-a46eed941cb3', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', NULL, 2, '2026-09-08 12:53:53.907'),
('62a4d631-b59e-4c42-8aae-f9546a4adee9', 'bc53b576-c747-4dcb-9c22-a46eed941cb3', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop', NULL, 1, '2026-09-08 12:53:53.907'),
('67ae7168-2ed3-4d9d-b986-2809bca09271', '71c3aa2f-f924-4dce-92dc-a0130c230926', 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800', NULL, 2, '2026-09-10 07:04:01.176'),
('6d59e61d-03d9-47bb-ace0-7edcbd6f04cb', '89f76bd2-941e-4d40-a940-86effa61218d', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800', NULL, 2, '2026-09-10 06:54:08.863'),
('74b8120a-8b20-4eaf-afe1-1540e4166800', '2e7a1517-3cfb-4e6f-a750-644133949e72', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800', NULL, 3, '2026-09-10 06:59:44.344'),
('7a73ed05-79b5-42bf-8db0-3d0538f2dde7', '71c3aa2f-f924-4dce-92dc-a0130c230926', 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800', NULL, 3, '2026-09-10 07:04:01.176'),
('7cf08928-bd29-4947-9505-88593e9cf8be', '8e9b5741-5567-4d64-ab7a-ff5010e356af', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800', NULL, 2, '2026-09-10 07:02:01.404'),
('84132a58-099f-4ef4-b5a2-4bf1437ffc8a', '5b86de64-0dfd-4f0e-8647-10bc28afa1d1', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800', NULL, 3, '2026-09-10 05:05:10.338'),
('8adca1b4-ff82-4bd4-8eb5-f9749a06bf4e', '9c039a25-c55f-4c3e-9e52-d6ff59bfc0dc', 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800', NULL, 2, '2026-09-10 05:07:34.392'),
('a35eb1da-1c87-4663-9ec6-cd3f9c162a56', '637c9291-dffd-4b0c-98ae-a1a109016a70', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800', NULL, 2, '2026-09-10 06:51:18.766'),
('a55e5fff-7c4b-4966-bf8b-caa942737273', '2e7a1517-3cfb-4e6f-a750-644133949e72', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800', NULL, 1, '2026-09-10 06:59:44.344'),
('aae626bc-83df-4384-adc5-740e0ce81bb4', '637c9291-dffd-4b0c-98ae-a1a109016a70', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800', NULL, 1, '2026-09-10 06:51:18.766'),
('ac36bc00-b3b2-42bd-9ffa-9971e626770e', '9c039a25-c55f-4c3e-9e52-d6ff59bfc0dc', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800', NULL, 1, '2026-09-10 05:07:34.392'),
('ae7359a1-7cf9-4144-88c8-14b94f0f6bd8', '71c3aa2f-f924-4dce-92dc-a0130c230926', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800', NULL, 1, '2026-09-10 07:04:01.176'),
('b16008e3-ae10-4c1a-a324-fb10c8728a5f', '8e9b5741-5567-4d64-ab7a-ff5010e356af', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800', NULL, 3, '2026-09-10 07:02:01.404'),
('b4d05403-42e4-4bc7-94d1-1f22b808b553', '5b86de64-0dfd-4f0e-8647-10bc28afa1d1', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800', NULL, 2, '2026-09-10 05:05:10.338'),
('b90b281b-f76c-4bb2-a6f2-b0879468509b', '9036aed3-a529-4126-8eb8-04e1966881b1', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800', NULL, 1, '2026-09-10 07:09:12.437'),
('bc4d3226-3d9e-4ec1-92a5-1ba1687d8b87', '5b86de64-0dfd-4f0e-8647-10bc28afa1d1', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800', NULL, 1, '2026-09-10 05:05:10.338'),
('bcc12e3a-9eef-4380-b48d-8e90ad142121', '8e9b5741-5567-4d64-ab7a-ff5010e356af', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800', NULL, 1, '2026-09-10 07:02:01.404'),
('bcdb5d9f-a5ee-4c9c-bb5e-8237f4cb12c4', '9036aed3-a529-4126-8eb8-04e1966881b1', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800', NULL, 2, '2026-09-10 07:09:12.437'),
('c40d5db4-e945-4341-a0d4-c841f8960f5a', '9c039a25-c55f-4c3e-9e52-d6ff59bfc0dc', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800', NULL, 3, '2026-09-10 05:07:34.392'),
('cd106650-8bf7-4e36-9e59-a5ab02bad299', 'ab1303fb-ad84-42ce-8603-f24eca4adfdc', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800', NULL, 1, '2026-09-10 07:05:56.651'),
('ce993dc3-d6bf-4503-ad16-c30a80622744', '9deff6d9-3859-4822-b2ea-f47faf7392a8', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800', NULL, 2, '2026-09-09 08:00:31.882'),
('dd589be0-b5da-49d6-af5e-31686dc31afc', '9deff6d9-3859-4822-b2ea-f47faf7392a8', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800', NULL, 3, '2026-09-09 08:00:31.882'),
('e30fd89e-ba2c-4205-8ea0-ea69c7d0b5cb', '9036aed3-a529-4126-8eb8-04e1966881b1', 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800', NULL, 3, '2026-09-10 07:09:12.437'),
('ed797d38-7c9f-446c-bb50-b006368bfb65', '89f76bd2-941e-4d40-a940-86effa61218d', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800', NULL, 1, '2026-09-10 06:54:08.863'),
('eda6a844-e2ea-49b4-afbd-2649ffa81095', 'ab1303fb-ad84-42ce-8603-f24eca4adfdc', 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800', NULL, 2, '2026-09-10 07:05:56.651');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` varchar(191) NOT NULL,
  `companyId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `displayOrder` int(11) NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `companyId`, `title`, `slug`, `description`, `icon`, `image`, `displayOrder`, `isActive`, `createdAt`, `updatedAt`) VALUES
('11d8f02b-a689-4cc6-ad77-bbe1e7b4d895', 'f2786b17-d66b-42bf-ac81-c1e30749058f', 'Workforce Solutions', 'workforce-solutions', 'Trained agricultural workforce deployment for high-efficiency estate operations.', 'users', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600', 4, 1, '2026-09-09 07:30:57.012', '2026-09-09 07:30:57.012'),
('1eef2084-ede0-4d54-bd39-bae9c98b5c9f', 'e599aae4-baf6-4f21-9f74-090e963b99e0', 'Machinery Services', 'machinery-services', 'Heavy machinery deployment, setup, and preventive operational maintenance.', 'cog', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600', 1, 1, '2026-09-09 07:25:25.725', '2026-09-09 07:25:50.297'),
('20041c20-5757-4417-853c-72f46061cf7f', 'a35603ab-b167-4a0f-9ba3-e9332cc3950d', 'Tour Packages', 'tour-packages', 'Custom vacation packages and guided tours across worldwide destinations.', 'globe', 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=600', 3, 1, '2026-09-09 07:36:56.370', '2026-09-09 07:36:56.370'),
('288abccf-dbf5-4f48-ae03-bc3778e3f7fc', 'f2786b17-d66b-42bf-ac81-c1e30749058f', 'Agriculture Operations', 'agriculture-operations', 'Modern crop cultivation and agricultural site execution strategies.', 'sun', 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=600', 2, 1, '2026-09-09 07:29:42.028', '2026-09-09 07:29:42.028'),
('31a8bc9b-545a-4aca-8c9c-c4e9311ca897', 'e599aae4-baf6-4f21-9f74-090e963b99e0', 'Engineering', 'engineering', 'Technical engineering solutions designed for complex industrial applications and infrastructure.', 'cpu', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', 2, 1, '2026-09-09 07:26:35.316', '2026-09-09 07:26:35.316'),
('3ac17f7d-cc60-4922-85e1-ba24a3f45274', 'dd84d1a0-9e54-446d-8387-9a17b92979b4', 'Retail Distribution', 'retail-distribution', 'Multi-channel retail and logistics network supplying commercial markets.', 'truck', 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600', 4, 1, '2026-09-09 07:35:10.732', '2026-09-09 07:35:10.732'),
('48ccd580-f195-4626-ab75-268fefc704bc', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Facility / Site Services', 'facility-site-services', 'Comprehensive facility management and site support services to maintain operational integrity and asset health.', 'wrench', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd', 3, 1, '2026-09-09 05:22:38.168', '2026-09-09 05:22:38.168'),
('5e97d6c2-ad02-415b-b70f-e6f7996cc1e9', 'f2786b17-d66b-42bf-ac81-c1e30749058f', 'Plantation Management', 'plantation-management', 'Professional management of agricultural and plantation lands for sustainable yield.', 'tree', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600', 1, 1, '2026-09-09 07:28:52.316', '2026-09-09 07:28:52.316'),
('60cf044e-8da2-4d05-a1ba-3a3c404701f6', 'f2786b17-d66b-42bf-ac81-c1e30749058f', 'Field Operations', 'field-operations', 'On-ground supervision, harvesting management, and field logistic solutions.', 'map-pin', 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600', 3, 1, '2026-09-09 07:30:20.900', '2026-09-09 07:30:20.900'),
('65b242af-0523-4eae-a737-542292a2e420', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Project Based Service', 'project-based-service', 'Specialized end-to-end execution of short-term or contract-specific projects with strict quality and deadline management.', 'briefcase', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', 5, 1, '2026-09-09 05:24:06.383', '2026-09-09 05:24:06.383'),
('6c76c7e5-5489-4768-b2c4-9bed646eceb0', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Commercial Cleaning', 'commercial-cleaning', 'Customized corporate office and commercial building cleaning services maintaining high standards of workplace cleanliness.', 'building', 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6', 2, 1, '2026-09-09 05:21:58.097', '2026-09-09 05:21:58.097'),
('6e5de553-f11d-45da-92f2-8fa8849866e9', 'e599aae4-baf6-4f21-9f74-090e963b99e0', 'Industrial Support', 'industrial-support', 'Strategic operational and technical support tailored for industrial production lines.', 'shield-check', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600', 3, 1, '2026-09-09 07:27:22.140', '2026-09-09 07:27:22.140'),
('7a9e8c2b-7a3b-4380-bbbc-fc7c25bccb8c', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Cleaning Services', 'cleaning-services', 'Professional cleaning solutions tailored for commercial, residential, and industrial spaces to ensure a hygienic environment.', 'sparkler', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952', 1, 1, '2026-09-09 05:20:50.586', '2026-09-09 05:21:02.254'),
('82db8d49-ef3d-4eba-a81e-5dc3f2121c19', 'dd84d1a0-9e54-446d-8387-9a17b92979b4', 'Consumer Goods', 'consumer-goods', 'Wholesale supply and distribution of fast-moving consumer products.', 'package', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600', 3, 1, '2026-09-09 07:34:33.869', '2026-09-09 07:34:33.869'),
('9ec9fe33-b8c8-4095-9b6c-a879ae2c46ce', 'e599aae4-baf6-4f21-9f74-090e963b99e0', 'Technical Services', 'technical-services', 'Specialized technical troubleshooting, system repairs, and equipment calibration.', 'Wrench', 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600', 4, 1, '2026-09-09 07:28:08.468', '2026-09-09 07:28:08.468'),
('a8500f39-593e-4e23-affe-ea602dd5bfae', 'dd84d1a0-9e54-446d-8387-9a17b92979b4', 'Mini Market Operations', 'mini-market-operations', 'Convenient local retail stores providing everyday essential items and household goods.', 'store', 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600', 1, 1, '2026-09-09 07:32:30.045', '2026-09-09 07:32:30.045'),
('b33e5ef9-5df3-43f4-bd1a-7963f26fb5e2', 'a35603ab-b167-4a0f-9ba3-e9332cc3950d', 'Ticketing Services', 'ticketing-services', 'Domestic and international flight ticketing at competitive rates.', 'ticket', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600', 1, 1, '2026-09-09 07:35:45.668', '2026-09-09 07:35:45.668'),
('b4ff19ca-86a1-4090-aaae-304b5564ba28', 'dd84d1a0-9e54-446d-8387-9a17b92979b4', 'Grocery Services', 'grocery-services', 'Quality fresh produce and daily grocery distribution services.', 'shopping-bag', 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600', 2, 1, '2026-09-09 07:33:27.140', '2026-09-09 07:33:27.140'),
('b8a24711-6d7d-43e5-9111-78d9740a2301', '5d8237da-c2e9-44d3-9dab-92946f589a94', 'Operational Workforce', 'operational-workforce', 'Skilled and reliable manpower solutions provided for daily operational, administrative, and maintenance requirements.', 'users', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', 4, 1, '2026-09-09 05:23:21.137', '2026-09-09 05:23:21.137'),
('bd3a532a-35aa-49b8-9575-4fd23031d8fb', 'a35603ab-b167-4a0f-9ba3-e9332cc3950d', 'Travel Management', 'travel-management', 'Full-service corporate and individual trip planning and logistics management.', 'compass', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600', 2, 1, '2026-09-09 07:36:19.004', '2026-09-09 07:36:19.004'),
('efcf56ca-abcb-4c7e-ab7f-946cb9437d4c', 'b3afe20d-7d2e-475f-8471-e54cffed3c1b', 'Hotel & Booking', 'hotel-booking', 'Seamless accommodation reservations and local transportation bookings.', 'calendar', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600', 4, 1, '2026-09-09 07:37:30.172', '2026-09-09 07:37:30.172');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` varchar(191) NOT NULL,
  `key` varchar(191) NOT NULL,
  `value` text NOT NULL,
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `updatedAt`) VALUES
('09495434-dc0b-4205-9fc2-1abb27c40617', 'site.name', 'AM Management', '2026-09-22 11:11:09.765'),
('09afb9d2-c1b6-42ab-97a8-6b8056f09f52', 'social.facebook', 'https://share.google/KnPGp0L2yGsADQPpT', '2026-09-22 11:11:09.790'),
('1e37e753-fe83-4ca2-958b-db4ebbff84fd', 'social.twitter', '#', '2026-09-22 11:11:09.794'),
('27dcd41e-5d7c-4b9d-bbcb-a842171695d6', 'site.website_logo', 'https://i.ibb.co.com/ynmXSkWF/Am-logo.png', '2026-09-22 11:11:09.775'),
('402f0f3e-aacb-48aa-bf66-24f285ae8480', 'contact.whatsapp', '', '2026-09-22 11:11:09.786'),
('43463a11-5825-4682-b2c4-ed9d06ceef2f', 'seo.description', 'AM Management Group - Empowering growth through diversified operations in construction, engineering, plantation, retail, and travel services.', '2026-09-22 11:11:09.797'),
('57c97675-6a4f-4685-a7d8-4e687c6c118a', 'site.description', 'AM Management Group - Empowering growth through diversified operations in construction, engineering, plantation, retail, and travel services.', '2026-09-22 11:11:09.771'),
('729ff393-5c6f-40d5-8969-903f487a9af1', 'social.linkedin', 'https://www.linkedin.com', '2026-09-22 11:11:09.792'),
('8c72be42-ce1a-497f-bc4d-073be36a63ab', 'site.tagline', 'One group. Multiple Busness', '2026-09-22 11:11:09.769'),
('8e2bef1d-957b-43e0-9add-f7e4d2be320c', 'seo.title', 'AM Management,  info@ammanagement.com.my', '2026-09-22 11:11:09.795'),
('a62f8466-9d8e-4948-8083-7768d2565327', 'contact.phone', '+1 (234) 567-890', '2026-09-22 11:11:09.782'),
('c406d81d-4ab4-4737-8b8b-1059587feccc', 'contact.email', 'info@ammanagement.com.my', '2026-09-22 11:11:09.787'),
('c57a077e-2997-4c79-9587-7337b1a72408', 'site.hero_banner_mobile', '', '2026-09-22 11:11:09.778'),
('d5d573b5-7670-418b-b6dd-2f1705b54641', 'site.hero_banner_desktop', '', '2026-09-22 11:11:09.777'),
('e9a627bd-28a7-45a9-9d2c-57736d2f8dd3', 'site.business_hours', 'Monday - Friday: 8:30 AM - 5:30 PM\nSaturday: 8:30 AM - 1:00 PM', '2026-09-22 11:11:09.773'),
('eadb64fd-d5fd-45d9-a7ab-a506e1b05247', 'contact.address', 'Ayer Keroh, 75450 Melaka, Malaysia', '2026-09-22 11:11:09.789'),
('f9f463af-dc96-4b76-99d5-4538b2c02e85', 'social.instagram', '#', '2026-09-22 11:11:09.793');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `id` varchar(191) NOT NULL,
  `companyId` varchar(191) DEFAULT NULL,
  `platform` enum('FACEBOOK','INSTAGRAM','LINKEDIN','TIKTOK','YOUTUBE','TWITTER_X','WHATSAPP','OTHER') NOT NULL,
  `url` varchar(191) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `position` varchar(191) NOT NULL,
  `photo` varchar(191) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `companyId` varchar(191) DEFAULT NULL,
  `displayOrder` int(11) NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('ADMIN','USER') NOT NULL DEFAULT 'USER',
  `avatar` varchar(191) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `lastLoginAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `phone` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `avatar`, `isActive`, `lastLoginAt`, `createdAt`, `updatedAt`, `phone`) VALUES
('70e64315-d31c-46e4-b54b-fb82bb6ba114', 'Super Admin', 'admin@gmail.com', '$2b$10$DjRDiVfdCr9CSXcv91jrpuHTSgbiMxI7k9xCAQ/41ogIps93aa.26', 'ADMIN', NULL, 1, '2026-09-24 08:22:34.628', '2026-09-07 10:02:08.761', '2026-09-24 08:22:34.639', '01525555444');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1171a761-2eef-494d-b7d8-0b8051251877', '7dde0586f1bd2d0e7513f838d382bb4d9403481f33870bf74548f99e9d18d07a', '2026-09-06 09:24:33.786', '20260906092433', NULL, NULL, '2026-09-06 09:24:33.728', 1),
('3c8f9c04-2583-475b-ad6a-adfd4b177e78', 'b2f165e716212ae92fb816a91183a842a2122f291d926c97b113bc3c28bf74a0', '2026-09-06 09:26:53.381', '20260906092653', NULL, NULL, '2026-09-06 09:26:53.369', 1),
('66ef39a5-22df-4cbb-8587-2af0abb83eca', '4c19b17e2fd0056d52c85b79402770f1944519d3fcebaa15f378314ebc7cfb4a', '2026-09-08 12:47:35.536', '20260908133000_add_project_highlights', NULL, NULL, '2026-09-08 12:47:35.504', 1),
('7efadc87-f717-4344-bf43-3c7e2d3a3b40', '27a956f0127c5f6e617daaa009a07c2021e46c19e3c08e43be743d0633ad2378', '2026-09-06 09:20:23.522', '20260906092023', NULL, NULL, '2026-09-06 09:20:23.503', 1),
('b9b1c09c-d86a-4c4a-a729-4d121902a29d', '28ace3783d37eb269d33a04e8e384c1b8b45e931b3ca9564eff5001d1eb0365f', '2026-09-05 18:26:21.120', '20260905182620_init', NULL, NULL, '2026-09-05 18:26:20.354', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `applications_status_idx` (`status`),
  ADD KEY `applications_jobId_fkey` (`jobId`),
  ADD KEY `applications_preferredCompanyId_fkey` (`preferredCompanyId`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `companies_slug_key` (`slug`),
  ADD KEY `companies_category_idx` (`category`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gallery_category_idx` (`category`),
  ADD KEY `gallery_companyId_fkey` (`companyId`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jobs_slug_key` (`slug`),
  ADD KEY `jobs_companyId_isPublished_idx` (`companyId`,`isPublished`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `news_slug_key` (`slug`),
  ADD KEY `news_authorId_fkey` (`authorId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `projects_slug_key` (`slug`),
  ADD KEY `projects_category_status_idx` (`category`,`status`),
  ADD KEY `projects_companyId_fkey` (`companyId`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_images_projectId_fkey` (`projectId`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_companyId_slug_key` (`companyId`,`slug`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_key` (`key`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `social_links_companyId_fkey` (`companyId`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_members_companyId_fkey` (`companyId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `applications_preferredCompanyId_fkey` FOREIGN KEY (`preferredCompanyId`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `gallery_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_images`
--
ALTER TABLE `project_images`
  ADD CONSTRAINT `project_images_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `social_links`
--
ALTER TABLE `social_links`
  ADD CONSTRAINT `social_links_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `team_members`
--
ALTER TABLE `team_members`
  ADD CONSTRAINT `team_members_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
