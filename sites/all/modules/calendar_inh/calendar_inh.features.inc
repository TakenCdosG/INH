<?php
/**
 * @file
 * calendar_inh.features.inc
 */

/**
 * Implements hook_views_api().
 */
function calendar_inh_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function calendar_inh_node_info() {
  $items = array(
    'calendar' => array(
      'name' => t('Calendar'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'event_calendar' => array(
      'name' => t('Event Calendar'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
