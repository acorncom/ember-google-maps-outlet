import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default class MapRoute extends Component {
  @service('map-router') mapRouter;
}
