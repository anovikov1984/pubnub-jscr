// Add channel:
// curl http://dara24.devbuild.pubnub.com/v1/channel-registration/sub-key/demo/channel-group/jstest?add=ch1
// Check:
// curl http://dara24.devbuild.pubnub.com/v1/channel-registration/sub-key/demo/channel-group/jstest

p = PUBNUB.init({
    origin: 'dara24.devbuild.pubnub.com',
    subscribe_key: 'demo',
    publish_key: 'demo'
});

p.subscribe({
    channel: '.',
    channel_group: ['jstest'],
    connect: function () {
        console.log('connected...');
        p.publish({
            channel: 'ch1',
            message: 'hey'
        })
    },
    callback: function (message) {
        console.log('new message:', message);
    }
});
