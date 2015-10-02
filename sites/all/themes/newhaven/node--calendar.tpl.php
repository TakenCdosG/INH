<?php

$nid = 46276;
$node_slideshow = node_load($nid);
?>
<div id="fotorama_container">
<div class="fotorama hidden-xs"
     data-width="100%"
     data-height="263"
     data-nav="false"
     data-arrows="always"
    >
        <?php
        for ($c = 0; $c < count($node_slideshow->field_slideshow['und']); $c++) {
            print "<div class='slide'>";
            $field_id = $node_slideshow->field_slideshow['und'][$c]['value'];
            $collection = entity_load('field_collection_item', array($field_id));
           //dsm($collection);
            $target = ( $c != 1 ? "target='_blank'" : "");
            if (array_key_exists("field_slide_image", $collection[$field_id])) {
                if (array_key_exists('field_text_link', $collection[$field_id])  and !empty($collection[$field_id]->field_text_link['und'][0]['value'])) {
                    print "<a href='" . $collection[$field_id]->field_text_link['und'][0]['value'] . "' $target>";
                }
                print "<img src='" . file_create_url($collection[$field_id]->field_slide_image['und'][0]['uri']) . "' />";

                if (array_key_exists('field_text_link', $collection[$field_id])  and !empty($collection[$field_id]->field_text_link['und'][0]['value'])) {
                    print "</a>";
                }
            }
            if (array_key_exists('field_slide_text', $collection[$field_id]) and !empty($collection[$field_id]->field_text_link['und'][0]['value'])) {
                print "<div class='caption'>";

                if (array_key_exists('field_text_link', $collection[$field_id])) {
                    print "<a href='" . $collection[$field_id]->field_text_link['und'][0]['value'] . "' $target>";
                }
                print $collection[$field_id]->field_slide_text['und'][0]['value'];

                if (array_key_exists('field_text_link', $collection[$field_id])) {
                    print "</a>";
                }
                print "</div>";
            }
            print "</div>";
        }
        ?>
</div>
</div>
<div class="internal">
    <div id="breadcrumb_calendar" class="calendar_show"><ul><li><a href="/">Home</a></li><li>&gt;</li><li><a href="/<?php print $breadcrumb; ?>" class="active">Calendar</a></li></ul></div>
    <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
    <ul class="tab-calendar">

        <li class="week">
            <a href=" <?php echo url('calendar/week'); ?>"><img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/week.png"/> WEEK</a>
        </li>

        <li class="month">
            <a href=" <?php echo url('calendar'); ?>"><img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/month.png"/> MONTH</a>
        </li>

    </ul>
    <div class="content"<?php print $content_attributes; ?>>
        <?php
        // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        //print render($content);
        ?>
            <?php print render($content['body']); ?>
    </div>
</div>
