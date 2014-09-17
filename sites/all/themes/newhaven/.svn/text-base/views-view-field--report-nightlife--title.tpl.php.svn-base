<?php  
  
  if($row->field_field_website_nightlife[0]['raw']['value']!=""){
   
      $url_web= $row->field_field_website_nightlife[0]['raw']['value'];
      $pos = strpos($url_web,'http'); 
       
        if($pos === false && $pos!==0)
        {
            $url_web = 'http://'.$url_web;
        }
 $title= "<a href='".$url_web."' class='views-ajax-processed-processed' target='_blank'>".$row->node_title."</a>";
   }
  else
  {
      $title = $row->node_title;
  }
  
  
?>

<div class="views-field views-field-title">        
    <div class="field-content report-form-title">
	    <?php print $title; ?>
		</div> 
</div> 