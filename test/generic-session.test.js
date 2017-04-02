'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/generic-session.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/generic-session-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, generic-session')
      .expect(200);
  });
});
