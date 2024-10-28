'use strict';

/**
 * permalink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::permalink.permalink');
