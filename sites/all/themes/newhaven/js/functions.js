$(document).ready(function(){
    //background();
        
    search_boxes();
    restaurant_slideshow();
    parking_hover();
    detect_useragent();
    listing_details();
    map_parking();
    view_field_checkbox();
    expand_link();
    advanced_search();
	
    none_target_search();
    none_target_pager();
    dropdowns_disabled_view();
    disabled_search();
    business_services_nav();
    toggle_details_pane();
    home_tabs();

    aux_fotorama_home();
    
    mobile_website();
    mobile_menu();

});//end document ready 

function aux_fotorama_home(){
    if(jQuery(window).width()>984){
        fotorama_home();
    }
}

function fotorama_home(){

    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('#fotorama_home_init').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
    fotorama.startAutoplay(5000);
    // 3. Inspect it in console.
    console.log(fotorama);

    jQuery("#fotorama_home .next").click(function(){
        fotorama.show('>');
    });
    jQuery("#fotorama_home .prev").click(function(){
        fotorama.show('<');
    });

}

function business_services_nav(){
    if(jQuery("#report-services-nav").val()!=""){
        jQuery("#"+jQuery("#report-services-nav").val()).css("background",'white');
    }
}


function style_parking_tooltips(){
    
    $(".gm-style-iw").each(function(){
        
        //alert($(this).html() );
        
        });
    
}

function disabled_search(){
    $("#alpha_links a").click(function(){

        if ($(".culture").size()) {
            first_field = "edit-title";
            second_field = "edit-field-category-tid";
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Category");
            $("#" + second_field + " option:eq(0)").html("Search by Category");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
			
        }
		
        else if ($(".dining").size()) {
            first_field = "edit-title";
            second_field = "edit-field-cuisine-term-tid";
			
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Cuisine");
            $("#" + second_field + " option:eq(0)").html("Search by Cuisine");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
        }
        else if ($(".shopping").size()) {
            first_field = "edit-title";
            second_field = "edit-field-shopping-category-value";
			
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Category");
            $("#" + second_field + " option:eq(0)").html("Search by Category");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
        }


 
    });
}


