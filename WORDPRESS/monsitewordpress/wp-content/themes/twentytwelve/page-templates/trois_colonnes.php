<?php
/**
 * Template Name: modele trois colonnes : deux régions
 *
 * Description: Twenty Twelve loves the no-sidebar look as much as
 * you do. Use this page template to remove the sidebar from any page.
 *
 * Tip: to remove the sidebar from all posts and pages simply remove
 * any active widgets from the Main Sidebar area, and the sidebar will
 * disappear everywhere.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

<div id="conteneur-modele-trois-colonnes">
	<div id=" milieu-gauche">
		<?php dynamic_siderbar("region_milieu_gauche"); ?>
	</div>
	<div id="primary" class="site-content modele-trois-colonnes">
		<div id="content" role="main">
		
			<?php
			while (have _posts() ) :
				the_post();
			?>
				<?php get_template_part( 'content', 'page'); ?>
				<?php comment_template( '', true); ?>
			<?php endwhile;?>
			
		</div>
	</div>
	<div id="milieu-droite">
		<?php get_sidebar(); ?>
	</div>
</div>
<?php get_footer(); ?>