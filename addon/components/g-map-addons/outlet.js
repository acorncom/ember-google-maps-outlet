import MapComponent from 'ember-google-maps/components/g-map/map-component';
import layout from '../../templates/components/g-map-addons/outlet';
import { inject as service } from '@ember/service';

export default MapComponent.extend({
  layout,

  mapRouter: service('map-router'),

  // ember-google-maps needed private variable
  _type: 'outlet',

  _addComponent() {
    this.get('mapRouter').set('gMap', this.get('gMap'));
  },

  _updateComponent() {

  },

  willDestroyElement() {
    this.get('mapRouter').set('gMap', undefined);

    this._super(...arguments);
  }
});
