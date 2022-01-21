'use strict';

/**
 * common-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::common-code.common-code');
