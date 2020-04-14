'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('Correct output returned', function (t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      var expected = 'Hello Cloud Natives';

      t.error(err, 'No error');
      t.same(res.body, expected, 'Output as expected');
      t.end();
    });
});
