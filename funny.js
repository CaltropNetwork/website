const images = [
    '396veea1.png',
    'andputitinthetrash.png',
    'autism.jpg',
    'bald.png',
    'balloons.jpg',
    'batterup.png',
    'beans.png',
    'birthdayheavy.png',
    'burnt.jpg',
    'burntsniper.jpg',
    'chargingup.jpg',
    'civilian.png',
    'conc.jpg',
    'crusade.png',
    'dejavu.png',
    'delayedlearning.png',
    'didntnotice.jpg',
    'die.jpg',
    'disassemble.jpg',
    'dsay.png',
    'eijeerg.png',
    'engipresents.png',
    'fireball.png',
    'fire-engineer.gif',
    'frickinsweet.png',
    'GANGSTER.gif',
    'gentlemen.jpg',
    'giant.png',
    'god.jpg',
    'grenade.png',
    'groovy.png',
    'gunning.png',
    'headnail.png',
    'heavydance.gif',
    'heavyeyes.png',
    'heldatbayonet.png',
    'hopscotch.png',
    'horror.jpg',
    'iknow.png',
    'lennon sniper.png',
    'linux.png',
    'lmdakaen.png',
    'lonk.jpg',
    'mandrill.png',
    'man.png',
    'medicriddled.png',
    'nailheavy.png',
    'nail party.png',
    'pedo.png',
    'pew.jpg',
    'pixel.png'.
    'pyro goku.png',
    'pyro.png',
    'rds.png',
    'redrocket.png',
    'revenge.jpg',
    'sadness.png',
    'smoke.gif',
    'soldiercave.png',
    'soldierhell.png',
    'soldier.png',
    'spy2.jpg',
    'spycrabs2.jpg',
    'spy.png',
    'stab.jpg',
    'tfcspy.png',
    'theserverwewillnotspeakof.jpg',
    'three.png',
    'triplekill.png',
    'uncleotpia.png',
    'wahack.png',
    'watchingyou.png',
    'whaat.png',
    'worried.png',
    'wrongway.jpg',
    'wtf.png'
];

// Get a random index from the images array
const randomIndex = Math.floor(Math.random() * images.length);

// Get the image container div
document.getElementById('imageContainer').innerHTML = "<img src='/funny/" + ${images[randomIndex]} + "' alt='funny image'>";
