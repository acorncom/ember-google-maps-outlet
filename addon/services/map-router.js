import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapRouter extends Service {
  @tracked getContext = undefined;
  @tracked map = undefined;
  @tracked components = {};
  @tracked props = {};
  _isSetup = false;

  setup(map, getContext, components, props = {}) {
    if (!this._isSetup) {
      this.getContext = getContext;
      this.map = map;
      this._isSetup = true;

      this.components = components ?? {};
    }

    this.props = props;
  }

  teardown() {
    this._isSetup = false;
    this.getContext = undefined;
    this.map = undefined;
    this.components = {};
    this.props = {};
  }
}
