import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default class GMapRoute extends Component {
  @service('map-router') mapRouter;
}
