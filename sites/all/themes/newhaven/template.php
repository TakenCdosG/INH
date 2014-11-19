<?php

/**
 * Preprocess function for Date pager template.
 */
function newhaven_preprocess_date_views_pager(&$vars) {
    ctools_add_css('date_views', 'date_views');
    $plugin = $vars['plugin'];
    $input = $vars['input'];
    $view = $plugin->view;

    $vars['nav_title'] = '';
    $vars['next_url'] = '';
    $vars['prev_url'] = '';

    if (empty($view->date_info) || empty($view->date_info->min_date)) {
        return;
    }
    $date_info = $view->date_info;
    // Make sure we have some sort of granularity.
    $granularity = !empty($date_info->granularity) ? $date_info->granularity : 'month';
    $pos = $date_info->date_arg_pos;
    if (!empty($input)) {
        $id = $plugin->options['date_id'];
        if (array_key_exists($id, $input) && !empty($input[$id])) {
            $view->args[$pos] = $input[$id];
        }
    }

    $next_args = $view->args;
    $prev_args = $view->args;
    $min_date = $date_info->min_date;
    $max_date = $date_info->max_date;

    // Set up the pager link format. Setting the block identifier
    // will force pager style links.
    if ((isset($date_info->date_pager_format) && $date_info->date_pager_format != 'clean') || !empty($date_info->mini)) {
        if (empty($date_info->block_identifier)) {
            $date_info->block_identifier = $date_info->pager_id;
        }
    }

    if (empty($date_info->hide_nav)) {
        $prev_date = clone($min_date);
        date_modify($prev_date, '-1 ' . $granularity);
        $next_date = clone($min_date);
        date_modify($next_date, '+1 ' . $granularity);
        $format = array('year' => 'Y', 'month' => 'Y-m', 'day' => 'Y-m-d');
        switch ($granularity) {
            case 'week':
                $next_week = date_week(date_format($next_date, 'Y-m-d'));
                $prev_week = date_week(date_format($prev_date, 'Y-m-d'));
                $next_arg = date_format($next_date, 'Y-\W') . date_pad($next_week);
                $prev_arg = date_format($prev_date, 'Y-\W') . date_pad($prev_week);
                break;
            default:
                $next_arg = date_format($next_date, $format[$granularity]);
                $prev_arg = date_format($prev_date, $format[$granularity]);
        }
        $next_path = str_replace($date_info->date_arg, $next_arg, $date_info->url);
        $prev_path = str_replace($date_info->date_arg, $prev_arg, $date_info->url);
        $next_args[$pos] = $next_arg;
        $prev_args[$pos] = $prev_arg;
        $vars['next_url'] = date_pager_url($view, NULL, $next_arg);
        $vars['prev_url'] = date_pager_url($view, NULL, $prev_arg);
        $vars['next_options'] = $vars['prev_options'] = array();
    } else {
        $next_path = '';
        $prev_path = '';
        $vars['next_url'] = '';
        $vars['prev_url'] = '';
        $vars['next_options'] = $vars['prev_options'] = array();
    }

    // Check whether navigation links would point to
    // a date outside the allowed range.
    if (!empty($next_date) && !empty($vars['next_url']) && date_format($next_date, 'Y') > $date_info->limit[1]) {
        $vars['next_url'] = '';
    }
    if (!empty($prev_date) && !empty($vars['prev_url']) && date_format($prev_date, 'Y') < $date_info->limit[0]) {
        $vars['prev_url'] = '';
    }
    $vars['prev_options'] += array('attributes' => array());
    $vars['next_options'] += array('attributes' => array());
    $prev_title = '';
    $next_title = '';

    // Build next/prev link titles.
    switch ($granularity) {
        case 'year':
            $prev_title = t('Navigate to previous year');
            $next_title = t('Navigate to next year');
            break;
        case 'month':
            $prev_title = t('Navigate to previous month');
            $next_title = t('Navigate to next month');
            break;
        case 'week':
            $prev_title = t('Navigate to previous week');
            $next_title = t('Navigate to next week');
            break;
        case 'day':
            $prev_title = t('Navigate to previous day');
            $next_title = t('Navigate to next day');
            break;
    }
    $vars['prev_options']['attributes'] += array('title' => $prev_title);
    $vars['next_options']['attributes'] += array('title' => $next_title);

    // Add nofollow for next/prev links.
    $vars['prev_options']['attributes'] += array('rel' => 'nofollow');
    $vars['next_options']['attributes'] += array('rel' => 'nofollow');

    // Need this so we can use '&laquo;' or images in the links.
    $vars['prev_options'] += array('html' => TRUE);
    $vars['next_options'] += array('html' => TRUE);

    $link = FALSE;
    // Month navigation titles are used as links in the block view.
    if (!empty($date_info->mini) && $granularity == 'month') {
        $link = TRUE;
    }
    $params = array(
        'granularity' => $granularity,
        'view' => $view,
        'link' => $link,
    );
    $nav_title = theme('date_nav_title', $params);
    $vars['nav_title'] = $nav_title;
    $vars['mini'] = false; //!empty($date_info->mini);
    // Get the date information from the view.
    $date_info = $view->date_info;

    // Choose the dislpay format of the month name.
    $format = 'F';

    // Curent month
    $dateString = $date_info->min_date;
    $cur_month = new DateTime($dateString);
    $cur_month_pager_title = format_date($cur_month->getTimestamp(), 'custom', $format . ' Y');
    $vars['cur_month'] = $cur_month_pager_title;

    // Get the previous month.
    $dateString = $date_info->min_date;
    $prev_month = new DateTime($dateString);
    $prev_month->modify('-1 month');
    $prev_pager_title = format_date($prev_month->getTimestamp(), 'custom', $format);
    $vars['prev_title'] = $prev_pager_title;

    // Get the next month.
    $next_month = new DateTime($dateString);
    $next_month->modify('+1 month');
    $next_pager_title = format_date($next_month->getTimestamp(), 'custom', $format);
    $vars['next_title'] = $next_pager_title;
}

