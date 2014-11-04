
<?php 
$term= taxonomy_term_load($node->field_category_services["und"][0]["tid"]);
global $user;
?>  

<div id="contenedor-show-shopping" class="column" >
   <div id="content-shopping-left"  style="width: 640px;">
      
		<div class="internal">
		  <h2 style='margin-bottom:19px;line-height: 52px;' <?php print $title_attributes; ?>><?php print $title; ?></h2>
		  
		    <div><p class="cuisine"><?php
                    if(!empty($node->field_new_category['und'][0]['value'])){
                        print $node->field_new_category['und'][0]['value'];
                    }else{
                        print $term->name;
                    }
                    ?>
            </p></div>
		  
		
		  <div class="content"<?php print $content_attributes; ?>>
				<div><?php   print $node->field_address_services['und'][0]['value']; ?> </div>
				<div><?php   print "New Haven, CT "; ?> </div>
				<div><?php   print $node->field_phone_services['und'][0]['value']; ?> </div>
				<div><?php   print $node->field_website_services['und'][0]['value']; ?> </div>
				<?php      if($term->name=="Other" && $user->uid!=0 ){ ?>
				<div>Suggested category: <?php   print $node->field_new_category['und'][0]['value']."  <b><a target='_blank' href='/category-services/add?nid=".$node->nid."'>Add</a></b>"; ?> 
				
				</div>
				      <?php } ?>
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


	
