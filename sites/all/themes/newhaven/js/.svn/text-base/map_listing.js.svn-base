

var mapHash = [];
var markersArray = [];

delete(mapHash);
delete(markersArray);	
function initMap(map_container_div) {
	var latlng = new google.maps.LatLng(41.315208, -72.928328);
	var myOptions = { 
		zoom:19,
		center:latlng,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		streetViewControl: false,
		disableDefaultUI: true,
	};

	var map = new google.maps.Map(document.getElementById(map_container_div), myOptions);

	if (!getMap(map_container_div)) {
	   
		var mapInfo = {
			mapkey:'',
			map:'',
			geocoder : new google.maps.Geocoder()
		};
		mapInfo.map = map;
		mapInfo.geocoder = new google.maps.Geocoder();
		mapInfo.mapKey = map_container_div;
		mapHash.push(mapInfo);
	}
} 

function palceMarker(name_marker,myAddress, mapId, string_tool_tip) {
	mapIndex = getMap(mapId)

	mapHash[mapIndex].geocoder.geocode({
		'address':unescape(myAddress)
	}, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			mapIndex = getMap(mapId)
			var marker = new google.maps.Marker({
				map:mapHash[mapIndex].map,
				position:results[0].geometry.location,
				title: results[0].formatted_address
			});
			
			tooltip_marker_place(mapHash[mapIndex].map,marker,name_marker,string_tool_tip,myAddress);
		    
			mapHash[mapIndex].map.setZoom(17); //17
			mapHash[mapIndex].map.setCenter(results[0].geometry.location);				
			google.maps.event.trigger(mapHash[mapIndex].map, "resize");
			
	        call_click_marker(mapId,myAddress);
			
		
			$("#"+mapId).attr("init","true");
		}
	});
}
	
 
	 
function init_map_google(idmapdiv) {
	  $('#'+idmapdiv).each(function(index) { 
			initMap($(this).attr("id"))
			var string_tool_tip = "<span>"+$(this).attr('street')+"</span>"+"</span><br><span>"+$(this).attr('city')+"</span><br><span>"+$(this).attr('zip')+"</span>";
			
		//	alert($(this).attr('title')+"--"+escape($(this).attr('title'))+"---"+$(this).attr('street')+"---"+$(this).attr('city')+"--- "+$(this).attr('zip')+"---"+$(this).attr("id"));
		
            			
			palceMarker($(this).attr('title'),$(this).attr('street')+" , "+$(this).attr('city')+" "+$(this).attr('zip')+"", $(this).attr("id"),string_tool_tip)
			
			
	 });
 
}





function getMap(mapKey) { 
	for (var i = 0 ; i < mapHash.length ; i++) {
		if (mapHash[i].mapKey == mapKey) {
			return i;
		}
	}
	return false;
}

function call_click_marker(mapId,myAddress){
    

var x=0;

if(x==0){
   add_marker_map(mapId,myAddress);
   x = x + 1;
   }

$("#container_map_div"+mapId+ " .container_map_div_link").click(function(event) {
   if(x==0){
   add_marker_map(mapId,myAddress);
   x = x + 1;
   }else{
	   if(x==1){
	   remove_all_marker();
	   x=0;
	   }
   }
   
  event.preventDefault();
  
});
}


function add_marker_map(mapId,myAddress){
	mapIndex = getMap(mapId);
   $("#div_map_items"+mapId + " .items-div-places").each(function(index) {
		var latlng_parking = new google.maps.LatLng($(this).attr('latitude'), $(this).attr('longitude'));
			var marker = new google.maps.Marker({
				map:mapHash[mapIndex].map,
				position:latlng_parking,
				title: $(this).attr('name_parking')
			});
			marker.setIcon('http://www.infonewhaven.com/sites/default/files/drupalmap.png')
				
			markersArray.push(marker);
	
			tooltip_marker(mapHash[mapIndex].map,marker,$(this).attr('name_parking'),$(this).attr('street_parking'),$(this).attr('field_parking_hours'),$(this).attr('tel_parking'),$(this).attr('website_parking'),myAddress);
			     
	});
}


function tooltip_marker_place(map,marker,name_parking,content,myAddress){
	
	google.maps.event.addListener(marker, 'click', function() {
	 var body_html ="<div class='div_class_style_tooltip' >"+
				    "<h2><a href='http://maps.google.com/maps?saddr="+myAddress+"' target='_blank'>"+name_parking+"</a></h2>"+
					"<span></span> <br>"+
					"<span>"+content+"</span> <br>";
				
	     marker.infoWindow = new google.maps.InfoWindow({ 
		   content: body_html,
	    });
	 
		marker.infoWindow.open(map,marker);
	});
	
}


function tooltip_marker(map,marker,name_parking,street,city,tel,website,myAddress){
	
	google.maps.event.addListener(marker, 'click', function() {
	 var body_html ="<div class='div_class_style_tooltip'>"+
					"<h2><a href='http://maps.google.com/maps?saddr="+myAddress+"' target='_blank'>"+name_parking+"</a></h2>"+
					"<span></span> <br>"+
					"<span>"+street+"</span> <br>"+
					"<span>"+city+"</span> <br>"+
					"<span>"+tel+"</span> <br>"+
					"<span><a href='"+website+"' target='_blank'>Website</a></span> <br>"+
					"<h2></h2><br></div>";
				
	     marker.infoWindow = new google.maps.InfoWindow({
		   content: body_html,
	    });
	
		marker.infoWindow.open(map,marker);
	});
	
}
 

 


function remove_all_marker(){
if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
  }
}

