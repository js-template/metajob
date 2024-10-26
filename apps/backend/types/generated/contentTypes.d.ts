import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    avatar: Attribute.Media;
    membership: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::package.package'
    >;
    firstName: Attribute.String;
    lastName: Attribute.String;
    description: Attribute.Text;
    phone: Attribute.String;
    resume: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'plugin::metajob-strapi.resume'
    >;
    email_histories: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'plugin::metajob-strapi.email-history'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginGoogleMapsConfig extends Schema.SingleType {
  collectionName: 'google_maps_configs';
  info: {
    singularName: 'config';
    pluralName: 'configs';
    displayName: 'Google Maps Config';
  };
  options: {
    populateCreatorFields: false;
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    googleMapsKey: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<''>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::google-maps.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::google-maps.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginReactIconsIconlibrary extends Schema.CollectionType {
  collectionName: 'iconlibrary';
  info: {
    singularName: 'iconlibrary';
    pluralName: 'iconlibraries';
    displayName: 'IconLibrary';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    abbreviation: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    isEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiJob extends Schema.CollectionType {
  collectionName: 'jobs';
  info: {
    singularName: 'job';
    pluralName: 'jobs';
    displayName: 'Jobs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    startDate: Attribute.Date & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    description: Attribute.RichText;
    category: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToOne',
      'plugin::metajob-strapi.job-category'
    >;
    type: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Full Time', 'Part Time', 'Contract Base', 'Freelance', 'Remote']
      >;
    vacancy: Attribute.Integer;
    slug: Attribute.UID<'plugin::metajob-strapi.job', 'title'> &
      Attribute.Required;
    company: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToOne',
      'plugin::metajob-strapi.company'
    >;
    status: Attribute.Enumeration<['open', 'closed', 'draft']> &
      Attribute.Required &
      Attribute.DefaultTo<'draft'>;
    endDate: Attribute.Date & Attribute.Required;
    owner: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    location: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
    tags: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToMany',
      'api::tag.tag'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiBookmark extends Schema.CollectionType {
  collectionName: 'bookmarks';
  info: {
    singularName: 'bookmark';
    pluralName: 'bookmarks';
    displayName: 'Bookmark';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    owner: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    type: Attribute.Enumeration<['resume', 'job', 'company']> &
      Attribute.Required &
      Attribute.DefaultTo<'resume'>;
    resume: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'plugin::metajob-strapi.resume'
    >;
    note: Attribute.Text;
    company: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'plugin::metajob-strapi.company'
    >;
    job: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'plugin::metajob-strapi.job'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.bookmark',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiChat extends Schema.CollectionType {
  collectionName: 'chats';
  info: {
    singularName: 'chat';
    pluralName: 'chats';
    displayName: 'Chat';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sender: Attribute.Relation<
      'plugin::metajob-strapi.chat',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    receiver: Attribute.Relation<
      'plugin::metajob-strapi.chat',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    chat_blocked: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    job: Attribute.Relation<
      'plugin::metajob-strapi.chat',
      'oneToOne',
      'plugin::metajob-strapi.job'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.chat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.chat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiMessage extends Schema.CollectionType {
  collectionName: 'messages';
  info: {
    singularName: 'message';
    pluralName: 'messages';
    displayName: 'Messages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sender: Attribute.Relation<
      'plugin::metajob-strapi.message',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    receiver: Attribute.Relation<
      'plugin::metajob-strapi.message',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    message: Attribute.RichText & Attribute.Required;
    medias: Attribute.Media;
    read: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    send_notification: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    chat_session: Attribute.Relation<
      'plugin::metajob-strapi.message',
      'oneToOne',
      'plugin::metajob-strapi.chat'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiCompany extends Schema.CollectionType {
  collectionName: 'companies';
  info: {
    singularName: 'company';
    pluralName: 'companies';
    displayName: 'Companies';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tagline: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    website: Attribute.String;
    company_size: Attribute.String;
    revenue: Attribute.String;
    logo: Attribute.Media;
    industry: Attribute.Relation<
      'plugin::metajob-strapi.company',
      'oneToOne',
      'plugin::metajob-strapi.job-category'
    >;
    slug: Attribute.UID & Attribute.Required;
    owner: Attribute.Relation<
      'plugin::metajob-strapi.company',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    location: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
    social_links: Attribute.Component<'shared.social-medias', true>;
    about: Attribute.RichText;
    avg_price: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiJobDetail extends Schema.SingleType {
  collectionName: 'job_details';
  info: {
    singularName: 'job-detail';
    pluralName: 'job-details';
    displayName: 'Job Details';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    blocks: Attribute.DynamicZone<
      [
        'shared.spacing',
        'shared.empty',
        'component.page-title',
        'single-type.job-details'
      ]
    > &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    sidebar: Attribute.Enumeration<
      ['Left Sidebar', 'Right Sidebar', 'No Sidebar', 'Both Sidebar']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Right Sidebar'>;
    leftSidebar: Attribute.DynamicZone<['component.page-title']>;
    relatedLists: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.job-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.job-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiAppliedJob extends Schema.CollectionType {
  collectionName: 'applied_jobs';
  info: {
    singularName: 'applied-job';
    pluralName: 'applied-jobs';
    displayName: 'Applied Job';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    status: Attribute.Enumeration<['Shortlisted', 'Pending', 'Rejected']>;
    owner: Attribute.Relation<
      'plugin::metajob-strapi.applied-job',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    job: Attribute.Relation<
      'plugin::metajob-strapi.applied-job',
      'oneToOne',
      'plugin::metajob-strapi.job'
    >;
    cover_letter: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.applied-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.applied-job',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiResume extends Schema.CollectionType {
  collectionName: 'resumes';
  info: {
    singularName: 'resume';
    pluralName: 'resumes';
    displayName: 'Resume';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    education: Attribute.Component<'component.experience', true>;
    experience: Attribute.Component<'component.experience', true>;
    description: Attribute.RichText;
    user: Attribute.Relation<
      'plugin::metajob-strapi.resume',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    portfolio: Attribute.Component<'block.portfolio', true>;
    contact: Attribute.Component<'block.contact'>;
    name: Attribute.String;
    tagline: Attribute.Text;
    about: Attribute.RichText;
    showProfile: Attribute.Enumeration<['Show', 'Hide']>;
    category: Attribute.Relation<
      'plugin::metajob-strapi.resume',
      'oneToOne',
      'plugin::metajob-strapi.job-category'
    >;
    salary: Attribute.BigInteger;
    salaryType: Attribute.Enumeration<
      [
        'Monthly',
        'Weekly',
        'Hourly',
        'Daily',
        'Annually',
        'Per Project',
        'Commission-based'
      ]
    >;
    language: Attribute.Enumeration<
      [
        'Arabic',
        'Bengali',
        'Bulgarian',
        'Catalan',
        'Chinese (Simplified)',
        'Chinese (Traditional)',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
        'English',
        'Estonian',
        'Filipino',
        'Finnish',
        'French',
        'Galician',
        'Georgian',
        'German',
        'Greek',
        'Gujarati',
        'Hebrew',
        'Hindi',
        'Hungarian',
        'Icelandic',
        'Indonesian',
        'Irish',
        'Italian',
        'Japanese',
        'Javanese',
        'Kannada',
        'Kazakh',
        'Korean',
        'Kurdish (Kurmanji)',
        'Kyrgyz',
        'Lao',
        'Latin',
        'Latvian',
        'Lithuanian',
        'Macedonian',
        'Malay',
        'Malayalam',
        'Maltese',
        'Maori',
        'Marathi',
        'Mongolian',
        'Nepali',
        'Norwegian',
        'Pashto',
        'Persian',
        'Polish',
        'Portuguese',
        'Punjabi',
        'Romanian',
        'Russian',
        'Serbian',
        'Slovak',
        'Slovenian',
        'Somali',
        'Spanish',
        'Sundanese',
        'Swahili',
        'Swedish',
        'Tamil',
        'Telugu',
        'Thai',
        'Turkish',
        'Ukrainian',
        'Urdu',
        'Uzbek',
        'Vietnamese',
        'Welsh',
        'Xhosa',
        'Yiddish',
        'Yoruba',
        'Zulu'
      ]
    >;
    experienceTime: Attribute.Enumeration<
      ['Freshers', 'Junior', 'Mid-Level', 'Senior', 'Lead']
    >;
    qualification: Attribute.Enumeration<
      [
        'Bachelor\u2019s Degree',
        'Master\u2019s Degree',
        'Doctoral Degree (Ph.D.)',
        'Associate Degree',
        'Diploma',
        'Certificate'
      ]
    >;
    slug: Attribute.UID<'plugin::metajob-strapi.resume', 'name'>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.resume',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.resume',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMetajobStrapiSkill extends Schema.CollectionType {
  collectionName: 'skills';
  info: {
    singularName: 'skill';
    pluralName: 'skills';
    displayName: 'Skill';
  };
  options: {
    draftAndPublish: true;
    comment: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.UID<'plugin::metajob-strapi.skill', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'plugin::metajob-strapi.skill',
      'oneToMany',
      'plugin::metajob-strapi.skill'
    >;
    locale: Attribute.String;
  };
}

export interface PluginMetajobStrapiJobCategory extends Schema.CollectionType {
  collectionName: 'job_categories';
  info: {
    singularName: 'job-category';
    pluralName: 'job-categories';
    displayName: 'Job Category';
  };
  options: {
    draftAndPublish: true;
    comment: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Attribute.Component<'component.link'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.job-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.job-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'plugin::metajob-strapi.job-category',
      'oneToMany',
      'plugin::metajob-strapi.job-category'
    >;
    locale: Attribute.String;
  };
}

export interface PluginMetajobStrapiEmailHistory extends Schema.CollectionType {
  collectionName: 'email_histories';
  info: {
    singularName: 'email-history';
    pluralName: 'email-histories';
    displayName: 'Email History';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    title: Attribute.String;
    datetime: Attribute.DateTime;
    receiver: Attribute.Email;
    owner: Attribute.Relation<
      'plugin::metajob-strapi.email-history',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::metajob-strapi.email-history',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::metajob-strapi.email-history',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogDetailBlogDetail extends Schema.SingleType {
  collectionName: 'blog_details';
  info: {
    singularName: 'blog-detail';
    pluralName: 'blog-details';
    displayName: 'Blog Details';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sidebar: Attribute.Enumeration<
      ['Left Sidebar', 'Right Sidebar', 'Both Sidebar', 'No Sidebar']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      ['shared.spacing', 'component.page-title', 'single-type.blog-details']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leftSidebar: Attribute.DynamicZone<['shared.empty', 'shared.spacing']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    rightSidebar: Attribute.DynamicZone<['shared.spacing']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-detail.blog-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-detail.blog-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog-detail.blog-detail',
      'oneToMany',
      'api::blog-detail.blog-detail'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Attribute.Component<'component.link'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    posts: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDashboardHomeDashboardHome extends Schema.SingleType {
  collectionName: 'dashboard_homes';
  info: {
    singularName: 'dashboard-home';
    pluralName: 'dashboard-homes';
    displayName: 'Dashboard Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    role1Components: Attribute.DynamicZone<
      [
        'block.latest-applied',
        'block.manage-lists',
        'block.recent-activities',
        'shared.spacing',
        'widget.bookmark-list',
        'widget.applied-lists',
        'widget.closed-list',
        'widget.favorite-lists',
        'widget.matched-lists',
        'widget.open-list',
        'widget.total-list',
        'block.bookmark-list',
        'table.bookmark'
      ]
    >;
    role1: Attribute.Enumeration<['candidate', 'employer', 'authenticated']> &
      Attribute.Required &
      Attribute.DefaultTo<'employer'>;
    role2: Attribute.Enumeration<['candidate', 'employer']> &
      Attribute.Required &
      Attribute.DefaultTo<'candidate'>;
    role2Components: Attribute.DynamicZone<
      [
        'widget.total-list',
        'widget.open-list',
        'widget.favorite-lists',
        'widget.closed-list',
        'widget.bookmark-list',
        'widget.applied-lists',
        'block.bookmark-list',
        'block.recent-activities',
        'table.bookmark',
        'widget.matched-lists',
        'block.latest-applied',
        'shared.spacing'
      ]
    >;
    styles: Attribute.Component<'component.gird-container'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dashboard-home.dashboard-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dashboard-home.dashboard-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: 'forms';
  info: {
    singularName: 'form';
    pluralName: 'forms';
    displayName: 'Forms';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    formStep: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<1>;
    fields: Attribute.DynamicZone<
      [
        'forms.input',
        'forms.select',
        'forms.markdown',
        'forms.google-map',
        'forms.file-input'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    stepLabels: Attribute.Component<'component.text-field', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
    buttonsText: Attribute.Component<'forms.form-buttons'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::form.form', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::form.form',
      'oneToMany',
      'api::form.form'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'HomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blocks: Attribute.DynamicZone<
      [
        'banner.banner-one',
        'block.category-card',
        'block.job-card',
        'block.review-card',
        'block.blog-card'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-page.home-page',
      'oneToMany',
      'api::home-page.home-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiLayoutLayout extends Schema.SingleType {
  collectionName: 'layouts';
  info: {
    singularName: 'layout';
    pluralName: 'layouts';
    displayName: 'Layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    header: Attribute.DynamicZone<
      ['block.public-header', 'block.private-header']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer: Attribute.DynamicZone<['block.footer', 'widget.footer-top']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    private_sidebar_menus: Attribute.DynamicZone<['shared.share-menu']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::layout.layout',
      'oneToMany',
      'api::layout.layout'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMembershipMembership extends Schema.SingleType {
  collectionName: 'memberships';
  info: {
    singularName: 'membership';
    pluralName: 'memberships';
    displayName: 'Membership';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    table: Attribute.DynamicZone<['table.pricing']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::membership.membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::membership.membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackagePackage extends Schema.CollectionType {
  collectionName: 'packages';
  info: {
    singularName: 'package';
    pluralName: 'packages';
    displayName: 'Package';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'table.meta', true>;
    price: Attribute.Integer;
    frequency: Attribute.Enumeration<['Monthly', 'Yearly', 'One Time']>;
    button: Attribute.Component<'component.link'>;
    create_ads_limit: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    ads_boost_limit: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::page.page', 'title'>;
    seo: Attribute.Component<'shared.seo'>;
    blocks: Attribute.DynamicZone<
      [
        'block.blog-card',
        'block.category-card',
        'block.job-card',
        'block.location-card',
        'block.review-card',
        'header.breadcrumbs',
        'banner.banner-one',
        'forms.job-filter',
        'forms.company-filter',
        'forms.candidate-filter',
        'block.category-list'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPermalinkPermalink extends Schema.SingleType {
  collectionName: 'permalinks';
  info: {
    singularName: 'permalink';
    pluralName: 'permalinks';
    displayName: 'Permalinks';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    structure: Attribute.Enumeration<['Plain', 'Name and display']>;
    singlePage: Attribute.Component<'config.single-page', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::permalink.permalink',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::permalink.permalink',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID;
    featuredImage: Attribute.Media;
    gallery: Attribute.Media;
    excerpt: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    description: Attribute.Blocks & Attribute.Required;
    user: Attribute.Relation<
      'api::post.post',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    short_description: Attribute.Text & Attribute.Required;
    post_categories: Attribute.Relation<
      'api::post.post',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPrivatePagePrivatePage extends Schema.CollectionType {
  collectionName: 'private_pages';
  info: {
    singularName: 'private-page';
    pluralName: 'private-pages';
    displayName: 'Private Pages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    role: Attribute.Enumeration<['Candidate', 'Employer']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::private-page.private-page', 'title'> &
      Attribute.Required;
    blocks: Attribute.DynamicZone<
      [
        'config.message',
        'config.header-config',
        'config.recent-jobs-header',
        'table.bookmark',
        'table.meta',
        'table.pricing',
        'widget.total-list',
        'widget.open-list',
        'widget.closed-list',
        'shared.spacing',
        'block.bookmark-list',
        'block.recent-activities',
        'widget.applied-lists',
        'widget.matched-lists',
        'widget.favorite-lists',
        'block.latest-applied',
        'block.manage-lists',
        'block.manage-companies',
        'table.applied-jobs',
        'block.manage-resume'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    styles: Attribute.Component<'component.gird-container'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    permissions: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['candidate', 'employer']
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    page_url: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::private-page.private-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::private-page.private-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::private-page.private-page',
      'oneToMany',
      'api::private-page.private-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    singularName: 'review';
    pluralName: 'reviews';
    displayName: 'Reviews';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    review: Attribute.Text;
    avatar: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSidebarSidebar extends Schema.SingleType {
  collectionName: 'sidebars';
  info: {
    singularName: 'sidebar';
    pluralName: 'sidebars';
    displayName: 'Sidebar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    adsSidebar: Attribute.DynamicZone<
      ['widget.contact-form', 'widget.safety-tips']
    >;
    blogSIdebar: Attribute.DynamicZone<
      ['widget.contact-form', 'widget.safety-tips']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sidebar.sidebar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sidebar.sidebar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'Tags';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.UID<'api::tag.tag', 'title'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::google-maps.config': PluginGoogleMapsConfig;
      'plugin::react-icons.iconlibrary': PluginReactIconsIconlibrary;
      'plugin::metajob-strapi.job': PluginMetajobStrapiJob;
      'plugin::metajob-strapi.bookmark': PluginMetajobStrapiBookmark;
      'plugin::metajob-strapi.chat': PluginMetajobStrapiChat;
      'plugin::metajob-strapi.message': PluginMetajobStrapiMessage;
      'plugin::metajob-strapi.company': PluginMetajobStrapiCompany;
      'plugin::metajob-strapi.job-detail': PluginMetajobStrapiJobDetail;
      'plugin::metajob-strapi.applied-job': PluginMetajobStrapiAppliedJob;
      'plugin::metajob-strapi.resume': PluginMetajobStrapiResume;
      'plugin::metajob-strapi.skill': PluginMetajobStrapiSkill;
      'plugin::metajob-strapi.job-category': PluginMetajobStrapiJobCategory;
      'plugin::metajob-strapi.email-history': PluginMetajobStrapiEmailHistory;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::blog-detail.blog-detail': ApiBlogDetailBlogDetail;
      'api::category.category': ApiCategoryCategory;
      'api::dashboard-home.dashboard-home': ApiDashboardHomeDashboardHome;
      'api::form.form': ApiFormForm;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::layout.layout': ApiLayoutLayout;
      'api::membership.membership': ApiMembershipMembership;
      'api::package.package': ApiPackagePackage;
      'api::page.page': ApiPagePage;
      'api::permalink.permalink': ApiPermalinkPermalink;
      'api::post.post': ApiPostPost;
      'api::private-page.private-page': ApiPrivatePagePrivatePage;
      'api::review.review': ApiReviewReview;
      'api::sidebar.sidebar': ApiSidebarSidebar;
      'api::tag.tag': ApiTagTag;
    }
  }
}
