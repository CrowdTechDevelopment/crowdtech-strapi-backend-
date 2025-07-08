'use strict';

/**
 * strapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::strapi.strapi');
