'use strict';

/**
 * common-code router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::common-code.common-code');
