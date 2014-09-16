#!/bin/sh

curl "http://dara24.devbuild.pubnub.com/v1/channel-registration/sub-key/demo/channel-group/jstest?add=ch1"
echo
curl "http://dara24.devbuild.pubnub.com/v1/channel-registration/sub-key/demo/channel-group/jstest"
echo
curl "http://dara24.devbuild.pubnub.com/subscribe/demo/./0/0?channel-group-id=jstest"
echo
curl "http://dara24.devbuild.pubnub.com/publish/demo/demo/0/ch1/0/%7B%22text%22%3A%22hey%22%7D"
echo
curl "http://dara24.devbuild.pubnub.com/subscribe/demo/./0/0?channel-group-id=jstest"