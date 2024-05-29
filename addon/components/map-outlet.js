import MapComponent from 'ember-google-maps/components/g-map/map-component';
import { inject as service } from '@ember/service';

export default class MapOutlet extends MapComponent {
  @service('map-router') mapRouter;

  get name() {
    return 'outlet';
  }

  setup() {
    this.mapRouter.getContext = this.args.getContext;
    this.mapRouter.map = this.map;
  }

  teardown() {
    this.mapRouter.map = undefined;
    this.mapRouter.getContext = undefined;
  }
}

