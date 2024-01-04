const say = require('say')
say.speak('Hello!')
var player = new talkify.TtsPlayer(); //or new talkify.Html5Player()
player.playText('Hello world');