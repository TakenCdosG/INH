<?php
    global $user;

    $all_fields_on_my_website = field_info_fields(); 
    if($node->type=='culture'){
	  $category = get_category_text($node->field_category,'tid',$all_fields_on_my_website,"field_category");
	  $offer_node = $node->field_culture_offer;
	  $offer_name="field_culture_offer";
	}
	if($node->type=='shopping'){
	  $category = get_category_text($node->field_shopping_category,'value',$all_fields_on_my_website,"field_shopping_category");
	  $offer_node = $node->field_shopping_offer;
	   $offer_name="field_shopping_offer";
	}
	if($node->type=='dining'){
	  $category = get_category_text($node->field_cuisine_term,'tid',$all_fields_on_my_website,"field_cuisine_term");
	  $offer_node = $node->field_dining_offer;
	  $offer_name="field_dining_offer";
	}
	
	
	
?>

<div id="contenedor-show-shopping" class="column" >
   <div id="content-shopping-left"  style="width: 640px;">
      
		<div class="internal">
		  <h2 style='margin-bottom:19px;line-height: 52px;' <?php print $title_attributes; ?>><?php print $title; ?></h2>

		   <?php if(cron_list_duplicates_items($title)>1 && $user->uid!=0){ ?>
		             <label><a href="/name-field-duplicates/<?php print $title; ?>">There are some duplicates to this item. CLICK HERE...</a></label>
		   <?php } ?>
		   
		  <?php  $category=str_replace("-"," ",$category); ?>
		  <div>   <p class="cuisine"><?php
                  if(!empty($node->field_new_category['und'][0]['value'])){
                      print $node->field_new_category['und'][0]['value'];
                  }else{print ucwords(strtolower($category));}

                  ?></p>  </div>
		 
		  
		  <div class="content"<?php print $content_attributes; ?>>
			
				<div><?php   print $node->body['und'][0]['value']; ?> </div><br>
				
				<div><?php   print $node->field_street_address['und'][0]['value']; ?> </div>
				
				<div><?php   print "New Haven, CT ".$node->field_zip_code['und'][0]['value']; ?> </div>
				
				<div><?php   print $node->field_phone['und'][0]['value']; ?> </div>
				
				<div><?php   print $node->field_website['und'][0]['value']; ?> </div>
				
				 
				
				<div style="position:relative; width: 297px; min-height: 19px; margin-top:10px;">
                     <div class="details_socials">
					  <?php 
						  $url_new_facebook=get_clear_link_social($node->field_facebook['und'][0]['value'],'facebook');
						  $url_new_twitter=get_clear_link_social($node->field_twitter['und'][0]['value'],'twitter');
						  $url_new_pinterest=get_clear_link_social($node->field_pinterest['und'][0]['value'],'pinterest');
						  $url_new_youtube=get_clear_link_social($node->field_youtube['und'][0]['value'],'youtube');
							
						  if (count($node->field_facebook)) {
							print "<div class='social-show'><a href='" . $url_new_facebook . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/facebook.png' alt='Facebook' title='Facebook' width='17px' height='19px'/></a></div>";
						  }
						  if (count($node->field_twitter)) {
							print "<div class='social-show'><a href='" . $url_new_twitter . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/twitter.png' alt='Twitter' title='Twitter' width='17px' height='19px'/></a></div>";
						  }
						  if (count($node->field_pinterest)) {
							print "<div class='social-show'><a href='". $url_new_pinterest. "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/pinterest.png' alt='Pinterest' title='Pinterest' width='17px' height='19px'/></a></div>";
						  }
						  if (count($node->field_youtube)) {
							print "<div class='social-show'><a href='" .$url_new_youtube. "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/youtube.png' alt='Youtube' title='Youtube'  width='17px' height='19px'/></a></div>";
						  } 
						  
						  if ($node->field_shops_at_yale_icon_['und'][0]['value']=="1") {
							print "<div class='social-show'><a href='http://theshopsatyale.com/' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/yale_logo.png' alt='The Shops at yale' title='The Shops at yale'  height='19px' /></a></div>";
						  }
						  
						?>
					 </div>
				</div><br>

                
				<?php if (count($offer_node)) {
				print "<div><strong>We Offer:</strong> ";
				$first = TRUE;
				foreach ($offer_node["und"] as $offer) {
				  $allowed_values_offer= list_allowed_values($all_fields_on_my_website[$offer_name]);
				  if ($first) {
					print $allowed_values_offer[$offer['value']];
					$first = FALSE;
				  }
				  else {
					print ", " . $allowed_values_offer[$offer['value']];  
				  }
				}
				print "</div>";
			  } ?>
				
				
			   <?php  if (count($node->field_neighborhood)) { 
			             $field_neighborhood= str_replace("-"," - ",$node->field_neighborhood['und'][0]['value']);
						 $allowed_values_field_neighborhood= list_allowed_values($all_fields_on_my_website["field_neighborhood"]);
			   ?>
                <div><b>Neighborhood:</b> <?php print $allowed_values_field_neighborhood[$node->field_neighborhood['und'][0]['value']]; ?>  </div> <br>		
               <?php } ?>  
              
          <?php
			  
			  
			if(is_array($node->field_days_and_meals_schedules) && count($node->field_days_and_meals_schedules)>0 ){
   
   
				 $groups = group_schedules_by_hours($node->field_days_and_meals_schedules);
	 
				  print '<div class="days_and_hours"><div class="item-list"><ul>';
				  
				  foreach($groups as $group_day => $group_hours){
				  
					$rest_coma = trim($group_hours[0]); 
					
						if($rest_coma==","){
							$group_hours = substr(trim($group_hours),1);
						} 
						  $rest = substr(trim($group_hours), -1);  
						  
						  if($rest==','){
							$rest= substr(trim($group_hours), 0, -1);
						  }else{
						   $rest=trim($group_hours);
						  }
					  
							if($rest==""){
								$group_day="";
							}else{
							  $group_day=$group_day.":";
							}				  
						  
					  print '<li>';
					  print '<span class="field-name-field-day-of-operation">';
					  print $group_day;
					  print '</span>';
					  print '<span class="field-name-field-hours-of-operation">';
					  print  ' '.$rest;
					  print '</span>';
					  print '</li>';
					  
					}
					  
				  print '</ul></div></div>';
	
           }else{
			  
				  $first_day = "";
				  $last_day = "";
				  $last_hour = "";
				  print '<div class="days_and_hours"><div class="item-list"><ul>';
				  foreach ($node->field_days_and_hours["und"]  as $key => $item) {
					
					$data=entity_load('field_collection_item', array($item["value"]));
					
					if ($last_hour == "") {
					
					 $last_hour = $data[$item["value"]]->field_hours_of_operation["und"][0]["value"];
					
					  $first_day = ucwords(substr($data[$item["value"]]->field_day_of_operation["und"][0]["value"], 0, 3));
					  $last_day = ucwords(substr($data[$item["value"]]->field_day_of_operation["und"][0]["value"], 0, 3));
					  print '<li>';
					  print '<span class="field-name-field-day-of-operation">';
					}
					else if ($last_hour == $data[$item["value"]]->field_hours_of_operation["und"][0]["value"]) {
					  $last_day = ucwords(substr($data[$item["value"]]->field_day_of_operation["und"][0]["value"], 0, 3));
					}
					else {
					  if ($first_day != $last_day) {
						print $first_day . '-' . $last_day;
					  }
					  else {
						print $last_day;
					  }
					  print ':</span>';
					  print '<span class="field-name-field-hours-of-operation">';
					  print ' '.$last_hour;
					  print '</span>';
					  print '</li>';
					  print '<li>';
					  print '<span class="field-name-field-day-of-operation">';
					  $first_day = ucwords(substr($data[$item["value"]]->field_day_of_operation["und"][0]["value"], 0, 3));
					  $last_day =  ucwords(substr($data[$item["value"]]->field_day_of_operation["und"][0]["value"], 0, 3));
					  $last_hour = $data[$item["value"]]->field_hours_of_operation["und"][0]["value"];
					}
				  }
		
				  if ($first_day != $last_day) {
					print $first_day . '-' . $last_day.":";
				  }
				  else {
					if($last_hour==""){
					 print "";
					}else{
					  print $last_day.":";
					}
				  }
				  print '</span>';
				  print '<span class="field-name-field-hours-of-operation">';
				  print ' '.$last_hour;
				  print '</span>';
				  print '</li>';
				  print '<li>';
				  print '</ul></div></div>';
		}
     ?>
                 				 
			      
				
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


<?php
   
function get_category_text($category_node,$type,$all_fields_on_my_website,$name_field){


$allowed_values= list_allowed_values($all_fields_on_my_website[$name_field]);

$category = "";
 if (count($category_node)) {
		$first = TRUE;
		foreach ($category_node["und"] as $category_array) {
			 if($type=="tid"){ 
					  $term= taxonomy_term_load($category_array['tid']);
					   if(is_object($term)) {
							 if ($first) {
								$category = $term->name;
								$first = FALSE;
							  }
							  else {
								$category = $category.", " . $term->name;
							  }
					   }
			   }else{
						  if ($first) {
							$val = $category_array['value'];
							$category = $allowed_values[$val];
							$first = FALSE;
						  }
						  else {
							$category = $category.", " . $allowed_values[$category_array['value']];
						  }
			   } 
		}
	  
	  } 
	  
  return $category;	  
} 
   
?>
	
