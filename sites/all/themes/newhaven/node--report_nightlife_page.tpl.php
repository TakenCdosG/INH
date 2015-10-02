
<div id="report_wrapper">

  <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  <div class="content">
	  <?php
		print $node->body["und"][0]["safe_value"];
		print views_embed_view("report_nightlife", "page",$_GET['s']);
		?>

  </div>
</div>

 
  