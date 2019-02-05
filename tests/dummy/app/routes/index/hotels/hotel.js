import Route from '@ember/routing/route';

export default Route.extend({
  model({ hotel_id }) {
    return this.get('store').peekRecord('hotel', hotel_id);
  }
});
