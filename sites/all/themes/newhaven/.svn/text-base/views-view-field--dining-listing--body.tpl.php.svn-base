




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
<div style="position:relative; float:left; width: 250px; min-height: 123px;">
<div class="details_socials">
<?php 
  $url_new_facebook=get_clear_link_social($row->field_field_facebook[0]['rendered']['#markup'],'facebook');
  $url_new_twitter=get_clear_link_social($row->field_field_twitter[0]['rendered']['#markup'],'twitter');
  $url_new_pinterest=get_clear_link_social($row->field_field_pinterest[0]['rendered']['#markup'],'pinterest');
  $url_new_youtube=get_clear_link_social($row->field_field_youtube[0]['rendered']['#markup'],'youtube');
  
    
  if (count($row->field_field_facebook)) {
    print "<div><a href='" . $url_new_facebook . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/facebook.png' alt='Facebook' title='Facebook' /></a></div>";
  }
  if (count($row->field_field_twitter)) {
    print "<div><a href='" . $url_new_twitter . "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/twitter.png' alt='Twitter' title='Twitter' /></a></div>";
  }
  if (count($row->field_field_pinterest)) {
    print "<div><a href='". $url_new_pinterest. "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/pinterest.png' alt='Pinterest' title='Pinterest' /></a></div>";
  }
  if (count($row->field_field_youtube)) {
    print "<div><a href='" .$url_new_youtube. "' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/youtube.png' alt='Youtube' title='Youtube' /></a></div>";
  }
  if ($row->field_field_shops_at_yale_icon_[0]["raw"]["value"]=="1") {
    print "<div><a href='http://theshopsatyale.com/' target='_blank'><img src='http://www.infonewhaven.com/sites/default/files/yale_logo.png' alt='The Shops at yale' title='The Shops at yale' /></a></div>";
  }
  
?>
</div>
<?php
  if (count($row->field_field_price_point)) {
    print "<div><strong>Price Point:</strong> " . $row->field_field_price_point[0]['rendered']['#markup'] . "</div>";
  }
  if (count($row->field_field_payment_options)) {
    print "<div><strong>Payment Types:</strong> ";
    $first = TRUE;
    foreach ($row->field_field_payment_options as $payment) {
      if ($first) {
        print $payment['rendered']['#markup'];
        $first = FALSE;
      }
      else {
        print ", " . $payment['rendered']['#markup'];
      }
    }
    print "</div>";
  }
  if (count($row->field_field_dining_offer)) {
    print "<br><div><strong>We Offer:</strong> ";
    $first = TRUE;
    foreach ($row->field_field_dining_offer as $offer) {
      if ($first) {
        print $offer['rendered']['#markup'];
        $first = FALSE;
      }
      else {
        print ", " . $offer['rendered']['#markup'];
      }
    }
    print "</div>";
  }
  if (count($row->field_body)) {
    print "<div class='details_desc'>" . $row->field_body[0]['rendered']['#markup'] . "</div>";
  }
  
?>
</div>



<?php include("include-map-listing.inc"); ?>