var EventEmitter = require('eventemitter2').EventEmitter2;
var util = require('util');

function Flow(id, name, type, settings, options) {
	EventEmitter.call(this);
	var that = this;
	this.id = uuid();
}

util.inherits(Flow, EventEmitter);

Flow.prototype.setName = function(name) {
	this.name = name;
	this.emit('change', {key : 'name', value : this.name});
}
