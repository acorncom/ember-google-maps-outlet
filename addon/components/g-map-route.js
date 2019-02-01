import Component from '@ember/component';
import layout from '../templates/components/g-map-route';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,

  mapRouter: service('map-router'),
  gMap: readOnly('mapRouter.gMap'),
});
