import DS from 'ember-data';

export default DS.Model.extend({
  lat: DS.attr(),
  lng: DS.attr(),
  name: DS.attr(),
  address: DS.attr(),
  website: DS.attr(),
});
