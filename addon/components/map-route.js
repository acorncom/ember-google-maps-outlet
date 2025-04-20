import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MapRoute extends Component {
  @service('map-router') mapRouter;

  // this leaks memory slightly, we'll probably be ok until it's fixed in Ember
  mapComponents = (customComponents) => {
    return {
      ...this.mapRouter.components,
      ...customComponents,
    };
  };
}
