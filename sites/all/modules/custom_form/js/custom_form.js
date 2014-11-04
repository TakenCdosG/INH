/*(function($) {

	$('#dining-node-form').submit(function() {
	      alert("x");
	});
	
})(jQuery); 
*/

jQuery().ready(function() {

	if (jQuery('#edit-field-category-services-und').length != 0) {
	    jQuery('#edit-field-category-services-und').change(function() {
		  if(jQuery('#edit-field-category-services-und-82').is(':checked')){
		   jQuery("#edit-field-new-category").show();
		  }else{
		   jQuery("#edit-field-new-category").hide();
		  }
		});
		jQuery('#edit-field-category-services-und option[value=_none]').remove();

	}

	/******************DAY AND HOURS**************************************************************************************/


    jQuery("#edit-field-days-and-hours-und-0-field-day-of-operation-und  option[value='sunday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-1-field-day-of-operation-und  option[value='monday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-2-field-day-of-operation-und  option[value='tuesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-3-field-day-of-operation-und  option[value='wednesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-4-field-day-of-operation-und  option[value='thursday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-5-field-day-of-operation-und  option[value='friday']").attr("selected","selected");
	jQuery("#edit-field-days-and-hours-und-6-field-day-of-operation-und  option[value='saturday']").attr("selected","selected");

	/*************************************************************************************************************************/




	/******************DAYS AND MEAlS SCHEDULES**************************************************************************************/


    jQuery("#edit-field-days-and-meals-schedules-und-0-field-day-of-operation-und  option[value='sunday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-1-field-day-of-operation-und  option[value='monday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-2-field-day-of-operation-und  option[value='tuesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-3-field-day-of-operation-und  option[value='wednesday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-4-field-day-of-operation-und  option[value='thursday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-5-field-day-of-operation-und  option[value='friday']").attr("selected","selected");
	jQuery("#edit-field-days-and-meals-schedules-und-6-field-day-of-operation-und  option[value='saturday']").attr("selected","selected");

	/*************************************************************************************************************************/


});

