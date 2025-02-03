const messages = [
    'Hosting simple, yet fun servers.',
    'Now with salt!',
    'hello vro',
    'HEAVY IS MAGICAL WISH-GRANTING FAIRY',
    'Damn, this stuff is addictive.',
    '#DeathToUncletopia',
    'I think skial is a bitcoin miner, my PC caught fire when I was trying to play 24/7 turbine.',
    'Get bonked.',
    '<i>For gamers, by gamers.</i>',
    'Contains trace amounts of gamers.',
    'pf2 1.0 when',
    'One or more of your party members are French. You shall be penalized.',
    'Did you know these are random?',
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'Served at 3000 Kelvin',
    'bottom text',
    'urgh',
    'And everyone died.',
    'HOW?????',
    'That stupid sentry is still up!',
    'web <b>d</b><sub>e</sub>si<i>g</i>n <code>is</code> <b>m</b>y p<u>a</u><q>s</q><sup>s</sup><i>i</i>on.',
    'You know you can read all these on github and shit right?',
    '<code>wacky_races_v2_pf2</code> 👻'
];

const messageIndex = Math.floor(Math.random() * messages.length);

document.getElementById('subtitle').innerHTML = `<p>${messages[messageIndex]}</p>`;