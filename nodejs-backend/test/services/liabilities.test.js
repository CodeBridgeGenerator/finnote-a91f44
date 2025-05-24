const assert = require('assert');
const app = require('../../src/app');

describe('\'liabilities\' service', () => {
  it('registered the service', () => {
    const service = app.service('liabilities');

    assert.ok(service, 'Registered the service (liabilities)');
  });
});
