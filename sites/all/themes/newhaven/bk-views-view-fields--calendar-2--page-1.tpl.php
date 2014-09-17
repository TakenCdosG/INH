<?php
/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
if ($fields['field_stream_event']->content == "") {
    //$src="/".path_to_theme()."/img/calendarEvent1.jpeg";
    $src = "";
} else {
    $src = "http://portal.infonewhaven.com/portal/stream?id=" . $fields['field_stream_event']->content . "&w=90&h=97";
}

$format = get_format_date_calendar($fields['field_date_event']->content);
dsm($format);
?>
hola
<div class="calendar-tab-item" >
    <div class="calendar-tab-item-title giovanny"><a href="<?php print $fields['field_url_event']->content; ?>" target="_blank"><?php print $format; ?></a></div>
    <?php if ($src != "") { ?>
        <div class="calendar-tab-item-img giovanny">
            <a href="<?php print $fields['field_url_event']->content; ?>" target="_blank"><img src="<?php print $src ?>" width="90" />
            </a>
        </div>
    <?php } ?>

    <div class="calendar-tab-item-text giovanny">
        <p><a href="<?php print $fields['field_url_event']->content; ?>" target="_blank"><?php print $fields['field_title_event']->content; ?></a></p>
    </div>
</div>