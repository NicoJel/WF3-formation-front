/**
 * Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Customizer preview reload changes asynchronously.
 * Things like site title, description, and background color changes.
 */

( function( $ ) {
		//
		// Description: Randomly change background color every 5 seconds
		//
		
		/*function setbackground()
		{
		window.setTimeout( "setbackground()", 500); // 500 milliseconds delay

		var index = Math.round(Math.random() * 9);

		var ColorValue = "FFFFFF"; // default color - white (index = 0)

		if(index == 1)
		ColorValue = "FFCCCC"; //peach
		if(index == 2)
		ColorValue = "CCAFFF"; //violet
		if(index == 3)
		ColorValue = "A6BEFF"; //lt blue
		if(index == 4)
		ColorValue = "99FFFF"; //cyan
		if(index == 5)
		ColorValue = "D5CCBB"; //tan
		if(index == 6)
		ColorValue = "99FF99"; //lt green
		if(index == 7)
		ColorValue = "FFFF99"; //lt yellow
		if(index == 8)
		ColorValue = "FFCC99"; //lt orange
		if(index == 9)
		ColorValue = "CCCCCC"; //lt grey

		document.getElementsByTagName("article")[0].style.backgroundColor = "#" + ColorValue;
			<article onload="setbackground();">
}*/


	
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-title a, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-title a, .site-description' ).css( {
					'clip': 'auto',
					'color': to,
					'position': 'relative'
				} );
			}
		} );
	} );

	// Hook into background color/image change and adjust body class value as needed.
	wp.customize( 'background_color', function( value ) {
		value.bind( function( to ) {
			var body = $( 'body' );

			if ( ( '#ffffff' == to || '#fff' == to ) && 'none' == body.css( 'background-image' ) )
				body.addClass( 'custom-background-white' );
			else if ( '' == to && 'none' == body.css( 'background-image' ) )
				body.addClass( 'custom-background-empty' );
			else
				body.removeClass( 'custom-background-empty custom-background-white' );
		} );
	} );
	wp.customize( 'background_image', function( value ) {
		value.bind( function( to ) {
			var body = $( 'body' );

			if ( '' !== to ) {
				body.removeClass( 'custom-background-empty custom-background-white' );
			} else if ( 'rgb(255, 255, 255)' === body.css( 'background-color' ) ) {
				body.addClass( 'custom-background-white' );
			} else if ( 'rgb(230, 230, 230)' === body.css( 'background-color' ) && '' === wp.customize.instance( 'background_color' ).get() ) {
				body.addClass( 'custom-background-empty' );
			}
		} );
	} );
} )( jQuery );
