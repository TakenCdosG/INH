<?php


 $term= taxonomy_term_load($_GET['s']);
 if(is_object($term)) {
    $title = $term->name;
	$description = $term->description;
 }else{
     $description =  $node->body['und'][0]['safe_value'];
 }
?>

<div id="report_wrapper">

  <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  <div class="content">
   
	  <?php 

	    global $user;
		if($user->uid!=0 && $_GET['s']!="" ){
	     print "<p class='edit_link'><a href='/taxonomy/term/".$_GET['s']."/edit'>Edit This Category</a></p><br><br>";
		}
				
	    $render_menu_terms=render_vocabulary_services();
		print "<p>".$description."</p>";
		if($_GET['s']!=""){
		  print views_embed_view("report_services", "page",$_GET['s']);
		}
		?>
  
  </div>
</div>



<div id="content-menu-right-internal"  style="float:left;">
<div class='img-top'></div>
	<div id="div_nav_report_service_container">
	  <div class='div_nav_report_service'>   
	  <input type="hidden" name="report-services-nav" id="report-services-nav" value="<?php print $_GET['s'] ?>" />
		<ul>
		<?php print $render_menu_terms; ?>
	   </ul>	
	  </div>
	  <div class='img-bottom'></div>
	</div>
</div>