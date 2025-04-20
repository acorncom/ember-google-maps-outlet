import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapRouter extends Service {
  @tracked getContext = undefined;
  @tracked map = undefined;
  @tracked components = {};
  isSetup = false;

  setup(map, getContext, components) {
    if (!this.isSetup) {
      this.getContext = getContext;
      this.map = map;
      this.isSetup = true;

      // TODO: if *other* addons also setup custom components that aren't registered
      // with the core ember-google-maps addon, we may end up with components that
      // aren't useable if this cache goes stale ...
      this.components = components ?? {};
    }
  }

  teardown() {
    this.isSetup = false;
    this.getContext = undefined;
    this.map = undefined;
    this.components = {};
  }
}
