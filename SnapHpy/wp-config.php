<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NGDFji;SL89bgn^V%oWLkMZ+ElFO>DzaN#T|3$+L~))5b!,A!:qo4a3;ujibyJ.8' );
define( 'SECURE_AUTH_KEY',  'tnWcA}3fgK6;A]~`u<5<#zsW{ozoK{BfEf`KuBC!Rn<_yAVGXh~mfl)_fA1T5ffv' );
define( 'LOGGED_IN_KEY',    'c7nb%4` <EvO2seb$CNO>3v#*wv1^;sym(p0qP=SVNh@SLgYV~VnjuW7#@ACC@7=' );
define( 'NONCE_KEY',        '!:teBk.eE`b[[2=k7y/A1D=y-8 41BRX4%G=]F.+kRR53RYibbv$bV+{N[CLxP[{' );
define( 'AUTH_SALT',        'q.1dxC HFlz4n<L$]9%yU4(L0=A}</VO|mb145hAA~2pU }?&-o+~R|A9),BSy<%' );
define( 'SECURE_AUTH_SALT', ' 7t6H4hCM/Q!Zp!.DWN2lEM)vc`81!_0C|h[]38|]p:*NID~.&pWh}9X90~<Cu9o' );
define( 'LOGGED_IN_SALT',   'wY5JZ.b2!n[sK;`Y}rg&BkG)LD:7H n3hq}HRYZ&2Ze}E{SE05V20fGvm,b1(d,d' );
define( 'NONCE_SALT',       'S4lMoi(.E^^i<2X=QW;l[baG&^ZAF,Hm(w/<CB3=025 _9E%ML>0k*):|L*Dih[L' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
