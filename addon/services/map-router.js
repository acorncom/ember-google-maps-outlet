import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapRouter extends Service {
  @tracked g = undefined;
}
