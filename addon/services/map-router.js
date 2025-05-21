import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapRouter extends Service {
  @tracked _getContext = undefined;
  @tracked _map = undefined;
  @tracked _components = {};
  @tracked _props = {};
  _isSetup = false;

  get getContext() {
    return this._getContext;
  }
  get map() {
    return this._map;
  }
  get components() {
    return this._components;
  }
  get props() {
    return this._props;
  }

  setup(map, getContext, components, props = {}) {
    if (!this._isSetup) {
      this._getContext = getContext;
      this._map = map;
      this._isSetup = true;

      this._components = components ?? {};
    }

    this._props = props;
  }

  teardown() {
    this._isSetup = false;
    this._getContext = undefined;
    this._map = undefined;
    this._components = {};
    this._props = {};
  }
}
