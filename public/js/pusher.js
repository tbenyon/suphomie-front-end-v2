// Enable pusher logging - don't include this in production
Pusher.logToConsole = false;

$(function() {
    var pusher = new Pusher(window.sh.app_key, {
        cluster: 'eu',
        encrypted: true
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
        console.log(data.message);
    });
});