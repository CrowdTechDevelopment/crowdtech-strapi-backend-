'use strict';

/**
 * strapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi.strapi');
