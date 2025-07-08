'use strict';

/**
 * strapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::strapi.strapi');
