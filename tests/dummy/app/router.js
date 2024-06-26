import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' }, function () {
    this.route('hotels', { path: '/' }, function () {
      this.route('hotel', { path: ':hotel_id' });
    });
    this.route('city-center');
  });
  this.route('map', function () {
    this.route('city-center');
  });
});
