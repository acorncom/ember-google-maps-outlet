import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    this.store.createRecord('hotel', {
      id: 'the-curtis',
      lat: '39.744302',
      lng: '-104.9935779',
      name: 'The Curtis',
      address: '1405 Curtis Street, Denver, CO 80202',
      website:
        'https://doubletree3.hilton.com/en/hotels/colorado/the-curtis-denver-a-doubletree-by-hilton-hotel-DENCHDT/index.html',
    });
    this.store.createRecord('hotel', {
      id: 'brown-palace',
      lat: '39.7440545',
      lng: '-104.9899516',
      name: 'Brown Palace',
      address: '321 17th Street, Denver, CO 80202',
      website: 'https://www.brownpalace.com/',
    });
  }
};
