const assert = require('assert');
const app = require('../../src/app');

describe('\'groupExpenses\' service', () => {
  it('registered the service', () => {
    const service = app.service('groupExpenses');

    assert.ok(service, 'Registered the service (groupExpenses)');
  });
});
