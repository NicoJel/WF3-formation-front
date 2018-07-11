<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'monsitewordpress2');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U@<q$y<xNQox+vM,6x?;<],]D&k?)!rR#{jX=-S]B(a76M$=ir_Q/NPmw2^CPfeB');
define('SECURE_AUTH_KEY',  'JjtN4egTFb;%z>?)V$e}aUI)Pur{.dZ7DC^S;>x{ W)c=Po69//Y%c5<>LF9w}|>');
define('LOGGED_IN_KEY',    'L8JzPCI|<wz$T^8:#7q8j)dV?mXB:?hj_YeXRWWk$Z4 /H`KfmLTFil9TRYo_HV,');
define('NONCE_KEY',        '1(=S.rGXoj)Dx4Q LgL9Perq#4GpYOH[brDj@dgRgfe-A=P#N#)N}#Kq;=0|8k+c');
define('AUTH_SALT',        '{KCCIBOTPV$c#o $q5DgGMF@3`dT_q%wcSWv,W;rE;~&:<s* 6KJRqJ-$i3Gm#q2');
define('SECURE_AUTH_SALT', 'DPI.Q7[:q_Z+S$B1Nvb)E;t7Wz{&K@5W-xquXlKCN^e5d>doIX 2}a|-f@8Uyt.s');
define('LOGGED_IN_SALT',   ')Ci&K85NR)(bG1f~Y1Uqr^k{=X#*Ocg[GU;1&Fc%fh:CQb:83yF4UK$row)L|]#f');
define('NONCE_SALT',       'cCbe9AHGV$Sz=NpAD5{/ts>rASM?08 m6%CQBG&.<>cH+5]!`}p@!K4`p5M.{]?s');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'mswp2_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');