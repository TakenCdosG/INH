
<div id="contenedor-show-shopping" class="column" >
   <div id="content-shopping-left"  style="width: 640px;">
      
		<div class="internal">
		  <h2 style='margin-bottom:19px;line-height: 52px;' <?php print $title_attributes; ?>><?php print $title; ?></h2>
		  
		
		  <div class="content"<?php print $content_attributes; ?>>
				<div><?php   print $node->field_address_nightlife['und'][0]['value']; ?> </div>
				<div><?php   print "New Haven, CT "; ?> </div>
				<div><?php   print $node->field_phone_nightlife ['und'][0]['value']; ?> </div>
				<div><?php   print $node->field_website_nightlife['und'][0]['value']; ?> </div>
				
					<div style="position:relative; width: 297px; min-height: 19px; margin-top:10px;">
                     <div class="details_socials">
					  <?php 
						  $url_new_facebook=get_clear_link_social($node->field_facebook_nightlife ['und'][0]['value'],'facebook');
						  $url_new_twitter=get_clear_link_social($node->field_twitter_nightlife ['und'][0]['value'],'twitter');
							
						  if (count($node->field_facebook_nightlife)) {
							print "<div class='social-show'><a href='" . $url_new_facebook . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/facebook.png' alt='Facebook' title='Facebook' width='17px' height='19px'/></a></div>";
						  }
						  if (count($node->field_twitter_nightlife)) {
							print "<div class='social-show'><a href='" . $url_new_twitter . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/twitter.png' alt='Twitter' title='Twitter' width='17px' height='19px'/></a></div>";
						  }
					
						?>
					 </div>
				</div>
				
				
		  </div>
		</div>
	  
  </div>
  
   <div id="content-shopping-right"  style="width: 312px;">
      
		<div class="region region-sidebar-right">
		   <div class="widget">
			  <div class="content">
				<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/culture-listing"> <span class="icon"> <img src="/sites/default/files/arts_0.png" alt="Culture" width="37" height="38"></span> Culture </a></div></div></div></div>  </div>
			</div>
			
		    <div class="widget">
		      <div class="content">
			    <div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/dining-listing"> <span class="icon"> <img src="/sites/default/files/dining_0.png" alt="Dining" width="38" height="50"></span> Dining </a></div></div></div></div>  </div>
		    </div>
			
			<div class="widget">
			  <div class="content">
				<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><div><a class="bucket" href="/shopping-listing"> <span class="icon"> <img src="/sites/default/files/shopping_0.png" alt="Shopping" width="33" height="38"></span> Shopping </a></div></div></div></div>  </div>
			</div>
        </div>
      
  </div>
  
  
  
  
  
  
  
     
</div>


	
