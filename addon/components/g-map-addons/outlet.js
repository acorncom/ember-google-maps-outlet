import MapComponent from 'ember-google-maps/components/g-map/map-component';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

export default class MapOutlet extends MapComponent {
  @service('map-router') mapRouter;

  get name() {
    return 'outlet';
  }

  setup = () => {
    assert(
      `
ember-google-maps-outlet: The "components" argument must be passed in.

<map.outlet @components={{map}} />

Without this argument, no g-map components will be available in the outlet.
      `,
      this.args.components,
    );

    this.mapRouter.setup(
      this.publicAPI.map,
      this.args.getContext,
      this.args.components,
      this.args.props ?? {},
    );
  };

  teardown() {
    this.mapRouter.teardown();

    super.teardown();
  }
}
