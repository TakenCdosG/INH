<?php
/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
<div id="home_wrapper">
    <div id="home">
        <div id="fotorama_home" class="hidden-xs ">
            <h2>What's Happening in New Haven</h2>
            <div id="fotorama_home_init" class="hidden-xs"
                 data-width="100%"
                 data-height="263"
                 data-nav="false"
                 data-arrows="false">
                <?php
                for ($c = 0; $c < count($content['field_slideshow']['#items']); $c++) {
                    print "<div class='slide'>";
                    $field_id = $content['field_slideshow']['#items'][$c]['value'];
                    $collection = $content['field_slideshow'][$c]['entity']['field_collection_item'][$field_id];
                    $target = ( $c != 1 ? "target='_blank'" : "");
                    if (array_key_exists("field_slide_image", $collection)) {
                        if (array_key_exists('field_text_link', $collection)) {
                            print "<a href='" . $collection['field_text_link']['#items'][0]['value'] . "' $target>";
                        }
                        print "<img src='" . file_create_url($collection['field_slide_image']['#items'][0]['uri']) . "' />";
                        if (array_key_exists('field_text_link', $collection)) {
                            print "</a>";
                        }
                    }
                    if (array_key_exists('field_slide_text', $collection)) {
                        print "<div class='caption'>";
                        if (array_key_exists('field_text_link', $collection)) {
                            print "<a href='" . $collection['field_text_link']['#items'][0]['value'] . "' $target>";
                        }
                        print $collection['field_slide_text']['#items'][0]['value'];
                        if (array_key_exists('field_text_link', $collection)) {
                            print "</a>";
                        }
                        print "</div>";
                    }
                    print "</div>";
                }
                ?>
            </div>
            <a href="#" class="prev arrow"><img src="<?php print base_path() . path_to_theme(); ?>/img/arrow_prev.png" width="17" height="55" alt="Arrow Prev"></a>
            <a href="#" class="next arrow"><img src="<?php print base_path() . path_to_theme(); ?>/img/arrow_next.png" width="17" height="55" alt="Arrow Next"></a>
        </div>
        <div id="home-tabs">
            <div id="tabs-headers">
                <h3 class="active col-sm-4 col-xs-12"><a href="#calendar-tab">Events<br /><strong>Calendar</strong></a></h3>
                <h3 class=" col-sm-3 col-xs-12" id="video-tab-header"><a href="#video-tab"><strong>video</strong></a></h3>
                <h3 class=" col-sm-5 col-xs-12"><a href="#news-tab">New Haven<br /><strong>in the news</strong></a></h3>
            </div>
            <div id="tabs-content">
                <div id="calendar-tab">
                    <div id="calendar-tab-wrapper">
                        <ul>

	                        <?php
	                        	/*print views_embed_view("list_events_calendar", "page", '');
								 */
								for ($c = 0; $c < count($content['field_events_calendar']['#items']); $c++) {
									print "<li class='col-sm-4'><div class='calendar-tab-item'>";
				                    $field_id = $content['field_events_calendar']['#items'][$c]['value'];
				                    $collection = $content['field_events_calendar'][$c]['entity']['field_collection_item'][$field_id];
									//calendar-tab-item-text
									$url = "";
									if (array_key_exists("field_calendar_url", $collection)) {
										$url = $collection['field_calendar_url']['#items'][0]['value'];
									}
				                    if (array_key_exists("field_calendar_date", $collection)) {
				                    	print "<div class='calendar-tab-item-title'>";
										if ($url != "") {
											print "<a href='" . $url . "' target='_blank'>";
										}
				                    	$start_date = $collection['field_calendar_date']['#items'][0]['value'];
				                    	$ending_date = $collection['field_calendar_date']['#items'][0]['value2'];
										print date("F j", strtotime($start_date));
										if ($ending_date != $start_date) {
											print " - " . date("F j", strtotime($ending_date));
										}
				                        if ($url != "") {
											print "</a>";
										}
										print "</div>";
									}
				                    if (array_key_exists('field_calendar_image', $collection)) {
				                        print "<div class='calendar-tab-item-img'>";
										if ($url != "") {
											print "<a href='" . $url . "' target='_blank'>";
										}
				                        print "<img src='" . file_create_url($collection['field_calendar_image']['#items'][0]['uri']) . "' />";
										if ($url != "") {
											print "</a>";
										}
				                        print "</div>";
				                    }
									if (array_key_exists('field_calendar_text', $collection)) {
				                        print "<div class='calendar-tab-item-text'><p>";
										if ($url != "") {
											print "<a href='" . $url . "' target='_blank'>";
										}
				                        print $collection['field_calendar_text']['#items'][0]['value'];
										if ($url != "") {
											print "</a>";
										}
				                        print "</p></div>";
				                    }
				                    print "</div></li>";
				                }
	                        ?>
                        </ul>
                    </div>
                    <div id="calendar-tab-link"><a href="/summercalendar" target="_blank">full calendar ></a></div>
                    <div id="calendar-tab-link"><a href="http://portal.infonewhaven.com/infonewhavencalendar/calendar/" target="_blank">CLICK HERE TO LIST YOUR NEW HAVEN EVENT ></a></div>
                </div>
                <div id="video-tab">
                  <div class="home_widgets">
                    <?php print render($content['field_bottom_widgets']); ?>
                  </div>
                </div>
                <div id="news-tab"> 
                    <?php
                    //$get_news_home  = get_news_home($content["field_new_haven_in_the_news"]);
                    //print $get_news_home;
                    print views_embed_view('news', 'block_1');
                    print "<div id='news-tab-link'><a href='content/new-haven-news'>More News&gt;</a></div>";
                    ?>
                </div>   
            </div>
        </div>

    </div>
</div>
