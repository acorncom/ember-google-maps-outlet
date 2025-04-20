import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MapRoute extends Component {
  @service('map-router') mapRouter;

  get mapComponents() {
    return this.mapRouter.components;
  }
}
