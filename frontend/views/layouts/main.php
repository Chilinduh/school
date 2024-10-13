<?php

/** @var \yii\web\View $this */
/** @var string $content */

use common\widgets\Alert;
use frontend\assets\AppAsset;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<!-- saved from url=(0034) -->
<html lang="en-US" class=" js_active  vc_desktop  vc_transform  vc_transform ">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">

    <title>Курс: WEB-разработчик за 9 месяцев</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script src="/files/custom.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-H4Q3S7VS5R');
    </script>
    <meta name="robots" content="max-image-preview:large">
    <link rel="stylesheet" href="/files/style.min.css" type="text/css" media="all">
    <link rel="stylesheet" href="/files/custom.css" type="text/css" media="all">
    <style id="wp-block-library-theme-inline-css" type="text/css">
        .wp-block-audio :where(figcaption) {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-audio :where(figcaption) {
            color: #ffffffa6
        }

        .wp-block-audio {
            margin: 0 0 1em
        }

        .wp-block-code {
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: Menlo, Consolas, monaco, monospace;
            padding: .8em 1em
        }

        .wp-block-embed :where(figcaption) {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-embed :where(figcaption) {
            color: #ffffffa6
        }

        .wp-block-embed {
            margin: 0 0 1em
        }

        .blocks-gallery-caption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .blocks-gallery-caption {
            color: #ffffffa6
        }

        :root :where(.wp-block-image figcaption) {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme :root :where(.wp-block-image figcaption) {
            color: #ffffffa6
        }

        .wp-block-image {
            margin: 0 0 1em
        }

        .wp-block-pullquote {
            border-bottom: 4px solid;
            border-top: 4px solid;
            color: currentColor;
            margin-bottom: 1.75em
        }

        .wp-block-pullquote cite, .wp-block-pullquote footer, .wp-block-pullquote__citation {
            color: currentColor;
            font-size: .8125em;
            font-style: normal;
            text-transform: uppercase
        }

        .wp-block-quote {
            border-left: .25em solid;
            margin: 0 0 1.75em;
            padding-left: 1em
        }

        .wp-block-quote cite, .wp-block-quote footer {
            color: currentColor;
            font-size: .8125em;
            font-style: normal;
            position: relative
        }

        .wp-block-quote.has-text-align-right {
            border-left: none;
            border-right: .25em solid;
            padding-left: 0;
            padding-right: 1em
        }

        .wp-block-quote.has-text-align-center {
            border: none;
            padding-left: 0
        }

        .wp-block-quote.is-large, .wp-block-quote.is-style-large, .wp-block-quote.is-style-plain {
            border: none
        }

        .wp-block-search .wp-block-search__label {
            font-weight: 700
        }

        .wp-block-search__button {
            border: 1px solid #ccc;
            padding: .375em .625em
        }

        :where(.wp-block-group.has-background) {
            padding: 1.25em 2.375em
        }

        .wp-block-separator.has-css-opacity {
            opacity: .4
        }

        .wp-block-separator {
            border: none;
            border-bottom: 2px solid;
            margin-left: auto;
            margin-right: auto
        }

        .wp-block-separator.has-alpha-channel-opacity {
            opacity: 1
        }

        .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
            width: 100px
        }

        .wp-block-separator.has-background:not(.is-style-dots) {
            border-bottom: none;
            height: 1px
        }

        .wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
            height: 2px
        }

        .wp-block-table {
            margin: 0 0 1em
        }

        .wp-block-table td, .wp-block-table th {
            word-break: normal
        }

        .wp-block-table :where(figcaption) {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-table :where(figcaption) {
            color: #ffffffa6
        }

        .wp-block-video :where(figcaption) {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-video :where(figcaption) {
            color: #ffffffa6
        }

        .wp-block-video {
            margin: 0 0 1em
        }

        :root :where(.wp-block-template-part.has-background) {
            margin-bottom: 0;
            margin-top: 0;
            padding: 1.25em 2.375em
        }
    </style>
    <style id="safe-svg-svg-icon-style-inline-css" type="text/css">
        .safe-svg-cover {
            text-align: center
        }

        .safe-svg-cover .safe-svg-inside {
            display: inline-block;
            max-width: 100%
        }

        .safe-svg-cover svg {
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            width: 100%
        }

    </style>
    <style id="classic-theme-styles-inline-css" type="text/css">
        /*! This file is auto-generated */
        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
    </style>
    <style id="global-styles-inline-css" type="text/css">
        :root {
            --wp--preset--aspect-ratio--square: 1;
            --wp--preset--aspect-ratio--4-3: 4/3;
            --wp--preset--aspect-ratio--3-4: 3/4;
            --wp--preset--aspect-ratio--3-2: 3/2;
            --wp--preset--aspect-ratio--2-3: 2/3;
            --wp--preset--aspect-ratio--16-9: 16/9;
            --wp--preset--aspect-ratio--9-16: 9/16;
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--color--brand-color: #ff5e3a;
            --wp--preset--color--beige-dark: #A1824F;
            --wp--preset--color--dark-strong: #24262B;
            --wp--preset--color--dark-light: #32353C;
            --wp--preset--color--grey-strong: #838998;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 14px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 17px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--font-size--extra-small: 13px;
            --wp--preset--font-size--normal: 15px;
            --wp--preset--font-size--larger: 20px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flex {
            display: flex;
        }

        .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .is-layout-flex > :is(*, div) {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        .is-layout-grid > :is(*, div) {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :root :where(.wp-block-pullquote) {
            font-size: 1.5em;
            line-height: 1.6;
        }
    </style>
    <link rel="stylesheet" id="wphb-1-css" href="/files/c6ea8cc5ce6f07cd97e3433fad0ae077.css" type="text/css"
          media="all">
    <style id="wphb-1-inline-css" type="text/css">
        :root {
            --clb-color-primary: #ff5e3a;
            --clb-link-hover-color: #ff5e3a;
            --clb-border-radius: 10px;
            --clb-button-border-radius: 10px;
            --clb-titles-font-family: 'DM Sans', sans-serif;
        }

        .heading .title .highlighted-text {
            background-image: linear-gradient(rgba(255, 94, 58, 0.5), rgba(255, 94, 58, 0.5));
        }

        .content-area a:not(.-unlink):not(.tag), .comment-form a:not(.-unlink):not(.tag), .comment-content a:not(.-unlink):not(.tag), .project-content a:not(.-unlink):not(.tag), .woocommerce-product-details__short-description a:not(.-unlink):not(.tag), .wpb-content-wrapper a:not(.-unlink):not(.tag), .elementor a:not(.-unlink):not(.tag) {
            --clb-link-color: rgba(255, 94, 58, 0.85);
        }

        .counter {
            margin-right: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(99, 93, 111, 0.65);
            float: left;
        }

        @media screen and (min-width: 1181px) {
            .clb__image img {
                max-width: 250px !important;
            }
        }

        @media screen and (max-width: 768px) {
            .counter-box {
                margin-right: 20px;
            }

            .vc_row .vc_custom_1608804866788 {
                padding-left: 0px !important;
            }

            .vc_row .vc_custom_1608803074218 .wpb_wrapper {
                padding-right: 20px;
                padding-left: 20px;
            }
        }

        .site-footer {
            background-color: rgba(255, 255, 255, 0);
        }

        @media screen and (max-width: 768px) {
            .header, .mobile-overlay {
                opacity: 0;
            }
        }

        .popup-subscribe .thumbnail {
            background-color:;
            background-image: url('/files/oh__demo6__2b-min.jpg');
            background-size: cover;
            background-position: center center;
            background-repeat: repeat;
        }

        .page-headline::after {
            background-color:;
        }

        .project:not(.-layout8) .-with-slider .overlay {
            background-color: 1;
        }

        .project .video-button:not(.-outlined) .icon-button {
            background-color: 1;
        }

        @media screen and (min-width: 1181px) {
            .popup-subscribe {
                width: 400px;
            }
        }

        @media screen and (min-width: 769px) and (max-width: 1180px) {
        }

        @media screen and (max-width: 768px) {
        }
    </style>
    <script></script>
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc.php?rsd">
    <meta name="generator" content="WordPress 6.6.2">
    <link rel="canonical" href="">
    <link rel="shortlink" href="">
    <meta name="generator"
          content="Elementor 3.24.5; features: additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-auto">
    <style>
        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
            background-image: none !important;
        }

        @media screen and (max-height: 1024px) {
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }

        @media screen and (max-height: 640px) {
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }
    </style>
    <meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress.">
    <link rel="icon"
          href="/files/Opz4s8nI-cropped-favicon-32x32.png"
          sizes="32x32">
    <link rel="icon"
          href="/files/Opz4s8nI-cropped-favicon-192x192.png"
          sizes="192x192">
    <link rel="apple-touch-icon"
          href="/files/Opz4s8nI-cropped-favicon-180x180.png">
    <meta name="msapplication-TileImage"
          content="/files/Opz4s8nI-cropped-favicon-270x270.png">
    <style id="sccss">
        /*Promo banner --- starts*/
        .promo-banner {
            display: none !important;
        }

        /*html{margin-top:42px!important}
@media screen and (max-width:768px){.promo-banner{justify-content:space-around}}
@media screen and (min-width:769px){.portfolio-onepage-slider .clb-slider-nav-btn{margin-bottom:2.75rem}.with-header-5 .header.header-5:not(.-mobile),.with-header-6 .header.header-6:not(.-mobile),.with-header-7 .header.header-7:not(.-mobile){top:44px}.with-header-5 .back-link,.with-header-6 .back-link,.with-header-7 .back-link{padding-top:3.5vh}.header.header-5:not(.-mobile) .header-wrap,.header.header-6:not(.-mobile) .header-wrap,.header.header-7:not(.-mobile) .header-wrap{height:calc(100vh - 44px)}}
.promo-banner{display:flex;height:42px;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;font-size:15px;text-align:center;font-family:inherit;
    color: #222;
    background: linear-gradient(
        215deg,
        rgba(129, 255, 208, 1) 0%,
        rgba(197, 255, 107, 1) 100%
    );
}
.promo-banner a, .promo-banner a:hover{display:inline-flex;align-items:center;height:30px;padding:0.75rem;border-radius:6px;font-weight:700;font-size:13.5px;margin-left:1rem;margin-top:-2px;
    color: #fff !important;
		background-color: #222;
}
.promo-banner b::after{
		content: "STEALS OF THE WEEK!";
}
.promo-banner span::after{
		content: "Get Ohio for $35 Only.";
}*/
        /*Promo banner --- ends*/</style>
    <style type="text/css" data-type="vc_shortcodes-custom-css">
        .vc_custom_1719820467959 {
            background-color: rgba(146, 95, 141, 0.08) !important;
            *background-color: rgb(146, 95, 141) !important;
            border-radius: 20px !important;
        }

        .vc_custom_1719820480634 {
            background-color: rgba(146, 95, 141, 0.08) !important;
            *background-color: rgb(146, 95, 141) !important;
            border-radius: 20px !important;
        }

        .vc_custom_1719820492121 {
            background-color: rgba(117, 146, 95, 0.08) !important;
            *background-color: rgb(117, 146, 95) !important;
            border-radius: 20px !important;
        }

        .vc_custom_1719820505714 {
            /*background-color: rgba(146, 95, 141, 0.08) !important;
            *background-color: rgb(146, 95, 141) !important;*/
            border-radius: 20px !important;
        }

        .vc_custom_1628166013825 {
            margin-bottom: 0px !important;
        }

        .vc_custom_1640256908186 {
            padding-left: 26% !important;
        }

        .vc_custom_1640256914182 {
            padding-left: 26% !important;
        }

        .vc_custom_1640256965606 {
            padding-left: 26% !important;
        }

        .vc_custom_1640257004317 {
            padding-left: 26% !important;
        }

        .vc_custom_1640256957922 {
            padding-left: 26% !important;
        }

        .vc_custom_1640256954412 {
            padding-left: 26% !important;
        }

        .vc_custom_1628165984912 {
            margin-bottom: 0px !important;
        }

        .vc_custom_1628165984912 {
            text-align: center !important;
        }

        .vc_custom_1628157254855 {
            margin-top: 15px !important;
            margin-bottom: 15px !important;
        }

        .vc_custom_1628157269605 {
            margin-top: 15px !important;
            margin-bottom: 15px !important;
        }

        .vc_custom_1628165996400 {
            margin-bottom: 0px !important;
        }

        .vc_custom_1694008321081 {
            margin-top: -20px !important;
        }

        .vc_custom_1657103769212 {
            padding-left: 20px !important;
        }

        .vc_custom_1719904867943 {
            padding-top: 50px !important;
            padding-right: 40px !important;
            padding-bottom: 40px !important;
            padding-left: 40px !important;
            background-color: #ffffff !important;
            border-radius: 15px !important;
        }

        .vc_custom_1650635706615 {
            padding-left: 40px !important;
        }

        .vc_custom_1648285176726 {
            margin-bottom: 20px !important;
        }

        .vc_custom_1657103742094 {
            padding-left: 20px !important;
        }

        .vc_custom_1719904877764 {
            padding-top: 50px !important;
            padding-right: 40px !important;
            padding-bottom: 40px !important;
            padding-left: 40px !important;
            background-color: #ffffff !important;
            border-radius: 15px !important;
        }

        .vc_custom_1650635897095 {
            padding-left: 40px !important;
        }

        .vc_custom_1648285004892 {
            margin-bottom: 20px !important;
        }

        .vc_custom_1657103754384 {
            padding-left: 20px !important;
        }

        .vc_custom_1719904887181 {
            padding-top: 50px !important;
            padding-right: 40px !important;
            padding-bottom: 40px !important;
            padding-left: 40px !important;
            background-color: #ffffff !important;
            border-radius: 15px !important;
        }

        .vc_custom_1650635908529 {
            padding-left: 40px !important;
        }

        .vc_custom_1648285186008 {
            margin-bottom: 20px !important;
        }

        .vc_custom_1628157351242 {
            margin-top: 30px !important;
            margin-bottom: 30px !important;
        }

        .vc_custom_1628157519458 {
            margin-top: 0px !important;
            margin-bottom: 0px !important;
        }</style>
    <noscript>
        <style> .wpb_animate_when_almost_visible {
                opacity: 1;
            }</style>
    </noscript>

    <?php $this->head() ?>
</head>
<body class="home page-template-default page page-id-152197 wp-embed-responsive ohio-theme-3-4-4 with-header-3 with-left-mobile-hamburger with-boxed-container with-switcher with-fixed-search with-spacer with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor wpb-js-composer js-comp-ver-7.9 vc_responsive elementor-default elementor-kit-6 page-is-loaded"
      data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
<?php $this->beginBody() ?>
<div id="page" class="site">

    <ul class="elements-bar right -unlist dynamic-typo">
        <li>
            <div class="social-bar">
                <ul class="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
                    <li class="caption">Есть вопросы? Пишите нам в </li>
                    <li>
                        <a href="https://t.me/Digitside" rel="nofollow">Телеграм</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <div class="boxed-container">
        <header id="masthead" class="header header-3 both-types" data-header-fixed="true"
                data-fixed-initial-offset="150">
            <div class="header-wrap page-container">
                <div class="header-wrap-inner">
                    <div class="left-part">
                        <div class="desktop-hamburger -left">

                            <button aria-label="Open the menu" aria-controls="site-menu" aria-expanded="false" class="hamburger-button">
                                <div class="hamburger icon-button">
                                    <i class="icon"></i>
                                </div>
                            </button>
                        </div>
                        <div class="mobile-hamburger -left">

                            <button aria-label="Open the menu" aria-controls="site-menu" aria-expanded="false"
                                    class="hamburger-button">
                                <div class="hamburger icon-button">
                                    <i class="icon"></i>
                                </div>
                            </button>
                        </div>
                        <div class="branding">
                            <a class="branding-title titles-typo -undash -unlink" href="http://digitside.ru/" rel="home">
                                <div class="logo">
                                    digit<span style="color:#ff5e3a">side</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="right-part right">

                        <nav id="site-navigation" class="nav with-counters with-mobile-menu"
                             data-mobile-menu-second-click-link="">

                            <div class="mobile-overlay menu-mobile-overlay">
                                <div class="overlay"></div>
                                <div class="close-bar">
                                    <button aria-label="close" class="icon-button -overlay-button">
                                        <i class="icon">
                                            <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                                            </svg>
                                        </i>
                                    </button>


                                    <button class="icon-button search-global fixed dynamic-typo btn-round-light"
                                            data-nav-search="true">
                                        <i class="icon">
                                            <svg class="default" xmlns="http://www.w3.org/2000/svg" height="24"
                                                 viewBox="0 -960 960 960" width="24">
                                                <path d="m779-128.5-247.979-248Q501.5-352.5 463-339.25T381.658-326q-106.132 0-179.645-73.454t-73.513-179.5Q128.5-685 201.954-758.5q73.454-73.5 179.5-73.5T561-758.487q73.5 73.513 73.5 179.645 0 42.842-13.5 81.592T584-429l248 247.5-53 53ZM381.5-401q74.5 0 126.25-51.75T559.5-579q0-74.5-51.75-126.25T381.5-757q-74.5 0-126.25 51.75T203.5-579q0 74.5 51.75 126.25T381.5-401Z"></path>
                                            </svg>
                                        </i>
                                    </button>

                                </div>
                                <div class="holder">
                                    <div id="mega-menu-wrap" class="nav-container">

                                        <ul id="menu-primary" class="menu">
                                            <li id="nav-menu-item-227246-67005dfe43295" class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#plans" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>План курса</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227269-67005dfe43d75" class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#speakers" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>Спикеры</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227350-67005dfe447ad" class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#price" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>Стоимость</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227389-67005dfe450ec" class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#faq" class="menu-link -undash -unlink main-menu-link item-title"><span>Ответы на вопросы</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul id="mobile-menu" class="mobile-menu menu">
                                            <li id="nav-menu-item-227246-67005dfe49af6"
                                                class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#plans" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>План курса</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227269-67005dfe4a4ec"
                                                class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#speakers" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>Спикеры</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227350-67005dfe4af49"
                                                class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#price" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>Стоимость</span>
                                                </a>
                                            </li>
                                            <li id="nav-menu-item-227389-67005dfe4b99c" class="mega-menu-item nav-item menu-item-depth-0">
                                                <a href="#faq" class="menu-link -undash -unlink main-menu-link item-title">
                                                    <span>Ответы на вопросы</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="copyright">
                                        <p>© 2024 All rights reserved | <a  href="https://smezentsev.ru"><b>MS Digit</b></a> </p>
                                    </div>
                                </div>

                            </div>
                        </nav>
                        <ul class="menu-optional -unlist">
                            <li class="button-group">
                                <a href="#faq" class="button -small btn-optional">Есть вопросы?</a>
                            </li>
                        </ul>
                        <div class="close-menu"></div>
                    </div>
                </div>
            </div>
        </header>
        <div class="clb-popup hamburger-nav ">
            <div class="close-bar -left-flex">
                <button aria-label="close" class="icon-button -light">
                    <i class="icon">
                        <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                        </svg>
                    </i>
                </button>
            </div>
            <div class="hamburger-nav-holder">
                <ul id="secondary-menu" class="menu">
                    <li id="nav-menu-item-226143-669fff7b1bdaa" class="mega-menu-item nav-item menu-item-depth-0 showed">
                        <a href="#plans" class="menu-link -undash -unlink main-menu-link item-title">
                            <span>План курса</span>
                        </a>
                    </li>
                    <li id="nav-menu-item-226144-669fff7b1bfe3" class="mega-menu-item nav-item menu-item-depth-0 showed">
                        <a href="#speakers" class="menu-link -undash -unlink main-menu-link item-title">
                            <span>Спикеры</span>
                        </a>
                    </li>
                    <li id="nav-menu-item-226145-669fff7b1c0fc"
                        class="mega-menu-item nav-item menu-item-depth-0 showed">
                        <a href="#price" class="menu-link -undash -unlink main-menu-link item-title">
                            <span>Стоимость</span>
                        </a>
                    </li>
                    <li id="nav-menu-item-226145-669fff7b1c0fc" class="mega-menu-item nav-item menu-item-depth-0 showed">
                        <a href="#faq" class="menu-link -undash -unlink main-menu-link item-title">
                            <span>Ответы на вопросы</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="hamburger-nav-details">

                <div class="details-column">
                    <b>Контакты:</b>
                    <br> Высоковольтный проезд д. 1, корп. 3, комната 127
                    <br> ИП Мезенцев С. Н.
                    <br> ИНН 862001640470
                    <br> ОГРН 321774600148128
                </div>
                <div class="details-column">
                    <br>
                    Телеграм: <a href="https://t.me/Digitside" rel="nofollow">@Digitside</a><br>
                    Email: edu@digitside.ru<br>
                    Тел.: +7 (495) 143-15-20,
                    +7 (926) 075-65-05
                </div>

            </div>
        </div>
        <div id="content" class="site-content" data-mobile-menu-resolution="768">
            <div class="header-cap header-2"></div>
            <div class="page-container">
                <div id="primary" class="content-area">

                    <div class="page-content">
                        <main id="main" class="site-main">
                            <article id="post-152197" class="post-152197 page type-page status-publish hentry">
                                <div class="entry-content">
                                    <div class="wpb-content-wrapper">
                                        <div class="vc_row wpb_row vc_row-fluid">
                                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper"></div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-8">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 8vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe547fb">
                                                            <div style="text-align: center;">Курс разработан WEB-студией
                                                                <a href="https://smezentsev.ru" ><b>MS Digit</b></a></div>
                                                        </div>
                                                        <div class="ohio-widget heading clb__heading -center"
                                                             id="ohio-custom-67005dfe5475a">
                                                            <h2> WEB-разработчик за 9 месяцев</h2>
                                                        </div>
                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe547fb">
                                                            <p style="text-align: center;">Телефон для записи: +7 (495)
                                                                143-15-20, +7 (926) 075-65-05
                                                                <br>Оставьте свой телефон или Email - наш менеджер
                                                                свяжется с Вами</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--  Форма обратной свзяи -->
                                        <?php require_once('backcall.php') ?>

                                        <br>
                                        <div class="vc_row wpb_row vc_row-fluid">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__spacer" style="height: 4vh">
                                                            <span class="vc_empty_space_inner"></span></div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640256908186">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center" id="ohio-custom-67005dfe56fa1">

                                                                            <a class="-undash -unlink" href="#" >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/php.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640256914182">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center"
                                                                             id="ohio-custom-67005dfe57677">

                                                                            <a class="-undash -unlink"
                                                                               href="#"
                                                                            >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/sql.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">

                                                                                <img decoding="async"
                                                                                     class="image-inverse -dm-visible"
                                                                                     src="/files/BrandGoogle-Color-SchemeDark.webp"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">


                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640256965606">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center"
                                                                             id="ohio-custom-67005dfe57d06">

                                                                            <a class="-undash -unlink"
                                                                               href="#"
                                                                            >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/yii.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">

                                                                                <img decoding="async"
                                                                                     class="image-inverse -dm-visible"
                                                                                     src="/files/BrandSlack-Color-SchemeDark.webp"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640257004317">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center"
                                                                             id="ohio-custom-67005dfe584a5">

                                                                            <a class="-undash -unlink"
                                                                               href="#"
                                                                            >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/github.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">

                                                                                <img decoding="async"
                                                                                     class="image-inverse -dm-visible"
                                                                                     src="/files/BrandSpotify-Color-SchemeDark.webp"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">


                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640256957922">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center"
                                                                             id="ohio-custom-67005dfe58a5f">

                                                                            <a class="-undash -unlink" href="#"
                                                                            >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/javascript.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">

                                                                                <img decoding="async"
                                                                                     class="image-inverse -dm-visible"
                                                                                     src="/files/BrandIntel-Color-SchemeDark.webp"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">


                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                                                <div class="vc_column-inner vc_custom_1640256954412">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget logo -center"
                                                                             id="ohio-custom-67005dfe58fbe">

                                                                            <a class="-undash -unlink" href="#"
                                                                            >

                                                                                <img decoding="async"
                                                                                     class="image-primary -dm-hidden"
                                                                                     src="/files/docker.png"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">

                                                                                <img decoding="async"
                                                                                     class="image-inverse -dm-visible"
                                                                                     src="/files/BrandLyft-Color-SchemeDark.webp"
                                                                                     srcset=""
                                                                                     sizes="(max-width: 260px) 100vw, 260px"
                                                                                     alt="">


                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space  clb__spacer" style="height: 4vh">
                                                            <span class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-vc-full-width="true" data-vc-full-width-init="true"
                                             class="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1719820467959 vc_row-has-fill"
                                             style="position: relative; left: -81.1648px; box-sizing: border-box; width: 1462.33px; max-width: 1662px; padding-left: 81.165px; padding-right: 81.165px;">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 4vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget heading -left" id="ohio-custom-67005dfe59a68">
                                                                            <h2 class="title">Гарантия трудоустройства<br></h2>
                                                                            <h3 class="title" style="color:#ff5e3a">или возврат средств за курс </h3>
                                                                        </div>
                                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe59ad8">
                                                                            <p>Наши менторы помогут Вам <strong>составить резюме</strong>
                                                                                и найти достойную работу.</p>
                                                                            <p>Наши партнер WEB-студия MS Digit
                                                                                обеспечит Вас <strong>проектной работой</strong>.
                                                                            </p>
                                                                        </div>
                                                                        <div class="vc_empty_space" style="height: 3vh">
                                                                            <span class="vc_empty_space_inner"></span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="wpb_single_image wpb_content_element vc_align_left wpb_content_element vc_custom_1628165984912">

                                                                            <figure class="wpb_wrapper vc_figure">
                                                                                <div class="vc_single_image-wrapper vc_box_border_grey">
                                                                                    <img fetchpriority="high"
                                                                                         style="max-width:400px !important"
                                                                                         decoding="async" width="1649"
                                                                                         height="1491"
                                                                                         src="/files/oh__demo26__1a-min.png"
                                                                                         class="vc_single_image-img attachment-full"
                                                                                         alt=""
                                                                                         title="oh__demo26__1a-min"
                                                                                         sizes="(max-width: 1649px) 100vw, 1649px">
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                        <div class="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                                                             style="height: 30px"><span
                                                                                class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157254855 wpb_content_element  vc_custom_1628157254855 wpb_content_element">
                                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span><span
                                                                                class="vc_sep_holder vc_sep_holder_r"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span>
                                                                        </div>

                                                                        <div class="ohio-widget icon-box -left -left-flex"
                                                                             id="ohio-custom-67005dfe5ae00">


                                                                            <div class="icon-box-content">
                                                                                <h5 class="icon-box-heading">
                                                                                    Обучение</h5>
                                                                                <p>Наши преподаватели помогут Вам освоить профессию с нуля!</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="vc_empty_space  vc_hidden-lg vc_hidden-md"
                                                                             style="height: 2vh"><span
                                                                                class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157254855 wpb_content_element  vc_custom_1628157254855 wpb_content_element">
                                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span><span
                                                                                class="vc_sep_holder vc_sep_holder_r"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span>
                                                                        </div>

                                                                        <div class="ohio-widget icon-box -left -left-flex"
                                                                             id="ohio-custom-67005dfe5b229">

                                                                            <div class="icon-box-content">
                                                                                <h5 class="icon-box-heading">Поиск
                                                                                    работы</h5>
                                                                                <p>Мы поможем Вам найти достойную работу
                                                                                    через hh.ru или проектную работу от
                                                                                    наших партнеров MS Digit</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="vc_empty_space  vc_hidden-lg vc_hidden-md"
                                                                             style="height: 2vh"><span
                                                                                class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157269605 wpb_content_element  vc_custom_1628157269605 wpb_content_element">
                                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span><span
                                                                                class="vc_sep_holder vc_sep_holder_r"><span
                                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                                    class="vc_sep_line"></span></span>
                                                                        </div>

                                                                        <div class="ohio-widget icon-box -left -left-flex"
                                                                             id="ohio-custom-67005dfe5b620">


                                                                            <div class="icon-box-content">
                                                                                <h5 class="icon-box-heading">
                                                                                    Статистика</h5>
                                                                                <p>По статистике 7 из 10 выпускников
                                                                                    трудоустраиваются или находят
                                                                                    проектную работу</p>

                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 5vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row-full-width vc_clearfix"></div>

                                        <!-- Спикеры -->
                                        <div data-vc-full-width="true" data-vc-full-width-init="true"
                                             class="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1719820505714 vc_row-has-fill"
                                             style="position: relative; left: -81.1648px; box-sizing: border-box; width: 1462.33px; max-width: 1662px; padding-left: 81.165px; padding-right: 81.165px;">
                                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper"></div>
                                                </div>
                                            </div>
                                            <div class="text-center wpb_column vc_column_container vc_col-sm-8" id="speakers">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer" style="height: 5vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="ohio-widget heading -center"
                                                             id="ohio-custom-67005dfe70750">
                                                            <h2 class="title">Спикеры</h2>
                                                        </div>
                                                        <div class="vc_empty_space" style="height: 3vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="slider-holder">
                                                            <div class="ohio-widget slider ohio-slider autoheight with-pagination full -nav-inset with-preloader clb-slider visible"
                                                                 id="ohio-custom-67005dfe7082b"
                                                                 data-ohio-slider="{&quot;loop&quot;:true,&quot;navBtn&quot;:true,&quot;autoplay&quot;:false,&quot;autoplayHoverPause&quot;:true,&quot;autoHeight&quot;:true,&quot;slidesCount&quot;:true,&quot;drag&quot;:true,&quot;gap&quot;:&quot;40&quot;,&quot;navContainerClass&quot;:&quot;slider-nav&quot;,&quot;itemsDesktop&quot;:&quot;1&quot;,&quot;itemsTablet&quot;:&quot;1&quot;,&quot;itemsMobile&quot;:&quot;1&quot;,&quot;autoplayTimeout&quot;:&quot;5&quot;}">
                                                                <div class="clb-slider-outer-stage"
                                                                     style="max-width: 826.662px; height: 251.662px;">
                                                                    <div class="clb-slider-stage"
                                                                         style="transform: translate(-2600px, 0px);">

                                                                        <div class="slider-wrap clb-slider-item active"
                                                                             style="min-width: 826.662px; margin-right: 40px;">

                                                                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                                                <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper"></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="wpb_column vc_column_container vc_col-sm-6">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper">
                                                                                            <div class="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                                                                 id="ohio-custom-67005dfe70e90">


                                                                                                <h6 class="testimonial-headline">
                                                                                                    <b>WEB-разработка</b>
                                                                                                </h6>

                                                                                                <p>“Ведущий разработчик MS Digit, с более чем 10-ти летним стажем
                                                                                                    web-разработки”</p>
                                                                                                <div class="holder">

                                                                                                    <div class="avatar" style="background-image: url(/files/1.png);"></div>

                                                                                                    <div class="author">
                                                                                                        <h6 class="title -unspace">
                                                                                                            Сергей М.</h6>
                                                                                                        <p class="author-details -unspace">
                                                                                                            Ведущий
                                                                                                            php-программист
                                                                                                            MS Digit</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slider-wrap clb-slider-item next-slide" style="min-width: 826.662px; margin-right: 40px;">

                                                                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                                                <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper"></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="wpb_column vc_column_container vc_col-sm-6">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper">
                                                                                            <div class="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                                                                 id="ohio-custom-67005dfe7145a">


                                                                                                <h6 class="testimonial-headline">
                                                                                                    <b>WEB-разработка</b>
                                                                                                </h6>
                                                                                                <p> “Fullstack-разработчик Yii2 MS Digit”</p>
                                                                                                <div class="holder">
                                                                                                    <div class="avatar" style="background-image: url(/files/2.png);"></div>

                                                                                                    <div class="author">
                                                                                                        <h6 class="title -unspace">
                                                                                                            Ренат А.</h6>
                                                                                                        <p class="author-details -unspace">
                                                                                                            WEB-разработчик</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                                    <div class="vc_column-inner">
                                                                                        <div class="wpb_wrapper"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div></div>
                                                                </div>
                                                                <div class="clb-slider-nav-btn">
                                                                    <div class="prev-btn icon-button " tabindex="0"><i
                                                                            class="icon">
                                                                            <svg class="default" width="16" height="16"
                                                                                 viewBox="0 0 16 16"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M8,16l1.4-1.4L3.8,9H16V7H3.8l5.6-5.6L8,0L0,8L8,16z"></path>
                                                                            </svg>
                                                                        </i></div>
                                                                    <div class="next-btn icon-button " tabindex="0"><i
                                                                            class="icon">
                                                                            <svg class="default" width="16" height="16"
                                                                                 viewBox="0 0 16 16"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"></path>
                                                                            </svg>
                                                                        </i></div>
                                                                </div>
                                                                <div class="clb-slider-count">
                                                                    <div class="clb-slider-count-current" style="transform: translate(0px, -27.9972px);">
                                                                        <div class="clb-slider-count-number"><span
                                                                                class="clb-slider-pagination-index">2</span>
                                                                        </div>
                                                                        <div class="clb-slider-count-number"><span
                                                                                class="clb-slider-pagination-index">1</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="clb-slider-count-total">2</div>
                                                                </div>
                                                            </div>

                                                            <svg class="spinner sk-preloader hidden"
                                                                 viewBox="0 0 50 50">
                                                                <circle class="path" cx="25" cy="25" r="20" fill="none"
                                                                        stroke-width="4"></circle>
                                                            </svg>
                                                        </div>
                                                        <div class="vc_empty_space  clb__section_spacer" style="height: 5vh"><span class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row-full-width vc_clearfix"></div>

                                        <div data-vc-full-width="true" data-vc-full-width-init="true"
                                             class="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1719820480634 vc_row-has-fill"
                                             style="position: relative; left: -81.1648px; box-sizing: border-box; width: 1462.33px; max-width: 1662px; padding-left: 81.165px; padding-right: 81.165px;">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer" style="height: 8vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="wpb_single_image wpb_content_element vc_align_left wpb_content_element vc_custom_1628165996400">

                                                                            <figure class="wpb_wrapper vc_figure">
                                                                                <div class="vc_single_image-wrapper   vc_box_border_grey">
                                                                                    <img decoding="async" width="1000"
                                                                                         height="828"
                                                                                         src="/files/oh__demo26__3-min.png"
                                                                                         class="vc_single_image-img attachment-full"
                                                                                         alt=""
                                                                                         title="oh__demo26__3-min"
                                                                                         srcset="/files/oh__demo26__3-min-300x248.png 300w, /files/oh__demo26__3-min-768x636.png 768w, /files/oh__demo26__3-min.png 1000w"
                                                                                         sizes="(max-width: 1000px) 100vw, 1000px">
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-1">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper"></div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm" style="height: 3vh"><span
                                                                                class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                        <div class="ohio-widget heading -left"
                                                                             id="ohio-custom-67005dfe5dcd4">

                                                                            <h2 class="title">Шаг за шагом вы научитесь создавать свое web-приложение</h2>
                                                                        </div>
                                                                        <div class="ohio-text-sc"
                                                                             id="ohio-custom-67005dfe5dd7d">
                                                                            <p>Курс начинается с самых азов программирования, терминов, теории и принципов программирования.
                                                                                <strong>С любым образованием</strong> вы сможете понять и освоить материал.</p>
                                                                        </div>
                                                                        <div class="vc_empty_space" style="height: 3vh">
                                                                            <span class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                        <div class="ohio-widget counter -left-icon -left"
                                                                             id="ohio-custom-67005dfe5de62">
                                                                            <div class="counter-number title titles-typo -with-increaser">
                                                                                <div class="holder">
                                                                                    <span class="text-before"></span>
                                                                                    <span class="number">200</span>
                                                                                    <span class="text-after"></span>
                                                                                </div>
                                                                            </div>
                                                                            <h6 class="title">Более 200 часов занятий,
                                                                                <br> консультаций и ДЗ</h6>
                                                                        </div>
                                                                        <div class="ohio-widget counter -left-icon -left"
                                                                             id="ohio-custom-67005dfe5dece">
                                                                            <div class="counter-number title titles-typo -with-increaser">
                                                                                <div class="holder">
                                                                                    <span class="text-before"></span>
                                                                                    <span class="number">50</span>
                                                                                    <span class="text-after"></span>
                                                                                </div>
                                                                            </div>
                                                                            <h6 class="title">Более 50-ти учебных тематик<br> и проектов</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-1">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 6vh"><span class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row-full-width vc_clearfix"></div>

                                        <br>
                                        <!-- План курса -->

                                        <?php require_once('course-plan.php') ?>

                                        <div class="vc_row-full-width vc_clearfix"></div>
                                        <div class="vc_row wpb_row vc_row-fluid" id="price">
                                            <div class="vc_empty_space  clb__section_spacer" style="height: 5vh">
                                                <span class="vc_empty_space_inner"></span>
                                            </div>
                                            <div class="ohio-widget heading -center"
                                                 id="ohio-custom-67005dfe70750">
                                                <h2 class="title">Стоимость</h2>
                                            </div>
                                        </div>
                                        <div class="vc_row wpb_row vc_row-fluid">
                                            <?php if (0) { ?>
                                                <div class="wpb_column vc_column_container vc_col-sm-3">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="vc_empty_space  clb__section_spacer"
                                                                 style="height: 12vh">
                                                                <span class="vc_empty_space_inner"></span>
                                                            </div>
                                                            <div class="ohio-widget heading -left"
                                                                 id="ohio-custom-67005dfe6eb40">
                                                                <h4 class="title"> Скидка 15% при покупке <br
                                                                        class="vc_hidden-xs"> всего курса </h4>
                                                            </div>
                                                            <div class="ohio-text-sc" id="ohio-custom-67005dfe6ebca">
                                                                <p>Our app works for businesses of all sizes and shapes.<br
                                                                        class="vc_hidden-xs">Starting at just
                                                                    <strong>$5 for an agent</strong>.</p>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 3vh"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                            <div class="ohio-widget-holder -left">
                                                                <a href="#"

                                                                   class="ohio-widget button -outlined -small"
                                                                   id="ohio-custom-67005dfe6ed02">
                                                                    Get the Tool
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 12vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="ohio-widget pricing-table -contained card clb__dark_mode_light -left"
                                                             id="ohio-custom-67005dfe6f030" data-tilt="true"
                                                             data-tilt-perspective="6000">
                                                            <div class="pricing-table-headline">
                                                                <h5 class="title">Базовый</h5>
                                                                <p class="subtitle -unspace">При оплате каждый месяц</p>
                                                            </div>
                                                            <div class="pricing-table-price">
                                                                <span class="price-number titles-typo title">12500*</span>
                                                                <span class="tag">в месяц</span>
                                                            </div>

                                                            <div class="pricing-table-features">
                                                                <ul class="-unlist -large">
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Доступ к материалам курса навсегда
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Поддержка менторов в мессенджере
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Программа трудоустройства
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Карьерный курс
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                            <a class="button -small" href="#contact" >Купить курс </a>
                                                        </div>
                                                        <div class="vc_empty_space" style="height: 2vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe6f157">
                                                            <p>* Полная стоимость курса составит: 112 000 руб.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer"
                                                             style="height: 8vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="ohio-widget pricing-table -contained card -with-shadow -left"
                                                             id="ohio-custom-670240e08f9a2" data-tilt="true"
                                                             data-tilt-perspective="6000"
                                                             style="will-change: transform; transform: perspective(6000px) rotateX(0deg) rotateY(0deg);">
                                                            <div class="pricing-table-headline">
                                                                <h5 class="title">Индивидуальный</h5>
                                                                <p class="subtitle -unspace">При оплате каждый месяц</p>
                                                            </div>
                                                            <div class="pricing-table-price">
                                                                <span class="price-number titles-typo title"> 15500*</span><span
                                                                    class="tag">в месяц</span></div>
                                                            <div class="pricing-table-features">
                                                                <ul class="-unlist -large">
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Доступ к материалам курса навсегда
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Поддержка менторов в мессенджере
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Программа трудоустройства
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Карьерный курс
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        <strong>Еженедельные персональные консультации
                                                                            по 60 минут</strong>
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        <strong>Свой проект с ментором во время
                                                                            обучения</strong>
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        <strong>Тестовое техническое индивидуальное
                                                                            собеседование с ментором</strong>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <a class="button" href="#contacts"> Купить курс </a></div>
                                                        <div class="vc_empty_space" style="height: 2vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe6f528">
                                                            <p>* Полная стоимость курса составит: 139 500 руб.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__spacer" style="height: 12vh">
                                                            <span class="vc_empty_space_inner"></span></div>
                                                        <div class="ohio-widget pricing-table -contained card clb__dark_mode_light -left"
                                                             id="ohio-custom-67005dfe6f3da" data-tilt="true"
                                                             data-tilt-perspective="6000">
                                                            <div class="pricing-table-headline">
                                                                <h5 class="title">Экономичный</h5>
                                                                <p class="subtitle -unspace" style="color: #fff">При
                                                                    оплате за весь курс сразу</p>
                                                            </div>
                                                            <div class="pricing-table-price">
                                                                <span class="price-number titles-typo title"> 9500*</span>
                                                                <span class="tag">за 9 месяцев</span>
                                                            </div>

                                                            <div class="pricing-table-features">
                                                                <ul class="-unlist -large">
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Доступ к материалам курса навсегда
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Поддержка менторов в мессенджере
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Программа трудоустройства
                                                                    </li>
                                                                    <li class="exist">
                                                                        <i class="icon">
                                                                            <svg class="default"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                                            </svg>
                                                                        </i>
                                                                        Карьерный курс
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <a class="button -small" href="#" > Купить курс</a>

                                                        </div>
                                                        <div class="vc_empty_space" style="height: 2vh"><span
                                                                class="vc_empty_space_inner"></span></div>
                                                        <div class="ohio-text-sc" id="ohio-custom-67005dfe6f528">
                                                            <p>* Полная стоимость курса составит: 85 500 руб.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vc_row wpb_row vc_row-fluid" id="faq">
                                            <div class="vc_empty_space  clb__section_spacer" style="height: 5vh">
                                                <span class="vc_empty_space_inner"></span>
                                            </div>
                                            <div class="ohio-widget heading -center"
                                                 id="ohio-custom-67005dfe70750">
                                                <h2 class="title">Ответы на вопросы</h2>
                                            </div>
                                        </div>

                                        <div class="vc_row wpb_row vc_row-fluid">
                                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157351242 wpb_content_element  vc_custom_1628157351242 wpb_content_element">
                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                    class="vc_sep_line"></span></span><span
                                                                class="vc_sep_holder vc_sep_holder_r"><span
                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                    class="vc_sep_line"></span></span>
                                                        </div>
                                                        <div class="ohio-accordion-sс ohio-widget accordion -text"
                                                             id="ohio-custom-67005dfe6fab5" data-ohio-accordion="true">
                                                            <div class="accordion-item active"
                                                                 id="1608798616096-fc2941b4-d087">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Я никогда не программировал(а), смогу ли я учиться? </h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse"
                                                                     style="height: 105.668px;">
                                                                    <div class="accordion-body">
                                                                        <p>Безусловно. Программа нацелена на новичков, не имеющих опыта, а также на тех, кто только начал и имеет небольшой опыт. Если вы уже знаете основы программирования, то сможете обновить свои знания. Если нет, то мы обучим вас всему необходимому.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item"
                                                                 id="1608798657033-45474e31-ff55">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Насколько сложно научится программированию?</h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse">
                                                                    <div class="accordion-body">
                                                                        <p>Начинать можно без навыков программирования. Обучение стартует с элементарных понятий и становится всё сложнее. Мы определяем главную цель и поэтапно делим её на задачи для каждого блока, модуля, занятия. Все материалы, упражнения и проекты направлены на приобретение определённых навыков, которые в итоге приведут выпускника к запланированному уровню профессиональных компетенций.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item"
                                                                 id="1608798653522-90e45156-d8e4">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Какое оборудование потребуется? </h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse">
                                                                    <div class="accordion-body">
                                                                        <p>Для обучения подойдет как ноутбук,
                                                                            так и стационарный компьютер с операционной системой macOS версии 10.15 и
                                                                            выше или Windows версии 8 и выше.
                                                                            Мы предоставим все необходимые инструкции для инсталляции
                                                                            требуемого программного обеспечения. Минимальные требования к
                                                                            компьютеру: не менее 2 ГБ доступной оперативной памяти,
                                                                            хотя рекомендуется устройство с 8 ГБ RAM; 2,5 ГБ свободного места на жестком диске,
                                                                            желательно наличие SSD; экран должен поддерживать разрешение не менее 1024x768 пикселей.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space  vc_hidden-xs vc_hidden-sm" style="height: 5vh">
                                                            <span class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157351242 wpb_content_element  vc_custom_1628157351242 wpb_content_element">
                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                    class="vc_sep_line"></span></span><span
                                                                class="vc_sep_holder vc_sep_holder_r"><span
                                                                    style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);"
                                                                    class="vc_sep_line"></span></span>
                                                        </div>
                                                        <div class="ohio-accordion-sс ohio-widget accordion -text"
                                                             id="ohio-custom-67005dfe6ff5d" data-ohio-accordion="true">
                                                            <div class="accordion-item active"
                                                                 id="1608798728688-402517ee-9979">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Сколько зарабатывает веб-разработчик? </h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse"
                                                                     style="height: 105.668px;">
                                                                    <div class="accordion-body">
                                                                        <p>Оплата труда веб-разработчиков изменяется в зависимости от их опыта, местоположения, узкой специализации и уровня навыков. В России начинающим веб-разработчикам платят в среднем от 60 000 до 100 000 рублей в месяц, а квалифицированные специалисты с опытом могут зарабатывать от 200 000 рублей в месяц и более.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item"
                                                                 id="1608798728782-187c4f9a-b6ab">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Если я не захочу/смогу продолжать обучение? </h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse">
                                                                    <div class="accordion-body">
                                                                        <p>Если Вы по какой-либо причине не сможете продолжать обучение - мы вернем оставшиеся средства за курс.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item"
                                                                 id="1608798728911-77e906dd-140a">
                                                                <div class="accordion-button">
                                                                    <h6 class="accordion-header">
                                                                        Со скольки лет можно начать обучение?</h6>
                                                                    <button aria-label="Toggle the accordion"
                                                                            class="icon-button -extra-small">
                                                                        <i class="icon"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="accordion-collapse">
                                                                    <div class="accordion-body">
                                                                        <p>Данный курс предназначен для студентов от 16 лет. </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space  clb__section_spacer" style="height: 12vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row wpb_row vc_row-fluid">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space  clb__section_spacer" style="height: 8vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="ohio-widget heading -left" id="ohio-custom-67005dfe723a0">
                                                                            <h2 class="title">Остались вопросы или готовы записаться на курс?</h2>
                                                                        </div>
                                                                        <div class="vc_empty_space  vc_hidden-lg vc_hidden-md" style="height: 3vh">
                                                                            <span class="vc_empty_space_inner"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space clb__spacer" style="height: 6vh">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157519458 wpb_content_element  vc_custom_1628157519458 wpb_content_element">
                                                            <span class="vc_sep_holder vc_sep_holder_l">
                                                                <span style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);" class="vc_sep_line"></span>
                                                            </span>
                                                            <span class="vc_sep_holder vc_sep_holder_r">
                                                                <span style="border-color:rgb(99,93,111);border-color:rgba(99,93,111,0.65);" class="vc_sep_line"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Форма -->
                                        <?php require_once('contact-form.php'); ?>

                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>

                </div>
            </div>
        </div>

        <footer id="colophon" class="site-footer clb__light_section">
            <div class="page-container">
                <div class="widgets vc_row">

                    <div class="vc_col-md-3 vc_col-sm-6 widgets-column">
                        <ul>
                            <li id="ohio_widget_logo-2" class="widget widget_ohio_widget_logo">
                                <div class="logo" style="display: flex;"> Digit<span style="color:#ff5e3a">side</span>.ru
                                </div>
                            </li>
                            <li id="block-7" class="widget widget_block">
                                <strong>
                                    <a href="https://t.me/Digitside">Телеграм</a>
                                </strong>
                            </li>
                        </ul>
                    </div>

                    <div class="vc_col-md-3 vc_col-sm-6 widgets-column">
                        <ul>
                            <li id="block-8" class="widget widget_block"><h3 class="title widget-title">Москва</h3>

                                <b>Высоковольтный проезд</b><br class="vc_hidden-xs">
                                д. 1, корп. 3, комната 127<br class="vc_hidden-xs">
                            </li>
                            <li id="block-9" class="widget widget_block"><h3 class="title widget-title">ИП Мезенцев С. Н.</h3>

                                ИНН 862001640470 <br class="vc_hidden-xs">ОГРН 321774600148128
                                <br class="vc_hidden-xs">
                            </li>
                        </ul>
                    </div>

                    <div class="vc_col-md-3 vc_col-sm-6 widgets-column">
                        <ul>
                            <li id="block-10" class="widget widget_block">
                                <h3 class="title widget-title">Контакты</h3>
                                <b>Телеграм:  </b><a href="https://t.me/Digitside" rel="nofollow">@Digitside</a><br>
                                <b>Email: </b>edu@digitside.ru
                                <br class="vc_hidden-xs">
                                <b>Тел.: </b> +7 (495) 143-15-20, <br class="vc_hidden-xs">+7 (926) 075-65-05

                            </li>

                        </ul>
                    </div>

                    <?php if(0) { ?>
                        <div class="vc_col-md-3 vc_col-sm-6 widgets-column">
                            <ul>
                                <li id="ohio_widget_subscribe-2" class="widget widget_ohio_widget_subscribe">
                                    <h3 class="title widget-title">Подписаться на новости</h3>
                                    <div class="subscribe-widget contact-form">


                                        <div class="wpcf7 js" id="wpcf7-f5-o3" lang="en-US" dir="ltr">
                                            <div class="screen-reader-response">
                                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                <ul></ul>
                                            </div>
                                            <form action="#wpcf7-f5-o3" method="post"
                                                  class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate"
                                                  data-status="init">
                                                <div style="display: none;">
                                                    <input type="hidden" name="_wpcf7" value="5">
                                                    <input type="hidden" name="_wpcf7_version" value="5.9.8">
                                                    <input type="hidden" name="_wpcf7_locale" value="en_US">
                                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5-o3">
                                                    <input type="hidden" name="_wpcf7_container_post" value="0">
                                                    <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                                                </div>
                                                <div class="subscribe-form">
                                                    <p><span class="wpcf7-form-control-wrap" data-name="your-email"><input
                                                                size="40" maxlength="400"
                                                                class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                aria-required="true" aria-invalid="false"
                                                                placeholder="Email address" value="" type="email"
                                                                name="your-email"></span><br>
                                                        <button class="button -flat" data-button-loading="true">Оправить
                                                        </button>
                                                        <span class="wpcf7-spinner"></span><br>
                                                        <span class="wpcf7-form-control-wrap" data-name="checkbox-101"><span
                                                                class="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required"><span
                                                                    class="wpcf7-list-item first last"><label><input
                                                                            type="checkbox" name="checkbox-101[]"
                                                                            value="I’m okay with getting emails and having that activity tracked to improve my experience."><span
                                                                            class="wpcf7-list-item-label">Согласен получать рассылку новостей</span></label></span></span></span>
                                                    </p>
                                                </div>
                                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                                            </form>
                                        </div>
                                        <div class="hidden" data-button-contact="true">

                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <div class="site-footer-copyright">
                <div class="page-container">
                    <div class="vc_row">
                        <div class="vc_col-md-12">
                            <div class="holder">
                                <div class="-left">
                                    © 2024 All rights reserved | Разработано <a  href="https://smezentsev.ru"><b>MS Digit</b></a></div>
                                <?php if (0) { ?>
                                    <div class="-right">
                                        <a href="#" >Оферта</a>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>

<div class="clb-popup container-loading custom-popup hidden">
    <div class="close-bar">
        <button aria-label="close" class="icon-button -light">
            <i class="icon">
                <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                </svg>
            </i>
        </button>
    </div>
    <div class="clb-popup-holder"></div>
</div>

<div class="clb-popup subscribe-popup container-loading -slide-in -right-bottom hidden">
    <div class="close-bar">
        <button aria-label="close" class="icon-button -light">
            <i class="icon">
                <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                </svg>
            </i>
        </button>
    </div>
    <div class="clb-popup-holder"></div>
</div>

<div class="clb-popup search-popup">
    <div class="close-bar">
        <button aria-label="close" class="icon-button -light">
            <i class="icon">
                <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                </svg>
            </i>
        </button>
    </div>
    <div class="holder">
        <form role="search" class="search search-form" action="" method="GET">
            <label>
                <span class="screen-reader-text">Search for</span>
                <input autocomplete="off" type="text" class="search-field" name="s" placeholder="Search..." value="">
            </label>
            <button aria-label="search" class="button -text search search-submit">
                <i class="icon -right">
                    <svg class="default" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                         width="24">
                        <path d="m779-128.5-247.979-248Q501.5-352.5 463-339.25T381.658-326q-106.132 0-179.645-73.454t-73.513-179.5Q128.5-685 201.954-758.5q73.454-73.5 179.5-73.5T561-758.487q73.5 73.513 73.5 179.645 0 42.842-13.5 81.592T584-429l248 247.5-53 53ZM381.5-401q74.5 0 126.25-51.75T559.5-579q0-74.5-51.75-126.25T381.5-757q-74.5 0-126.25 51.75T203.5-579q0 74.5 51.75 126.25T381.5-401Z"></path>
                    </svg>
                </i>
            </button>
        </form>
    </div>
</div>
<style type="text/css">

    .avatar {

        width: 120px;
        height: 120px;
    }

    #ohio-custom-67005dfe5475a .title {
        font-size: 4.2vw;
    }

    @media screen and (min-width: 769px) and (max-width: 1180px) {
        #ohio-custom-67005dfe5475a .title {
            font-size: 7vw;
        }
    }

    @media screen and (max-width: 768px) {
        #ohio-custom-67005dfe5475a .title {
            font-size: 3rem;
        }
    }

    #ohio-custom-67005dfe5475a .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe5475a .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe5475a .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe56fa1.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe57677.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe57d06.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe584a5.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe58a5f.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe58fbe.logo img {
        width: 130px
    }

    #ohio-custom-67005dfe59a68 .subtitle {
        text-transform: uppercase;
    }

    #ohio-custom-67005dfe59a68 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe59a68 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe59a68 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe59ad8 {
        font-size: 1.03em;
    }

    #ohio-custom-67005dfe5ae00 .icon-box-heading {
        font-size: 24px;
    }

    #ohio-custom-67005dfe5b229 .icon-box-heading {
        font-size: 24px;
    }

    #ohio-custom-67005dfe5b620 .icon-box-heading {
        font-size: 24px;
    }

    #ohio-custom-67005dfe5bd7d .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe5bd7d .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe5bd7d .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe5c802 {
        font-size: 0.95em;
    }

    #ohio-custom-67005dfe5dcd4 .subtitle {
        text-transform: uppercase;
    }

    #ohio-custom-67005dfe5dcd4 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe5dcd4 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe5dcd4 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe5dd7d {
        font-size: 1.03em;
    }

    #ohio-custom-67005dfe5de62 .counter-number.-with-increaser .holder::after {
        color: #ff5e3a;
    }

    #ohio-custom-67005dfe5dece .counter-number.-with-increaser .holder::after {
        color: #ff5e3a;
    }

    #ohio-custom-67005dfe5e825 .subtitle {
        text-transform: uppercase;
    }

    #ohio-custom-67005dfe5e825 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe5e825 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe5e825 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe5e8a7 {
        font-size: 1.03em;
    }

    #ohio-custom-67005dfe5ec02 .blog-item.-contained .card-details, #ohio-custom-67005dfe5ec02 .blog-item.-layout4 .image-holder {
        background-color: rgba(146, 95, 141, 0.08);
    }

    #ohio-custom-67005dfe5ec02 .blog-item:not(.-contained) .image-holder, #ohio-custom-67005dfe5ec02 .blog-item.-contained {
        border-radius: 10px;
    }

    #ohio-custom-67005dfe62e47 .blog-item.-contained .card-details, #ohio-custom-67005dfe62e47 .blog-item.-layout4 .image-holder {
        background-color: rgba(146, 95, 141, 0.08);
    }

    #ohio-custom-67005dfe62e47 .blog-item:not(.-contained) .image-holder, #ohio-custom-67005dfe62e47 .blog-item.-contained {
        border-radius: 10px;
    }

    #ohio-custom-67005dfe62e47 {
        margin-top: -20px !important;
    }

    #ohio-custom-67005dfe6abb5 .subtitle {
        text-transform: uppercase;
    }

    #ohio-custom-67005dfe6abb5 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe6abb5 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe6abb5 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe6ae2d .tabs-nav-line {
        border-color: #ff5e3a;
    }

    #ohio-custom-67005dfe6ae2d.tabs.-with-button .tabs-nav-line {
        background-color: #ff5e3a;
    }

    #ohio-custom-67005dfe6bb1f .progress-bar {
        background: #ff5e3a;
    }

    #ohio-custom-67005dfe6bb7c {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6bd50 {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6bfc4 .divider {
        background-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6bfc4 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe6bfc4 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe6bfc4 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe6c102 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6c238 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6c300 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6cec6 .progress-bar {
        background: #ff5e3a;
    }

    #ohio-custom-67005dfe6cf12 {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6d0ff {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6d2e3 .divider {
        background-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6d2e3 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe6d2e3 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe6d2e3 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe6d3b9 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6d499 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6d582 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6de08 .progress-bar {
        background: #ff5e3a;
    }

    #ohio-custom-67005dfe6de4e {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6e051 {
        font-size: 17px;
    }

    #ohio-custom-67005dfe6e248 .divider {
        background-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6e248 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe6e248 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe6e248 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe6e31d .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6e3ec .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6e4b4 .icon-group.-outlined {
        border-color: rgba(136, 136, 136, 0.65);
    }

    #ohio-custom-67005dfe6eb40 .subtitle {
        text-transform: uppercase;
    }

    #ohio-custom-67005dfe6eb40 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe6eb40 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe6eb40 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe6ebca {
        font-size: 1.03em;
    }

    #ohio-custom-67005dfe6f030 {
        background-color: rgba(146, 95, 141, 0.08);
    }

    #ohio-custom-67005dfe6f030.pricing-table {
        border-radius: 16px !important;
    }

    #ohio-custom-67005dfe6f157 {
        font-size: 15px;
    }

    #ohio-custom-67005dfe6f3da h5.title:not(.price-number) {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da .pricing-table-details {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da .price-number {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da .tag {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da .pricing-table-features .exist {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da .pricing-table-features .missing {
        color: #ffffff;
    }

    #ohio-custom-67005dfe6f3da {
        background-color: #232226;
    }

    #ohio-custom-67005dfe6f3da .button {
        background-color: #ffffff;
        border-color:;
        color: #232226;
    }

    #ohio-custom-67005dfe6f3da.pricing-table {
        border-radius: 16px !important;
    }

    #ohio-custom-67005dfe6f528 {
        font-size: 15px;
    }

    #ohio-custom-67005dfe70750 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe70750 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe70750 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe70e90.testimonial > p {
        font-size: 1.05em;
    }

    #ohio-custom-67005dfe7145a.testimonial > p {
        font-size: 1.05em;
    }

    #ohio-custom-67005dfe71a41.testimonial > p {
        font-size: 1.05em;
    }

    #ohio-custom-67005dfe723a0 .highlighted-text:not(:hover) {
        background-size: 0% 10%;
    }

    #ohio-custom-67005dfe723a0 .highlighted-text:not([data-aos=animation]):not(:hover), #ohio-custom-67005dfe723a0 .highlighted-text.aos-animate:not(:hover) {
        background-size: 100% 10%;
    }

    #ohio-custom-67005dfe72418 {
        font-size: 1.03em;
    }
