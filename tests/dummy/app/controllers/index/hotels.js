import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexHotels extends Controller {
  @service router;

  @action
  onClick(marker) {
    this.router.transitionTo('index.hotels.hotel', marker);
  }
}
