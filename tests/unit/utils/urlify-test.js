import urlify from '../../../utils/urlify';
import { module, test } from 'qunit';

module('Unit | Utility | urlify');

test('it urlify string', function(assert) {
  assert.equal(urlify('oko Jest S12uper'), 'oko-jest-s12uper');
  assert.equal(urlify('Tu nie Ma , przecinka'), 'tu-nie-ma-przecinka');
});
