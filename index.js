'use strict';

var Emitter = require('emitter');

function Mediator() {}

var medProto = Mediator.prototype;
var emitProto = Emitter.prototype;

Emitter(medProto);

medProto.sub = emitProto.on;
medProto.subOnce = emitProto.once;
medProto.unsub = emitProto.off;
medProto.pub = emitProto.emit;
medProto.listeners = emitProto.listeners;
medProto.hasListeners = emitProto.hasListeners;

medProto.hasChannel = function(channel) {
  return !!this._callbacks[channel];
};

exports = module.exports = new Mediator();
exports.Mediator = Mediator;
