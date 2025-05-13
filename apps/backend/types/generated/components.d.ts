import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBanner extends Struct.ComponentSchema {
  collectionName: 'components_block_banners';
  info: {
    description: 'Banner component with advanced text, style, and layout options';
    displayName: 'Banner';
    icon: 'image';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      [
        'simple',
        'center',
        'bottom right',
        'left right',
        'box left',
        'box right',
        'circle',
      ]
    > &
      Schema.Attribute.DefaultTo<'simple'>;
  };
}

export interface BlockBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_block_blog_cards';
  info: {
    description: '';
    displayName: 'Blog Post';
    icon: 'collapse';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    card_button: Schema.Attribute.Component<'config.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    item_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 24;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface BlockBlogFilter extends Struct.ComponentSchema {
  collectionName: 'components_block_blog_filters';
  info: {
    description: '';
    displayName: 'Blog Filter';
    icon: 'collapse';
  };
  attributes: {
    card_button: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Read More'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    search_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface BlockBookmarkList extends Struct.ComponentSchema {
  collectionName: 'components_block_bookmark_lists';
  info: {
    displayName: 'Bookmark List';
    icon: 'bulletList';
  };
  attributes: {
    column_1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Title'>;
    column_2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Type'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlockBreadcrumbs extends Struct.ComponentSchema {
  collectionName: 'components_block_breadcrumbs';
  info: {
    description: '';
    displayName: 'Breadcrumbs';
    icon: 'manyWays';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    separator: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    variation: Schema.Attribute.Enumeration<['default', 'simple', 'minimal']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlockCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_category_cards';
  info: {
    description: '';
    displayName: 'Category Card';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    category: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::padma-backend.category'
    >;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface BlockContentBox extends Struct.ComponentSchema {
  collectionName: 'components_block_content_boxes';
  info: {
    description: 'A content box with text, icons, and style options.';
    displayName: 'Content Box';
    icon: 'box';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', true>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    icon_box: Schema.Attribute.Component<'component.icon-box', true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface BlockImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_block_image_carousels';
  info: {
    description: 'Carousel component with configurable cards and styling options.';
    displayName: 'Image Carousel';
    icon: 'images';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    cards: Schema.Attribute.Component<'config.carousel-card', true> &
      Schema.Attribute.Required;
    interval: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3000>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['default', 'fade', 'slide', 'zoom']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlockImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_block_image_gallery';
  info: {
    description: 'A component for displaying multiple images in various layouts.';
    displayName: 'Image Gallery';
    icon: 'gallery';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', false>;
    images: Schema.Attribute.Media<undefined, true> & Schema.Attribute.Required;
    style: Schema.Attribute.Component<'config.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['grid', 'masonry', 'carousel', 'grid-with-title']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface BlockLatestApplied extends Struct.ComponentSchema {
  collectionName: 'components_block_latest_applieds';
  info: {
    displayName: 'Latest Applied';
    icon: 'bulletList';
  };
  attributes: {
    column_1: Schema.Attribute.String;
    column_2: Schema.Attribute.String;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlockNotificationList extends Struct.ComponentSchema {
  collectionName: 'components_block_notification_lists';
  info: {
    displayName: 'Notification List';
    icon: 'bulletList';
  };
  attributes: {
    column_1: Schema.Attribute.String & Schema.Attribute.Required;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlockReviewBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_reviews';
  info: {
    description: 'A block for displaying multiple reviews with customizable options.';
    displayName: 'Review Block';
    icon: 'star';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['default', 'compact', 'detailed']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface ComponentGridContainer extends Struct.ComponentSchema {
  collectionName: 'components_component_grid_containers';
  info: {
    description: '';
    displayName: 'Grid Container';
    icon: 'brush';
  };
  attributes: {
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    columnSpacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rowSpacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    spacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    wrap: Schema.Attribute.Enumeration<['wrap-reverse', 'nowrap', 'wrap']> &
      Schema.Attribute.DefaultTo<'wrap'>;
    zeroMinWidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentIconBox extends Struct.ComponentSchema {
  collectionName: 'components_component_icon_boxes';
  info: {
    description: '';
    displayName: 'Icon Box';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Short description about the icon box.'>;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bx:info-circle'>;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your Title Here'>;
  };
}

export interface ConfigCarouselCard extends Struct.ComponentSchema {
  collectionName: 'components_carousel_cards';
  info: {
    description: 'Card with title, paragraph, and image for use in carousel components.';
    displayName: 'Carousel Card';
    icon: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Paragraph Here'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface ConfigLink extends Struct.ComponentSchema {
  collectionName: 'components_config_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bx:smile'>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Button'>;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['External', 'Internal']> &
      Schema.Attribute.DefaultTo<'Internal'>;
  };
}

export interface ConfigLogo extends Struct.ComponentSchema {
  collectionName: 'components_config_logos';
  info: {
    description: '';
    displayName: 'Logo';
    icon: 'chartBubble';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    md_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<175>;
    sm_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<160>;
    xs_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<150>;
  };
}

export interface ConfigMenu extends Struct.ComponentSchema {
  collectionName: 'components_config_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    child: Schema.Attribute.Component<'config.link', true>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bx:smile'>;
    identifier: Schema.Attribute.String;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Label'>;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['External', 'Internal']> &
      Schema.Attribute.DefaultTo<'Internal'>;
  };
}

export interface ConfigReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_review_cards';
  info: {
    description: '';
    displayName: 'Review Card';
    icon: 'star';
  };
  attributes: {
    avatar: Schema.Attribute.Media;
    date: Schema.Attribute.Date;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    review: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'This is a review text.'>;
    reviewer: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'John Doe'>;
  };
}

export interface ConfigSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_config_section_titles';
  info: {
    displayName: 'Section Title';
    icon: 'arrowRight';
  };
  attributes: {
    sub_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Sub Title Here'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
    variation: Schema.Attribute.Enumeration<['Variation One', 'Variation Two']>;
  };
}

export interface ConfigSinglePage extends Struct.ComponentSchema {
  collectionName: 'components_config_single_pages';
  info: {
    description: '';
    displayName: 'Single Page';
    icon: 'arrowRight';
  };
  attributes: {
    collectionModel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'api/padma-backend/posts'>;
    singelModel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'api/padma-backend/post-setting'>;
    slug: Schema.Attribute.String & Schema.Attribute.DefaultTo<'slug'>;
  };
}

export interface ConfigStyleSection extends Struct.ComponentSchema {
  collectionName: 'components_component_style_sections';
  info: {
    description: '';
    displayName: 'Style Section';
    icon: 'arrowUp';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    bg_overlay: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.6>;
    color: Schema.Attribute.String;
    desktop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    header_bg_color: Schema.Attribute.String;
    header_color: Schema.Attribute.String;
    header_width: Schema.Attribute.Enumeration<['Full', 'Small']> &
      Schema.Attribute.DefaultTo<'Small'>;
    mobile: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    secondary_color: Schema.Attribute.String;
    section_padding: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    sidebar: Schema.Attribute.Enumeration<
      ['Left Sidebar', 'Right Sidebar', 'No Sidebar']
    >;
    sub_header_color: Schema.Attribute.String;
    tab: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
  };
}

export interface HeaderHeaderBottom extends Struct.ComponentSchema {
  collectionName: 'components_header_header_bottoms';
  info: {
    description: '';
    displayName: 'Header bottom';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface HeaderMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_main_menus';
  info: {
    description: 'Main Menu';
    displayName: 'Main Menu';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dark_logo: Schema.Attribute.Component<'config.logo', false>;
    dark_mode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    hide_menu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    language: Schema.Attribute.Component<'config.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    light_logo: Schema.Attribute.Component<'config.logo', false>;
    logo_text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    main_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notification: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    profile_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    show_search: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface HeaderPrivateHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_private_headers';
  info: {
    displayName: 'Private Header';
    icon: 'layout';
  };
  attributes: {
    dark_logo: Schema.Attribute.Component<'config.logo', false>;
    dark_mode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    language: Schema.Attribute.Component<'config.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    light_logo: Schema.Attribute.Component<'config.logo', false>;
    logo_text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Logo'>;
    main_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notification: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    profile_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    side_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface HeaderTopBar extends Struct.ComponentSchema {
  collectionName: 'components_header_top_bars';
  info: {
    description: 'Top bar for additional information and links';
    displayName: 'Top Bar';
    icon: 'bars';
  };
  attributes: {
    left_content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Text Here'>;
    right_content: Schema.Attribute.Component<'config.link', true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobBlockAppliedJobs extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_applied_jobs';
  info: {
    displayName: 'Applied Jobs';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Description Here'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    table_config: Schema.Attribute.Component<
      'metajob-config.table-config',
      false
    >;
    table_head: Schema.Attribute.Component<'metajob-config.meta-data', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockBookmark extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_bookmarks';
  info: {
    displayName: 'Bookmark';
    icon: 'bell';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Description Here'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    table_config: Schema.Attribute.Component<
      'metajob-config.table-config',
      false
    >;
    table_head: Schema.Attribute.Component<'metajob-config.meta-data', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockCandidateFilter extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_candidate_filters';
  info: {
    displayName: 'Candidate Filter';
    icon: 'collapse';
  };
  attributes: {
    card_button: Schema.Attribute.Component<'config.link', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    result_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Total candidate found'>;
    search: Schema.Attribute.Component<'metajob-config.search-config', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
    upload_resume_button: Schema.Attribute.Component<'config.link', false>;
  };
}

export interface MetajobBlockCategoryFilter extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_category_filters';
  info: {
    displayName: 'Category Filter';
    icon: 'collapse';
  };
  attributes: {
    card_button: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Find Jobs'>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    icon_type: Schema.Attribute.Enumeration<['Icon Bg', 'Simple']> &
      Schema.Attribute.DefaultTo<'Icon Bg'>;
    search_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search'>;
    show_description: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobBlockCompanyFilter extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_company_filters';
  info: {
    displayName: 'Company Filter';
    icon: 'collapse';
  };
  attributes: {
    add_company_button: Schema.Attribute.Component<'config.link', false>;
    card_button: Schema.Attribute.Component<'config.link', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    result_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Total company found'>;
    search: Schema.Attribute.Component<'metajob-config.search-config', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockContact extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    friendlyAddress: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Address Here'>;
    location: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Location Here'>;
  };
}

export interface MetajobBlockErrorSection extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_error_sections';
  info: {
    description: 'Error section block';
    displayName: 'Error Section';
    icon: 'collapse';
  };
  attributes: {
    button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reload'>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    style: Schema.Attribute.Component<'metajob-config.error-style', false>;
  };
}

export interface MetajobBlockExperience extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_experiences';
  info: {
    displayName: 'Experience';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    endDate: Schema.Attribute.Date;
    institution: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Institution'>;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockJobBanner extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_job_banners';
  info: {
    displayName: 'Job Banner';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    company_count_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Company'>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    job_count_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Job Available'>;
    resume_count_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Employee Available'>;
    search: Schema.Attribute.Component<'metajob-config.search-config', false>;
    show_count: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobBlockJobCard extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_job_cards';
  info: {
    displayName: 'Job Card';
    icon: 'collapse';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    card_button: Schema.Attribute.Component<'config.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'USD'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    item_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 18;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    vacancy_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Vacancy'>;
  };
}

export interface MetajobBlockJobCategory extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_job_categories';
  info: {
    displayName: 'Job Category';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    card_button: Schema.Attribute.Component<'config.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    icon_type: Schema.Attribute.Enumeration<['Icon Bg', 'Simple']> &
      Schema.Attribute.DefaultTo<'Icon Bg'>;
    item_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 24;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    show_description: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobBlockJobCategoryOverlay extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_job_categories_overlay';
  info: {
    displayName: 'Job Category Overlay';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    item_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 24;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    overlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    show_description: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    show_icon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobBlockJobFilter extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_job_filters';
  info: {
    displayName: 'Job Filter';
    icon: 'collapse';
  };
  attributes: {
    card_button: Schema.Attribute.Component<'config.link', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    result_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Total job found'>;
    search: Schema.Attribute.Component<'metajob-config.search-config', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockManageCompany extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_manage_companies';
  info: {
    displayName: 'Manage Company';
    icon: 'bulletList';
  };
  attributes: {
    add_button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Add Company'>;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    table_config: Schema.Attribute.Component<
      'metajob-config.table-config',
      false
    >;
    table_head: Schema.Attribute.Component<'metajob-config.meta-data', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockManageJob extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_manage_jobs';
  info: {
    displayName: 'Manage Job';
    icon: 'bulletList';
  };
  attributes: {
    add_button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Add Job'>;
    apply_table_head: Schema.Attribute.Component<
      'metajob-config.meta-data',
      true
    >;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    table_config: Schema.Attribute.Component<
      'metajob-config.table-config',
      false
    >;
    table_head: Schema.Attribute.Component<'metajob-config.meta-data', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockManagePackages extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_manage_packages';
  info: {
    description: 'Manage package block';
    displayName: 'Manage Package';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Description Here'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockManageResume extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_manage_resumes';
  info: {
    displayName: 'Manage Resume';
    icon: 'arrowRight';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_page_headers';
  info: {
    description: 'Page heder block';
    displayName: 'Page Heder';
    icon: 'arrowRight';
  };
  attributes: {
    bg_overlay: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0.1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.7>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_portfolios';
  info: {
    displayName: 'Portfolio';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.Component<'config.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockPricing extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'config.link', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    price: Schema.Attribute.String & Schema.Attribute.DefaultTo<'00'>;
    table: Schema.Attribute.Component<'metajob-config.meta-data', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface MetajobBlockPublicPackage extends Struct.ComponentSchema {
  collectionName: 'components_metajob_block_public_packages';
  info: {
    description: 'Public package block';
    displayName: 'Public Package';
    icon: 'arrowRight';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface MetajobConfigErrorStyle extends Struct.ComponentSchema {
  collectionName: 'components_component_error_style';
  info: {
    description: '';
    displayName: 'Error Style';
    icon: 'arrowUp';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    header_color: Schema.Attribute.String;
    section_padding: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    sub_header_color: Schema.Attribute.String;
  };
}

export interface MetajobConfigMessage extends Struct.ComponentSchema {
  collectionName: 'components_metajob_config_messages';
  info: {
    displayName: 'Message';
    icon: 'arrowRight';
  };
  attributes: {
    cancelButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cancel'>;
    copyActionText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Copy'>;
    editActionText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Edit'>;
    empty_chat: Schema.Attribute.Component<'shared.empty', false> &
      Schema.Attribute.Required;
    empty_messages: Schema.Attribute.Component<'shared.empty', false> &
      Schema.Attribute.Required;
    enableSearch: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    saveButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Save'>;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Search'>;
    sendMessagePlaceholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Type Something'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Messages'>;
  };
}

export interface MetajobConfigMetaData extends Struct.ComponentSchema {
  collectionName: 'components_metajob_config_meta_data';
  info: {
    displayName: 'Meta Data';
    icon: 'chartBubble';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.DefaultTo<'key'>;
    value: Schema.Attribute.String & Schema.Attribute.DefaultTo<'value'>;
  };
}

export interface MetajobConfigRelations extends Struct.ComponentSchema {
  collectionName: 'components_metajob_config_relations';
  info: {
    displayName: 'Relations';
    icon: 'apps';
  };
  attributes: {
    relationId: Schema.Attribute.Integer;
  };
}

export interface MetajobConfigSearchConfig extends Struct.ComponentSchema {
  collectionName: 'components_metajob_config_search_configs';
  info: {
    displayName: 'Search Config';
    icon: 'arrowRight';
  };
  attributes: {
    button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search'>;
    category_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Category'>;
    experience_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Experience'>;
    location_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Location'>;
    mobile_filter_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Filter'>;
    search_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search'>;
    skill_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Skills'>;
    sort_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sort'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Search Title'>;
    type_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Type'>;
  };
}

export interface MetajobConfigTableConfig extends Struct.ComponentSchema {
  collectionName: 'components_metajob_config_table_configs';
  info: {
    displayName: 'Table Config';
    icon: 'arrowRight';
  };
  attributes: {
    default_data_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    enable_delete: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    enable_edit: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    enable_search: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Name'>;
    per_page_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Showing per page'>;
    search_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search'>;
  };
}

export interface MetajobSingleTypeCompanyDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_metajob_single_type_company_details';
  info: {
    displayName: 'Company Details';
    icon: 'arrowRight';
  };
  attributes: {
    card_button: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Apply Now'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    industry_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Industry'>;
    info_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Company Info'>;
    open_jobs: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    open_jobs_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Open Job'>;
    salary_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AVG. Salary'>;
    show_header: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    size_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Company Size'>;
    styles: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Company details'>;
  };
}

export interface MetajobSingleTypeJobDetails extends Struct.ComponentSchema {
  collectionName: 'components_metajob_single_type_job_details';
  info: {
    displayName: 'Job Details';
    icon: 'arrowRight';
  };
  attributes: {
    apply_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Apply Now'>;
    card_button: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Apply Now'>;
    deadline_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Deadline'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    overview_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Job Overview'>;
    posted_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Job Posted'>;
    related_jobs_subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Latest Related Jobs For You'>;
    related_jobs_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Related Jobs'>;
    related_lists: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    salary_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Salary'>;
    share_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Share on'>;
    show_header: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    skill_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Skills'>;
    styles: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Job details'>;
    type_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Job Type'>;
  };
}

export interface MetajobSingleTypeLoginDetails extends Struct.ComponentSchema {
  collectionName: 'components_metajob_single_type_login_details';
  info: {
    displayName: 'Login Details';
    icon: 'arrowRight';
  };
  attributes: {
    button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sign in'>;
    email_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Username or Email'>;
    or_placeholder: Schema.Attribute.String & Schema.Attribute.DefaultTo<'OR'>;
    password_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Password'>;
    provider_option: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    required_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'This field is required'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    signup_helper_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Not a Member ?'>;
    signup_link_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Create Account'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sign in with Email address'>;
  };
}

export interface MetajobSingleTypeRegisterDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_metajob_single_type_register_details';
  info: {
    displayName: 'Register Details';
    icon: 'arrowRight';
  };
  attributes: {
    button_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Register'>;
    confirm_password_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter Confirm Password'>;
    confirm_password_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Confirm Password'>;
    email_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your Email'>;
    email_title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Email'>;
    login_helper_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Already have account ?'>;
    login_link_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Login'>;
    or_placeholder: Schema.Attribute.String & Schema.Attribute.DefaultTo<'OR'>;
    password_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter Password'>;
    password_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Password'>;
    provider_option: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    required_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'This field is required'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Create an account'>;
    username_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter Username'>;
    username_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Username'>;
  };
}

export interface MetajobSingleTypeResumeDetails extends Struct.ComponentSchema {
  collectionName: 'components_metajob_single_type_resume_details';
  info: {
    displayName: 'Resume Details';
    icon: 'arrowRight';
  };
  attributes: {
    about_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Me'>;
    education_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Education'>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    experience_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Experience'>;
    industry_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Industry'>;
    member_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Member Since'>;
    open_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Open To Work'>;
    portfolio_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Portfolio'>;
    show_header: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    styles: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Resume details'>;
  };
}

export interface SharedEmpty extends Struct.ComponentSchema {
  collectionName: 'components_shared_empties';
  info: {
    description: '';
    displayName: 'Empty State';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Try to refresh the page or check back later'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'No Data Founds'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }> &
      Schema.Attribute.DefaultTo<'Description Here'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Facebook'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }> &
      Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedShareMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_menus';
  info: {
    displayName: 'Share Menu';
    icon: 'server';
  };
  attributes: {
    menus: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    role: Schema.Attribute.Enumeration<['candidate', 'employer']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'candidate'>;
  };
}

export interface SharedSocialMedias extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Medias';
    icon: 'earth';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    type: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'twitter',
        'linkedin',
        'snapchat',
        'tiktok',
        'pinterest',
        'reddit',
        'tumblr',
        'youtube',
        'whatsapp',
        'wechat',
        'discord',
        'telegram',
        'viber',
        'line',
        'kik',
        'clubhouse',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedSpacing extends Struct.ComponentSchema {
  collectionName: 'components_shared_spacings';
  info: {
    displayName: 'spacing';
    icon: 'oneToOne';
  };
  attributes: {
    gap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SingleTypeBlogDetails extends Struct.ComponentSchema {
  collectionName: 'components_single_type_blog_details';
  info: {
    displayName: 'Blog Details';
    icon: 'arrowRight';
  };
  attributes: {
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Blog details'>;
  };
}

export interface UiJobInfo extends Struct.ComponentSchema {
  collectionName: 'components_ui_job_infos';
  info: {
    displayName: 'Job Info';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profilePicture: Schema.Attribute.Media<'images'>;
  };
}

export interface WidgetAppliedList extends Struct.ComponentSchema {
  collectionName: 'components_widget_applied_lists';
  info: {
    description: '';
    displayName: 'Applied Job';
    icon: 'oneToOne';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface WidgetClosedJob extends Struct.ComponentSchema {
  collectionName: 'components_widget_closed_jobs';
  info: {
    displayName: 'Closed Job';
    icon: 'arrowRight';
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface WidgetContactWidget extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_widgets';
  info: {
    displayName: 'Contact Info';
    icon: 'envelop';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description Here'>;
    email: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Email Here'>;
    location: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Location Here'>;
    logo: Schema.Attribute.Component<'config.logo', false>;
    phone: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Phone Here'>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface WidgetCopyrightBar extends Struct.ComponentSchema {
  collectionName: 'components_widget_copyright_bars';
  info: {
    description: 'Bottom-most section for copyright text';
    displayName: 'Copyright Bar';
    icon: 'copyright';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Copyright Text Here'>;
    social_link: Schema.Attribute.Component<'shared.social-medias', true>;
  };
}

export interface WidgetCountCard extends Struct.ComponentSchema {
  collectionName: 'components_widget_count_cards';
  info: {
    description: '';
    displayName: 'Count Card';
    icon: 'apps';
  };
  attributes: {
    link: Schema.Attribute.String;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sub Title Here'>;
    target: Schema.Attribute.Enumeration<
      ['_self', '_blank', '_parent', '_top']
    > &
      Schema.Attribute.DefaultTo<'_self'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title Here'>;
  };
}

export interface WidgetFavoriteList extends Struct.ComponentSchema {
  collectionName: 'components_widget_favorite_lists';
  info: {
    displayName: 'Favorite List';
    icon: 'arrowRight';
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface WidgetMatchedList extends Struct.ComponentSchema {
  collectionName: 'components_widget_matched_lists';
  info: {
    displayName: 'Matched List';
    icon: 'arrowRight';
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface WidgetMenuWidget extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_widgets';
  info: {
    displayName: 'Menu Widget';
    icon: 'arrowDown';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<'config.link', true>;
    style: Schema.Attribute.Component<'config.style-section', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface WidgetOpenJob extends Struct.ComponentSchema {
  collectionName: 'components_widget_open_jobs';
  info: {
    displayName: 'Open Job';
    icon: 'arrowRight';
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

export interface WidgetTotalJob extends Struct.ComponentSchema {
  collectionName: 'components_widget_total_jobs';
  info: {
    displayName: 'Total Job';
    icon: 'arrowRight';
  };
  attributes: {
    details: Schema.Attribute.Component<'widget.count-card', false>;
    style: Schema.Attribute.Component<'config.style-section', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.banner': BlockBanner;
      'block.blog-card': BlockBlogCard;
      'block.blog-filter': BlockBlogFilter;
      'block.bookmark-list': BlockBookmarkList;
      'block.breadcrumbs': BlockBreadcrumbs;
      'block.category-card': BlockCategoryCard;
      'block.content-box': BlockContentBox;
      'block.image-carousel': BlockImageCarousel;
      'block.image-gallery': BlockImageGallery;
      'block.latest-applied': BlockLatestApplied;
      'block.notification-list': BlockNotificationList;
      'block.review-block': BlockReviewBlock;
      'component.grid-container': ComponentGridContainer;
      'component.icon-box': ComponentIconBox;
      'config.carousel-card': ConfigCarouselCard;
      'config.link': ConfigLink;
      'config.logo': ConfigLogo;
      'config.menu': ConfigMenu;
      'config.review-card': ConfigReviewCard;
      'config.section-title': ConfigSectionTitle;
      'config.single-page': ConfigSinglePage;
      'config.style-section': ConfigStyleSection;
      'header.header-bottom': HeaderHeaderBottom;
      'header.main-menu': HeaderMainMenu;
      'header.private-header': HeaderPrivateHeader;
      'header.top-bar': HeaderTopBar;
      'metajob-block.applied-jobs': MetajobBlockAppliedJobs;
      'metajob-block.bookmark': MetajobBlockBookmark;
      'metajob-block.candidate-filter': MetajobBlockCandidateFilter;
      'metajob-block.category-filter': MetajobBlockCategoryFilter;
      'metajob-block.company-filter': MetajobBlockCompanyFilter;
      'metajob-block.contact': MetajobBlockContact;
      'metajob-block.error-section': MetajobBlockErrorSection;
      'metajob-block.experience': MetajobBlockExperience;
      'metajob-block.job-banner': MetajobBlockJobBanner;
      'metajob-block.job-card': MetajobBlockJobCard;
      'metajob-block.job-category': MetajobBlockJobCategory;
      'metajob-block.job-category-overlay': MetajobBlockJobCategoryOverlay;
      'metajob-block.job-filter': MetajobBlockJobFilter;
      'metajob-block.manage-company': MetajobBlockManageCompany;
      'metajob-block.manage-job': MetajobBlockManageJob;
      'metajob-block.manage-packages': MetajobBlockManagePackages;
      'metajob-block.manage-resume': MetajobBlockManageResume;
      'metajob-block.page-header': MetajobBlockPageHeader;
      'metajob-block.portfolio': MetajobBlockPortfolio;
      'metajob-block.pricing': MetajobBlockPricing;
      'metajob-block.public-package': MetajobBlockPublicPackage;
      'metajob-config.error-style': MetajobConfigErrorStyle;
      'metajob-config.message': MetajobConfigMessage;
      'metajob-config.meta-data': MetajobConfigMetaData;
      'metajob-config.relations': MetajobConfigRelations;
      'metajob-config.search-config': MetajobConfigSearchConfig;
      'metajob-config.table-config': MetajobConfigTableConfig;
      'metajob-single-type.company-details': MetajobSingleTypeCompanyDetails;
      'metajob-single-type.job-details': MetajobSingleTypeJobDetails;
      'metajob-single-type.login-details': MetajobSingleTypeLoginDetails;
      'metajob-single-type.register-details': MetajobSingleTypeRegisterDetails;
      'metajob-single-type.resume-details': MetajobSingleTypeResumeDetails;
      'shared.empty': SharedEmpty;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.share-menu': SharedShareMenu;
      'shared.social-medias': SharedSocialMedias;
      'shared.spacing': SharedSpacing;
      'single-type.blog-details': SingleTypeBlogDetails;
      'ui.job-info': UiJobInfo;
      'widget.applied-list': WidgetAppliedList;
      'widget.closed-job': WidgetClosedJob;
      'widget.contact-widget': WidgetContactWidget;
      'widget.copyright-bar': WidgetCopyrightBar;
      'widget.count-card': WidgetCountCard;
      'widget.favorite-list': WidgetFavoriteList;
      'widget.matched-list': WidgetMatchedList;
      'widget.menu-widget': WidgetMenuWidget;
      'widget.open-job': WidgetOpenJob;
      'widget.total-job': WidgetTotalJob;
    }
  }
}
