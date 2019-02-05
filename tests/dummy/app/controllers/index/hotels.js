import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onClick(marker) {
      this.transitionToRoute('index.hotels.hotel', marker);
    }
  }
});
