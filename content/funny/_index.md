+++
title = "funny"
template = "index.html"
+++

<style>
/* small layout tweaks so the search sits nicely */
header.funny-header { display: flex; gap: 1rem; align-items: center; margin: 0.75rem 0; flex-wrap: column; }
#funny-search { flex: 1; min-width: 220px; max-width: 720px; padding: 0.35rem 0.6rem; }
#list ul { padding-left: 1rem; margin-top: 0.5rem; }
</style>

<header class="funny-header">
  <h1>Funny Images</h1>
  </header><br>
  <input id="funny-search" type="search" placeholder="🔍 Search images..." aria-label="Search funny images" />

<noscript>Since you have Javascript disabled, just go <a href="https://github.com/CaltropNetwork/website/tree/main/content/funny" target="_blank" rel="noopener noreferrer">here</a>.</noscript>

<div id="list">Loading...</div>

<script src="/funnysearch.js"></script>
