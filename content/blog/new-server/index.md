+++
title = "New Server"
description = "Now with Sourcemod 1.12 and many other changes!"
authors = ["Asterisk"]
date = "2025-02-26"
[taxonomies]
tags = ["Updates"]
[extra]
banner = "sparks.gif"
+++

Hello! I said this was coming, and it's finally here!

## What's changed

- Sourcemod 1.12 is used instead of the standard Sourcemod 1.11
- Because of this, we can now use Sourcebans++ with the PF2 server
- [Demos are public, do whatever you want with them.](/demos)
- Faster server, no more waiting ages for the server to change maps!
- Higher bandwidth, no more 100+ ping (unless you're in Europe, sorry ☹️)
- Faster website, that's been moved too.
- Updated to PHP 8.4
- Opened SourceTV server to the public

## (NEW) SourceTV: How the fuck do I use it?

For all intents and purposes, SourceTV is basically identical to a gameserver for normal users. You connect to it the same way, it has the same controls, and a dedicated section of the server browser.

Just type this in the console (270**20** is the SourceTV port, 270**15** is the game port):

```
connect 76.164.192.116:27020
```

Or go to the `Spectate` tab on the server browser and find `CaltropTV`.

{% alert(tip=true) %}
SourceTV servers can host a potentially infinite number of clients, so you won't have to worry about it being full!
{% end %}

Once you connect, you'll be thrown into a spectator view that may be missing data depending on your HUD.

You ~~do not~~ **do** have control of *your* view (same controls as spectator mode), and there is a preset delay applied to what you see (to prevent cheating). You can also chat with players (slowmode of 5secs).

You'll be able to use this if the server's ever full or if you just wanna spectate.

### Controls

- <kbd>Mouse 1</kbd>: Change player forward
- <kbd>Mouse 2</kbd>: Change player backward
- <kbd>Space</kbd>: Switch view (firstperson, thirdperson, or <mark>*free roam* (WASD to move)</mark>)