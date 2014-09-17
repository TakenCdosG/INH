<?php
/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<?php
$nid = 46276;
$node = node_load($nid);
/*$items = field_get_items('node', $node, 'field_slideshow_calendars', $node->language);
foreach ($items as $item) {
    $fc = field_collection_field_get_entity($item); // Do something. 
}*/
$field_slideshow_calendar = $node->field_slideshow_calendars["und"];
?>

<?php if (count($field_slideshow_calendar) > 0): ?>
    <div id="slideshow">
        <div class="slides_container">
            <?php
            for ($c = 0; $c < count($field_slideshow_calendar); $c++) {
                print "<div class='slide'>";
                print "<img src='" . file_create_url($field_slideshow_calendar[$c]['uri']) . "' />";
                print "</div>";
            }
            ?>
        </div>
        <a href="#" class="prev"><img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/arrow_prev.png" width="39" height="39" alt="Arrow Prev"></a>
        <a href="#" class="next"><img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/arrow_next.png" width="39" height="39" alt="Arrow Next"></a>
    </div>
<?php endif; ?>

<div class="internal">
    <div id="breadcrumb_calendar" class="calendar_show"><ul><li><a href="/">Home</a></li><li>&gt;</li><li><a href="/<?php print $breadcrumb; ?>" class="active">Calendar</a></li></ul></div>
    <h2>Calendar</h2>    
    <div class="content"<?php print $content_attributes; ?>>
        <ul class="tab">
        <li class="week">
            <a href=" <?php echo url('calendar/week'); ?>"><img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/week.png"/> WEEK</a>
        </li>
        <li class="month">
            <a href=" <?php echo url('calendar/'); ?>"> <img src="<?php print base_path() . path_to_theme(); ?>/img/calendar/month.png"/> MONTH</a>
        </li>
    </ul>
        <?php $args = $view->args[0]; ?>
        <?php $date_explode = explode("-", $args); ?>
        <?php $year_explode = $date_explode[0]; ?>
        <div class="<?php print $classes; ?>">
            <?php if ($rows): ?>
                <div class="view-content">
                    <div id="wrapper_calendar"><div id="calendar_embed">Loading...</div><script type="text/javascript" src="http://portal.infonewhaven.com/infonewhavencalendar/calendar/?f=l&d=<?php echo $args; ?>&e=<?php echo $args; ?>&output=embed&amp;template=upcoming&amp;div=calendar_embed">// <![CDATA[
                        /**/
                        // ]]></script></div>
                </div>
            <?php elseif ($empty): ?>
                <div class="view-empty">
                    <?php print $empty; ?>
                </div>
            <?php endif; ?>

            <?php if ($pager): ?>
                <?php print $pager; ?>
            <?php endif; ?>

            <?php if ($attachment_after): ?>
                <div class="attachment attachment-after">
                    <?php print $attachment_after; ?>
                </div>
            <?php endif; ?>

            <?php if ($more): ?>
                <?php print $more; ?>
            <?php endif; ?>

            <?php if ($footer): ?>
                <div class="view-footer">
                    <?php print $footer; ?>
                </div>
            <?php endif; ?>

            <?php if ($feed_icon): ?>
                <div class="feed-icon">
                    <?php print $feed_icon; ?>
                </div>
            <?php endif; ?>

        </div>
        <?php /* class view */ ?>
    </div>
</div>

<script type="text/javascript">
     
    $('#calendar_embed').bind("DOMNodeInserted DOMNodeRemoved",function(){
        var new_title = $("#calendar_embed #calendar table thead tr.header th").html();
        if(new_title !== undefined){
            var new_date = new_title + ", <?php echo $year_explode; ?>";
            $("#calendar_embed #calendar_header h2#calendar_title").html(new_date);
        }
    });
</script>
