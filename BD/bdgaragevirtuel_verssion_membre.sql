-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 30 avr. 2018 à 20:43
-- Version du serveur :  5.7.17
-- Version de PHP :  7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bdgaragevirtuel`
--
CREATE DATABASE IF NOT EXISTS `bdgaragevirtuel` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdgaragevirtuel`;

-- --------------------------------------------------------

--
-- Structure de la table `abonnements`
--

CREATE TABLE `abonnements` (
  `idAbonnement` int(8) NOT NULL,
  `typeAbonnement` varchar(8) CHARACTER SET latin1 NOT NULL,
  `prix` decimal(2,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `adresses`
--

CREATE TABLE `adresses` (
  `idAdresse` int(11) NOT NULL,
  `idMembre` int(11) DEFAULT NULL,
  `numeroCivique` int(11) DEFAULT NULL,
  `nomRue` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ville` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `codePostal` char(7) COLLATE utf8_unicode_ci DEFAULT NULL,
  `region` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `latitude` decimal(18,9) DEFAULT NULL,
  `longitude` decimal(18,9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `adresses`
--


-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `idCategorie` int(8) NOT NULL,
  `description` varchar(100) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`idCategorie`, `description`) VALUES
(1, 'Accessoires Informatiques'),
(2, 'Appareils electromenagers'),
(3, 'Appareils photo et cameras'),
(4, 'Art et objet de collection'),
(5, 'Articles pour bebes'),
(6, 'Articles de sport et exercice'),
(7, 'Autre'),
(8, 'Bijoux et montres'),
(9, 'Equipements electroniques'),
(10, 'Instruments de musique'),
(11, 'Objets gratuits'),
(12, 'Sante et besoins speciaux'),
(13, 'Souliers'),
(14, 'velos'),
(15, 'vetements');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `idMessages` int(11) NOT NULL,
  `idMembre` int(11) DEFAULT NULL,
  `idEnvoyeur` int(11) DEFAULT NULL,
  `sujet` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `messages` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `dateMessages` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `messages`
--

-- --------------------------------------------------------

--
-- Structure de la table `evenements`
--

CREATE TABLE `evenements` (
  `idEvenement` int(8) NOT NULL,
  `titreEvenement` varchar(150) CHARACTER SET latin1 NOT NULL,
  `description` varchar(255) CHARACTER SET latin1 NOT NULL,
  `idAdresse` int(8) NOT NULL,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `idMembre` int(4) NOT NULL,
  `prenom` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nom` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telephone` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dateNaissance` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sexe` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photoMembre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `courriel` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `motPasse` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `statut` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `dateInscription` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `membres`
--

-- --------------------------------------------------------

--
-- Structure de la table `photoproduits`
--

CREATE TABLE `photoproduits` (
  `idPhoto` int(8) NOT NULL,
  `idProduit` int(8) NOT NULL,
  `idEvenement` int(8) NOT NULL,
  `photoProd` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `idProduit` int(8) NOT NULL,
  `nomProduit` varchar(50) CHARACTER SET latin1 NOT NULL,
  `description` varchar(255) CHARACTER SET latin1 NOT NULL,
  `quantite` int(5) NOT NULL,
  `idCategorie` int(8) NOT NULL,
  `idMembre` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vendeurs`
--

CREATE TABLE `vendeurs` (
  `idMembre` int(8) NOT NULL,
  `idAbonnement` int(8) NOT NULL,
  `idAdresse` int(8) NOT NULL,
  `idEvenement` int(8) NOT NULL,
  `idProduit` int(8) NOT NULL,
  `actif` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD PRIMARY KEY (`idAbonnement`);

--
-- Index pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`idAdresse`),
  ADD KEY `adresses_ibfk_2` (`idMembre`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategorie`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD UNIQUE KEY `idMessages` (`idMessages`),
  ADD KEY `messages_ibfk_` (`idMembre`);

--
-- Index pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD PRIMARY KEY (`idEvenement`),
  ADD KEY `Evenements_FK` (`idAdresse`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idMembre`);

--
-- Index pour la table `photoproduits`
--
ALTER TABLE `photoproduits`
  ADD PRIMARY KEY (`idPhoto`),
  ADD KEY `PhotoProduits_FK_idProduit` (`idProduit`),
  ADD KEY `PhotoProduits_FK_idEvenement` (`idEvenement`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`idProduit`),
  ADD KEY `Produits_FK_idVendeur` (`idMembre`),
  ADD KEY `Produits_FK_idCategorie` (`idCategorie`);

--
-- Index pour la table `vendeurs`
--
ALTER TABLE `vendeurs`
  ADD KEY `Vendeurs_FK_idMembre` (`idMembre`),
  ADD KEY `Vendeurs_FK_idAbonnement` (`idAbonnement`),
  ADD KEY `Vendeurs_FK_idEvenement` (`idEvenement`),
  ADD KEY `Vendeurs_FK_idProduit` (`idProduit`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `abonnements`
--
ALTER TABLE `abonnements`
  MODIFY `idAbonnement` int(8) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `adresses`
--
ALTER TABLE `adresses`
  MODIFY `idAdresse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategorie` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `evenements`
--
ALTER TABLE `evenements`
  MODIFY `idEvenement` int(8) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `idMembre` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `messages`
MODIFY `idMessages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
--
-- AUTO_INCREMENT pour la table `photoproduits`
--
ALTER TABLE `photoproduits`
  MODIFY `idPhoto` int(8) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `idProduit` int(8) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `vendeurs`
--
ALTER TABLE `vendeurs`
  MODIFY `idMembre` int(8) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD CONSTRAINT `adresses_ibfk_2` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`idMembre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`idMembre`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