/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return a string containing the breadcrumb output.
 */
function newhaven_breadcrumb($variables) {
    $breadcrumb = $variables['breadcrumb'];
    $breadcrumb[] = l(drupal_get_title(), $_GET["q"]);
    if (!empty($breadcrumb)) {
        $output = '<ul>';
        $first = true;
        foreach ($breadcrumb as $key => $value) {
            if ($first) {
                $output .= '<li>' . $value . '</li>';
                $first = false;
            } else {
                $pos = strpos($value, ">");
                $innerText = substr($value, $pos + 1, (strlen($value) - $pos - 5));
                if (strlen($innerText) > 45) {
                    $newValue = substr($innerText, 0, 42) . "...";
                    $value = str_replace($innerText, $newValue, $value);
                }
                $output .= '<li>&gt;</li><li>' . decode_entities($value) . '</li>';
            }
        }
        $output .= '</ul>';
        return $output;
    }
}

/**
 * Override or insert variables into the html template.
 */
function newhaven_process_html(&$vars) {
    $node = current_node();


    if ($node->type == 'page') {
        //dsm($node);
        drupal_add_js(path_to_theme() . '/js/swfobject.js');
    }


    if (property_exists($node, "field_background_image")) {
        if (count($node->field_background_image)) {
            if (count($node->field_background_image['und']) > 1) {
                $bg = rand(0, count($node->field_background_image['und']) - 1);
                $vars['background'] = file_create_url($node->field_background_image['und'][$bg]['uri']);
            } else {
                $vars['background'] = file_create_url($node->field_background_image['und'][0]['uri']);
            }
        }
    }
}

/**
 * Override or insert variables into the page template.
 */
