<div class="details_socials">
<?php
    $url_new_facebook=get_clear_link_social($row->field_field_facebook_nightlife[0]['raw']['value'],'facebook');
	 $url_new_twitter=get_clear_link_social($row->field_field_twitter_nightlife[0]['raw']['value'],'twitter');
	     if (count($row->field_field_facebook_nightlife[0]['raw']['value'])) {
			print "<div class='social-show'><a href='" . $url_new_facebook . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/facebook.png' alt='Facebook' title='Facebook' width='17px' height='19px'/></a></div>";
		  }
		   if (count($row->field_field_twitter_nightlife[0]['raw']['value'])) {
			print "<div class='social-show'><a href='" . $url_new_twitter . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/twitter.png' alt='twitter' title='twitter' width='17px' height='19px'/></a></div>";
		  }
?>
</div>
