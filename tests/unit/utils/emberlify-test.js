import emberlify from '../../../utils/emberlify';
import { module, test } from 'qunit';

module('Unit | Utility | emberlify');

test('it emberlify string', function(assert) {
  assert.equal(emberlify('oko Jest S12uper'), 'oko-jest-s12uper');
  assert.equal(emberlify('Tu nie Ma , przecinka'), 'tu-nie-ma-przecinka');
});
