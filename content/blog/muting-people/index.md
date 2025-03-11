+++
title = "Muting People"
description = "Mute people with way less steps now!"
authors = ["Asterisk"]
date = "2025-03-11"
[taxonomies]
tags = ["Updates"]
[extra]
banner = "canwemutethisguy.gif"
+++

I've added the <a href="https://forums.alliedmods.net/showthread.php?p=1949715" class="external" target="_blank" rel="noopener noreferrer">SelfMute</a> plugin to mute people quickly through chat instead of using the pause menu, similar to Shounic's server.

According to the plugin author, this is why it's better:

> Built-in [mute menu]:
>
> 1. You have to find somewhere safe to hide.
> 2. Press the ESC key.
> 3. Click on Player List.
> 4. Find the Playername in the Player List.
> 5. Click on the Playername in the Player List.
> 6. Click on the mute button.
> 7. Press ESC to go back to in-game view.
>
> You'll be raging when you found out you've died. OR
> You could be dominating the round if not for the 7 steps.
>
>
> This plugin['s mute system]:
>
> 1. Press the Chat key.
> 2. Type `!sm <playername_goes_in_here>`.
> 3. Done\~ Dumbass muted.

## Commands

{% alert(note=true) %}
These commands are for *client-side* muting and can be used by everyone. Admins should use SourceBans++ commands or the `sm_admin` menu.
{% end %}
- `!sm`/`!selfmute` \- List all players on the server and pick one to mute.
- `!sm <playername>`/`!selfmute <playername>` \- Mute that player (fuzzy matching[^1]).
- `!su`/`!selfmute` \- List all muted players and pick one to unmute.
- `!su <playername>`/`!selfunmute <playername>` \- Unmute that player (fuzzy matching[^1]).
- `!cm`/`!checkmute` \- Print list of players that you have self-muted to chat.

Also added an advertisement to remind you that this exists. Happy muting!

[^1]: Means you can type in part of a player's name instead of the whole thing (i.e. `aster` to mute `Asterisk` or `H4XX0R` to mute `H4XX0R⭐☁️✨`)
