<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 */
?>
<div id="top-header">
    <?php print render($page['top_header']); ?>
</div>
<div id="header-wrapper" class="<?php
    if (isset($content_class)) {
        print $content_class;
    }
    ?>">
    <div id="header">
        <?php include("header.inc"); ?>
    </div>
</div>
<div id="page-wrapper" class="<?php
        if (isset($content_class)) {
            print $content_class;
        }
        ?>">

    <?php if (isset($top_image)): ?>
        <div class="top_image">
            <?php print $top_image; ?>
        </div>
    <?php endif; ?>

    <?php if (!isset($top_image) && isset($top_flash)): ?>
        <div class="top_image">
            <?php print $top_flash; ?>
        </div>
    <?php endif; ?>

    <?php if (isset($top_slideshow)): ?>
        <?php print $top_slideshow; ?>
    <?php endif; ?>

    <?php if (!drupal_is_front_page() && $breadcrumb): ?>
        <div id="breadcrumb"><?php print $breadcrumb; ?></div>
    <?php endif; ?>

    <?php print $messages; ?>

    <div id="main-wrapper">

        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

        <?php if ($page['sidebar_left']): ?>
            <div id="sidebar-left" class="column sidebar">
                <?php print render($page['sidebar_left']); ?>
            </div>
        <?php endif; ?>


        <?php if ($page['menu_links_right']) { ?>
            <div id="sidebar-right" class="column sidebar">
                <?php print render($page['menu_links_right']); ?>
            </div>
        <?php } else { ?>
            <?php if ($page['sidebar_right']): ?>
                <div id="sidebar-right" class="column sidebar">
                    <?php print render($page['sidebar_right']); ?>
                </div>
            <?php endif; ?>

        <?php } ?>




        <div id="content" class="column">
            <?php print render($page['main_content']); ?>


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

                <div id="google_map_parking"><?php print views_embed_view('parking_view'); ?></div>

            <?php } ?>



        </div>

    </div>

</div>
<?php if (isset($restaurant_logos)): ?>
    <div id="restaurant-week-logos"><?php print $restaurant_logos; ?></div>
<?php endif; ?>
<div id="footer">
    <?php include("footer.inc"); ?>
</div>