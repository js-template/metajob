import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBannerOne extends Schema.Component {
  collectionName: 'components_banner_banner_ones';
  info: {
    displayName: 'BannerOne';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    search: Attribute.Component<'forms.seaech-form'>;
    image: Attribute.Media;
    style: Attribute.Component<'component.style-section'>;
    empty: Attribute.Component<'shared.empty'>;
  };
}

export interface BlockBlogCard extends Schema.Component {
  collectionName: 'components_block_blog_cards';
  info: {
    displayName: 'BlogCard';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
    posts: Attribute.Relation<'block.blog-card', 'oneToMany', 'api::post.post'>;
    empty: Attribute.Component<'shared.empty'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface BlockBookmarkList extends Schema.Component {
  collectionName: 'components_block_bookmark_lists';
  info: {
    displayName: 'Recent Bookmarks';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    style: Attribute.Component<'component.style-section'>;
    column_1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Title'>;
    column_2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Type'>;
    empty: Attribute.Component<'shared.empty'>;
  };
}

export interface BlockCategoryCard extends Schema.Component {
  collectionName: 'components_ads_category_cards';
  info: {
    displayName: 'CategoryCard';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
    categories: Attribute.Component<'config.job-list', true>;
    empty: Attribute.Component<'shared.empty'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface BlockCategoryList extends Schema.Component {
  collectionName: 'components_block_category_lists';
  info: {
    displayName: 'CategoryList';
    icon: 'apps';
    description: '';
  };
  attributes: {
    empty: Attribute.Component<'shared.empty'>;
  };
}

export interface BlockContact extends Schema.Component {
  collectionName: 'components_block_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    friendlyAddress: Attribute.String;
    location: Attribute.String;
    map: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
  };
}

export interface BlockFooter extends Schema.Component {
  collectionName: 'components_block_footers';
  info: {
    displayName: 'Footer';
    icon: 'server';
    description: 'The footer block is used to display the footer of the website.';
  };
  attributes: {
    FooterGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 4;
      }>;
    FooterOne: Attribute.Component<'widget.footer-one'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FooterTwo: Attribute.Component<'widget.footer-two'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FooterThree: Attribute.Component<'widget.footer-two'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FooterFour: Attribute.Component<'widget.footer-two'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FooterBottom: Attribute.Component<'widget.footer-bottom'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    copyright: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlockJobCard extends Schema.Component {
  collectionName: 'components_block_job_cards';
  info: {
    displayName: 'JobCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'component.link'>;
    jobs: Attribute.Component<'config.job-list', true>;
    empty: Attribute.Component<'shared.empty'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface BlockLatestApplied extends Schema.Component {
  collectionName: 'components_block_latest_applieds';
  info: {
    displayName: 'Latest Applied';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    column_1: Attribute.String;
    column_2: Attribute.String;
    style: Attribute.Component<'component.style-section'>;
    empty: Attribute.Component<'shared.empty'>;
  };
}

export interface BlockLocationCard extends Schema.Component {
  collectionName: 'components_block_location_cards';
  info: {
    displayName: 'LocationCard';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Location: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
    Button: Attribute.Component<'component.link'>;
  };
}

export interface BlockManageCompanies extends Schema.Component {
  collectionName: 'components_block_manage_companies';
  info: {
    displayName: 'Manage Companies';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    enableSearch: Attribute.Boolean & Attribute.DefaultTo<true>;
    tableHead: Attribute.Component<'config.header-field', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 4;
        max: 4;
      }>;
    enableDelete: Attribute.Boolean;
    enableEdit: Attribute.Boolean;
    empty: Attribute.Component<'shared.empty'>;
    style: Attribute.Component<'component.style-section'>;
    addButtonText: Attribute.String;
    editButtonText: Attribute.String;
    perPageText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Showing per page'>;
    tableConfig: Attribute.Component<'config.header-config'> &
      Attribute.Required;
    form: Attribute.Component<'config.job-list'>;
  };
}

export interface BlockManageLists extends Schema.Component {
  collectionName: 'components_block_manage_lists';
  info: {
    displayName: 'Manage Lists';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Manage Lists'>;
    enableSearch: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    tableConfig: Attribute.Component<'config.header-config'> &
      Attribute.Required;
    empty: Attribute.Component<'shared.empty'> & Attribute.Required;
    tableHead: Attribute.Component<'config.header-field', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 6;
        max: 6;
      }>;
    addButtonText: Attribute.String;
    editButtonText: Attribute.String;
    perPageText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Showing per page'>;
    form: Attribute.Component<'config.job-list'>;
  };
}

export interface BlockManageResume extends Schema.Component {
  collectionName: 'components_block_manage_resumes';
  info: {
    displayName: 'Manage Resume';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlockPortfolio extends Schema.Component {
  collectionName: 'components_block_portfolios';
  info: {
    displayName: 'portfolio';
    icon: 'clock';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.Component<'component.link'>;
  };
}

export interface BlockPrivateHeader extends Schema.Component {
  collectionName: 'components_block_private_headers';
  info: {
    displayName: 'Private Header';
    icon: 'server';
    description: '';
  };
  attributes: {
    light_logo: Attribute.Component<'header.logo'>;
    dark_logo: Attribute.Component<'header.logo'>;
    userMenu: Attribute.Component<'component.link', true>;
    langMenu: Attribute.Component<'component.link', true>;
    dark_mode: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    notification: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlockProfile extends Schema.Component {
  collectionName: 'components_block_profiles';
  info: {
    displayName: 'Profile';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {};
}

export interface BlockPublicHeader extends Schema.Component {
  collectionName: 'components_block_headers';
  info: {
    displayName: 'Public Header';
    icon: 'layout';
    description: 'The header block is used to display the header of the website.';
  };
  attributes: {
    light_logo: Attribute.Component<'header.logo'>;
    dark_logo: Attribute.Component<'header.logo'>;
    dark_mode: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    notification: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    MainMenu: Attribute.Component<'component.menu', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    langMenu: Attribute.Component<'component.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    userMenu: Attribute.Component<'component.link', true>;
    Button: Attribute.Component<'component.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface BlockRecentActivities extends Schema.Component {
  collectionName: 'components_block_recent_activities';
  info: {
    displayName: 'Notification Lists';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    style: Attribute.Component<'component.style-section'>;
    column_1: Attribute.String & Attribute.Required;
    empty: Attribute.Component<'shared.empty'>;
  };
}

export interface BlockReviewCard extends Schema.Component {
  collectionName: 'components_block_review_cards';
  info: {
    displayName: 'ReviewCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    reviews: Attribute.Component<'config.job-list', true>;
    empty: Attribute.Component<'shared.empty'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface ComponentExperience extends Schema.Component {
  collectionName: 'components_component_experiences';
  info: {
    displayName: 'Experience / Education';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    institution: Attribute.String;
  };
}

export interface ComponentGirdContainer extends Schema.Component {
  collectionName: 'components_component_gird_containers';
  info: {
    displayName: 'GirdContainer';
    icon: 'brush';
    description: '';
  };
  attributes: {
    columnSpacing: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    rowSpacing: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    spacing: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    wrap: Attribute.Enumeration<['wrap-reverse', 'nowrap', 'wrap']> &
      Attribute.DefaultTo<'wrap'>;
    zeroMinWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    columns: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
  };
}

export interface ComponentIconBox extends Schema.Component {
  collectionName: 'components_component_icon_boxes';
  info: {
    displayName: 'IconBox';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    feedback: Attribute.Text;
    avatar: Attribute.Media;
    designation: Attribute.String;
  };
}

export interface ComponentIconWithLabel extends Schema.Component {
  collectionName: 'components_component_icon_with_labels';
  info: {
    displayName: 'IconWithLabel';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.String & Attribute.DefaultTo<'bx:smile'>;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Alt: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['External', 'Internal']>;
    target: Attribute.Enumeration<['_blank', '_self']>;
    icon: Attribute.String & Attribute.DefaultTo<'bx:smile'>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentMenu extends Schema.Component {
  collectionName: 'components_component_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['External', 'Internal']>;
    target: Attribute.Enumeration<['_blank', '_self']>;
    icon: Attribute.String & Attribute.DefaultTo<'bx:smile'>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    child: Attribute.Component<'component.link', true>;
  };
}

export interface ComponentMetaData extends Schema.Component {
  collectionName: 'components_component_meta_data';
  info: {
    displayName: 'MetaData';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface ComponentPageTitle extends Schema.Component {
  collectionName: 'components_component_page_titles';
  info: {
    displayName: 'pageTitle';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentSearch extends Schema.Component {
  collectionName: 'components_component_searches';
  info: {
    displayName: 'search';
    icon: 'arrowRight';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface ComponentShareJob extends Schema.Component {
  collectionName: 'components_component_share_jobs';
  info: {
    displayName: 'ShareJob';
  };
  attributes: {
    facebook: Attribute.String;
    twitter: Attribute.String;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentSocialLink extends Schema.Component {
  collectionName: 'components_component_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface ComponentStyleSection extends Schema.Component {
  collectionName: 'components_component_style_sections';
  info: {
    displayName: 'styleSection';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    color: Attribute.String;
    backgroundColor: Attribute.String;
    mobile: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    tab: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }> &
      Attribute.DefaultTo<12>;
    desktop: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
  };
}

export interface ComponentTextField extends Schema.Component {
  collectionName: 'components_component_text_fields';
  info: {
    displayName: 'Text Field';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentTitles extends Schema.Component {
  collectionName: 'components_component_titles';
  info: {
    displayName: 'Titles';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
  };
}

export interface ConfigHeaderConfig extends Schema.Component {
  collectionName: 'components_config_header_configs';
  info: {
    displayName: 'headerConfig';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    enableEdit: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    enableDelete: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    tableHeader: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'title',
          'type',
          'status',
          'action',
          'description',
          'salary',
          'createdAt',
          'updatedAt',
          'publishedAt',
          'tags',
          'vacancy',
          'slug',
          'startDate',
          'endDate'
        ]
      >;
  };
}

export interface ConfigHeaderField extends Schema.Component {
  collectionName: 'components_config_header_fields';
  info: {
    displayName: 'headerField';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Name'>;
    sort: Attribute.Boolean & Attribute.DefaultTo<false>;
    align: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ConfigJobList extends Schema.Component {
  collectionName: 'components_config_job_lists';
  info: {
    displayName: 'relations';
    icon: 'apps';
    description: '';
  };
  attributes: {
    relationId: Attribute.Integer;
  };
}

export interface ConfigMessage extends Schema.Component {
  collectionName: 'components_config_messages';
  info: {
    displayName: 'Message';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Messages'>;
    enableSearch: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    empty_messages: Attribute.Component<'shared.empty'> & Attribute.Required;
    empty_chat: Attribute.Component<'shared.empty'> & Attribute.Required;
    saveButtonText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Save'>;
    editActionText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Edit'>;
    copyActionText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Copy'>;
    searchPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Search'>;
    sendMessagePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Type Something'>;
    cancelButtonText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cancel'>;
  };
}

export interface ConfigRecentJobsHeader extends Schema.Component {
  collectionName: 'components_config_recent_jobs_headers';
  info: {
    displayName: 'RecentJobsHeader';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    fields: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['title', 'datePosted', 'dateEnded']
      >;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface ConfigRole extends Schema.Component {
  collectionName: 'components_config_roles';
  info: {
    displayName: 'role';
    icon: 'user';
  };
  attributes: {
    role: Attribute.Enumeration<['employer', 'candidate', 'authenticated']>;
  };
}

export interface ConfigSinglePage extends Schema.Component {
  collectionName: 'components_config_single_pages';
  info: {
    displayName: 'singlePage';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    slug: Attribute.String;
    collectionModel: Attribute.String & Attribute.DefaultTo<'api/posts'>;
    singelModel: Attribute.String;
  };
}

export interface ConfigTableHead extends Schema.Component {
  collectionName: 'components_config_table_heads';
  info: {
    displayName: 'tableHead';
    icon: 'bulletList';
  };
  attributes: {
    fields: Attribute.Component<'config.header-field', true>;
  };
}

export interface FormsCandidateFilter extends Schema.Component {
  collectionName: 'components_forms_candidate_filters';
  info: {
    displayName: 'CandidateFilter';
    description: '';
  };
  attributes: {
    showFilter: Attribute.Boolean;
    search: Attribute.Component<'forms.seaech-form'>;
    rate: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Rate', '10k', '20k', '30k', '40k', '50k']
      >;
    button: Attribute.Component<'component.link'>;
    categories: Attribute.Component<'config.job-list'>;
  };
}

export interface FormsCompanyFilter extends Schema.Component {
  collectionName: 'components_forms_company_filters';
  info: {
    displayName: 'CompanyFilter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    search: Attribute.String;
    industry: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Accounting/Finance',
          'Design/Creative',
          'Automotive Jobs',
          'Bank/Non-Bank Finance',
          'Commercial/Supply',
          'Construction/Facilities',
          'Education/Training',
          'Electrician/Repair',
          'Engineer/Architects',
          'Hospitality/Travel',
          'IT/Telecommunication',
          'Marketing/Sales'
        ]
      >;
    company_size: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['1-24', '25-49', '50-99', '100-199', '200-500']
      >;
    average_salary: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['10k-20k', '21k-30k', '31k-50k', '51k-100k']
      >;
    revenue: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['0-50,000', '50,001-100,000']
      >;
    showFilter: Attribute.Boolean;
    button: Attribute.Component<'component.link'>;
  };
}

export interface FormsFileInput extends Schema.Component {
  collectionName: 'components_forms_file_inputs';
  info: {
    displayName: 'File Input';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String & Attribute.Required;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    fullWidth: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    errorText: Attribute.String;
    noteText: Attribute.String;
    accept: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '.jpg, .jpeg, .png, .gif, .bmp, .tiff, .svg',
          '.doc, .docx, .pdf, .txt, .odt, .rtf',
          '.xls, .xlsx, .csv, .ppt, .pptx',
          '.mp3, .wav, .mp4, .mov, .avi, .mkv',
          '.zip, .rar, .7z, .tar, .gz, ',
          '.json, .xml, .html, .css, .js'
        ]
      >;
    multiple: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    mobileGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    tabGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<6>;
    desktopGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<6>;
    inputStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
  };
}

export interface FormsFilter extends Schema.Component {
  collectionName: 'components_forms_filters';
  info: {
    displayName: 'Filter';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    categories: Attribute.Relation<
      'forms.filter',
      'oneToMany',
      'api::category.category'
    >;
    sort: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Hight to Low:price-desc',
          'Low to High:price-asc',
          'A to Z:title-desc',
          'Z to A:title-asc',
          'New to Old:date-desc',
          'Old to New:date-asc'
        ]
      >;
    jobType: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Full Time:Full Time',
          'Part Time:Part Time',
          'Freelance:Freelance',
          'Internship:Internship',
          'Contract Based:Contract Based'
        ]
      >;
    company_size: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['1-24', '25-49', '50-99', '100-199', '200-500']
      >;
    avarage_salary: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['10k-20k', '21k-30k', '31k-50k', '51k-100k']
      >;
    revenue: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['0-50,000', '50,001-100,000']
      >;
    rate: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['10k', '20k', '30k', '40k']
      >;
  };
}

export interface FormsFormButtons extends Schema.Component {
  collectionName: 'components_forms_form_buttons';
  info: {
    displayName: 'formButtons';
    icon: 'server';
  };
  attributes: {
    cancel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cancel'>;
    back: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Previous'>;
    next: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Next'>;
    submit: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Submit'>;
    skip: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Skip'>;
  };
}

export interface FormsGoogleMap extends Schema.Component {
  collectionName: 'components_forms_google_maps';
  info: {
    displayName: 'Google Map';
    icon: 'pinMap';
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String & Attribute.Required;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    inputStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
    noteText: Attribute.String;
    errorText: Attribute.String;
  };
}

export interface FormsInput extends Schema.Component {
  collectionName: 'components_forms_inputs';
  info: {
    displayName: 'Input';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    fullWidth: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    errorText: Attribute.String;
    name: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      ['text', 'date', 'email', 'number', 'password', 'textarea', 'tel', 'url']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    mobileGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    tabGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    desktopGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    inputStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
    noteText: Attribute.String;
    defaultValue: Attribute.String;
  };
}

export interface FormsJobFilter extends Schema.Component {
  collectionName: 'components_forms_job_filters';
  info: {
    displayName: 'JobFilter';
    description: '';
  };
  attributes: {
    job_type: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Full Time:Full Time',
          'Part Time:Part Time',
          'Freelance:Freelance',
          'Internship:Internship',
          'Contract Based:Contract Based'
        ]
      >;
    sort: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Hight to Low:price-desc',
          'Low to High:price-asc',
          'A to Z:title-desc',
          'Z to A:title-asc',
          'New to Old:date-desc',
          'Old to New:date-asc'
        ]
      >;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
    search: Attribute.Component<'forms.seaech-form'>;
    categories: Attribute.Component<'config.job-list'>;
  };
}

export interface FormsMarkdown extends Schema.Component {
  collectionName: 'components_component_markdowns';
  info: {
    displayName: 'markdown';
    icon: 'italic';
    description: '';
  };
  attributes: {
    inputStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
    noteText: Attribute.String;
    label: Attribute.String;
    name: Attribute.String;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    errorText: Attribute.String;
  };
}

export interface FormsSeaechForm extends Schema.Component {
  collectionName: 'components_forms_seaech_forms';
  info: {
    displayName: 'Search';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    searchByWords: Attribute.String;
    searchByLocation: Attribute.String;
    button: Attribute.String;
    link: Attribute.String;
    searchByCategory: Attribute.String;
  };
}

export interface FormsSearchFilter extends Schema.Component {
  collectionName: 'components_forms_search_filters';
  info: {
    displayName: 'SearchFilter';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    search: Attribute.Component<'forms.seaech-form'>;
    filter: Attribute.Component<'forms.filter'>;
    description: Attribute.Text;
  };
}

export interface FormsSelectItem extends Schema.Component {
  collectionName: 'components_forms_select_items';
  info: {
    displayName: 'selectItem';
    icon: 'check';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

export interface FormsSelect extends Schema.Component {
  collectionName: 'components_forms_selects';
  info: {
    displayName: 'select';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    fullWidth: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    errorText: Attribute.String;
    mobileGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<12>;
    tabGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<6>;
    desktopGrid: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }> &
      Attribute.DefaultTo<6>;
    inputStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
    noteText: Attribute.String;
    options: Attribute.Component<'forms.select-item', true>;
    model: Attribute.String;
    multiple: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface HeaderBreadcrumbs extends Schema.Component {
  collectionName: 'components_header_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
    icon: 'manyWays';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    showBreadcrumb: Attribute.Boolean;
    style: Attribute.JSON;
    background_image: Attribute.Media;
  };
}

export interface HeaderLogo extends Schema.Component {
  collectionName: 'components_header_logos';
  info: {
    displayName: 'Logo';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    link: Attribute.String;
    xs_width: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<150>;
    sm_width: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<160>;
    md_width: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<175>;
  };
}

export interface HeaderTopbar extends Schema.Component {
  collectionName: 'components_header_topbars';
  info: {
    displayName: 'Topbar';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    announcement: Attribute.String;
    menu: Attribute.Component<'component.link', true>;
  };
}

export interface LayoutColumns extends Schema.Component {
  collectionName: 'components_layout_columns';
  info: {
    displayName: 'Columns';
    icon: 'arrowRight';
  };
  attributes: {};
}

export interface SharedEmpty extends Schema.Component {
  collectionName: 'components_shared_empties';
  info: {
    displayName: 'empty';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'No Data Founds'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Try to refresh the page or check back later'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedShareMenu extends Schema.Component {
  collectionName: 'components_shared_share_menus';
  info: {
    displayName: 'Share Menu';
    icon: 'server';
  };
  attributes: {
    role: Attribute.Enumeration<['candidate', 'employer']> &
      Attribute.Required &
      Attribute.DefaultTo<'candidate'>;
    menus: Attribute.Component<'component.menu', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedSocialMedias extends Schema.Component {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Medias';
    icon: 'earth';
  };
  attributes: {
    type: Attribute.Enumeration<
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
        'clubhouse'
      ]
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SharedSpacing extends Schema.Component {
  collectionName: 'components_shared_spacings';
  info: {
    displayName: 'spacing';
    icon: 'oneToOne';
  };
  attributes: {
    gap: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
  };
}

export interface SingleTypeBlogDetails extends Schema.Component {
  collectionName: 'components_single_type_blog_details';
  info: {
    displayName: 'Blog Details';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    style: Attribute.Component<'component.style-section'>;
    sidebar: Attribute.Enumeration<
      ['Left Sidebar', 'Right Sidebar', 'Both Sidebar', 'No Sidebar']
    >;
  };
}

export interface SingleTypeCompanyDeatils extends Schema.Component {
  collectionName: 'components_single_type_company_deatils';
  info: {
    displayName: 'companyDeatils';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    styles: Attribute.Component<'component.style-section'>;
  };
}

export interface SingleTypeJobDetails extends Schema.Component {
  collectionName: 'components_single_type_job_details';
  info: {
    displayName: 'job Details';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    styles: Attribute.Component<'component.style-section'>;
  };
}

export interface SingleTypeResumeDetails extends Schema.Component {
  collectionName: 'components_single_type_resume_details';
  info: {
    displayName: 'Resume Details';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    styles: Attribute.Component<'component.style-section'>;
  };
}

export interface TableAppliedJobs extends Schema.Component {
  collectionName: 'components_table_applied_jobs';
  info: {
    displayName: 'Applied Jobs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    tableConfig: Attribute.Component<'config.header-config'>;
    empty: Attribute.Component<'shared.empty'>;
    tableHead: Attribute.Component<'config.header-field', true>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface TableBookmark extends Schema.Component {
  collectionName: 'components_table_bookmarks';
  info: {
    displayName: 'bookmark';
    icon: 'bell';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    enableSearch: Attribute.Boolean;
    style: Attribute.Component<'component.style-section'>;
    tableConfig: Attribute.Component<'config.header-config'>;
  };
}

export interface TableMeta extends Schema.Component {
  collectionName: 'components_table_metas';
  info: {
    displayName: 'meta';
    icon: 'arrowRight';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface TablePricing extends Schema.Component {
  collectionName: 'components_table_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'component.link'>;
    price: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    table: Attribute.Component<'component.meta-data', true>;
  };
}

export interface WidgetAppliedLists extends Schema.Component {
  collectionName: 'components_widget_applied_lists';
  info: {
    displayName: 'Applied Lists';
    icon: 'oneToOne';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface WidgetBookmarkList extends Schema.Component {
  collectionName: 'components_widget_bookmark_lists';
  info: {
    displayName: 'bookmarkList';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
  };
}

export interface WidgetChat extends Schema.Component {
  collectionName: 'components_widget_chats';
  info: {
    displayName: 'Chat';
    icon: 'message';
    description: '';
  };
  attributes: {
    message: Attribute.RichText;
    timestamp: Attribute.DateTime;
    read: Attribute.Boolean;
    role: Attribute.Enumeration<['employer', 'candidate']>;
  };
}

export interface WidgetClosedList extends Schema.Component {
  collectionName: 'components_widget_closed_lists';
  info: {
    displayName: 'closed List';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface WidgetContactForm extends Schema.Component {
  collectionName: 'components_widget_contact_forms';
  info: {
    displayName: 'ContactForm';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface WidgetCountCard extends Schema.Component {
  collectionName: 'components_widget_count_cards';
  info: {
    displayName: 'countCard';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    count: Attribute.BigInteger;
    dynamicCount: Attribute.Boolean;
    subTitle: Attribute.String;
    enableStats: Attribute.Boolean;
    model: Attribute.String;
    isLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_parent', '_top']> &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface WidgetFavoriteLists extends Schema.Component {
  collectionName: 'components_widget_favorite_lists';
  info: {
    displayName: 'Favorite Lists';
    icon: 'arrowRight';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface WidgetFooterBottom extends Schema.Component {
  collectionName: 'components_widget_footer_bottoms';
  info: {
    displayName: 'FooterBottom';
    description: '';
  };
  attributes: {
    social_link: Attribute.Component<'component.link', true>;
    brand_name: Attribute.String;
  };
}

export interface WidgetFooterOne extends Schema.Component {
  collectionName: 'components_widget_footer_ones';
  info: {
    displayName: 'FooterOne';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    location: Attribute.Component<'component.icon-with-label'>;
    phone: Attribute.Component<'component.icon-with-label'>;
    email: Attribute.Component<'component.icon-with-label'>;
    style: Attribute.Component<'component.style-section'> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface WidgetFooterSearch extends Schema.Component {
  collectionName: 'components_widget_footer_searches';
  info: {
    displayName: 'Footer Search';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    title: Attribute.String;
    search: Attribute.Component<'forms.seaech-form'>;
  };
}

export interface WidgetFooterTop extends Schema.Component {
  collectionName: 'components_widget_footer_tops';
  info: {
    displayName: 'FooterTop';
    icon: 'server';
  };
  attributes: {
    light_logo: Attribute.Media;
    dark_logo: Attribute.Media;
    title: Attribute.String;
    search: Attribute.Component<'forms.seaech-form'>;
  };
}

export interface WidgetFooterTwo extends Schema.Component {
  collectionName: 'components_widget_footer_twos';
  info: {
    displayName: 'FooterTwo';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    FooterMenu: Attribute.Component<'component.link', true>;
    style: Attribute.Component<'component.style-section'> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface WidgetMatchedLists extends Schema.Component {
  collectionName: 'components_widget_matched_lists';
  info: {
    displayName: 'Matched Lists';
    icon: 'arrowRight';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface WidgetOpenList extends Schema.Component {
  collectionName: 'components_widget_open_lists';
  info: {
    displayName: 'OpenList';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

export interface WidgetSafetyTips extends Schema.Component {
  collectionName: 'components_widget_safety_tips';
  info: {
    displayName: 'SafetyTips';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lists: Attribute.Component<'component.text-field', true>;
  };
}

export interface WidgetTotalList extends Schema.Component {
  collectionName: 'components_widget_total_lists';
  info: {
    displayName: 'totalList';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    details: Attribute.Component<'widget.count-card'>;
    style: Attribute.Component<'component.style-section'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner-one': BannerBannerOne;
      'block.blog-card': BlockBlogCard;
      'block.bookmark-list': BlockBookmarkList;
      'block.category-card': BlockCategoryCard;
      'block.category-list': BlockCategoryList;
      'block.contact': BlockContact;
      'block.footer': BlockFooter;
      'block.job-card': BlockJobCard;
      'block.latest-applied': BlockLatestApplied;
      'block.location-card': BlockLocationCard;
      'block.manage-companies': BlockManageCompanies;
      'block.manage-lists': BlockManageLists;
      'block.manage-resume': BlockManageResume;
      'block.portfolio': BlockPortfolio;
      'block.private-header': BlockPrivateHeader;
      'block.profile': BlockProfile;
      'block.public-header': BlockPublicHeader;
      'block.recent-activities': BlockRecentActivities;
      'block.review-card': BlockReviewCard;
      'component.experience': ComponentExperience;
      'component.gird-container': ComponentGirdContainer;
      'component.icon-box': ComponentIconBox;
      'component.icon-with-label': ComponentIconWithLabel;
      'component.image': ComponentImage;
      'component.link': ComponentLink;
      'component.menu': ComponentMenu;
      'component.meta-data': ComponentMetaData;
      'component.page-title': ComponentPageTitle;
      'component.search': ComponentSearch;
      'component.share-job': ComponentShareJob;
      'component.social-link': ComponentSocialLink;
      'component.style-section': ComponentStyleSection;
      'component.text-field': ComponentTextField;
      'component.titles': ComponentTitles;
      'config.header-config': ConfigHeaderConfig;
      'config.header-field': ConfigHeaderField;
      'config.job-list': ConfigJobList;
      'config.message': ConfigMessage;
      'config.recent-jobs-header': ConfigRecentJobsHeader;
      'config.role': ConfigRole;
      'config.single-page': ConfigSinglePage;
      'config.table-head': ConfigTableHead;
      'forms.candidate-filter': FormsCandidateFilter;
      'forms.company-filter': FormsCompanyFilter;
      'forms.file-input': FormsFileInput;
      'forms.filter': FormsFilter;
      'forms.form-buttons': FormsFormButtons;
      'forms.google-map': FormsGoogleMap;
      'forms.input': FormsInput;
      'forms.job-filter': FormsJobFilter;
      'forms.markdown': FormsMarkdown;
      'forms.seaech-form': FormsSeaechForm;
      'forms.search-filter': FormsSearchFilter;
      'forms.select-item': FormsSelectItem;
      'forms.select': FormsSelect;
      'header.breadcrumbs': HeaderBreadcrumbs;
      'header.logo': HeaderLogo;
      'header.topbar': HeaderTopbar;
      'layout.columns': LayoutColumns;
      'shared.empty': SharedEmpty;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.share-menu': SharedShareMenu;
      'shared.social-medias': SharedSocialMedias;
      'shared.spacing': SharedSpacing;
      'single-type.blog-details': SingleTypeBlogDetails;
      'single-type.company-deatils': SingleTypeCompanyDeatils;
      'single-type.job-details': SingleTypeJobDetails;
      'single-type.resume-details': SingleTypeResumeDetails;
      'table.applied-jobs': TableAppliedJobs;
      'table.bookmark': TableBookmark;
      'table.meta': TableMeta;
      'table.pricing': TablePricing;
      'widget.applied-lists': WidgetAppliedLists;
      'widget.bookmark-list': WidgetBookmarkList;
      'widget.chat': WidgetChat;
      'widget.closed-list': WidgetClosedList;
      'widget.contact-form': WidgetContactForm;
      'widget.count-card': WidgetCountCard;
      'widget.favorite-lists': WidgetFavoriteLists;
      'widget.footer-bottom': WidgetFooterBottom;
      'widget.footer-one': WidgetFooterOne;
      'widget.footer-search': WidgetFooterSearch;
      'widget.footer-top': WidgetFooterTop;
      'widget.footer-two': WidgetFooterTwo;
      'widget.matched-lists': WidgetMatchedLists;
      'widget.open-list': WidgetOpenList;
      'widget.safety-tips': WidgetSafetyTips;
      'widget.total-list': WidgetTotalList;
    }
  }
}
