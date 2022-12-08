import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexHotelsHotel extends Route {
  @service store;

  model({ hotel_id }) {
    return this.store.peekRecord('hotel', hotel_id);
  }
}
