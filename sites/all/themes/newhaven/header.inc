<div class="first-line">
  <div class="col-sm-5 col-xs-12">
    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="img-responsive"/>
      </a>
    <?php endif; ?>
  </div>
  <div class="col-sm-2 text-center hidden-xs">
    <a  href="/parking-map" class="parking">
      <img src="<?php print base_path() . path_to_theme(); ?>/img/parking_icon.png" alt="Parking" title="Parking" />
    </a>
  </div>
  <div class="col-sm-5 hidden-xs">
    <div class="social_icons">
      <a href="<?php print isset($facebook_link) ? url($facebook_link) : "#"; ?>" class="facebook" target="_blank"></a>
      <a href="<?php print isset($twitter_link) ? url($twitter_link) : "#"; ?>" class="twitter" target="_blank"></a>
      <a href="<?php print isset($instagram_link) ? url($instagram_link) : "#"; ?>" class="instagram" target="_blank"></a>
    </div>
    <div id="search-form">
      <form action="/content/search" method="get">
        <input id="google-searchbox" type="text" name="search" placeholder="What are you looking for?" />
        <input id="google-submit" type="submit" name="submit" value="" />
      </form>
    </div>
  </div>
</div>

<div class="second-line">
  <?php //print render($page['header']); ?>
  <?php
  print render($menu_main_responsive);
  ?>
  <script type="text/javascript" >$('.dropdown-wrapper').hide();</script>
</div>

<?php if($node->nid=="34689"){ ?>

  <?php if (isset($field_top_head_image)): ?>
    <div id="div_photo_parking">
      <?php print $field_top_head_image; ?>
    </div>
  <?php endif; ?>

<?php }?>
     


  

