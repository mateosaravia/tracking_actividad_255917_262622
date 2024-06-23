const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['cassandra'],
    localDataCenter: 'datacenter1',
    keyspace: 'user_activity'
});

module.exports = client;
