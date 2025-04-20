import MapComponent from 'ember-google-maps/components/g-map/map-component';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

export default class MapOutlet extends MapComponent {
  @service('map-router') mapRouter;

  get name() {
    return 'outlet';
  }

  setup() {
    this.mapRouter.getContext = this.args.getContext;
    this.mapRouter.map = this.publicAPI.map;

    let components = this.args.components;

    assert(
      `
ember-google-maps-outlet: The "components" argument must be passed in.

<map.outlet @components={{map}} />

Without this argument, no g-map components will be available in the outlet.
      `,
      components
    );

    this.mapRouter.components = components;
  }

  teardown() {
    this.mapRouter.teardown();

    super.teardown();
  }
}
