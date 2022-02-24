-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: festiworld
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` bigint unsigned NOT NULL,
  `reported` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_post_id_foreign` (`post_id`),
  CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2022_02_07_090151_create_posts_table',1),(6,'2022_02_07_090503_add_admin_column_to_users_table',1),(7,'2022_02_07_103431_create_comments_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',21,'auth_token','6c8c09ebb1adb2dd42d9f131dd66ac57440a2bf9a2b6b4b95244dde58ca27f07','[\"*\"]',NULL,'2022-02-09 12:11:15','2022-02-09 12:11:15'),(2,'App\\Models\\User',21,'auth_token','97d6ede745610c725d142e38ff5b589bbf1aab24943efcc160b0fd33be441993','[\"*\"]',NULL,'2022-02-09 13:19:56','2022-02-09 13:19:56');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artists` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_user_id_foreign` (`user_id`),
  CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'Repellendus explicabo praesentium ut est.','Fugiat beatae consectetur architecto ut quis nemo vero. Expedita consequatur repellat qui culpa voluptates cum. Et qui nostrum fuga pariatur et reiciendis excepturi. Dolor sed velit omnis magni.','New Hampshire','qui',NULL,NULL,'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080','2022-02-09 09:27:21','2022-02-09 09:27:21'),(2,1,'Reiciendis eum sit perspiciatis praesentium.','Nostrum in sit veniam cumque libero quia. Beatae aut voluptates esse dolores nobis non. Voluptate omnis quibusdam voluptatem officia.','West Virginia','voluptate',NULL,NULL,'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080','2022-02-09 09:27:21','2022-02-09 09:27:21'),(3,1,'Alias dicta quo ipsum ipsa non et.','Asperiores illo voluptatem aperiam. Iste sint officia nesciunt consequatur earum veniam ea. Molestiae minima modi eius accusantium error. Iusto officiis similique cupiditate.','Alaska','et',NULL,NULL,'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080','2022-02-09 09:27:21','2022-02-09 09:27:21'),(4,1,'Corporis et aut in omnis facere modi ea.','Vel cum numquam est ipsam est perspiciatis. Occaecati accusamus aut dolorem autem. Dolorem aut pariatur expedita. Omnis molestiae modi necessitatibus ipsa aliquid nulla iste.','Idaho','voluptatem',NULL,NULL,'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080','2022-02-09 09:27:21','2022-02-09 09:27:21'),(5,1,'Et consectetur dolores exercitationem ipsam.','Distinctio ut excepturi occaecati id eum aut repellendus doloremque. Iure iusto rerum voluptates labore eum quis et consequuntur. Sit quae quod dolorum et accusantium omnis consequatur libero. Est molestiae deserunt autem ut voluptas.','Montana','ullam',NULL,NULL,'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080','2022-02-09 09:27:21','2022-02-09 09:27:21');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Arvid Muller','ydooley@example.net','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','8Ayld1vCMP','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(2,'Miss Alexane Greenfelder DDS','brannon14@example.net','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','NjhNnliOgu','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(3,'Kelsi Sporer','csauer@example.org','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Sf88HwN7oE','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(4,'Orval Gottlieb IV','weimann.anderson@example.org','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','5HFUsRlQOn','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(5,'Mohamed Beahan','sheldon86@example.org','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','58rOwaqMFB','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(6,'Sid Greenholt','tom98@example.com','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','sSFgTLOyS0','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(7,'Mina Lueilwitz','earnest.muller@example.com','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','QdQhuOpMjd','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(8,'Schuyler Denesik','zbeier@example.org','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','0GBZQXLzMW','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(9,'Mrs. Burnice Wiza','hrunolfsson@example.org','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','A9GH5o3r1K','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(10,'Mrs. Mabel Adams Jr.','shyann18@example.com','2022-02-09 09:25:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','W1Gkpz53XN','2022-02-09 09:25:49','2022-02-09 09:25:49',0),(11,'Ms. Nayeli Hoeger I','idenesik@example.net','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','9TEmZ9F5EX','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(12,'Elijah Macejkovic','jenkins.amya@example.org','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','InxIwiJMgA','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(13,'Prof. Francisca Dicki','rita32@example.com','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','X3Qfmtyz8p','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(14,'Mauricio McKenzie','okey.koch@example.com','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','dSpIpDz4yd','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(15,'Judy Halvorson PhD','althea.johns@example.org','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Fd1WvBupxA','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(16,'Felicity Schumm','hudson.madilyn@example.com','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','N02gYK34su','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(17,'Cordie Sawayn PhD','jasper.rogahn@example.com','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','uLpOKH8vUW','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(18,'Asia Bergnaum MD','lemke.elwin@example.net','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','HuiQJd3zaC','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(19,'Mrs. Fae Lang DDS','delphia51@example.org','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','ss7E6E6MB7','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(20,'Dr. Jamarcus Kilback','jakubowski.uriah@example.net','2022-02-09 09:27:21','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','3SUKdzkfwc','2022-02-09 09:27:21','2022-02-09 09:27:21',0),(21,'samir','admin@mail.com',NULL,'$2y$10$kC91zqLXj18M3N/9qSGys.B6mwztj6NIo/yv62avW0wO18eMi0RNm',NULL,'2022-02-09 12:11:15','2022-02-09 12:11:15',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-10 16:22:54
