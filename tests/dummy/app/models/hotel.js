import Model, { attr } from '@ember-data/model';
export default class Hotel extends Model {
  @attr() lat;
  @attr() lng;
  @attr() name;
  @attr() address;
  @attr() website;
}
