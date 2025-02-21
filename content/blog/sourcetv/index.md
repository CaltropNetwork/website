+++
title = "SourceTV™️"
description = "Automatic demo recording is a thing now!"
authors = ["Asterisk"]
date = "2025-02-21"
[taxonomies]
tags = ["Updates"]
[extra]
banner = "cameraman.gif"
+++

I've added a nifty little thing to the server called <mark>SourceTV</mark>. Normally, it's used as a unique spectating system for Source dedicated servers. I've disabled that and use it for a secondary feature, *automatic demo recording*.

By default the autorecording system <a href="https://developer.valvesoftware.com/wiki/SourceTV#Recording_Games" target="_blank" rel="noopener noreferrer">is garbage</a>. It records all the time, even if the server is empty!

Thankfully, due to the magic of Sourcemod, StevoTVR made an <a href="https://forums.alliedmods.net/showthread.php?p=824438" class="external" target="_blank" rel="noopener noreferrer">autorecording plugin</a> that's a little more customizeable, including how many players trigger a recording and where to save the demos.

The config for such a basic setup looks like this:

<mark>autoexec.cfg</mark> (yes, even on a server, this must be run *before* map load)

```
tv_enable 1
tv_maxclients 0
tv_title "Demo Recorder"
```

And the startup flag `-tvmasteronly` to prevent the server from being used as a SourceTV relay.

{{ image(url="scoreboard.jpg", no_hover=true) }}
<figcaption>The SourceTV bot shows up as a spectator.</figcaption>

## What are demos, even?

`.dem` files are magical, because they're not videos. They're like a set of instructions for the game to perfectly recreate the actions of you, other players, projectiles, entities, etc on that specific map. That's what it records.

You can play them back in the same Source title you recorded them in. (`demoui`) You're able to change the demo, like moving the camera around or smoothing it, changing perspectives or players, and more (since it's a perfect recreation running on the same map normally).

## Why?

This system means clips will be recorded when I'm not there and can be from anybody's perspective (no UI though).

They also allow you to get different camera angles on people's plays. You can also use demos to sniff out cheating and toxic behavior, as long as you know exactly when and where it happened (combined with chat logs from HLStats).