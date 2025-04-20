import { module, test } from 'qunit';
import { click, visit, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {
  setupMapTest,
  trigger,
  waitForMap,
} from 'ember-google-maps/test-support';

module('Acceptance | routing', function (hooks) {
  setupApplicationTest(hooks);
  setupMapTest(hooks);

  test('visiting / works as desired', async function (assert) {
    await visit('/');
    let { components } = await waitForMap();

    let marker = components.markers
      .map((marker) => marker.mapComponent)
      .find((marker) => marker.id === 'the-curtis');

    trigger(marker, 'click');

    let infoWindow = await waitFor('[data-test-hotel-overlay-id="the-curtis"]');
    assert
      .dom(infoWindow)
      .containsText('The Curtis Address: 1405 Curtis Street');
  });

  test('switching between routes now shows a circle', async function (assert) {
    await visit('/');
    await waitForMap();
    await waitFor('[data-test-map-navigation]');

    click('[data-test-map-navigation] [data-test-link-citycenter]');

    await waitFor('[data-test-link-citycenter].active');
    let { components } = await waitForMap();

    assert.equal(
      components.circles && components.circles.length,
      1,
      'and that we have a length of 1'
    );
    assert.equal(
      components.markers && components.markers.length,
      0,
      'and that markers were torn down'
    );
  });
});
