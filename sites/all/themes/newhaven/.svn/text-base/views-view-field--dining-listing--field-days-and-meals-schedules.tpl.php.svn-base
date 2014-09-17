<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php
  
 
 $node = node_load($row->nid);
  
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
			  foreach ($row->field_field_days_and_hours as $key => $item) {
			   
				$data = $item['rendered']['entity']['field_collection_item'][$item['raw']['value']];
				
				if ($last_hour == "") {
				  $last_hour = $data['field_hours_of_operation'][0]['#markup'];
				 
				  $first_day = substr($data['field_day_of_operation'][0]['#markup'], 0, 3);
				  $last_day = substr($data['field_day_of_operation'][0]['#markup'], 0, 3);
				  print '<li>';
				  print '<span class="field-name-field-day-of-operation">';
				}
				else if ($last_hour == $data['field_hours_of_operation'][0]['#markup']) {
				  $last_day = substr($data['field_day_of_operation'][0]['#markup'], 0, 3);
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
				  $first_day = substr($data['field_day_of_operation'][0]['#markup'], 0, 3);
				  $last_day = substr($data['field_day_of_operation'][0]['#markup'], 0, 3);
				  $last_hour = $data['field_hours_of_operation'][0]['#markup'];
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
<?php
      
  

?>
