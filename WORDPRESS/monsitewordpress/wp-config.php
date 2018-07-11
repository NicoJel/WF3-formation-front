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
define('DB_NAME', 'monsitewordpress');

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
define('AUTH_KEY',         'McF7UV=sa^^J3g{X#UG3UkpIgA^9fe>SpDeI02bJkZoG~XhK#TSN}QhOuNVNoCcZ');
define('SECURE_AUTH_KEY',  'g0>HoCy@,>aaPZ($P,0[XRP3_#<p)a-O sCsx{zM%(!s.UJ-m6gYNFO05_25SPak');
define('LOGGED_IN_KEY',    '?T*@akq!S3=nyiaUNWD!*:S&vmCQKY%]),uVS)1Vy52oXR3%-4m{VI?|}qbF(ZhX');
define('NONCE_KEY',        '.L4y{{1IhJtN?Z14;qp`5wke}O0 6]fY.<=,#yicbn8As0}mUyD >pu%GFG|e$NG');
define('AUTH_SALT',        'OKRk[WJ%U%Rc0M5]lRu:[YA|<|E(kLO9m:mOjr>ykHXq&Rb[}0zkU&hVu&5}qAh<');
define('SECURE_AUTH_SALT', '}4nY M,=X~rU`P6B11@Sb88z?s_iPum6-8x_4+Q/wzhN+VgigaXz7h|qUn<3Lh$!');
define('LOGGED_IN_SALT',   'U[0SoR>-bf.h0b%_xOL4<vOC`vGC-|*Xw}O<@O0:W!4)F(BZIQo}SN_0W38mfP*>');
define('NONCE_SALT',       '.|9V5Y{E$!>ka~%CTTi+.u))t}mM8KE&|e3rCkM;qx~?84YGy+?1:shrmEJ<WjB;');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'mswp_';

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