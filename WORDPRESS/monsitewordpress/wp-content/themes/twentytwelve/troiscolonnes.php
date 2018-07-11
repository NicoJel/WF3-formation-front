<?php
get_header(): ?>
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