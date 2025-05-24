const assert = require('assert');
const app = require('../../src/app');

describe('\'recurringExpenses\' service', () => {
  it('registered the service', () => {
    const service = app.service('recurringExpenses');

    assert.ok(service, 'Registered the service (recurringExpenses)');
  });
});
