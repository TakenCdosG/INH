<div id="top-header" class="row">
  <nav class="navbar" role="navigation">
    <div class="navbar-header visible-xs">

      <button type="button" class="navbar-toggle margin_right" data-toggle="collapse" data-target="#main_menu"></button>
      <a href="<?php print isset($instagram_link) ? url($instagram_link) : "#"; ?>" class="instagram" target="_blank"></a>
      <a href="<?php print isset($twitter_link) ? url($twitter_link) : "#"; ?>" class="twitter" target="_blank"></a>
      <a href="<?php print isset($facebook_link) ? url($facebook_link) : "#"; ?>" class="facebook" target="_blank"></a>
      <a href="/parking-map" class="parking"></a>
    </div>

    <div class="navbar-collapse collapse" id="main_menu">
      <?php
      print render($menu_top); ?>
    </div>
  </nav>
</div>

<div id="header-wrapper" class="row <?php if (isset($content_class)) {print $content_class;} ?>">
  <div class="col-sm-12 col-xs-12 col-lg-10 col-lg-offset-1">
    <div id="c_header">
        <div id="header">
          <?php include("header.inc"); ?>
        </div>
    </div>
  </div>
</div>

<div id="page-wrapper" class="row <?php if (isset($content_class)) {print $content_class;}?>">
  <div class="cont_page_wrapper col-sm-12 col-xs-12 col-lg-10 col-lg-offset-1">
    <div class="cc_pw">
                  <div class="c_pw">
                    <?php if (isset($top_image)): ?>
                      <div class="top_image hidden-xs col-sm-12" style="background-image: url(<?php print $top_image; ?>);">

                      </div>
                    <?php endif; ?>
                    
                    <?php if (isset($top_mobile_image)): ?>
                      <div class="top_image visible-xs" style="background-image: url(<?php print $top_mobile_image; ?>);">

                      </div>
                    <?php endif; ?>

                    <?php if (!isset($top_image) && isset($top_flash)): ?>
                      <div class="top_image hidden-xs col-sm-12">
                        <?php print $top_flash; ?>
                      </div>
                    <?php endif; ?>

                    <?php if (isset($top_slideshow)): ?>
                      <?php print $top_slideshow; ?>
                    <?php endif; ?>

                    <?php if (!drupal_is_front_page() && $breadcrumb): ?>
                      <div id="breadcrumb" class="col-xs-12 col-sm-12"><?php print $breadcrumb; ?></div>
                    <?php endif; ?>

                    <?php print $messages; ?>

                    <div id="main-wrapper" class="col-xs-12 col-sm-12">

                      <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
                      <?php print render($page['help']); ?>
                      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

                      <?php if ($page['sidebar_left']): ?>
                        <div id="sidebar-left" class="column sidebar col-sm-4">
                          <?php print render($page['sidebar_left']); ?>
                        </div>
                      <?php endif; ?>


                      <div id="content" class="column  <?php if(array_key_exists('menu_links_right',$page)){print 'col-md-8';}elseif($is_front){print ' col-sm-8';}else{print 'col-md-12';} ?>">
                        <?php print render($page['main_content']); ?>
                      </div>
                        <div id="sidebar-right" class="column sidebar col-md-4">
                          <?php print render($page['menu_links_right']); ?>
                        </div>
                     <?php if ($node->nid == "34689") { ?>
                        <input type="hidden" name="input_travel_div_0_img" id="input_travel_div_0_img" value="" />
                        <input type="hidden" name="input_travel_div_1" id="input_travel_div_1" value="" />
                        <input type="hidden" name="input_travel_div_3" id="input_travel_div_3" value="" />
                        <input type="hidden" name="input_travel_div_11" id="input_travel_div_11" value="" />
                        <input type="hidden" name="input_travel_div_12" id="input_travel_div_12" value="" />
                        <input type="hidden" name="input_travel_div_13" id="input_travel_div_13" value="" />
                        <input type="hidden" name="input_travel_div_14" id="input_travel_div_14" value="" />
                        <input type="hidden" name="input_travel_div_15" id="input_travel_div_15" value="" />
                        <input type="hidden" name="input_travel_div_16" id="input_travel_div_16" value="" />
                        <input type="hidden" name="input_travel_div_17_top" id="input_travel_div_17_top" value="" />
                        <input type="hidden" name="input_travel_div_17_height" id="input_travel_div_17_height" value="" />
                        <input type="hidden" name="input_travel_div_18_height" id="input_travel_div_18_height" value="" />
                        <input type="hidden" name="input_travel_div_19_top" id="input_travel_div_19_top" value="" />

                        <div id="google_map_parking" class="col-md-12"><?php print views_embed_view('parking_view'); ?></div>

                      <?php } ?>

                    </div>
                  </div>
      </div>
  </div>
</div>

<?php if (isset($restaurant_logos)): ?>
    <div id="restaurant-week-logos"><?php print $restaurant_logos; ?></div>
<?php endif; ?>
<div id="cfooter" class="row"">
  <div id="footer" >

      <?php include("footer.inc"); ?>

  </div>
</div>
