'use strict';

/**
 * time-line service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-line.time-line');