</style>
<script type="text/javascript">
    const lazyloadRunObserver = () => {
        const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
        const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let lazyloadBackground = entry.target;
                    if (lazyloadBackground) {
                        lazyloadBackground.classList.add('e-lazyloaded');
                    }
                    lazyloadBackgroundObserver.unobserve(entry.target);
                }
            });
        }, {rootMargin: '200px 0px 200px 0px'});
        lazyloadBackgrounds.forEach((lazyloadBackground) => {
            lazyloadBackgroundObserver.observe(lazyloadBackground);
        });
    };
    const events = [
        'DOMContentLoaded',
        'elementor/lazyload/observe',
    ];
    events.forEach((event) => {
        document.addEventListener(event, lazyloadRunObserver);
    });
</script>
<link rel="preload" as="style" href="/files/style.css">
<link rel="stylesheet" href="/files/style.css" type="text/css" media="all" >
<link rel="stylesheet" id="icon-pack-ionicons-css" href="/files/ionicons.min.css" type="text/css" media="all">
<script type="text/javascript" src="/files/a1295b6091f48a858593b8ad4b35c44e.js" id="wphb-2-js"></script>

<script type="text/javascript" src="/files/f26005a579a74fae32cdee9441a9e8e7.js" id="wphb-3-js"></script>
<script type="text/javascript" src="/files/4cac8097fc1e23f09bf80540dfb903e6.js" id="wphb-4-js"></script>
<script type="text/javascript" id="wphb-5-js-extra">
    /* <![CDATA[ */
    var ohioVariables = {
        "url": "https:\/\/admin-ajax.php",
        "view_cart": "View Cart",
        "add_to_cart_message": "has been added to the cart",
        "subscribe_popup_enable": "1",
        "subscribe_popup_type": "time",
        "subscribe_popup_var": "5",
        "notification_enable": "1",
        "notification_expires": "360",
        "save_color_mode_state": ""
    };
    /* ]]> */
</script>
<script type="text/javascript" src="/files/b723c07aee2ab69930a17f97bd2aedc5.js" id="wphb-5-js"></script>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage();