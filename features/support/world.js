var EnvironmentWorld = function EnvironmentWorld(callback) {
}

var worldType = process.env.WORLD_TYPE || 'direct_access';

EnvironmentWorld.prototype.World = require('./' + worldType + '_world').World;


exports.World = EnvironmentWorld.World;