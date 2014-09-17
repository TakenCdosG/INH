


<?php print $wrapper_prefix; ?>
  <div id="showResults" class="search-header">
    <h3 class="floatLeft">Search Results</h3>
	
	<?php
       $var_alternative=false;		
	   if ($_GET['title'] == "" && $_GET['field_category_tid']=="All" && is_array($_GET["field_culture_offer_value"])==false 
	    && $_GET['field_price_point_value']=="All" && $_GET['field_neighborhood_value']=="All") {
	     
		 $display_search_for = "";
		 $var_alternative=true;
		  
	   }else{
	      $display_search_for = "Displaying ".count($rows)." results for";
	   }
	?>
	
	 <p class="floatRight"><?php print $display_search_for ?>  
      <?php
	  if($var_alternative==false){
			$first = TRUE;
			if ($_GET['title'] != "") {
			  print "\"<span class='filter'>" . htmlspecialchars($_GET['title']) . "</span>\"";
			  $first = FALSE;
			}
			
			if ($_GET['field_neighborhood_value'] != "") {
			  if (!$first) {
				 if(count($rows)>1){
				  print " and ";
				}
			  }
			  print "<span class='filter'>" . ucwords($_GET['field_neighborhood_value']) . "</span>";
			}
			
			if ($_GET['field_price_point_value'] != "") {
			  if (!$first) {
				 if(count($rows)>1){
				  print " and ";
				}
			  }
			  if($_GET['field_price_point_value']=="1"){
			  $field_price_point_value="$";
			  }
			   if($_GET['field_price_point_value']=="2"){
			  $field_price_point_value="$$";
			  }
			   if($_GET['field_price_point_value']=="3"){
			  $field_price_point_value="$$$";
			  }
			  if($_GET['field_price_point_value']=="4"){
			  $field_price_point_value="$$$$";
			  }
			  if($_GET['field_price_point_value']=="5"){
			  $field_price_point_value="$$$$$";
			  }
			  
			  print "<span class='filter'>" . $field_price_point_value . "</span>";
			}
			
			
			
			if ($_GET['field_category_tid'] != "") {
			  if (!$first) {
				 if(count($rows)>1){
				  print " and ";
				}
			  }
			  $term = taxonomy_term_load(htmlspecialchars($_GET['field_category_tid']));
			
			  print "<span class='filter'>" . $term->name . "</span>";
			}
			
			
			    
			 if ($_GET["q"] != "node/1") {
			  $letter_array=explode("/",$_GET["q"]); 
			  $letter = $letter_array[1];
			  print "<span class='filter'>" . strtoupper($letter) . "</span>";
			}else{
			   if ($_GET['field_category_tid'] == "" && $_GET['field_price_point_value'] == "" && $_GET['field_neighborhood_value'] == ""){
			     print "<span class='filter'>All</span>"; 
			   }
			  
			} 			
			
			
           
		}
      ?>
  
    </p>
  </div>
  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>