let tech = new TextTable({
    obj: {
        'Laptop:': 'Lenovo ThinkPad E590',
        'Primary DAW:': 'Reason 11',
        'Secondary DAW:': 'Maschine 2',
        'Audio Interface:': 'Native Instruments Komplete Audio 2',
        'Studio Speakers:': 'PreSonus Eris E3.5',
        'Studio Headphones:': 'AKG K240 MKII',
        'Portable Headphones:': 'Bose QuietComfort 35 II',
        'Portable Keyboard/Synth:': 'Teenage Engineering OP-1',
        'Studio Keyboard:': 'Novation Impulse 61',
        'Primary Beat Pad:': 'Maschine Mikro MKII',
        'Secondary Beat Pad:': 'AKAI LPD8 Wireless',
        'Microphone:': 'Audio-Technica ATR2100-USB',
    },
});
let readmore = new ReadMore({innerHTML: "I've racked up quite a collection of both soft- and hardware that I use for my music production. My primary DAW of choice is Reason 11. Not the most popular DAW, but it has enough popularity that there's a sufficient amount of tutorials to find on the web. Its use of a virtual rack that emulates real hardware (with cables and all) makes it a very technical DAW, that requires some knowledge of that kind of stuff. Therefore, I wouldn't recommend it to everyone. My secondary DAW (if you can call it that) is Maschine 2 by Native Instruments. It's not really a DAW as much as it is a beatmaking platform. You need a designated Maschine device (I have the Maschine Mikro MKII) in order to use the software to its full potential. The OP-1 synth from Teenage Engineering is my main MIDI controller, and it works really well with Reason. It is of course a standalone device as well, and its portability makes it very easy to bring anywhere. I have a larger MIDI keyboard which I keep at home. It's the Novation Impulse 61. The first piece of gear I ever bought was a Pocket Operator from Teenage Engineering. It was the PO-20 Arcade, and I still have it, as well as three other pocket operators I bought later (PO-12 Rhythm, PO-14 Sub, PO-16 Factory). "+tech.element.outerHTML});
console.log(readmore.element);
console.log(String(tech.element.outerHTML));
let pageInfo = new PageInfo({
    header: 'Music',
    description: "I've made music for a while now, and I think I've gotten to a point where I'm pretty confident at it. This is why I'm kind of going all-in on releasing my tracks on Bandcamp. Here, as well as on my <a href='https://adamthegolem.bandcamp.com/music'>Bandcamp</a> and <a href='https://www.youtube.com/channel/UCYMNYivqg18JYcnJq5FFL-A'>YouTube</a>, is where you can access any new releases. I do not have the budget to post songs on either Spotify or SoundCloud. Bandcamp is for me the best platform, due to it's flexibility and unlimited upload space. ",
    /*readmore: "I've racked up quite a collection of both soft- and hardware that I use for my music production. My primary DAW of choice is Reason 11. Not the most popular DAW, but it has enough popularity that there's a sufficient amount of tutorials to find on the web. Its use of a virtual rack that emulates real hardware (with cables and all) makes it a very technical DAW, that requires some knowledge of that kind of stuff. Therefore, I wouldn't recommend it to everyone. My secondary DAW (if you can call it that) is Maschine 2 by Native Instruments. It's not really a DAW as much as it is a beatmaking platform. You need a designated Maschine device (I have the Maschine Mikro MKII) in order to use the software to its full potential. The OP-1 synth from Teenage Engineering is my main MIDI controller, and it works really well with Reason. It is of course a standalone device as well, and its portability makes it very easy to bring anywhere. I have a larger MIDI keyboard which I keep at home. It's the Novation Impulse 61. The first piece of gear I ever bought was a Pocket Operator from Teenage Engineering. It was the PO-20 Arcade, and I still have it, as well as three other pocket operators I bought later (PO-12 Rhythm, PO-14 Sub, PO-16 Factory). "+tech.element.outerHTML,*/
});
pageInfo.p.element.appendChild(readmore.element);
main.appendChild(pageInfo.element);
/*tracksDiv = new Element('div', {}, {});
tracksSubDiv = new Element('div', {
    display: 'flex',
    justifyContent: 'space-between',
}, {});
for (let i = 0; i < discography.length; i++) {
    if (i % 3 == 0) {
        tracksDiv.element.appendChild(tracksSubDiv.element);
        tracksSubDiv = new Element('div', {
            display: 'flex',
            justifyContent: 'space-between',
        }, {});
    }
    tracksSubDiv.element.appendChild(discography[i].player.element);
}
main.appendChild(tracksDiv.element);*/
let tracksDiv = new DivTable({col: 3, attrs: {
    className: 'trackTable',
}});
for (let track of discography) {
    tracksDiv.addItem(new BandcampPlayer(track).element);
}
//console.log(tracksDiv);
main.appendChild(tracksDiv.element);