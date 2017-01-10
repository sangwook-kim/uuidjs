"use strict";

if(!UUID) {
  var UUID = require('../dist/uuid.js');
}


const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('UUID', () => {
  it('should be create randomly when value is not given', () => {
    let uuid1 = new UUID();

    expect(uuid1.val()).toMatch(UUID_REGEX);
  });

  it('should give an Int8Array', () => {
    let uuid1 = new UUID();

    expect(uuid1.toByteArray()).toEqual(jasmine.any(Int8Array));
  });
});