function dropdowns_disabled_view(){

    $('#edit-title').blur(function() {
        if($("#edit-title").val()!="Search by Name"){
            $("#edit-field-price-point-value").attr("disabled", true);
            $("#edit-field-neighborhood-value").attr("disabled", true);
            $("#edit-field-shopping-category-value").attr("disabled", true);
            $("#edit-field-category-tid").attr("disabled", true);
            $("#edit-field-cuisine-term-tid").attr("disabled", true);

        }else{
            $("#edit-field-price-point-value").attr("disabled", false);
            $("#edit-field-neighborhood-value").attr("disabled", false);
            $("#edit-field-shopping-category-value").attr("disabled", false);
            $("#edit-field-category-tid").attr("disabled", false);
            $("#edit-field-cuisine-term-tid").attr("disabled", false);
	 
        }
  
    });


    $(".form-item-field-category-tid").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    $(".form-item-field-price-point-value").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    //$(".form-item-field-cuisine-term-tid").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    $(".form-item-field-shopping-category-value").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    $("#views-exposed-form-dining-listing-page .form-item-title").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    $("#views-exposed-form-culture-listing-page .form-item-title").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");
    $("#views-exposed-form-shopping-listing-page .form-item-title").append("<span style='font-size:14px;color:#373737;font-weight:bold;font-family:Helvetica neue roman;'>Or</span>");


    if ($(".search").size()) {
        if ($(".shopping").size()) {
		  
            if($("#edit-field-shopping-category-value").val()!="All"){	  
                $("#edit-field-price-point-value").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
                $('#edit-title').val("Search by Name");
            }
            if($("#edit-field-price-point-value").val()!="All"){	  
                $("#edit-field-shopping-category-value").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
                $('#edit-title').val("Search by Name");
            }
            if($("#edit-field-neighborhood-value").val()!="All"){	  
                $("#edit-field-shopping-category-value").attr("disabled", true);
                $("#edit-field-price-point-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
                $('#edit-title').val("Search by Name");
            }
		  
		  
            $("#edit-field-shopping-category-value").change(function(e) {
                if($("#edit-field-shopping-category-value").val()!="All"){	  
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					 
					
					
                }
            });
            $("#edit-field-price-point-value").change(function(e) { 
                if($("#edit-field-price-point-value").val()!="All"){	   
                    $("#edit-field-shopping-category-value").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{  
                    $("#edit-field-shopping-category-value").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					
                }
            });
            $("#edit-field-neighborhood-value").change(function(e) { 
                if($("#edit-field-neighborhood-value").val()!="All"){	 
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-shopping-category-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-shopping-category-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					
                }
            });
		  
        }
        if ($(".culture").size()) {
		  
            if($("#edit-field-category-tid").val()!="All"){	  
                $("#edit-field-price-point-value").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
					
            }
            if($("#edit-field-price-point-value").val()!="All"){	  
                $("#edit-field-category-tid").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
					
            }
            if($("#edit-field-neighborhood-value").val()!="All"){	  
                $("#edit-field-category-tid").attr("disabled", true);
                $("#edit-field-price-point-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
					 
            }
		  
		  
            $("#edit-field-category-tid").change(function(e) {
                if($("#edit-field-category-tid").val()!="All"){	  
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					 
                }
            });
            $("#edit-field-price-point-value").change(function(e) { 
                if($("#edit-field-price-point-value").val()!="All"){	   
                    $("#edit-field-category-tid").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{  
                    $("#edit-field-category-tid").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					 
                }
            });
            $("#edit-field-neighborhood-value").change(function(e) { 
                if($("#edit-field-neighborhood-value").val()!="All"){	 
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-category-tid").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-category-tid").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					
                }
            });
		  
        }
        if ($(".dining").size()) {
		  
            if($("#edit-field-cuisine-term-tid").val()!="All"){	  
                $("#edit-field-price-point-value").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
            }
            if($("#edit-field-price-point-value").val()!="All"){	  
                $("#edit-field-cuisine-term-tid").attr("disabled", true);
                $("#edit-field-neighborhood-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
            }
            if($("#edit-field-neighborhood-value").val()!="All"){	  
                $("#edit-field-cuisine-term-tid").attr("disabled", true);
                $("#edit-field-price-point-value").attr("disabled", true);
                $('#edit-title').attr("disabled", true);
            }
		  
		  
            $("#edit-field-cuisine-term-tid").change(function(e) {
                if($("#edit-field-cuisine-term-tid").val()!="All"){	  
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					 
                }
            });
            $("#edit-field-price-point-value").change(function(e) { 
                if($("#edit-field-price-point-value").val()!="All"){	   
                    $("#edit-field-cuisine-term-tid").attr("disabled", true);
                    $("#edit-field-neighborhood-value").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{  
                    $("#edit-field-cuisine-term-tid").attr("disabled", false);
                    $("#edit-field-neighborhood-value").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					
                }
            });
            $("#edit-field-neighborhood-value").change(function(e) { 
                if($("#edit-field-neighborhood-value").val()!="All"){	 
                    $("#edit-field-price-point-value").attr("disabled", true);
                    $("#edit-field-cuisine-term-tid").attr("disabled", true);
                    $('#edit-title').attr("disabled", true);
                    $('#edit-title').val("Search by Name");
                }else{
                    $("#edit-field-price-point-value").attr("disabled", false);
                    $("#edit-field-cuisine-term-tid").attr("disabled", false);
                    $('#edit-title').attr("disabled", false);
					
                }
            });
		  
        }
    }

}

function none_target_search(){

    if($("#google_search_wrapper").length>0){
        var id_int = window.setInterval(function(){
            none_target_search_init()
        },1000);
        function none_target_search_init(){
            if($(".gs-title").length>0){
                $(".gs-title").removeAttr('target');
                window.clearInterval(id_int);
                none_target_pager();
            }    
        } 
    }
}

function none_target_pager(){
    $(".gsc-cursor-page").click(function(){
        none_target_search();
    });
}
 
function background(){
        
    var src = $('.bg-img').attr("src");
    $('.bg-img').css('display', 'none');
        
    $('#wrapper').css('background-image', 'url('+src+')');
    $('#wrapper').css('background-repeat', 'repeat-y');
        
    
}
 
function advanced_search(){


    $("#edit-field-culture-offer-value-2").appendTo(".advanced_search_midle");
    $(".advanced_search").appendTo("#div_advanced_search");
} 

function gmap_customer_tooltip(nid,position){

    $("#div_class_style_tooltip_"+nid).parent("div").parent("div").parent("div").parent("div").parent("div").attr('id', "general_div_class_style_tooltip_"+nid);
	
	
    if ( $(".gm-style-iw").is (':visible') ){

        $("#colleft #panel").html($(".gmap-extra-info").html());	

        $("#panel").animate({
            marginLeft:"0px"
        }, 400 );
        $("#colleft").animate({
            width:"180px", 
            opacity:1
        }, 400 );
        $("#hidePanel").css("display","block");

    /*$("#general_div_class_style_tooltip_"+nid+" div").each(function (index) {
			 $(this).attr("id","travel_div_"+index);
			});

			$("#input_travel_div_0_img").val($("#travel_div_0 img").css("top"));
			$("#input_travel_div_1").val($("#travel_div_1").css("top"));
			$("#input_travel_div_3").val($("#travel_div_3").css("height"));
			$("#input_travel_div_11").val($("#travel_div_11").css("top"));
			$("#input_travel_div_12").val($("#travel_div_12").css("top"));
			$("#input_travel_div_13").val($("#travel_div_13").css("top"));
			$("#input_travel_div_16").val($("#travel_div_16").css("top"));
			$("#input_travel_div_17_top").val($("#travel_div_17").css("top"));
			$("#input_travel_div_17_height").val($("#travel_div_17").css("height"));
			$("#input_travel_div_18_height").val($("#travel_div_18").css("height"));

			$("#travel_div_0 img").css("top",'98px');

			$("#travel_div_1").css("top",'115px');
			$("#travel_div_3").css("height",'130px !important');

			$("#travel_div_11").css("top",'98px');//corner left
			$("#travel_div_12").css("top",'98px');//corner right top
			$("#travel_div_13").css("top",'98px');//corner right top

			$("#travel_div_17").css("top",'98px'); //space
			$("#travel_div_17").css("height",'18px');

			$("#travel_div_18").css("height",'193px'); //Height of Tooltip
                        $("#travel_div_18").css("top",'117px');
			$("#travel_div_0").css("height",'300px'); //Height of Tooltip
			$("#travel_div_9").css("display",'none'); //Height of Tooltip

        */
		
    }else{
        $("#travel_div_0").css("height",'530px'); //Height of Tooltip 
        $("#travel_div_0 img").css("top",'-219px');
			 
        $("#travel_div_1").css("top", '-220px');
        $("#travel_div_3").css("height", $("#input_travel_div_3").val());
			
        $("#travel_div_11").css("top", $("#input_travel_div_11").val()); //corner left
        $("#travel_div_12").css("top", '-230px'); //corner right
        $("#travel_div_13").css("top", '-230px'); //corner right
			
        $("#travel_div_17").css("top", '-230px');
        $("#travel_div_17").css("height", $("#input_travel_div_17_height").val()); 
			
        $("#travel_div_18").css("height",'524px'); //Height of Tooltip  
        $("#travel_div_18").css("top",'-216px'); //Height of Tooltip 	
        $("#travel_div_9").css("display",'none'); //Height of Tooltip  			
    }
}

function search_boxes () {
    var first_field = "";
    var second_field = "";
    var three_field = "";
    var four_field = "";
	
    if ($(".search").size()) {
        if ($(".culture").size()) {
            first_field = "edit-title";
            second_field = "edit-field-category-tid";
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Category");
            $("#" + second_field + " option:eq(0)").html("Search by Category");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
			
        }
        else if ($(".dining").size()) {
            first_field = "edit-title";
            second_field = "edit-field-cuisine-term-tid";
			
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Cuisine");
            $("#" + second_field + " option:eq(0)").html("Search by Cuisine");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
        }
        else if ($(".shopping").size()) {
            first_field = "edit-title";
            second_field = "edit-field-shopping-category-value";
			
            three_field = "edit-field-price-point-value";
            four_field = "edit-field-neighborhood-value";
			
			
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#" + second_field).attr("rel", "Search by Category");
            $("#" + second_field + " option:eq(0)").html("Search by Category");
			
            $("#" + three_field).attr("rel", "Search by Price");
            $("#" + three_field + " option:eq(0)").html("Search by Price");
			
            $("#" + four_field).attr("rel", "Search by Neighborhood");
            $("#" + four_field + " option:eq(0)").html("Search by Neighborhood");
        }
        else if ($("#restaurants").size()) {
            first_field = "edit-title";
            $("#" + first_field).attr("rel", "Search by Name");
            $("#" + first_field).val("Search by Name");
            $("#edit-field-cuisine-term-tid option:eq(0)").html("Search by Cuisine");
            $("#edit-field-meal-value option:eq(0)").html("Search by Meal");
            $("#edit-field-neighborhood-value option:eq(0)").html("Search by Neighborhood");
        }
        $("#" + first_field).on("blur", function() {
            if( $(this).val() == '' ){
                var val = $(this).attr("rel");
                $(this).val(val);
            }
        });
        $("#" + first_field).on("focus", function() {
            if( $(this).val() == $(this).attr("rel") ){
                $(this).val("");
            }
        });
        $(".form-submit").on("click", function () {
            if ($("#" + first_field).val() == $("#" + first_field).attr("rel")) {
                $("#" + first_field).val("");
            }
        });
        if ($("#showResults").size() && $("#scroll_listing").size()) {
            var destination = $("#showResults").offset().top;
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination-20
            }, 500 );
        }
    }
}



function home_tabs() {
    var tabs = "#tabs-headers";
    if ($(tabs).size()) {
        var links = $(tabs).find("a");
        var current_tab = "#calendar-tab";
        links.each(function(ind, elem) {
            $(this).off("click");
            $(this).on("click.change_tab", function(e) {
                e.preventDefault();
                var new_tab = $(this).attr("href");
                $(this).parent().addClass("active");
                $(tabs).find("a[href=" + current_tab + "]").parent().removeClass("active");
                $(current_tab).hide();
                $(new_tab).show();
                current_tab = new_tab;
            });
        });
    }

  

}

function restaurant_slideshow() {
    if ($('#top-slideshow .slide').size() > 1) {
        $('#top-slideshow').slides({
            play: 5000,
            pause: 2500,
            hoverPause: true
        });
    }
    else {
        $("#top-slideshow .prev").hide();
        $("#top-slideshow .next").hide();
    }
}


function detect_useragent() {
    // * -- iOS Compatibility -- * //
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if (agentID) {
        $("html").addClass("ios");
        window.onload = function(){
        //setTimeout(function(){window.scrollTo(0, 1)}, 100);
        }
        if (navigator.userAgent.match(/(OS 5_\d like Mac OS X | OS 5_\d_\d like Mac)/)){
            $("html").addClass("ios5");
        }
    }
	
    if(deviceAgent.match(/(ipad)/)){
        $("html").addClass("ipad");
    } 
	
    else if(deviceAgent.match(/(iphone|ipod)/)){
        $("html").addClass("iphone");
    }
}


function listing_details() {
    if ($(".details_more_link").size()) {
        $("#showResults").find(".list_details").hide();
        $(".details_more_link").on("click.expand", function(e) {
		  		 
            e.preventDefault();
            var row_parent = $(this).parent().parent().parent();
            row_parent.find(".list_details").toggle();

			
            var arrow = row_parent.find(".details_arrow");
                        
                        
            if (arrow.hasClass("active")) {
                arrow.removeClass("active");
            }
            else {
                arrow.addClass("active");
                id_div_map = row_parent.find(".list_details").find("#rand_map").val();
                if($("#"+id_div_map).attr("init")=="false"){
                    init_map_google(id_div_map);
                }
            }
        });
    }
	
}

function show_details() {
    ('div.gmap-tooltip-more').live('click', function(){
        //$(this).next().slideToggle('fast');
        if ($(".gmap-extra-info").is (':visible')){
            $(".gmap-extra-info").hide();
        }else{
            //$(".gmap-extra-info").show();
            $("#colleft #panel").html($(".gmap-extra-info").html());	

            $("#panel").animate({
                marginLeft:"0px"
            }, 400 );
            $("#colleft").animate({
                width:"180px", 
                opacity:1
            }, 400 );
            $("#hidePanel").css("display","block");
			
        }
		
    });
}

function toggle_details_pane(){

    $("#hidePanel").click(function(){
        $("#panel").animate({
            marginLeft:"-175px"
        }, 500 );
        $("#colleft").animate({
            width:"0px", 
            opacity:0
        }, 400 );
        $("#hidePanel").css("display","none");
    });

/*$("#google_map_parking").click(function(){
     if($("#hidePanel").css("display") == 'block'){
	$("#panel").animate({marginLeft:"-175px"}, 500 );
	$("#colleft").animate({width:"0px", opacity:0}, 400 );
	$("#hidePanel").css("display","none");
     }
 }); */
 
 
}

infoWin = null;

function map_parking(){

    if($("#google_map_parking").length>0){
        var id_int = window.setTimeout(function(){
            initCustomMap()
        },2000);
            
        window.setInterval(function(){
            $('.div_class_style_tooltip').parent().parent().parent().parent().css("display","none");
        },100);
            
		
    }  
  
}


function initCustomMap(){
    var mymap = Drupal.gmap.getMap("gmap-auto1map-gmap0");
    $('#google_map_parking').css("visibility", "visible");
    //if(mymap.map..isLoaded()){
                                
    //google.maps.event.addListenerOnce(mymap, 'idle', function(){
    //alert('loaded');
                                
    var mymap = Drupal.gmap.getMap("gmap-auto1map-gmap0");
    var latlng = new google.maps.LatLng(41.308233,-72.92817);
    var marker = new google.maps.Marker({
        map:mymap.map,
        position:latlng,
                                                            
    });
                                        
    //var marker = new GMarker(latlng);
    //mymap.map.addOverlay(marker);
    //maker.openInfoWindowHtml();
    mymap.map.setCenter(latlng);
    mymap.map.setZoom(15);
                                        
    //window.clearInterval(id_int);
    //alert('loaded');
    //style_parking_tooltips();
                                        
    var markers = mymap.map.markers;
                                        
    $(markers).each(function(){
        google.maps.event.addListener(this, "click", function(){
                                                
                                                
                                                
            /*var infoBubble = new google.maps.InfoWindow({               
                content: '<div style="z-index:400;width:400px;height:200px;" class="phoneytext">'+$('.gmap-popup .div_class_style_tooltip').html()+'</div>',
                maxWidth: 400
            });*/
                                                
            if(infoWin != null){
                infoWin.close();
                infoWin = null;
            }
            infoWin = infoBubble;
                                                
            //infoBubble.

            //alert($('.gmap-popup .gmap-tooltip-general :visible').html());
            //if (!infoBubble.isOpen()) {
            infoBubble.open(mymap.map, this);
            //}
                                                
            $('.div_class_style_tooltip').parent().parent().parent().parent().css("display","none");
                                                
        });
    });
					 
					
    google.maps.event.addListener(marker, "click", function(){
        // alert('click');

        /*var html= "<div class='div_class_style_tooltip' target='_blank'>"+
										"<h2><a href='http://maps.google.com/maps?saddr=New+Haven+CT'>New Haven, Connecticut</a></h2>"+
										"<div class='gmap-tooltip-general'>"+
											"<p>EEUU</p>"+
										"</div>"+
									"</div>";

			                            marker.openInfoWindowHtml(html);

							});



							   GEvent.addListener(mymap.map, "infowindowopen", function(marker, overlay) {

							   $('#hidePanel').trigger('click');
								var nid= $(".gmap-tooltip-more").attr('myid');
								$(".gmap-extra-info").hide();

								   if(form_input_is_int(nid)){
									gmap_customer_tooltip(nid,'');
									$("#travel_div_8").css("display","none");
								   }

								});
								*/

        /*GEvent.addListener(mymap.map, "click", function(marker, overlay) {
									 if(overlay){

									 }else{
									   if ($(".gmap-extra-info").is (':visible')){

									   }else{

										  offsetCenter(mymap.map.getCenter(),0,-100,mymap.map)

									   }
									 }

								});*/
        });

//});
                        
}



function form_input_is_int(input){
    return !isNaN(input)&&parseInt(input)==input;
}

function parking_hover(){
    $('a.parking', $('div#header')).mouseenter(function(){
        $(this).find('img').attr('src', '/sites/all/themes/newhaven/img/parking-hover.png');
    });
    $('a.parking', $('div#header')).mouseleave(function(){
        $(this).find('img').attr('src', '/sites/all/themes/newhaven/img/parking_icon.png');
    });
}

function view_field_checkbox(){
    var submit_boton="";

    $('#edit-submit-culture-listing').click(function(){
        submit_boton = 0;
        $('#views-exposed-form-culture-listing-page').removeAttr("action");
        $('#views-exposed-form-culture-listing-page').attr("action","/culture-listing");
    });

    $('#edit-submit-dining-listing').click(function(){
        submit_boton = 0;
        $('#views-exposed-form-dining-listing-page').removeAttr("action");
        $('#views-exposed-form-dining-listing-page').attr("action","/dining-listing");
    });

    $('#edit-submit-shopping-listing').click(function(){
        submit_boton = 0;
        $('#views-exposed-form-shopping-listing-page').removeAttr("action");
        $('#views-exposed-form-shopping-listing-page').attr("action","/shopping-listing");
    });


 

    $('#edit-submit-culture-listing_advanced').click(function(){
        submit_boton = 1;//"Advanced Search"
    });
 
    $('#views-exposed-form-culture-listing-page').submit(function() {
	 	
        $("input[type=checkbox]").each(function() {
            $("#edit-field-culture-offer-value option[value='"+$(this).val()+"']").attr("selected",false);
            if($(this).is(':checked') && submit_boton==1){
                $("#edit-field-culture-offer-value option[value='"+$(this).val()+"']").attr("selected",true);
            }
        }); 
    });
	
    $('#views-exposed-form-dining-listing-page').submit(function() { 
	
        $("input[type=checkbox]").each(function() {
            $("#edit-field-dining-offer-value option[value='"+$(this).val()+"']").attr("selected",false);
            if($(this).is(':checked') && submit_boton==1){
                $("#edit-field-dining-offer-value option[value='"+$(this).val()+"']").attr("selected",true);
            }
        }); 
    });

}
 
function expand_link(){
    $("#advanced_search_exponsed_a").click(function(e){
        $().css('display','none');
        e.preventDefault();
        if ($("#edit-field-culture-offer-value-2").is (':visible')){
            $(".advanced_search").hide();
            $(".view-content").css("margin-top","15%");
        }else{
            if ($(".view-content").is(':visible')){
			 
            }else{
                $(".search").css("height","650px");
            }
		     
            $(".advanced_search").fadeIn('fast');
            			 
        } 
    });
}

function mobile_website() {
	if (window.innerWidth < 460) {
		$("body").addClass("mobile-website");
	}
}

function mobile_menu() {
	$(".mobile-website .top_level").on("click", function(e) {
		e.preventDefault();
		$(this).parent().siblings().find(".menu").hide();
		$(this).next().toggle();
	});
	/*$(".mobile-website .second-line").on("focusout", function(e) {
		$(".mobile-website .second-line > .menu > li > .menu").hide();
	});*/
}