function newhaven_preprocess_page(&$vars) {

    $global_config = node_load(_GLOBAL_CONFIGURATIONS_NODE);
    $node = current_node();
    if (drupal_is_front_page() || $node->type == "culture_listing" || $node->type == "dining_listing" || $node->type == "shopping_listing") {

        if (drupal_is_front_page()) {
            $vars['content_class'] = "homepage";
        }
        $output = "";

        if ($node->type != "dining_listing") {
            $output .= "<div class='sidebar-icon'>";
            if (count($global_config->field_dining_link)) {
                $output .= "<a href='" . url($global_config->field_dining_link['und'][0]['value']) . "'>";
            }
            if (count($global_config->field_dining_icon)) {
                $output .= "<span class='icon'><img src='" . file_create_url($global_config->field_dining_icon['und'][0]['uri']) . "' alt='Dining' /></span>";
            }
            $output .= "Dining";
            if (count($global_config->field_dining_link)) {
                $output .= "</a>";
            }
            $output .= "</div>";
        }
        if ($node->type != "culture_listing") {
            $output .= "<div class='sidebar-icon'>";
            if (count($global_config->field_culture_link)) {
                $output .= "<a href='" . url($global_config->field_culture_link['und'][0]['value']) . "'>";
            }
            if (count($global_config->field_culture_icon)) {
                $output .= "<span class='icon'><img src='" . file_create_url($global_config->field_culture_icon['und'][0]['uri']) . "' alt='Culture' /></span>";
            }
            $output .= "Culture";
            if (count($global_config->field_culture_link)) {
                $output .= "</a>";
            }
            $output .= "</div>";
        }
        if ($node->type != "shopping_listing") {
            $output .= "<div class='sidebar-icon'>";
            if (count($global_config->field_shopping_link)) {
                $output .= "<a href='" . url($global_config->field_shopping_link['und'][0]['value']) . "'>";
            }
            if (count($global_config->field_shopping_icon)) {
                $output .= "<span class='icon'><img src='" . file_create_url($global_config->field_shopping_icon['und'][0]['uri']) . "' alt='Shopping' /></span>";
            }
            $output .= "Shopping";
            if (count($global_config->field_shopping_link)) {
                $output .= "</a>";
            }
            $output .= "</div>";
        }
        // Twitter timeline
        if (drupal_is_front_page()) {
            $output .= '<a class="twitter-timeline" href="https://twitter.com/INFONewHaven" data-widget-id="252952851674955777">Tweets by @INFONewHaven</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
';

            /* if($_SERVER["HTTP_HOST"] == 'downtownnewhaven.com')
              $output .= '<a class="twitter-timeline" �href="https://twitter.com/INFONewHaven" data-widget-id="249272827075756033">Tweets by @INFONewHaven</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
              else
              $output .= '<a class="twitter-timeline" href="https://twitter.com/INFONewHaven" data-widget-id="252952851674955777">Tweets by @INFONewHaven</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
             */
            $vars["page"]["sidebar_left"] = array("#markup" => $output);
        } else {
            // $vars["page"]["sidebar_right"] = array("#markup" => $output);
        }
    }

    if ($node->type == "page" && (is_array($node->field_menu_right['und']) && count($node->field_menu_right['und']) > 0)) {
        $output_menu = get_bar_right($vars["page"]["sidebar_right"], $node->field_menu_right['und']);
        $vars["page"]["menu_links_right"] = array("#markup" => $output_menu);
    }
    /**
     * Social links on header
     */
    load_socials($global_config, $vars);
    /**
     * Top image on some pages
     */
    if (property_exists($node, "field_top_image")) {
        if (count($node->field_top_image)) {
            $vars['top_image'] = "<img src='" . file_create_url($node->field_top_image['und'][0]['uri']) . "' />";
        }
    }
    if (property_exists($node, "field_top_flash")) {
        if (count($node->field_top_flash)) {
            $vars['top_flash'] = '<div id="flash"></div><script type="text/javascript">
		// <![CDATA[
		
		var so1 = new SWFObject("/sites/default/files/' . $node->field_top_flash['und'][0]['filename'] . '", "bl1", "972", "280", "9", "#ffffff");
		so1.addVariable("page", "home");
		so1.write("flash");
		
		// ]]>
</script>';
        }
    }
    if (property_exists($node, "field_top_head_image")) {
        if (count($node->field_top_head_image)) {
            $vars['field_top_head_image'] = "<img src='" . file_create_url($node->field_top_head_image['und'][0]['uri']) . "' />";
        }
    }
    /**
     * Slideshow on restaurant week
     */
    if (property_exists($node, "field_top_slideshow") && count($node->field_top_slideshow)) {
        $vars['top_slideshow'] = create_slideshow($node);
        $vars['content_class'] = "restaurant";
    }
    /**
     * Restaurant week bottom logos
     */
    if (property_exists($node, "field_bottom_logos") && count($node->field_bottom_logos)) {
        $vars['restaurant_logos'] = create_logos($node);
    }
}

function load_socials($n, &$vars) {
    if (count($n->field_parking_link)) {
        $vars['parking_link'] = $n->field_parking_link['und'][0]['value'];
    }
    if (count($n->field_facebook_link)) {
        $vars['facebook_link'] = $n->field_facebook_link['und'][0]['value'];
    }
    if (count($n->field_twitter_link)) {
        $vars['twitter_link'] = $n->field_twitter_link['und'][0]['value'];
    }
    if (count($n->field_instagram_link)) {
      $vars['instagram_link'] = $n->field_instagram_link['und'][0]['value'];
    }
    if (count($n->field_pinterest_link)) {
        $vars['pinterest_link'] = $n->field_pinterest_link['und'][0]['value'];
    }
    if (count($n->field_youtube_link)) {
        $vars['youtube_link'] = $n->field_youtube_link['und'][0]['value'];
    }
}

function create_slideshow($n) {
    $output = "";
    $output .= "<div id='top-slideshow'><div class='slides_container'>";
    for ($c = 0; $c < count($n->field_top_slideshow['und']); $c++) {
        $output .= "<div class='slide'>";
        $field_id = $n->field_top_slideshow['und'][$c]['value'];
        $collection = field_collection_item_load($field_id);
        if (count($collection->field_slide_image)) {
            $output .= "<img src='" . file_create_url($collection->field_slide_image['und'][0]['uri']) . "' />";
        }
        $output .= "</div>";
    }
    $output .= "</div>";
    $output .= "<a href='#' class='prev'><img src='" . base_path() . path_to_theme() . "/img/arrow_prev.png' width='17' height='55' alt='Arrow Prev'></a>";
    $output .= "<a href='#' class='next'><img src='" . base_path() . path_to_theme() . "/img/arrow_next.png' width='17' height='55' alt='Arrow Next'></a>";
    $output .= "</div>";
    return $output;
}

function create_logos($n) {
    $output = "";
    foreach ($n->field_bottom_logos['und'] as $field) {
        $field_id = $field['value'];
        $collection = field_collection_item_load($field_id);
        if (count($collection->field_logo_link)) {
            $output .= "<a href='" . $collection->field_logo_link['und'][0]['value'] . "'>";
        }
        if (count($collection->field_logo)) {
            $output .= "<img src='" . file_create_url($collection->field_logo['und'][0]['uri']) . "' />";
        }
        if (count($collection->field_logo_link)) {
            $output .= "</a>";
        }
    }
    return $output;
}
