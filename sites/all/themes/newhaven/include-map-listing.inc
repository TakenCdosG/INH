<?php  $randon = rand(); ?>
<div id="<?php print "container_map_div".$randon ?>" class="general_map">
    <div class="container_map_div_link">
	    <div style="float:left;position:relative;width:195px;height:41px;">
		    <div class="span_link"><a href="#">
Click here to hide parking</a></div>
			<div class="span_text_zoom"><a href="#">Zoom out to view parking locations in close proximity</a></div>	
		</div>
		<div style="float:left;position:relative;width:48px;height:41px;">
		     <span class="details_logo_drupal">&nbsp;</span>
		</div>
	
	</div>
		
  
  <div class="container_map" id="<?php print "container_map".$randon ?>">

		<?php

		if(isset($row->field_field_street_address[0]["rendered"]["#markup"])){
			$street = $row->field_field_street_address[0]["rendered"]["#markup"];
		}else{
			$street = "";
		}

		 $city = 'New Haven, CT';
		 $node_zip=node_load($row->nid);
		 $zip = $node_zip->field_zip_code['und'][0]['value'];
		 
		 //$node_title=str_replace("'","",$row->node_title);
		 
		 $node_title=$row->node_title;
		 
		 ?>
	 
	 
	    <div name="<?php  print "div_map_items".$randon; ?>"  id="<?php  print "div_map_items".$randon; ?>" value="<?php  print $randon ?>" >
		 <?php 
		 $array_parking = array();
		 $array_parking = $_SESSION["array_parking"];
		
		    foreach ($array_parking as $valor =>$val) {
					$node_parking = node_load($valor); ?>
		    <div name="<?php print "node_reference_map_".$valor?>" class="items-div-places"  id="<?php print "node_reference_map_".$valor ?>" latitude="<?php if(isset($node_parking->location["latitude"])){print $node_parking->location["latitude"];} ?>" longitude="<?php if(isset($node_parking->location["longitude"])){ print $node_parking->location["longitude"];} ?>"  name_parking="<?php print $node_parking->title  ?>" street_parking='<?php if(isset($node_parking->field_parking_address["und"][0]["value"])){ print $node_parking->field_parking_address["und"][0]["value"]; }?>' field_parking_hours='<?php if(isset($node_parking->field_parking_hours["und"][0]["value"])){print $node_parking->field_parking_hours["und"][0]["value"];} ?>' tel_parking='<?php if(isset($node_parking->field_parking_tel["und"][0]["value"])){print $node_parking->field_parking_tel["und"][0]["value"];} ?>'  website_parking='<?php if(isset($node_parking->field_parking_website["und"][0]["value"])){print $node_parking->field_parking_website["und"][0]["value"];} ?>' >
			</div>   
		
		<?php } ?>
   
       </div>
	   
	 <input type="hidden" name="rand_map" id="rand_map" value="<?php  print $randon ?>">
     
	 <div id="<?php print $randon ?>" style="width: 100%; height: 100%;" class="divs-map" street="<?php print $street ?>" city="<?php print $city ?>" zip="<?php print $zip ?>" init="false" title="<?php print $node_title ?>" > </div> 
  
    
   </div>
   
  
   
</div>