/* global google */

import MapComponent from 'ember-google-maps/components/g-map/map-component';
import { inject as service } from '@ember/service';

export default class MapOutlet extends MapComponent {
  @service('map-router') mapRouter;

  // ember-google-maps needed private variable
  get name() {
    return 'outlet';
  }

  setup() {
    let g = this.args.g;
    let context = this.args.getContext;
    this.mapRouter.g = g;
  }

  teardown() {
    this.mapRouter.g = undefined;
  }
}

