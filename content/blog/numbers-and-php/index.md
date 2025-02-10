+++
title = "Numbers and PHP"
description = "New services n stuff"
authors = ["Asterisk"]
date = "2025-02-10"
[taxonomies]
tags = ["Updates"]
[extra]
banner = "uncledeadted.jpg"
+++

Ok so, after some hard work I've set up <a class="external" target="_blank" rel="noopener noreferrer" href="https://github.com/startersclan/hlstatsx-community-edition">HlStatsX</a> at <a href="/stats" target="_blank"><code>/stats</code></a> and <a class="external" href="https://sbpp.github.io" target="_blank" rel="noopener noreferrer">Sourcebans++</a> at <a href="/sb" target="_blank"><code>/sb</code></a>.

The main problem I'm encountering with this is that the Sourcebans plugins won't compile on PF2's old Sourcemod 1.11. Regardless, I did set up HLStatsX, and that has gone quite well.

## Numbers and Charts

First up, I've brought back the Sourcebans page with that iconic design (even if it doesn't do anything yet):

{{ image(url="heybanni.png", alt="Dashboard from https://caltrop.asterisk.lol/sb", no_hover=true) }}
<figcaption>My homepage design skills are sublime.</figcaption>

This will eventually host bans and this informative video:

{{ video(url="/fuckyourself.mp4", alt="A curly-haired man asks you to fuck yourself multiple times.", controls=true, playsinline=true)}}

The next big thing is HLStatsX. It looks almost exactly the same as the HLStats page for the official servers, but there aren't many good stylesheets.

{{ image(url="stats.png", alt="Main page from https://caltrop.asterisk.lol/stats", no_hover=true) }}
<figcaption>Look at that beauty. Too bad there aren't any players.</figcaption>

{% alert(note=true) %}
The first time you connect, your public player information is recorded in the database and a player page is generated. You should know how HLStats works, it's been 25 years since it came out.
{% end %}

Now, unlike ***some servers*** (looking at you, <q>makes-me-want-to-VaultF4</q>), I've redacted sensitive GeoIP information from the web panel.

This is what a typical player page looks like:

{{ image(url="myplayerpage.png", alt="My player page on HLStatsX, I'd recommend visiting it directly: https://caltrop.asterisk.lol/stats/hlstats.php?mode=playerinfo&player=1", no_hover=true, full_bleed=true) }}
<figcaption>Isn't it grand?</figcaption>

{% alert(tip=true) %}
Still hate GeoIP? Use a VPN to obscure your real country of origin!
{% end %}

Clicking the SteamID will take you to the player's profile. The city you connect from would normally be displayed alongside your country, but I've redacted that (it is still stored in the database).

The clan system works by detecting clan names in your Steam display name, i.e. `[CALTROP] Asterisk` would match you to the `CALTROP` clan.

Players and countries are ranked based on total points (you get points for all sorts of things, but you only get regular points after 50 kills), so you can apply your patriotism to a video game.

I plan on using this data for more things once we have more of it.

## Recent bans

I've also had to ban a cheater (<abbr title="Hackers v Hackers">HVH</abbr> player, rather) and somebody spamming messages advertising PF2's only cheating software (which shall not be named).

Anyway, I hope to get sourcebans working and I'll work on the CS:S server if I find the time.