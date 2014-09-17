
<div id="report_wrapper">

  <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  <div class="content">
	  <?php
		print $node->body["und"][0]["safe_value"];
		print views_embed_view("report_nightlife", "page",$_GET['s']); 
		?>

  </div>
</div>
<div id="content-menu-right-internal"  style="float:left;">
	<div id="content-shopping-right"  style="width: 265px;margin-top:20px;">
		  
		<div class="region region-sidebar-right">
			<div class="widget" style="height: 77px;">

		  <div class="content">
			<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/culture-listing"> <span class="icon"> <img src="/sites/default/files/arts_0.png" alt="Culture" width="37" height="38"></span> Culture </a></div></div></div></div>  </div>

		</div>
		<div class="widget" style="height: 77px;">

		  <div class="content">
			<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/dining-listing"> <span class="icon"> <img src="/sites/default/files/dining_0.png" alt="Dining" width="38" height="50"></span> Dining </a></div></div></div></div>  </div>

		</div>
		<div class="widget" style="height: 77px;">

		  <div class="content">
			<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/shopping-listing"> <span class="icon"> <img src="/sites/default/files/shopping_0.png" alt="Shopping" width="33" height="38"></span> Shopping </a></div></div></div></div>  </div>

		</div>
	   </div>
		  
	</div>
</div>
 
  