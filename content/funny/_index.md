+++
title = "funny"
template = "index.html"
+++

## Funny Images
<noscript>Since you have Javascript disabled, just go <a href="https://github.com/CaltropNetwork/website/tree/main/content/funny" target="_blank" rel="noopener noreferrer">here</a>.</noscript>
<script>
      (async () => {
        const response = await fetch('https://api.github.com/repos/CaltropNetwork/website/contents/content/funny/');
        const data = await response.json();
        let htmlString = '<ul>';

        for (let file of data) {
          htmlString += `<li><a href="https://caltrop.asterisk.lol/funny/${file.name}">${file.name}</a></li>`;
        }

        htmlString += '</ul>';
        document.getElementById("list").innerHTML = htmlString;
      })()
</script>

<div id="list"></div>