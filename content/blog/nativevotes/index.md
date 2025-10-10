+++
title = "NativeVotes is here!"
description = "You can now vote with the function keys."
authors = ["Asterisk"]
date = "2025-10-10"
[taxonomies]
tags = ["Updates"]
[extra]
banner = "banner.png"
+++

{% alert (important=true) %}
PF2 server owners, you should **_really_** update to Sourcemod 1.12 ASAP. Everything works just fine and you'll be able to run all sorts of newer plugins. If you're still too lazy to do that, NativeVotes works on 1.11 too (you'll have to compile it yourself).
{% end %}

People don't like the voice command vote screen because you can easily fatfinger the wrong option. Mapchooser Extended adds dummy options to prevvent this, but it's still not enough. Some HUDs also make the voice command menu hard to read (not a really bad problem though). The legacy menu requires you to pause the game to use (not ideal during gameplay, obviously).

The solution to this is, of course, <a href="https://github.com/sapphonie/sourcemod-nativevotes-updated" target="_blank" rel="noopener noreferrer" class="external">NativeVotes</a>. Instead of using the voice command menu, this plugin lets you use the votemenu systems of newer Source games (TF2, L4D, L4D2, CSGO, etc).

However, this plugin will say that the current game is unsupported and crash when used with PF2. It doesn't try to import TF2 Tools or anything, so what was wrong?

I had no idea how some servers fixed this until I finally rubbed two brain cells together and looked at the code some more.

**_Behold, `addons/sourcemod/scripting/nativevotes/game.sp`, lines 394-405:_**

```c
if ( g_EngineVersion == Engine_SDK2013 && ( StrEqual(gameDir, "open_fortress") || StrEqual(gameDir, "tf2classic") ) )
	{
		g_EngineVersion = Engine_TF2;
	}

	switch (g_EngineVersion)
	{
		case Engine_Left4Dead, Engine_Left4Dead2, Engine_CSGO, Engine_TF2:
		{
			return true;
		}
	}
```

```diff
-if ( g_EngineVersion == Engine_SDK2013 && ( StrEqual(gameDir, "open_fortress") || StrEqual(gameDir, "tf2classic") ) )
+if ( g_EngineVersion == Engine_SDK2013 && ( StrEqual(gameDir, "open_fortress") || StrEqual(gameDir, "tf2classic") || StrEqual(gameDir, "pf2") ) )
	{
		g_EngineVersion = Engine_TF2;
	}

	switch (g_EngineVersion)
	{
		case Engine_Left4Dead, Engine_Left4Dead2, Engine_CSGO, Engine_TF2:
		{
			return true;
		}
	}
```

{% alert (tip=true) %}
NASA should hire me, I'm so smart.
{% end %}

Suddently, everything worked! 😱

However, unlike most server owners, I have put this incredibly complex and difficult fix on the <a href="https://github.com/CaltropNetwork/sourcemod-nativevotes-updated" target="_blank" rel="noopener noreferrer" class="external">Github org</a> for all to see (with precompiled releases available), as well as a PR to the original repo to add the fix there.

The final result of all of this is votes look visually distinct and are voted on using the function keys instead of the number keys. Votes also disappear after you vote and the result is shown temporarily when finished.

![Two soyjacks pointing at a TF2-style vote screen behind them](banner.png#no-hover)

<figcaption>Made with GIMP and the native Linux Source SDK 🐧</figcaption>

This should reduce mapvoting troubles and show vote results without setting up the Ultimate Mapchooser (which is a huge pain).

## Notes

{% alert(note=true) %}
This is merely a **library**, you will need to find plugins that use it to take advantage of it (or make some yourself).

The nativevotes package comes with nativevotes versions of `basecommands`, `mapchooser`, `nominations`, and `rockthevote`. **You will need to disable the normal versions for these to work.**
{% end %}

- You can either use `nativevotes_mapchooser` or <a href="https://forums.alliedmods.net/showthread.php?t=156974" target="_blank" rel="noopener noreferrer" class="external">`mapchooser_extended`</a> (adds other features too, highly recommend)
- If you want `basevotes` to work with this too (`!vote`, `kickvote`, `banvote`, etc), see <a href="https://forums.alliedmods.net/showpost.php?p=2113432&postcount=2" target="_blank" rel="noopener noreferrer" class="external">`nativevotes_basevotes`</a>.
- If you want vote progess to be shown, it must be configured in `cfg/sourcemod/nativevotes.cfg` (generated on first run).

## Current Issues

- `nativevotes_nominations` does not work, disable it before it disables `nominations` on first run.

## Examples

(you can also demo these on the server :D)

![The above image without the soyjacks](mapvote.jpg#no-hover)

!["VOTE PASSED: changing map to thebeefhammerdeluxe_a1..."](mapvote_success.jpg#no-hover)

!["Nativevotes is the best: yes/no" with a vote progress hintbox at the bottom. A red Scout and the map garbage_day can also be seen.](basicvote.jpg#no-hover)
