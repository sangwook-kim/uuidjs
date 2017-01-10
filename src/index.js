"use strict";
// UUID ver. 4
// RFC-4122

const hex = 0x10;

function getHex(range, shift) {
  if(!range) range = hex;
  if(!shift) shift = 0;

  return Math.floor(Math.random() * range + shift).toString(hex);
}

function createUUIDValue() {
  let i, val = '';

  for(i = 0; i < 8; ++i) {
    val += getHex();
  }

  val += '-';

  for(i = 0; i < 4; ++i) {
    val += getHex();
  }

  val += '-4';

  for(i = 0; i < 3; ++i) {
    val += getHex();
  }

  val += '-' + getHex(4, 8);

  for(i = 0; i < 3; ++i) {
    val += getHex();
  }

  val += '-';

  for(i = 0; i < 12; ++i) {
    val += getHex();
  }

  return val;
}

function toByteArray(strUUID) {
  var i, byteArray = new Int8Array(hex),
      uuidArray = strUUID.match(/.{1,2}/g);

  for (i = 0; i < hex; ++i) {
    byteArray[i] = parseInt(uuidArray[i], hex);
  }

  return byteArray;
}

class UUID {
  constructor (uidstring) {
    if(uidstring) {
      this._val = uidstring;
      this._byteArray = toByteArray(this._val);
    } else {
      this._val = createUUIDValue();
      this._byteArray = toByteArray(this._val);
    }
  }

  val() {
    return this._val;
  }

  toByteArray() {
    return this._byteArray;
  }
};

export default UUID;
