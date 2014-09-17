/*(function($) {

	$('#dining-node-form').submit(function() {
	      alert("x");
	});
	
})(jQuery); 
*/

jQuery().ready(function() {

	if (jQuery('#edit-field-category-services-und').length != 0) {
	    jQuery('#edit-field-category-services-und').change(function() {
		  if(jQuery('#edit-field-category-services-und').val()=="82"){
		   jQuery("#edit-field-new-category").show();
		  }else{
		   jQuery("#edit-field-new-category").hide();
		  }
		});
		jQuery('#edit-field-category-services-und option[value=_none]"').remove();
		
	}
	
	/******************DAY AND HOURS**************************************************************************************/
	jQuery('#markup_day_hour .form-checkbox').change(function() {
	 var id = jQuery(this).attr("id");
	   if (jQuery(this).attr('checked')) {
	    jQuery("#"+id+"_text").removeAttr('disabled');
	    jQuery("#"+id+"_text").css('background-color','white');
	   }else{
	    jQuery("#"+id+"_text").attr('disabled','true');
	    jQuery("#"+id+"_text").css('background-color','#E0E0D8');
		 jQuery("#"+id+"_text").val('');
	   }
	  
	});
   
    jQuery("#edit-field-days-and-hours-und-0-field-day-of-operation-und  option[value='sunday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-1-field-day-of-operation-und  option[value='monday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-2-field-day-of-operation-und  option[value='tuesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-3-field-day-of-operation-und  option[value='wednesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-4-field-day-of-operation-und  option[value='thursday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-5-field-day-of-operation-und  option[value='friday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-6-field-day-of-operation-und  option[value='saturday']").attr("selected","selected");
	
	/*************************************************************************************************************************/
	
	
	
	
	/******************DAYS AND MEAlS SCHEDULES**************************************************************************************/
	jQuery('#markup_day_hschedules .form-checkbox').change(function() {
	 var id = jQuery(this).attr("id");
	   if (jQuery(this).attr('checked')) {
	    jQuery("#"+id+"_lunch").removeAttr('disabled');
	    jQuery("#"+id+"_lunch").css('background-color','white');
		jQuery("#"+id+"_dinner").removeAttr('disabled');
	    jQuery("#"+id+"_dinner").css('background-color','white');
	   }else{
	    jQuery("#"+id+"_lunch").attr('disabled','true');
	    jQuery("#"+id+"_lunch").css('background-color','#E0E0D8');
		jQuery("#"+id+"_dinner").attr('disabled','true');
	    jQuery("#"+id+"_dinner").css('background-color','#E0E0D8');
		jQuery("#"+id+"_lunch").val('');
		jQuery("#"+id+"_dinner").val('');
	   }
	  
	});
   
    jQuery("#edit-field-days-and-meals-schedules-und-0-field-day-of-operation-und  option[value='sunday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-1-field-day-of-operation-und  option[value='monday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-2-field-day-of-operation-und  option[value='tuesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-3-field-day-of-operation-und  option[value='wednesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-4-field-day-of-operation-und  option[value='thursday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-5-field-day-of-operation-und  option[value='friday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-6-field-day-of-operation-und  option[value='saturday']").attr("selected","selected");
	
	/*************************************************************************************************************************/
	

   jQuery('#dining-node-form').submit(function() {
   /******************DAY AND HOURS**************************************************************************************/
   checkbox_field();
	 /*************************************************************************************************************************/
	 
	  /******************DAYS AND MEAlS SCHEDULES**************************************************************************************/
	 if (jQuery("#marker_hschedules_sunday").attr('checked')) { 
     jQuery("#edit-field-days-and-meals-schedules-und-0-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_sunday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-0-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_sunday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-0-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_monday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-1-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_monday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-1-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_monday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-1-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_tuesday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-2-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_tuesday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-2-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_tuesday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-2-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_wednesday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-3-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_wednesday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-3-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_wednesday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-3-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_thursday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-4-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_thursday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-4-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_thursday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-4-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_friday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-5-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_friday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-5-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_friday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-5-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 if (jQuery("#marker_hschedules_saturday").attr('checked')) { 
	 jQuery("#edit-field-days-and-meals-schedules-und-6-field-lunch-hours-und-0-value").val(jQuery("#marker_hschedules_saturday_lunch").val());
	 jQuery("#edit-field-days-and-meals-schedules-und-6-field-dinner-hours-und-0-value").val(jQuery("#marker_hschedules_saturday_dinner").val());
	 }else{
	  jQuery("#edit-field-days-and-meals-schedules-und-6-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 
	 /*************************************************************************************************************************/
	    
		  
	});
	
	jQuery('#shopping-node-form').submit(function() {
   /******************DAY AND HOURS**************************************************************************************/
      checkbox_field();
	 /*************************************************************************************************************************/  
	});
	jQuery('#culture-node-form').submit(function() {
   /******************DAY AND HOURS**************************************************************************************/
      checkbox_field();
	 /*************************************************************************************************************************/  
	});
   
});

function checkbox_field(){
  if (jQuery("#marker_sunday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-0-field-hours-of-operation-und-0-value").val(jQuery("#marker_sunday_text").val());
	 }else{
		 jQuery("#edit-field-days-and-hours-und-0-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
		 
	 }
	 if (jQuery("#marker_monday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-1-field-hours-of-operation-und-0-value").val(jQuery("#marker_monday_text").val());
	 }else{
	      jQuery("#edit-field-days-and-hours-und-1-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 if (jQuery("#marker_tuesday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-2-field-hours-of-operation-und-0-value").val(jQuery("#marker_tuesday_text").val());
	 }else{
	   jQuery("#edit-field-days-and-hours-und-2-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 if (jQuery("#marker_wednesday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-3-field-hours-of-operation-und-0-value").val(jQuery("#marker_wednesday_text").val());
	 }else{
	     jQuery("#edit-field-days-and-hours-und-3-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 if (jQuery("#marker_thursday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-4-field-hours-of-operation-und-0-value").val(jQuery("#marker_thursday_text").val());
	 }else{
	    jQuery("#edit-field-days-and-hours-und-4-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 if (jQuery("#marker_friday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-5-field-hours-of-operation-und-0-value").val(jQuery("#marker_friday_text").val());
	 }else{
	     jQuery("#edit-field-days-and-hours-und-5-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
	 if (jQuery("#marker_saturday").attr('checked')) {
	    jQuery("#edit-field-days-and-hours-und-6-field-hours-of-operation-und-0-value").val(jQuery("#marker_saturday_text").val());
	 }else{
	    jQuery("#edit-field-days-and-hours-und-6-field-day-of-operation-und  option[value='_none']").attr("selected","selected");
	 }
    
}