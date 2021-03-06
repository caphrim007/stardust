/**
 * Ensure the user's app only uses our one copy of jQuery and SUI jQuery plugins.
 */
import _ from 'lodash'
import { makeDebugger } from './debug'

const debug = makeDebugger('jquery')

let jQuery
if (window.jQuery) jQuery = window.jQuery
else if (_.get(window, '$.prototype.jquery')) jQuery = window.$

if (jQuery) {
  throw new Error([
    'Do not load jQuery, it is bundled with Stardust.',
    'Stardust will soon be jQuery free: https://github.com/TechnologyAdvice/stardust/issues/247.',
  ].join(' '))
}

debug('Loading jQuery')
// load jQuery, then load SUI jQuery
window.jQuery = window.$ = require('jquery')

debug('Loading SUI Form plugin')
require('semantic-ui-css/components/form')
