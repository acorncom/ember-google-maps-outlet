import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapRouter extends Service {
  @tracked getContext = undefined;
  @tracked map = undefined;
  @tracked components = {};

  teardown() {
    this.getContext = undefined;
    this.map = undefined;
    this.components = {};
  }
}
